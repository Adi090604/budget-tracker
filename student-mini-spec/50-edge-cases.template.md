# Edge Cases and Error Scenarios

## Input Validation Edge Cases

### Transaction Amount
- Amount = 0 (should be rejected)
- Amount = negative number (should be rejected)
- Amount with many decimal places (25.999999)
- Amount as non-numeric string ("abc")
- Amount with commas (1,000.00)

### Transaction Date
- Future dates
- Very old dates (1900-01-01)
- Invalid date format (13/45/2024)
- Empty date field

### File Upload
- Upload non-image file (document.pdf)
- Very large image file (>10MB)
- Corrupted image file
- File with no extension
- File with special characters in name

### User Input
- Email with invalid format (user@)
- Password with special characters and spaces
- Name with numbers and symbols
- Empty required fields
- Very long text inputs (>1000 characters)

## Database Edge Cases

### User Scenarios
- User tries to register with existing email
- Login with wrong password
- Access user profile that doesn't exist
- Update user with invalid data

### Transaction Scenarios
- Create transaction for non-existent user
- Delete transaction that doesn't exist
- View transactions for user with no transactions
- Multiple transactions with same data

## System Edge Cases

### File System
- Uploads directory doesn't exist
- No write permissions to uploads directory
- Disk space full during file upload
- File upload interrupted (network issue, though local)

### Database
- Database connection lost during operation
- Database server not running
- Table structure changes
- Concurrent access (though single user)

## UI/UX Edge Cases

### Dashboard Display
- No transactions to display (empty table)
- Very long notes text wrapping
- Many transactions causing scroll
- Receipt images not loading (broken links)

### Budget Progress
- Budget limit = 0
- Spending exceeds budget limit (100%+)
- No transactions in selected period
- Period with only one transaction

## Performance Edge Cases

### Data Volume
- User with 1000+ transactions
- Large receipt images
- Database with many users (though single user system)

### Timing
- Rapid successive transaction additions
- File upload during heavy system load
- Database operations during file I/O

## Error Handling

### Expected Error Responses
- 400 Bad Request for invalid input
- 404 Not Found for missing resources
- 500 Internal Server Error for system failures

### Recovery Scenarios
- Failed file upload should not create transaction
- Database rollback on partial failures
- User-friendly error messages
- Graceful degradation when features fail