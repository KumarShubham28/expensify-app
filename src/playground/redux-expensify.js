// combineReducers will help us to define multiple reducers
// and define how our reducers changes
import { createStore, combineReducers } from 'redux';
import { v4 as uuidv4 } from 'uuid';

const addExpense = ({ description = '', note = '', amount = 0, createdAt='' }) => ({
  type: 'ADDEXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVEEXPENSE',
  id
})

const editExpense = ( id, update ) => ({
  type: 'EDITEXPENSE',
  id,
  update
})

const setTextFilter = (text) => ({
  type: 'SETTEXTFILTER',
  text
})

const sortByDate = () => ({
  type: 'SORTBYDATE'
})

const sortByAmount = () => ({
  type: 'SORTBYAMOUNT'
})

const setStartDate = (date) => ({
  type: 'SETSTARTDATE',
  date
})

const setEndDate = (date) => ({
  type: 'SETENDDATE',
  date
})

const expensesReducerDefaultState = []

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADDEXPENSE':
      // return state.concat(action.expense)
      return [
        ...state,
        action.expense
      ]   // spread operators works same as concat 
    // ...state will return the previous Array and
    // ,action.expense will add the new iteam after the previous Array.
    case 'REMOVEEXPENSE':
      return state.filter((option) => option.id !== action.id )
    case 'EDITEXPENSE':
      return state.map((element) => {
        if(element.id == action.id){
          return {
            ...element,
            ...action.update
          }
        }
        return state
      })
    default:
      return state;
  }
}
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case 'SETTEXTFILTER':
      return {
        ...state,
        ...action.text
      }
    case 'SORTBYDATE':
      return {
        ...state,
        sortBy:'date'
      }
    case 'SORTBYAMOUNT':
      return {
        ...state,
        sortBy:'amount'
      }
    case 'SETSTARTDATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SETENDDATE':
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state;
  }
}

// Get visible expenses
// destructurin the filter
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
    let textMatch= expense.description.toLowerCase().includes(text.toLowerCase())
    return startDateMatch && endDateMatch && textMatch
  }).sort((a, b) => {
    if (sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1
    }else if(sortBy === 'amount'){
      return a.amount < b.amount ? 1: -1
    }
  })
}

const store = createStore(combineReducers({
  expense: expensesReducer,
  filter: filterReducer
}))

store.subscribe(() => {
  const state = store.getState()
  const visibleExpenses= getVisibleExpenses(state.expense, state.filter)
  console.log(visibleExpenses)

  // console.log(store.getState())
})

const iteamOne = store.dispatch(addExpense({ description: 'Rent', amount: 550, createdAt:-10000 }))
const iteamTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 600, createdAt:-1000 }))

// store.dispatch(removeExpense({ id: iteamOne.expense.id }))

// store.dispatch(editExpense( iteamTwo.expense.id,{ amount: 200 } ))

// store.dispatch(setTextFilter({ text: 'Coffee'}))

store.dispatch(sortByAmount())

// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(12500))

// const demoState = {
//   expenses: [{
//     id: 'poijasdfhwer',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // date or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// const user = {
//   name: 'Jon',
//   age: 26
// };

// console.log({
//   ...user,
//   location: 'New York',
//   age: 27
// })

