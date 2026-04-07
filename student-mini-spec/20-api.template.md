# API Specification

## Base URL
`http://localhost:3000`

## Authentication
No authentication required for this basic implementation. User identification handled via user_id parameter.

## Endpoints

### Users

#### POST /users/register
Register a new user.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "id": 1,
  "name": "string",
  "email": "string",
  "password": "string"
}
```

#### POST /users/login
Login user.

**Request Body:**
```json
{
  "email": "string",
  "password": "string"
}
```

**Response:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "name": "string",
    "email": "string"
  }
}
```

#### GET /users/:id
Get user information.

**Response:**
```json
{
  "id": 1,
  "name": "string",
  "email": "string",
  "avatar": "string"
}
```

#### PATCH /users/:id
Update user information with optional avatar upload.

**Request Body (form-data):**
- avatar: file (optional)
- name: string (optional)
- email: string (optional)

### Transactions

#### POST /transactions
Create a new transaction with optional receipt upload.

**Request Body (form-data):**
- receipt: file (optional)
- user_id: number
- amount: number
- category: string
- date: string
- notes: string (optional)

**Response:**
```json
{
  "id": 1,
  "user_id": 1,
  "amount": 50.00,
  "category": "Food",
  "date": "2024-01-01",
  "notes": "Lunch",
  "receipt": "171023456789.jpg"
}
```

#### GET /transactions/user/:user_id
Get all transactions for a user.

**Response:**
```json
[
  {
    "id": 1,
    "user_id": 1,
    "amount": 50.00,
    "category": "Food",
    "date": "2024-01-01",
    "notes": "Lunch",
    "receipt": "171023456789.jpg"
  }
]
```

#### DELETE /transactions/:id
Delete a transaction.

**Response:**
```json
{
  "affected": 1
}
```

## Error Responses
- 404: Not Found
- 400: Bad Request
- 500: Internal Server Error