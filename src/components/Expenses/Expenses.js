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

    let expenseContent = <p>No expenses found.</p>

    if (filteredExpenses.length > 0) {
        expenseContent = filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={expensesFilterYear} onSaveExpensesFilterYear={filterChangeHandler}></ExpensesFilter>
                {expenseContent}
            </Card>
        </div>
    );
}

export default Expenses;