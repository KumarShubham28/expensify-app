// to use redux we have to access createStore
import { createStore } from 'redux';
// Action generators - functions that return action objects

// incrementBy default value provided as 1 and default object value
// provided as a empty object so if no object is provided then empty
// object will pass
const increamentCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ count =100 } = {} ) => ({
    type: 'SET',
    count
})

// create store requires a function to it's first argunment
// first argunment would be state

// pure function are function whose value will only rely on the function itself 
// not with the any out-sider variable or anything

// Reducers
// 1. Reducers are pure functions
// 2. Never change state or action

// countReducer is the reducer
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1; 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
    // if( action.type === 'INCREMENT'){
    //     return {
    //         count: state.count + 1
    //     }
    // }
    // return state;
}

const store = createStore(countReducer);

// getState returns a current state object

// Action -- is sane as object that gets sent to the store
// dispatch allows us to send an action object
// store will take the count and increase it by one
// we can use action as a second argunment in createStore function
// store.suscribe calls every times store changes
// this function will run every time store changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})
// we can unsubscribe the function as well by using function decleration
// and calling it where we want to stp it

// store.dispatch({
//    type: 'INCREMENT',
//    incrementBy: 5
// })
store.dispatch(increamentCount({ incrementBy: 5 }))

// unsubscribe();

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 10
// })
store.dispatch(decrementCount({ decrementBy: 10 }))

// store.dispatch({
//     type: 'DECREMENT'
// })
store.dispatch(decrementCount())

// console.log(store.getState())

// store.dispatch({
//     type: 'RESET'
// })
store.dispatch(resetCount())

// store.dispatch({
//     type: 'SET',
//     count: 101
// })
store.dispatch(setCount({ count:101 }))

