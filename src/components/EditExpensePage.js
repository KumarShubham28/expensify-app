import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <h1>Edit Expense</h1>
      <ExpenseForm
        expense={props.expenses}
        onSubmit={(expense => {
          console.log(props.expenses.id)
          props.dispatch(editExpense(props.expenses.id, expense));
          props.history.push('/');
        })}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id:props.expenses.id }))
        props.history.push('/');
      }}>Remove</button>
    </div>
  )
};

const mapStateToProps = (state, props) => {
  return {
    expenses: state.expense.find((expense) => expense.id === props.match.params.id)
  }
};

export default connect(mapStateToProps)(EditExpensePage);
