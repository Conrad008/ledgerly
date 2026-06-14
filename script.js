class Expense {
    constructor(description, amount, category) {
        this.id = Date.now().toString(36) + Math.random().toString(36).substring(2, 5);
        this.description = description.trim();
        this.amount = parseFloat(amount);
        this.category = category;
        this.date = new Date().toLocaleDateString();
    }
}