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
});