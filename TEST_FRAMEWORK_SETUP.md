# Test Framework Setup Guide - Budget Tracker System

This guide explains the complete testing framework for the Budget Tracker System using Jest, Supertest, and Playwright.

---

## Test Tools Overview

### Jest ✅ (Already Installed)
- **Purpose**: Unit testing framework
- **Used For**: Testing individual functions, services, and utilities in isolation
- **Package**: `jest`, `ts-jest`, `@types/jest`
- **Files**: `src/**/*.spec.ts`

### Supertest ✅ (Already Installed)
- **Purpose**: HTTP request testing library
- **Used For**: Integration and API endpoint testing
- **Package**: `supertest`, `@types/supertest`
- **Files**: `test/**/*.e2e-spec.ts`

### Playwright (Recommended to Add)
- **Purpose**: End-to-end browser testing
- **Used For**: Full user workflows and UI testing
- **Package**: `@playwright/test`
- **Files**: `e2e/**/*.e2e.spec.ts`

---

## Current Test File Structure

```
budget-tracker/
├── src/
│   ├── transactions/
│   │   ├── transactions.service.spec.ts          ← Unit tests for service
│   │   ├── transactions.controller.spec.ts       ← Unit tests for controller
│   │   ├── transactions.service.ts
│   │   ├── transactions.controller.ts
│   │   └── transaction.entity.ts
│   ├── users/
│   │   ├── users.service.spec.ts                 ← Unit tests for service
│   │   ├── users.controller.spec.ts              ← Unit tests for controller
│   │   ├── users.service.ts
│   │   ├── users.controller.ts
│   │   └── user.entity.ts
│   ├── app.controller.ts
│   ├── app.service.ts
│   └── main.ts
├── test/
│   ├── app.e2e-spec.ts                           ← API integration tests
│   └── jest-e2e.json                             ← Jest config for E2E
├── e2e/                                          ← (To create for Playwright)
│   ├── auth.e2e.spec.ts                          ← (Recommended)
│   ├── transaction.e2e.spec.ts                   ← (Recommended)
│   └── budget-progress.e2e.spec.ts               ← (Recommended)
├── jest.config.js                                ← (Optional: root Jest config)
├── playwright.config.ts                          ← (To create if using Playwright)
└── package.json
```

---

## What Each Test File Does

### Unit Tests (src/**/*.spec.ts)

#### Transactions Module

**`src/transactions/transactions.service.spec.ts`**
- Tests service business logic
- Mocks the database repository
- Tests: create, findAll, delete operations
- Coverage: All transaction CRUD operations
- Runs: `npm run test -- transactions.service`

**`src/transactions/transactions.controller.spec.ts`**
- Tests controller HTTP handling
- Mocks the service layer
- Tests: POST create, GET findAll, DELETE endpoints
- Coverage: File upload handling, request/response validation
- Runs: `npm run test -- transactions.controller`

#### Users Module

**`src/users/users.service.spec.ts`**
- Tests user business logic
- Mocks the database repository
- Tests: register, login, findOne, update operations
- Coverage: Authentication logic, data validation
- Runs: `npm run test -- users.service`

**`src/users/users.controller.spec.ts`**
- Tests user controller HTTP handling
- Mocks the service layer
- Tests: POST register, POST login, GET profile, PATCH update
- Coverage: Avatar upload handling, request validation
- Runs: `npm run test -- users.controller`

### Integration/API Tests (test/**/*.e2e-spec.ts)

**`test/app.e2e-spec.ts`**
- Tests complete API workflows without mocks
- Uses real application initialization
- Tests: User registration → Login → Add transactions → View transactions
- Coverage: API integration, database operations, file uploads
- Tests end-to-end user journeys
- Runs: `npm run test:e2e`

---

## Recommended Playwright E2E Tests (Optional Addition)

### Browser-Based UI Tests

**`e2e/auth.e2e.spec.ts`**
- Tests user registration flow in browser
- Tests user login flow in browser
- Verifies form validation
- Verifies navigation after authentication

**`e2e/transaction.e2e.spec.ts`**
- Tests adding new transaction in UI
- Tests file upload of receipt
- Tests viewing recent transactions table
- Tests deleting transaction

**`e2e/budget-progress.e2e.spec.ts`**
- Tests budget progress display
- Tests switching between weekly/monthly views
- Tests progress bar updates after adding transaction

---

## Installation Guide

### Already Installed ✅
```bash
npm install
# Creates:
# - jest
# - ts-jest
# - @types/jest
# - supertest
# - @types/supertest
# - @nestjs/testing
```

### Recommended Additions (Optional)
```bash
npm install --save-dev @playwright/test
```

---

## Npm Scripts Configuration

### Current Scripts (Already Available)
```json
{
  "test": "jest",
  "test:watch": "jest --watch",
  "test:cov": "jest --coverage",
  "test:debug": "node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand",
  "test:e2e": "jest --config ./test/jest-e2e.json"
}
```

### Recommended Additional Scripts (Add to package.json)
```json
{
  "test:unit": "jest --testPathPattern=src",
  "test:unit:watch": "jest --testPathPattern=src --watch",
  "test:integration": "npm run test:e2e",
  "test:all": "npm run test:unit && npm run test:e2e",
  "test:coverage:full": "jest --coverage && jest --config ./test/jest-e2e.json --coverage"
}
```

### Playwright Scripts (Add if using Playwright)
```json
{
  "test:ui": "playwright test",
  "test:ui:watch": "playwright test --watch",
  "test:ui:debug": "playwright test --debug",
  "test:ui:headed": "playwright test --headed"
}
```

---

## Testing Priority Order

Run these in order for efficient test coverage:

