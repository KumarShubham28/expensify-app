import React from 'react';
import { connect } from 'react-redux';
import ExpenseListIteam from  './ExpenseListIteam';
import getVisibleExpenses from '../selectors/expenses';

const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.map((expense) => {
                return <ExpenseListIteam key={expense.id} {...expense}/>
            })
        }
    </div>
);

export default connect((state) => {
    return {
        expenses: getVisibleExpenses(state.expense, state.filter)
    }
})(ExpenseList);

