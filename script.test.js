const { Expense, ExpenseTracker } = require('./script.js');

describe('Ledgerly Expense Tracker Unit Tests', () => {
    let tracker;

    beforeAll(() => {
        global.localStorage = {
            getItem: jest.fn(() => null),
            setItem: jest.fn(),
            clear: jest.fn()
        };
    });

    beforeEach(() => {
        tracker = new ExpenseTracker();
        jest.clearAllMocks();
    });

    test('Should add individual or multiple expenses using rest/spread operators', () => {
        const item1 = new Expense('Lunch at Java House', '1500', 'Food');
        const item2 = new Expense('Uber Ride', '650.50', 'Transport');

        tracker.addExpenses(item1, item2);
        expect(tracker.expenses.length).toBe(2);
        
        const { description, amount } = tracker.expenses[0];
        expect(description).toBe('Lunch at Java House');
        expect(amount).toBe(1500.00); 
    });

    test('Should remove a targeted expense from the system state array by its unique ID', () => {
        const item1 = new Expense('Internet Bill', 3500, 'Utilities');
        const item2 = new Expense('Movie Ticket', 800, 'Entertainment');
        
        tracker.addExpenses(item1, item2);
        tracker.removeExpense(item1.id);

        expect(tracker.expenses.length).toBe(1);
        expect(tracker.expenses[0].id).toBe(item2.id);
    });

    test('Should calculate the sum total of all expenses', () => {
        tracker.addExpenses(
            new Expense('Groceries', 2400.00, 'Food'),
            new Expense('Books', 1200.00, 'Education')
        );
        expect(tracker.calculateTotal()).toBe(3600.25);
    });

    test('Should filter tracked asset lists selectively', () => {
        tracker.addExpenses(
            new Expense('Dinner', 1200, 'Food'),
            new Expense('Matatu Fare', 100, 'Transport')
        );
        const transportOnly = tracker.filterByCategory('Transport');
        expect(transportOnly.length).toBe(1);
        expect(transportOnly[0].description).toBe('Matatu Fare');
    });
});