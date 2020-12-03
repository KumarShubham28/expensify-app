import moment from 'moment';

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
}

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SETTEXTFILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORTBYDATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORTBYAMOUNT':
            return {
                ...state,
                sortBy: 'amount'
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

export default filterReducer;