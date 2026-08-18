# 🔐 Authentication System (JWT + bcrypt)

A simple **Node.js + Express + MongoDB** backend project implementing **user Registration, Login, and a Protected Route (Profile)** using JWT for authentication and bcrypt for password hashing.

## 🚀 Tech Stack

- **Node.js** — JavaScript runtime
- **Express.js** — web framework
- **MongoDB + Mongoose** — database & ODM
- **JWT (jsonwebtoken)** — stateless authentication
- **bcrypt** — password hashing

## 📁 Folder Structure

```
auth-system/
├── config/
│   └── db.js              → MongoDB connection setup
├── middleware/
│   └── authMiddleware.js  → Verifies JWT tokens
├── models/
│   └── User.js             → User schema
├── routes/
│   └── authRoutes.js       → Register, Login, Profile routes
├── .env.example
├── package.json
└── server.js
```

## ⚙️ How to Run

### 1. Install Node.js (if not already installed)
Check with:
```bash
node -v
```
(v18 or higher recommended)

### 2. Install dependencies
Open a terminal in the project folder and run:
```bash
npm install
```

### 3. Set up MongoDB
Choose one of the following:

**Option A — MongoDB Atlas (free, cloud, recommended)**
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click **Connect → Drivers** and copy the connection string
   (looks like: `mongodb+srv://username:password@cluster.mongodb.net/auth-system`)

**Option B — Local MongoDB**
1. Install MongoDB Community Server on your machine
2. Start MongoDB with:
   ```bash
   mongod
   ```
3. Use this connection string: `mongodb://127.0.0.1:27017/auth-system`

### 4. Create the `.env` file
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Then open `.env` and set your own `MONGO_URI` and `JWT_SECRET`.

### 5. Start the server
```bash
npm start
```
If everything is set up correctly, you'll see:
```
✅ MongoDB connected successfully
🚀 Server running on http://localhost:5000
```

## 🧪 API Testing (Postman)

### Register — `POST /api/auth/register`
**Body (JSON):**
```json
{
  "name": "Ali Khan",
  "email": "ali@example.com",
  "password": "123456"
}
```

### Login — `POST /api/auth/login`
**Body (JSON):**
```json
{
  "email": "ali@example.com",
  "password": "123456"
}
```
The response includes a `token` — save it for the next step.

### Profile (Protected Route) — `GET /api/auth/profile`
**Header:**
```
Authorization: Bearer <your_token_here>
```

## 📌 Notes

- Passwords are never stored in plain text — they are hashed using **bcrypt**.
- JWT tokens are valid for **1 day** (`expiresIn: "1d"`) by default — this can be changed in the route or `.env` file.
- Never commit your `.env` file to GitHub — it's already excluded via `.gitignore`.

## 📝 What I Learned

- How **JWT** enables stateless authentication between client and server
- How **bcrypt** securely hashes and verifies passwords
- Building protected routes with custom Express **middleware**
- Testing REST APIs with **Postman**

---
🚀 Part of my **#100DaysOfCode** Backend Development journey — Day 9: Authentication.
