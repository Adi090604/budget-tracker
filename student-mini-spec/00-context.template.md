# Context

## Project Overview
The Budget Tracker System is a web application designed to help users manage their personal finances by tracking expenses and monitoring budget progress. The system allows users to record transactions, upload receipts, and view spending statistics over weekly or monthly periods.

## Business Context
- **Target Users**: Students and individuals who need to manage personal spending
- **Use Case**: Personal finance management for expense tracking and budget control
- **Deployment**: Local application that works offline

## Technical Context
- **Backend**: NestJS with TypeScript
- **Database**: MySQL with TypeORM
- **Frontend**: HTML/CSS/JavaScript
- **File Storage**: Local uploads directory for receipts and avatars

## Key Features
1. **User Management**: Registration, login, profile management with avatar upload
2. **Transaction Recording**: Add expenses with receipt uploads
3. **Budget Progress Tracking**: Weekly/monthly spending visualization
4. **Dashboard**: Recent transactions and spending statistics

## Constraints
- Must work locally without internet dependency
- Simple, beginner-friendly interface
- File-based receipt storage
- Basic authentication (no JWT tokens)