import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
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
                {filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)}
            </Card>
        </div>
    );
}

export default Expenses;