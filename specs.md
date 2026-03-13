Based on everything you built, your **Budget Tracker System specification** can now be updated to match the **actual features of your system**. You already implemented most of them. Here is a **clean specs version aligned with your project**.

---

# Budget Tracker System Specification

## 1. System Overview

The **Budget Tracker System** is a personal finance web application that allows users to manage and monitor their income and expenses.

The system allows users to register and log in securely, record financial transactions, upload receipt images, and view transaction records through a dashboard. Each user has their own account and can only access their own financial data.

The system supports full **transaction management**, including creating, viewing, and deleting transactions. Uploaded receipt images are stored on the server while the file names are stored in the database.

This system helps users track their spending habits and maintain organized financial records.

---

# 2. Objectives

## General Objective

To develop a secure and user-friendly budget tracking system that enables users to manage personal income and expenses.

## Specific Objectives

* Allow users to register and log into the system.
* Allow users to record financial transactions.
* Allow users to upload receipt images as proof of purchase.
* Allow users to view transaction records in a dashboard.
* Allow users to delete transaction records.
* Ensure users can only access their own transaction data.

---

# 3. System Features

## 3.1 User Authentication

### User Registration

Users can create an account by providing:

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

# 3.2 Transaction Management

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

# 4. Functional Requirements

The system shall:

* Allow users to register an account.
* Allow users to log in to the system.
* Allow users to log out securely.
* Allow users to create new financial transactions.
* Allow users to upload receipt images.
* Allow users to view their transaction records.
* Allow users to delete transaction records.
* Ensure users can only view their own transactions.

---

# 5. Non-Functional Requirements

## Usability

The system must provide a simple and easy-to-use interface.

## Security

User accounts must be protected using authentication and user-specific data access.

## Performance

The system should quickly load transaction data and receipt images.

## Reliability

Transaction data must be stored securely in the database without loss.

---

# 6. Database Structure

## Users Table

| Field    | Description            |
| -------- | ---------------------- |
| id       | Unique user identifier |
| name     | User full name         |
| email    | User email             |
| password | User password          |

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

# 7. System Workflow

1. User registers an account.
2. User logs into the system.
3. User ID is stored in the browser session.
4. User accesses the dashboard.
5. User creates a new transaction.
6. User uploads a receipt image (optional).
7. Transaction data is saved to the database.
8. User can view or delete transactions.
9. User logs out after finishing.

---

# Features Your System Currently Has

✔ User Registration
✔ User Login
✔ User Logout
✔ Multi-User Accounts
✔ Add Transaction
✔ Upload Receipt Image
✔ View Transactions
✔ Delete Transactions
✔ User-specific Dashboard

