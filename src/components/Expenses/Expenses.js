import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css';

function Expenses(props) {
    const [expensesFilterYear, setExpensesFilterYear] = useState('2020');

    const filterChangeHandler = (enteredYear) => {
        setExpensesFilterYear(enteredYear);
        console.log(enteredYear)
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={expensesFilterYear} onSaveExpensesFilterYear={filterChangeHandler}></ExpensesFilter>
                {props.items.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    );
}

export default Expenses;