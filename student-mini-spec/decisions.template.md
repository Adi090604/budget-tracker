# Design Decisions

## Architecture Decisions

### Backend Framework
**Decision**: Use NestJS with TypeScript
**Rationale**: 
- Structured framework for building scalable server-side applications
- Built-in dependency injection and modular architecture
- TypeScript provides type safety and better development experience
- Good for learning enterprise patterns

**Alternatives Considered**:
- Express.js (too low-level for structured development)
- Fastify (good alternative, but NestJS has better ecosystem)

### Database Choice
**Decision**: MySQL with TypeORM
**Rationale**:
- Relational database suitable for financial data
- TypeORM provides ORM abstraction and type safety
- WAMP stack provides easy local development setup
- Good for learning SQL concepts

**Alternatives Considered**:
- SQLite (simpler, but MySQL better for learning)
- MongoDB (NoSQL not needed for this use case)

### File Storage
**Decision**: Local filesystem storage
**Rationale**:
- Simple implementation for local application
- No external dependencies or cloud costs
- Direct file access for web serving
- Easy to understand and debug

**Alternatives Considered**:
- Database BLOB storage (more complex)
- Cloud storage (not suitable for offline requirement)

## Implementation Decisions

### Authentication
**Decision**: No authentication tokens, use user_id in requests
**Rationale**:
- Simplifies implementation for learning purposes
- Suitable for single-user local application
- Focus on core features rather than security

**Security Note**: This is not production-ready. Real applications should use JWT or sessions.

### Transaction Categories
**Decision**: Free text input for categories
**Rationale**:
- Flexible for user needs
- Simple implementation
- Easy to extend with predefined options later

**Future Enhancement**: Could add category validation against predefined list.

### Budget Limit
**Decision**: Hardcoded budget limit
**Rationale**:
- Simplifies initial implementation
- Focus on core calculation logic
- Can be made configurable later

**Future Enhancement**: Add user-configurable budget settings.

### Date Handling
**Decision**: Store dates as strings in YYYY-MM-DD format
**Rationale**:
- Simple storage and retrieval
- Easy to work with in JavaScript
- No timezone complications for local app

**Future Enhancement**: Use proper Date objects with timezone handling.

## Testing Decisions

### Unit Testing
**Decision**: Use Jest with NestJS testing utilities
**Rationale**:
- Jest is the default testing framework for NestJS
- Good integration with TypeScript
- Familiar syntax and powerful mocking capabilities

### Integration Testing
**Decision**: Use Supertest for API endpoint testing
**Rationale**:
- HTTP request testing matches real usage
- Tests actual controller behavior
- Easy to set up with NestJS

### E2E Testing
**Decision**: Use Jest with Supertest for API-level E2E
**Rationale**:
- Consistent with existing test setup
- Focus on API behavior rather than UI
- Faster execution than browser-based testing

**Note**: Playwright could be added for full UI testing in future.

## Code Organization

### Module Structure
**Decision**: Feature-based modules (users, transactions)
**Rationale**:
- Clear separation of concerns
- Easy to understand and maintain
- Follows NestJS best practices

### File Naming
**Decision**: Follow NestJS conventions
- `*.service.ts` for business logic
- `*.controller.ts` for HTTP endpoints
- `*.entity.ts` for database models
- `*.spec.ts` for tests

## Development Decisions

### Package Management
**Decision**: Use npm
**Rationale**:
- Standard Node.js package manager
- Good lockfile support
- Familiar to most developers

### Code Formatting
**Decision**: Use Prettier
**Rationale**:
- Consistent code formatting
- Reduces style debates
- Integrates well with editors

### Linting
**Decision**: Use ESLint
**Rationale**:
- Catches common errors
- Enforces coding standards
- Configurable rules for TypeScript