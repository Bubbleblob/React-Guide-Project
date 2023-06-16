import React, { useState } from 'react';

import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    const [expensesFilterYear, setExpensesFilterYear] = useState('2020');

    const filterChangeHandler = (enteredYear) => {
        setExpensesFilterYear(enteredYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === expensesFilterYear;
    });


    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={expensesFilterYear} onSaveExpensesFilterYear={filterChangeHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    );
}

export default Expenses;