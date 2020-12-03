import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const ExpenseListIteam = ({ dispatch, id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}>{ description }</Link>
    <p>{ amount } - {createdAt}</p>
    </div>
)

export default connect()(ExpenseListIteam);