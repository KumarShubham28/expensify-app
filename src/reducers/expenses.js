const expensesReducerDefaultState = []

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
            return state.filter((option) => option.id !== action.id)
        case 'EDITEXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                  return {
                    ...expense,
                    ...action.updates
                  };
                } else {
                  return expense;
                };
              });
        default:
            return state;
    }
}

export default expensesReducer