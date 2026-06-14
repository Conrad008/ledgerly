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

function renderUI() {
    const activeCategory = categoryFilter.value;
    const filteredExpenses = tracker.filterByCategory(activeCategory);

    totalAmountDisplay.textContent = `$${tracker.calculateTotal().toFixed(2)}`;

    if (filteredExpenses.length === 0) {
        expenseList.innerHTML = `
            <li class="text-center text-zinc-400 text-sm py-8">
                No expenses logged under "${activeCategory}" yet.
            </li>
        `;
        return;
    }
    expenseList.innerHTML = filteredExpenses.map(expense => {
        const { id, description, amount, category, date } = expense;

        return `
            <li class="flex justify-between items-center bg-zinc-50 p-3.5 md:p-4 rounded-lg border-l-4 border-zinc-900 shadow-xs transition-all">
                <div class="pr-2">
                    <div class="font-semibold text-sm text-zinc-800 break-all">${description}</div>
                    <div class="text-xs text-zinc-400 mt-0.5">${category} • ${date}</div>
                </div>
                <div class="flex items-center gap-3 md:gap-4 shrink-0">
                    <span class="font-bold text-sm md:text-base text-zinc-900">$${amount.toFixed(2)}</span>
                    <button data-id="${id}" class="delete-btn text-zinc-400 hover:text-red-500 hover:bg-red-50 p-1.5 rounded-md transition-all cursor-pointer text-sm md:text-base" title="Delete Record">
                        Remove
                    </button>
                </div>
            </li>
        `;
    }).join('');
}

expenseForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newExpense = new Expense(
        descriptionInput.value,
        amountInput.value,
        categoryInput.value
    );

    tracker.addExpenses(newExpense);
    expenseForm.reset();
    renderUI();
});