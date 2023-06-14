import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense(expenseData);
    };

    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    };

    const hideFormHandler = () => {
        setShowForm(false);
    };

    let display;

    if (showForm) {
        display = (<ExpenseForm onHideForm={hideFormHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseForm>);
    } else {
        display = (<button onClick={showFormHandler}>Add New Expense</button>);
    }

    return <div className='new-expense'>
        {display}
    </div>
};

export default NewExpense;