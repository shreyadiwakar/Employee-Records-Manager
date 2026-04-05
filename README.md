# Employee Management System

## Description

A full-stack Employee Management Web Application that allows users to perform CRUD operations (Create, Read, Update, Delete) on employee records. The backend is built using Node.js and Express, while the frontend is developed using React (Vite). MySQL is used as the database.

---

## Features

* Add new employee records
* View employee list
* Update employee details
* Delete employee records
* Responsive UI using Bootstrap

---

## Tech Stack

### Frontend:

* React (Vite)
* React Router DOM
* Axios
* Bootstrap

### Backend:

* Node.js
* Express.js
* CORS

### Database:

* MySQL

---

## Dependencies

### Frontend (Vite)

```bash
npm install
npm install axios react-router-dom bootstrap
```

### Backend

```bash
npm install
npm install express cors mysql2 nodemon
```

---

## How to Run the Project

### Clone the Repository

```bash
git clone https://github.com/your-username/employee-management-system.git
cd employee-management-system
```

---

### Setup Backend

```bash
cd server
npm install
npm run dev
```

---

### Setup Frontend (Vite)

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

## Database Setup

1. Open MySQL
2. Create database:

```sql
CREATE DATABASE employee_db;
```

3. Create table:

```sql
CREATE TABLE employees (
  EmployeeID INT PRIMARY KEY AUTO_INCREMENT,
  EmployeeName VARCHAR(100),
  MobileNumber VARCHAR(15),
  Department VARCHAR(50),
  Salary DECIMAL(10,2)
);
```

4. Update your DB credentials in backend config

---

## Screenshots

(Add screenshots here)

---

## Learning Outcome

* Full-stack development using React (Vite) and Node.js
* REST API creation using Express
* Database integration with MySQL
* CRUD operations implementation
* Modern frontend setup using Vite

---

## License

This project is for educational purposes.

---
