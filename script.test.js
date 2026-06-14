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
});