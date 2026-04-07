# Test Framework Plan: Budget Tracker System

## Overview
This document outlines the testing strategy for the Budget Tracker System, utilizing Jest, Supertest, and Playwright for comprehensive test coverage.

## Testing Tools

### Jest
- **Purpose**: Unit testing framework
- **Usage**: Test individual functions, services, and utilities
- **Configuration**: Already configured in `package.json`
- **Command**: `npm run test`

### Supertest
- **Purpose**: HTTP endpoint testing
- **Usage**: Integration tests for API endpoints
- **Configuration**: Already installed (`@types/supertest`)
- **Command**: `npm run test:e2e`

### Playwright (Recommended Addition)
- **Purpose**: End-to-end UI testing
- **Usage**: Test complete user workflows in browser
- **Installation**: `npm install --save-dev @playwright/test`
- **Configuration**: Add to `package.json` scripts

## Test Structure

### Unit Tests (`src/**/*.spec.ts`)
- **Location**: Alongside source files
- **Coverage**: Services, utilities, helpers
- **Mocking**: Database calls, external dependencies

### Integration Tests (`test/**/*.spec.ts`)
- **Location**: `test/` directory
- **Coverage**: API endpoints, database operations
- **Setup**: Full application context

### E2E Tests (Future)
- **Location**: `e2e/` directory
- **Coverage**: Complete user journeys
- **Browser**: Chromium, Firefox, Safari

## Test Categories

### 1. Service Layer Tests
- **TransactionsService**: CRUD operations, business logic
- **UsersService**: Authentication, user management
- **Mocking**: TypeORM repositories

### 2. Controller Layer Tests
- **TransactionsController**: HTTP requests/responses
- **UsersController**: API endpoints
- **Validation**: Request/response formats

### 3. Integration Tests
- **Database Integration**: Real database operations
- **File Upload**: Multipart form handling
- **API Workflows**: End-to-end API calls

### 4. E2E Tests (UI)
- **User Registration**: Complete signup flow
- **Transaction Creation**: Add expense with upload
- **Dashboard Interaction**: View and interact with data

## Test Data Strategy

### Test Database
- Use separate test database
- Clean up after each test
- Seed with known test data

### Mock Data
- Factory functions for test entities
- Realistic but deterministic data
- Edge cases and boundary values

## Coverage Goals

### Unit Tests: 80%+
- All service methods
- Utility functions
- Error handling paths

### Integration Tests: 90%+
- All API endpoints
- Database operations
- File upload scenarios

### E2E Tests: Critical Paths
- User registration/login
- Transaction creation
- Budget progress display

## Test Organization

### File Naming
- `*.service.spec.ts` - Service unit tests
- `*.controller.spec.ts` - Controller integration tests
- `app.e2e-spec.ts` - E2E API tests
- `*.e2e.spec.ts` - UI E2E tests (future)

### Test Structure (AAA)
```typescript
describe('Feature', () => {
  it('should do something', () => {
    // Arrange
    const input = 'test data';

    // Act
    const result = service.method(input);

    // Act
    expect(result).toBe(expected);
  });
});
```

## CI/CD Integration

### Pre-commit Hooks
- Run unit tests before commit
- Lint code changes
- Format code

### Build Pipeline
- Install dependencies
- Run all tests
- Generate coverage reports
- Build production artifacts

## Best Practices

### Test Isolation
- Each test independent
- No shared state
- Clean database between tests

### Descriptive Names
- `it('should create transaction when valid data provided')`
- `describe('TransactionsService')`

### Maintainable Tests
- DRY principle
- Helper functions for common setup
- Page objects for UI tests

## Implementation Priority

1. **High**: Unit tests for services
2. **High**: Integration tests for controllers
3. **Medium**: E2E API tests
4. **Low**: UI E2E tests (Playwright)