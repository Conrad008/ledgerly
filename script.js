class Expense {
    constructor(description, amount, category) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
        this.description = description.trim();
        this.amount = parseFloat(amount);
        this.category = category;
        this.date = new Date().toLocaleDateString();
    }
}

class ExpenseTracker {
    constructor() {
        this.expenses = [];
    }

    addExpenses(...newExpenses) {
        this.expenses = [...this.expenses, ...newExpenses];
        this.saveToLocalStorage();
    }

    removeExpense(id) {
        this.expenses = this.expenses.filter(expense => expense.id !== id);
        this.saveToLocalStorage();
    }

    calculateTotal() {
        return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    }

    filterByCategory(category) {
        if (!category || category === 'All') return this.expenses;
        return this.expenses.filter(expense => expense.category === category);
    }

    saveToLocalStorage() {
        localStorage.setItem('ledgerly_expenses', JSON.stringify(this.expenses));
    }

    loadFromLocalStorage() {
        const stored = localStorage.getItem('ledgerly_expenses');
        this.expenses = stored ? JSON.parse(stored) : [];
    }
}

const tracker = new ExpenseTracker();

const expenseForm = document.getElementById('expense-form');
const descriptionInput = document.getElementById('expense-desc');
const amountInput = document.getElementById('expense-amount');
const categoryInput = document.getElementById('expense-category');
const expenseList = document.getElementById('expense-list');
const totalAmountDisplay = document.getElementById('total-amount');
const categoryFilter = document.getElementById('category-filter');