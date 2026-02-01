# Student Management System (Backend)



A RESTful backend API for managing student records, built using Node.js, Express, and MongoDB.



---



## 🚀 Features

- Create a student record

- Retrieve all students

- Retrieve a student by roll number

- Update student details

- Delete a student record

- MongoDB schema validation using Mongoose



---



## 🛠 Tech Stack

- Node.js

- Express.js

- MongoDB

- Mongoose

- dotenv



---



## 📂 Project Structure



backend/
├── controllers/
│ └── studentController.js
├── models/
│ └── Student.js
├── routes/
│ └── studentRoutes.js
├── server.js
├── package.json



---


## 📡 API Endpoints


### ➕ Create Student  

**POST** `/api/students`

Request body:

```json
{

 "name": "Ayush",

 "rollNo": 101,

 "department": "CSE"

}
```

### 📄 Get All Students  

**GET** `/api/students`

### 🔍 Get Student by Roll Number

**GET** ` /api/students/:rollNo`

### ✏️ Update Student

**PUT** ` /api/students/:rollNo`

Request body:

```json
{

 "department": "MECH"

}
```
### ❌ Delete Student

**DELETE** ` /api/students/:rollNo`
