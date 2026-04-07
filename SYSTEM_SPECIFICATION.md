# Budget Tracker System Specification

## 1. System Overview

The **Budget Tracker System** is a personal finance web application that allows users to manage and monitor their income and expenses.

The system enables users to register and log in securely, record financial transactions, upload receipt images, view transaction records through a dashboard, monitor their budget progress, and manage their profile settings. Each user has their own account and can only access their own financial data.

The system supports transaction management including creating, viewing, and deleting transactions. Uploaded receipt images and profile images are stored on the server while the file names are stored in the database.

This system helps users track their spending habits, manage their account information, and maintain organized financial records.

---

## 2. Objectives

## General Objective

To develop a secure and user-friendly budget tracking system that enables users to manage personal income and expenses.

## Specific Objectives

* Allow users to register and log into the system.
* Allow users to record financial transactions.
* Allow users to upload receipt images as proof of purchase.
* Allow users to view transaction records in a dashboard.
* Allow users to delete transaction records.
* Allow users to monitor their budget progress weekly or monthly.
* Allow users to manage their profile information.
* Ensure users can only access their own transaction and profile data.

---

## 3. System Features

## 3.1 User Authentication

### User Registration

Users can create an account by providing the following information:

* Name
* Email
* Password

### User Login

Registered users can log into the system using:

* Email
* Password

After login, the system stores the **user ID** to maintain the user session.

### User Logout

Users can log out of the system which clears the stored session.

---

## 3.2 Transaction Management

Users can manage their financial transactions through the dashboard.

### Create Transaction

Users can add a new transaction including:

* Amount
* Category
* Date
* Notes
* Receipt Image

### View Transactions

Users can view a list of their transactions in the dashboard.

Each transaction displays:

* ID
* Amount
* Category
* Date
* Notes
* Receipt Image

### Delete Transaction

Users can remove transaction records from the system.

---

## 3.3 Budget Monitoring

The system allows users to monitor their spending based on a defined budget limit.

### Set Budget Limit

Users can define a spending limit for a selected timeframe:

* Weekly
* Monthly

### View Budget Progress

The system displays a budget progress section showing:

* Total expenses
* Percentage of budget used
* Remaining budget
* Selected timeframe (weekly or monthly)

The progress automatically updates whenever new transactions are added or existing data changes.

---

## 3.4 Profile Settings Management

The system allows users to manage and update their account information.

### View Profile Information

Users can view their current profile details including:

* Name
* Email
* Profile Image

### Update Name

Users can edit and update their name. The changes are saved in the database and reflected in the user interface.

### Change Password

Users can update their password securely. The system replaces the old password with the new one.

### Upload Profile Image

Users can upload or change their profile image. The image is stored on the server and linked to the user account.

---

## 4. Functional Requirements

The system shall:

* Allow users to register an account.
* Allow users to log in to the system.
* Allow users to log out securely.
* Allow users to create new financial transactions.
* Allow users to upload receipt images.
* Allow users to view their transaction records.
* Allow users to delete transaction records.
* Ensure users can only view their own transactions.
* Allow users to set and update a budget limit.
* Allow users to switch between weekly and monthly budget views.
* Display the user’s budget progress based on recorded transactions.
* Allow users to update their profile information.
* Allow users to change their password.
* Allow users to upload or update a profile image.
* Ensure users can only modify their own account and profile data.

---

## 5. Non-Functional Requirements

## Usability

The system must provide a simple and easy-to-use interface for managing transactions, viewing financial data, monitoring budget progress, and updating profile information.

## Security

User accounts must be protected using authentication and user-specific data access. Passwords must be stored securely, and users can only modify their own information.

## Performance

The system should quickly load transaction data, receipt images, profile images, and budget progress information.

## Reliability

Transaction, budget, and profile data must be stored securely in the database without data loss.

---

## 6. Database Structure

## Users Table

| Field         | Description              |
| ------------- | ------------------------ |
| id            | Unique user identifier   |
| name          | User full name           |
| email         | User email               |
| password      | User password            |
| profile_image | Profile image filename   |

---

## Transactions Table

| Field    | Description              |
| -------- | ------------------------ |
| id       | Unique transaction ID    |
| user_id  | Owner of the transaction |
| amount   | Monetary value           |
| category | Expense or income type   |
| date     | Transaction date         |
| notes    | Additional details       |
| receipt  | Receipt image filename   |

---

## Budget Table

| Field     | Description                     |
| --------- | ------------------------------- |
| id        | Unique budget ID                |
| user_id   | Owner of the budget             |
| limit     | Budget amount                   |
| timeframe | Weekly or Monthly               |

---

## 7. System Workflow

1. User registers an account.
2. User logs into the system.
3. User ID is stored in the browser session.
4. User accesses the dashboard.
5. User creates a new transaction.
6. User uploads a receipt image (optional).
7. Transaction data is saved to the database.
8. User can view or delete transactions.
9. User can set or update a budget limit.
10. System calculates and displays budget progress.
11. User can access profile settings.
12. User can update their name, password, or profile image.
13. Updated profile data is saved to the database.
14. User logs out after finishing.