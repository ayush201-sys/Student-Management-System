\# Student Management System (Backend)



A RESTful backend API for managing student records, built using Node.js, Express, and MongoDB.



---



\## 🚀 Features

\- Create a student record

\- Retrieve all students

\- Retrieve a student by roll number

\- Update student details

\- Delete a student record

\- MongoDB schema validation using Mongoose



---



\## 🛠 Tech Stack

\- Node.js

\- Express.js

\- MongoDB

\- Mongoose

\- dotenv



---



\## 📂 Project Structure



backend/

\- controllers/

&nbsp; - studentController.js

\- models/

&nbsp; - Student.js

\- routes/

&nbsp; - studentRoutes.js

\- server.js

\- package.json



---



\## 📡 API Endpoints



\### ➕ Create Student  

\*\*POST\*\* `/api/students`



Request body:

```json

{

&nbsp; "name": "Ayush",

&nbsp; "rollNo": 101,

&nbsp; "department": "CSE"

}



