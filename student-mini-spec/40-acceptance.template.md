# Acceptance Criteria

## Feature 1: Record Transaction (Add New Expense)

### Scenario: User adds a new expense
**Given** the user is on the dashboard
**When** the user fills out the transaction form with:
- Amount: 25.50
- Category: Food
- Date: 2024-01-15
- Notes: Lunch at restaurant
- Receipt: uploaded image file
**And** clicks the "Add Transaction" button
**Then** the transaction should be saved to the database
**And** appear in the Recent Transactions table
**And** the receipt file should be stored in uploads directory

### Acceptance Criteria Checklist
- [ ] Amount field accepts decimal numbers
- [ ] Category dropdown has predefined options
- [ ] Date picker shows calendar interface
- [ ] Notes field is optional
- [ ] File upload accepts image files only
- [ ] Form validation prevents submission with missing required fields
- [ ] Success message displays after saving
- [ ] Transaction appears immediately in the table without page refresh

## Feature 2: Budget Progress (Weekly / Monthly)

### Scenario: User views budget progress
**Given** the user has transactions in the current period
**When** the user selects "Weekly" view
**Then** the progress bar shows spending for current week
**And** displays percentage used and remaining amount

### Scenario: User switches to monthly view
**Given** the user is viewing weekly progress
**When** the user selects "Monthly" from dropdown
**Then** the progress bar updates to show monthly spending
**And** calculations reflect the entire month

### Acceptance Criteria Checklist
- [ ] Budget Progress section is visible on dashboard
- [ ] Dropdown allows switching between Weekly/Monthly
- [ ] Progress bar visually represents percentage used
- [ ] Numeric display shows remaining budget amount
- [ ] Progress updates automatically when new transactions added
- [ ] Weekly calculation uses Monday-Sunday period
- [ ] Monthly calculation uses 1st-last day of month

## Feature 3: Recent Transactions Dashboard

### Scenario: User views recent transactions
**Given** the user has added transactions
**When** the user visits the dashboard
**Then** the Recent Transactions table displays:
- Date
- Category
- Amount
- Notes
- Receipt link (if uploaded)
**And** transactions are sorted by date (newest first)

### Acceptance Criteria Checklist
- [ ] Table displays all user transactions
- [ ] Columns show Date, Category, Amount, Notes, Receipt
- [ ] Receipt column shows download/view link for uploaded files
- [ ] Table updates automatically after adding new transaction
- [ ] Empty state shows message when no transactions exist
- [ ] Transactions sorted by date descending