### Phase 1: Unit Tests (Start Here)
```bash
npm run test:unit
```
**Why First**: Fast, isolated tests catch logic errors early
- Transactions Service tests
- Users Service tests
- Transactions Controller tests
- Users Controller tests

**Duration**: ~5-10 seconds
**Coverage**: Business logic, validation

### Phase 2: Integration/API Tests
```bash
npm run test:e2e
```
**Why Second**: Tests real database and API interactions
- User registration workflow
- User login workflow
- Transaction creation with file upload
- Recent transactions retrieval
- Transaction deletion

**Duration**: ~10-20 seconds
**Coverage**: API endpoints, database operations

### Phase 3: E2E/UI Tests (Optional, with Playwright)
```bash
npm run test:ui
```
**Why Last**: Tests complete user journeys in browser
- User registration in UI
- Login and dashboard access
- Adding transaction with receipt
- Viewing budget progress
- Switching weekly/monthly views

**Duration**: ~30-60 seconds
**Coverage**: Complete user workflows

### Full Test Suite
```bash
npm run test:all
```
Runs all tests consecutively with coverage reports

---

## How to Run Tests

### Run All Unit Tests
```bash
npm run test
```

### Run Tests in Watch Mode (Auto-rerun on changes)
```bash
npm run test:watch
```

### Run Specific Test File
```bash
npm run test -- transactions.service
npm run test -- users.controller
```

### Run with Coverage Report
```bash
npm run test:cov
```
Creates `coverage/` directory with HTML reports

### Run Integration Tests
```bash
npm run test:e2e
```

### Run in Debug Mode
```bash
npm run test:debug
```

### Run Playwright Tests (if installed)
```bash
npm run test:ui
npm run test:ui:headed        # See browser
npm run test:ui:debug         # Debug mode
```

---

## Test Configuration Files

### Jest Unit Tests Configuration
**Location**: `package.json` (jest section)
```json
{
  "jest": {
    "moduleFileExtensions": ["js", "json", "ts"],
    "rootDir": "src",
    "testRegex": ".*\\.spec\\.ts$",
    "transform": {
      "^.+\\.(t|j)s$": "ts-jest"
    },
    "testEnvironment": "node"
  }
}
```

### Jest E2E Tests Configuration
**Location**: `test/jest-e2e.json`
```json
{
  "moduleFileExtensions": ["js", "json", "ts"],
  "rootDir": ".",
  "testEnvironment": "node",
  "testRegex": ".e2e-spec.ts$",
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  }
}
```

### Playwright Configuration (Create if needed)
**Location**: `playwright.config.ts`
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npm run start:dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
```

---

## Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Unit Tests
```bash
npm run test
```

### 3. Run with Watch Mode (During Development)
```bash
npm run test:watch
```

### 4. Run Integration Tests
```bash
npm run test:e2e
```

### 5. Run All Tests with Coverage
```bash
npm run test:cov
```

### 6. Optional: Install & Configure Playwright
```bash
npm install --save-dev @playwright/test
npx playwright install
```

---

## Testing Best Practices

### Unit Tests (Jest)
✅ Test one function/method at a time
✅ Mock external dependencies
✅ Use descriptive test names: `should create transaction when valid data provided`
✅ Follow AAA pattern: Arrange, Act, Assert
✅ Keep tests isolated (no shared state)

### Integration Tests (Supertest)
✅ Test complete API workflows
✅ Setup and teardown test data
✅ Test both success and error scenarios
✅ Verify HTTP status codes and response format
✅ Test file upload handling

### E2E Tests (Playwright)
✅ Test real user workflows
✅ Use page objects for reusable selectors
✅ Test critical business flows first
✅ Keep tests independent
✅ Use explicit waits instead of fixed delays

---

## Coverage Goals

### Phase 1 (Required)
- [ ] Unit tests for all service methods: 80%+
- [ ] Unit tests for controllers: 80%+
- [ ] Integration tests for all API endpoints

### Phase 2 (Important)
- [ ] E2E tests for critical user flows (registration, transaction creation)
- [ ] Error handling test coverage
- [ ] File upload test coverage

### Phase 3 (Nice to Have)
- [ ] UI E2E tests with Playwright
- [ ] Comprehensive coverage report (90%+)
- [ ] Performance/load testing

---

## Troubleshooting

### Tests Not Running
```bash
npm install
npm run build
npm run test
```

### Database Connection Issues in E2E Tests
- Ensure MySQL is running
- Check `.env` configuration
- Verify `test` database exists

### File Upload Tests Failing
- Ensure `uploads/` directory exists
- Check directory permissions
- Verify multer configuration

### Playwright Installation Issues
```bash
npm install --save-dev @playwright/test
npx playwright install
npx playwright install-deps
```

---

## Next Steps

1. **Run existing unit tests**: `npm run test`
2. **Review test coverage**: `npm run test:cov`
3. **Run integration tests**: `npm run test:e2e`
4. **Add additional test cases** as you discover new scenarios
5. **(Optional) Setup Playwright** for UI testing
6. **Integrate tests into CI/CD** pipeline (GitHub Actions, etc.)

---

## Summary

| Stage | Tool | Command | Duration | Coverage |
|-------|------|---------|----------|----------|
| Unit | Jest | `npm run test` | ~5-10s | Business logic |
| Integration | Supertest | `npm run test:e2e` | ~10-20s | API endpoints |
| E2E | Playwright | `npm run test:ui` | ~30-60s | User workflows |
| Full Suite | Combined | `npm run test:all` | ~1-2min | Everything |

Start with unit tests, then move to integration tests. Playwright E2E tests are optional but recommended for comprehensive coverage.
