# Library Management System

A full-stack Library Management System built using **React.js**, **Django REST Framework**, and **JWT Authentication**. The application allows authenticated users to manage books, authors, and borrowing records through a clean and responsive interface.

## Features

### Authentication

* JWT-based authentication
* Secure login system
* Protected API endpoints
* User session management using access tokens

### Author Management

* Add new authors
* View all authors
* Delete authors

### Book Management

* Add new books
* View available books
* Associate books with authors
* Delete books

### Borrow Management

* Borrow books
* View borrowing records
* Track borrowed books
* Associate borrow records with authenticated users

### Dashboard

* Total books count
* Total authors count
* Total borrow records count
* Real-time statistics

---

## Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* Context API

### Backend

* Django
* Django REST Framework
* Simple JWT

### Database

* SQLite (Development)

---

## Project Structure

```
library-management-system/

├── backend/
│   ├── books/
│   ├── borrow/
│   ├── library/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── services/
│   │   └── App.js
│   └── package.json
│
└── README.md
```

---

## API Endpoints

### Authentication

| Method | Endpoint      | Description          |
| ------ | ------------- | -------------------- |
| POST   | /api/login/   | User Login           |
| POST   | /api/refresh/ | Refresh Access Token |

### Authors

| Method | Endpoint           |
| ------ | ------------------ |
| GET    | /api/authors/      |
| POST   | /api/authors/      |
| DELETE | /api/authors/{id}/ |

### Books

| Method | Endpoint         |
| ------ | ---------------- |
| GET    | /api/books/      |
| POST   | /api/books/      |
| DELETE | /api/books/{id}/ |

### Borrow

| Method | Endpoint          |
| ------ | ----------------- |
| GET    | /api/borrow/      |
| POST   | /api/borrow/      |
| DELETE | /api/borrow/{id}/ |

---

## Installation

### Backend Setup

Clone the repository:

```bash
git clone https://github.com/your-username/library-management-system.git
```

Navigate to backend:

```bash
cd backend
```

Create virtual environment:

```bash
python -m venv venv
```

Activate virtual environment:

#### Windows

```bash
venv\Scripts\activate
```

#### Linux / Mac

```bash
source venv/bin/activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Create superuser:

```bash
python manage.py createsuperuser
```

Start backend server:

```bash
python manage.py runserver
```

---

### Frontend Setup

Navigate to frontend:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start React application:

```bash
npm start
```

---

## Authentication Flow

1. User logs in using username and password.
2. Django REST Framework Simple JWT generates an access token.
3. React stores the access token in localStorage.
4. Axios sends the token in the Authorization header.
5. Protected API endpoints verify the token before processing requests.

Example:

```http
Authorization: Bearer <access_token>
```

---

## Screenshots

### Login Page

* Secure JWT authentication
* Responsive card-based UI

### Dashboard

* Books statistics
* Authors statistics
* Borrow records statistics

### Books Management

* Create and view books
* Author association

### Authors Management

* Create and delete authors

### Borrow Management

* Track borrowing activities

---

## Future Improvements

* User registration
* Role-based access control
* Book return functionality
* Search and filtering
* Pagination
* Email notifications
* Docker deployment
* PostgreSQL integration

---

## Author

**Siraj Musthafa**

GitHub: https://github.com/Siraju-Musthafa

LinkedIn: https://www.linkedin.com/in/sirajul-musthafa

Email: [sirajulmusthafa786@gmail.com](mailto:sirajulmusthafa786@gmail.com)
