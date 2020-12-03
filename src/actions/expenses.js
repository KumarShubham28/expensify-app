import { v4 as uuidv4 } from 'uuid';

export const addExpense = ({ description = '', note = '', amount = 0, createdAt='' }) => ({
  type: 'ADDEXPENSE',
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt
  }
})

export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVEEXPENSE',
  id
})

export const editExpense = ( id, updates ) => ({
  type: 'EDITEXPENSE',
  id,
  updates
})