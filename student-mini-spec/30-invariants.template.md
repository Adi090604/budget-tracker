# Invariants

## Business Rules

### User Management
- Email addresses must be unique across all users
- Passwords are stored in plain text (not recommended for production)
- User IDs are auto-generated and immutable
- Avatar files are stored in the uploads directory

### Transactions
- All transactions must belong to a valid user
- Amount must be a positive number
- Category is required and should be one of predefined values (Food, Transport, Entertainment, etc.)
- Date must be in YYYY-MM-DD format
- Receipt files are optional but stored in uploads directory if provided
- Transaction IDs are auto-generated and immutable

### Budget Progress
- Budget limit is assumed to be a fixed value (not configurable in current implementation)
- Weekly view calculates spending from Monday to Sunday
- Monthly view calculates spending from 1st to last day of current month
- Progress percentage = (total spending / budget limit) * 100
- Remaining amount = budget limit - total spending

## Data Integrity
- Foreign key constraint: transactions.user_id must reference users.id
- Unique constraint on users.email
- File uploads are validated for image types only
- Transaction amounts cannot be negative

## System Constraints
- Application runs locally on user's machine
- Database is MySQL running via WAMP/phpMyAdmin
- File storage is local filesystem (uploads directory)
- No concurrent user access (single user system)

## Validation Rules
- Email format validation
- Required fields cannot be empty
- Numeric fields must be valid numbers
- Date fields must be valid dates
- File uploads limited to image types (jpg, png, etc.)