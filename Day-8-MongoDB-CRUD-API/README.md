# Day 8 — MongoDB CRUD API

A REST API built with **Node.js**, **Express.js**, and **MongoDB** (via Mongoose) to manage student records — with real, persistent data storage (unlike Day 7's in-memory version).

## Features

- Full CRUD (Create, Read, Update, Delete)
- MongoDB + Mongoose for schema validation and data persistence
- Middleware: `cors`, `express.json`
- Centralized error handling + 404 handler
- Environment variables via `.env`
- Ready-to-use Postman collection

## Project Structure

```
mongodb-crud-api
│
├── controllers
│   └── studentController.js   # CRUD logic
│
├── models
│   └── Student.js              # Mongoose schema
│
├── routes
│   └── students.js             # API routes
│
├── server.js                   # App entry point + DB connection
├── package.json
├── .env.example
├── MongoDB-CRUD-API.postman_collection.json
└── README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up MongoDB

You need a MongoDB database running. Two options:

**Option A — MongoDB Compass / Local MongoDB**
Install MongoDB Community Server + Compass from [mongodb.com/try/download/community](https://www.mongodb.com/try/download/community), then start the local service. Your connection string will be:
```
mongodb://127.0.0.1:27017/student_db
```

**Option B — MongoDB Atlas (free cloud database, no install needed)**
1. Sign up at [mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free (M0) cluster
3. Under "Database Access", create a username/password
4. Under "Network Access", allow your IP (or 0.0.0.0/0 for testing)
5. Click "Connect" → "Drivers" and copy the connection string

### 3. Configure environment variables

Copy `.env.example` to `.env` and paste your connection string:

```bash
cp .env.example .env
```

```
MONGO_URI=mongodb://127.0.0.1:27017/student_db
PORT=5000
```

### 4. Run the server

```bash
npm start
```

If connected successfully, you'll see:
```
Connected to MongoDB
Server running at http://localhost:5000
```

## API Endpoints

| Method | Endpoint              | Description         |
|--------|------------------------|----------------------|
| GET    | `/api/students`        | Get all students     |
| GET    | `/api/students/:id`    | Get student by ID    |
| POST   | `/api/students`        | Create a new student |
| PUT    | `/api/students/:id`    | Update a student     |
| DELETE | `/api/students/:id`    | Delete a student     |

### Example: Create Student (POST)

```json
{
  "name": "Rukhsana Kanwal",
  "email": "rukhsana@example.com",
  "department": "Computer Engineering",
  "semester": 5
}
```

## Testing

Import `MongoDB-CRUD-API.postman_collection.json` into Postman. For the "Get by ID", "Update", and "Delete" requests, replace `REPLACE_WITH_ID` in the URL with a real `_id` returned from "Create Student" or "Get All Students".

## What Makes This Different From Day 7

| Day 7 (In-Memory) | Day 8 (MongoDB) |
|---|---|
| Data stored in a JS array | Data stored in an actual database |
| Resets on server restart | Persists permanently |
| No validation | Schema validation via Mongoose |
| IDs are simple numbers | IDs are MongoDB ObjectIds |

---

**Rukhsana Kanwal** — Computer Engineer | Full Stack Developer
