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


## Feature 4: Category Management

### Purpose

Allow users to organize expenses using customizable categories.

### Expected User

Users who want structured expense tracking.

### Main Functionality

The system provides a Categories section where users can view, add, and delete categories. Each category includes a name and an optional icon.

### Acceptance Criteria

* User can view list of categories
* User can add a new category
* User can assign an optional icon
* User can delete a category
* Categories are available in transaction dropdown
* Categories persist in the system
* System prevents empty category names

---

## Feature 5: Category Summary with Data Visualization

### Purpose

Provide a clear overview of spending distribution across categories.

### Expected User

Users who want to analyze spending behavior.

### Main Functionality

The system groups transactions by category and calculates total spending per category. Results are displayed in both a list format and a pie chart.

### Acceptance Criteria

* System groups transactions by category
* System calculates total spending per category
* Category Summary displays category name and icon
* System displays pie chart visualization
* Chart reflects accurate category distribution
* Chart updates when transactions change
* System handles empty data scenarios

---

## Feature 6: Time-Based Filtering (Day / Week / Month)

### Purpose

Allow users to analyze expenses within a selected timeframe.

### Expected User

Users who want better control over financial analysis.

### Main Functionality

The system provides a filter option that allows users to switch between Day, Week, and Month views. The Category Summary and chart update dynamically based on the selected timeframe.

### Acceptance Criteria

* User can select Day, Week, or Month filter
* System filters transactions based on selected timeframe
* Category Summary updates accordingly
* Pie chart updates dynamically
* System displays current filter label
* Default filter is set to Monthly
* System handles cases with no available data

---

## Feature 7: Category Icon Suggestion (Keyword-Based)

### Purpose

Assist users in selecting appropriate category icons automatically.

### Expected User

Users who want faster and more intuitive category creation.

### Main Functionality

The system detects keywords from the category name input and automatically suggests a matching icon. Users can override the suggestion manually.

### Acceptance Criteria

* System detects keywords from category name input
* System suggests a corresponding icon
* Suggestion updates dynamically while typing
* User can manually override the icon
* Default icon is assigned if no match is found
* Feature works without backend dependency
