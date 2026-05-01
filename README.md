# 💰 Budget Tracker Application

## Student Information

**Name:** Adrian Dela Cruz
**Assignment:** Assignment 1 – Implement Two Small Features
**Application:** Budget Tracker System

---

## Overview

The **Budget Tracker Application** is a web-based system designed to help users manage their expenses, monitor financial activity, and analyze spending behavior.

The system provides an interactive dashboard where users can:

* Record expenses
* Track budget usage
* Analyze spending patterns
* Manage categories and financial data

The application is designed to run **locally**, ensuring accessibility even without a stable internet connection.

---

## Quick Start

1. Run `npm install`
2. Run `npm run start:dev`
3. Open `frontend/dashboard.html`

---

## Implemented Features

The system includes the following fully implemented features:

1. **Record Transaction (Add New Expense)**
2. **Budget Progress (Weekly / Monthly)**
3. **Profile Settings Management**
4. **Category Management**
5. **Category Summary with Data Visualization**
6. **Time-Based Filtering (Day / Week / Month)**
7. **Category Icon Suggestion (Keyword-Based)**

---

##  How to Run the Application

### 1. Clone the Repository

```bash
git clone <your-repository-url>
cd <your-project-folder>
```

---

### 2. Install Dependencies

```bash
npm install
```

---

### 3. Setup Database (MySQL via WAMP / phpMyAdmin)

1. Open **phpMyAdmin**
2. Create database:

```text
budget_tracker
```

3. Configure database connection in:

```text
src/app.module.ts
```

Example:

```ts
TypeOrmModule.forRoot({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'budget_tracker',
  autoLoadEntities: true,
  synchronize: true,
})
```

---

### 4. Run Backend Server

```bash
npm run start:dev
```

Expected output:

```text
Application is running on: http://localhost:3000
```

---

### 5. Open Frontend

Open:

```text
frontend/dashboard.html
```

---

### 6. Verify System

Ensure the following features work:

* Add new transaction
* Category dropdown loads correctly
* Budget progress updates dynamically
* Category summary and pie chart display correctly
* Time-based filtering works
* Data is saved and retrieved properly

---

##  System Features Overview

The system integrates multiple functionalities into a unified dashboard:

* Expense recording and tracking
* Budget monitoring with progress visualization
* Category-based expense organization
* Data visualization using charts
* Time-based financial analysis
* User profile management
* Intelligent icon suggestion for categories

---

##  Challenges Encountered

During development, several challenges were addressed:

* Configuring **NestJS with TypeORM and MySQL**
* Implementing **file upload functionality for receipts**
* Ensuring real-time dashboard updates
* Integrating frontend with backend APIs
* Managing state and data consistency across features

---

##  Screenshots

# Screenshots

The following screenshots demonstrate the working features of the application.

### Record Transaction Form
![Record Transaction](screenshots/add-expenses.png)

### Transaction Saved in Recent Transactions Table
![Transactions](screenshots/transactions.png)

### Budget Progress (Monthly View)
![Budget Progress Monthly](screenshots/budgetprogress-monthly.png)

### Budget Progress (Weekly View)
![Budget Progress Weekly](screenshots/budgetprogress-weekly.png)

### Set Spending Limit
![Set Limit](screenshots/set-limit.png)

### Dashboard Overview
![Dashboard](screenshots/dashboard.png)

---

##  Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* NestJS
* TypeScript

### Database

* MySQL
* phpMyAdmin (WAMP)

---

## Notes

* Ensure WAMP server is running before starting backend
* Default MySQL credentials:

  * Username: `root`
  * Password: *(empty)*
* If port `3000` is unavailable, modify `main.ts`

---

## Conclusion

The Budget Tracker system demonstrates a complete implementation of expense tracking, budget monitoring, and data visualization features. The integration of multiple components provides a user-friendly and functional financial management tool.
