# Feature Specifications

## Feature 1: Record Transaction (Add New Expense)

### Purpose
Allow users to record expenses so they can track their spending.

### Expected User
Students or individuals managing their personal finances.

### Main Functionality
The system provides a form where users can input transaction details such as amount, category, date, notes, and receipt upload. After saving, the transaction is stored in the database and displayed in the Recent Transactions table.

### Acceptance Criteria

- User can input the transaction amount
- User can select or enter a category
- User can select a transaction date
- User can add optional notes
- User can upload a receipt image
- Saved transaction appears in the Recent Transactions table


---

## Feature 2: Budget Progress (Weekly / Monthly)

### Purpose
Help users monitor spending by comparing expenses to a budget limit.

### Expected User
Students or individuals who want to control their spending.

### Main Functionality
The dashboard displays a Budget Progress section with a progress bar showing how much of the budget has been used. Users can set a spending limit and switch between weekly and monthly views to monitor their expenses.

### Acceptance Criteria

- Dashboard shows the Budget Progress section
- User can set or update a spending limit
- User can switch between Weekly and Monthly view
- System calculates spending for the selected timeframe
- Progress bar shows percentage of budget used
- System displays remaining budget amount
- Progress updates when new expenses are added

---

## Feature 3: Profile Settings Management

### Purpose
Allow users to manage and update their account information for a more personalized and secure experience.

### Expected User
Registered users of the Budget Tracker system.

### Main Functionality
The system provides a Profile Settings section where users can update their name, change their password, and upload or change their profile image. After saving, the updated information is stored in the database and reflected in the user interface.

### Acceptance Criteria

- User can view their current profile information
- User can update their name
- User can change their password
- User can confirm the new password before saving
- User can upload or change a profile image
- System validates required fields before saving
- Updated profile information is saved in the database
- Changes are reflected in the profile section after saving
- System displays a success message after valid updates
- System displays an error message for invalid or incomplete input