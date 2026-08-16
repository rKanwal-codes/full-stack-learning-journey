# Day 7 — Student REST API 🚀

A CRUD REST API built with **Node.js** and **Express.js** to manage student records — full Create, Read, Update, and Delete functionality, tested end-to-end with Postman.

---

## ✨ Features

- ✅ Full CRUD (Create, Read, Update, Delete)
- ✅ Express Router for clean route organization
- ✅ Middleware: `cors`, `express.json`
- ✅ Centralized error handling + 404 handler
- ✅ In-memory data store (no database required for Day 7)
- ✅ Ready-to-use Postman collection

---

## 📂 Project Structure

```
student-rest-api
│
├── controllers
│   └── studentController.js   # CRUD logic
│
├── data
│   └── students.js            # In-memory student data
│
├── routes
│   └── students.js            # API routes
│
├── screenshots
│   └── api-preview.png        # Postman test screenshot
│
├── server.js                  # App entry point
├── package.json
├── Student-REST-API.postman_collection.json
└── README.md
```

---

## ▶️ Getting Started

```bash
npm install
npm start
```

Server runs at:

```
http://localhost:5000
```

---

## 🔗 API Endpoints

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
  "name": "Sara Ahmed",
  "department": "Computer Engineering",
  "semester": 2
}
```

---

## 📸 Screenshots

| GET All Students — 200 OK |
|:---:|
| ![GET all students response](./screenshots/api-preview.png) |

![Uploading student_api_collage.png…]()


---

## 🧪 Testing

Import `Student-REST-API.postman_collection.json` into Postman to test all endpoints instantly. All 5 endpoints have been tested and confirmed working (200 OK).

---

## 📝 Notes

- Data is stored **in memory** — restarting the server resets all changes.
- Adding a real database (e.g. MongoDB) is a natural next step after mastering REST + CRUD.

---

**Rukhsana Kanwal** — Computer Engineer | Full Stack Developer
