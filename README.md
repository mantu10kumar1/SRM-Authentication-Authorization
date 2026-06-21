

```markdown
# Full-Stack Role-Based Authentication & Authorization System

A production-ready, enterprise-grade authentication and authorization platform built using **Spring Boot**, **React 19**, **Tailwind CSS**, and **MySQL**. The system implements secure **JWT (JSON Web Tokens)** logic for seamless, stateless authentication and handles role-based authorization (RBAC) securely across both backend filters and frontend routing.

---

## 🚀 Key Features

*   **Secure Email Authentication:** Modern login system relying on email addresses and encoded passwords instead of legacy usernames.
*   **Stateless JWT Security:** Completely stateless session management leveraging modern cryptographic keys (`HS256`).
*   **Role-Based Access Control (RBAC):** Distinct route guarding and api endpoints restricting access between `ROLE_USER` and `ROLE_ADMIN`.
*   **Layered Architecture (Backend):** Adheres to clean-code separation practices: Controller, Config, DTO, Repository, Model, Exception, Service, and ServiceImpl layers.
*   **Global Exception Handling:** Custom interceptors (`@RestControllerAdvice`) handling data constraints and user exceptions natively.
*   **React Context API & Route Guarding:** Centrally managed auth states coupled with dynamic wrapper layouts preventing unauthorized page components from mounting.
*   **CORS Configuration:** Native configuration managing cross-origin preflight checks (`OPTIONS`) securely between backend and frontend ports.

---

## 📂 Tech Stack

*   **Backend:** Java, Spring Boot, Spring Security, Spring Data JPA
*   **Frontend:** React 19, JavaScript (ES6+), React Router DOM v6, Axios, Tailwind CSS v4
*   **Database:** MySQL
*   **Build Tools:** Maven, Vite

---

## 🏗️ Backend System Architecture

The project strictly follows a **Layered Architecture** pattern to maximize testability and separation of concerns:
*   `controller/` - Exposes REST API Endpoints.
*   `config/` - Houses Spring Security setup, JWT filters, and global CORS policies.
*   `dto/` - Objects handling strict request/response data formatting.
*   `model/` - Core JPA entities mapping schemas cleanly into MySQL tables.
*   `repository/` - Database abstraction abstraction matching queries directly via JPA.
*   `exception/` - Centralized error handling providing explicit API status signals.
*   `service/` & `serviceImpl/` - Business logic encapsulation decoupled from framework adapters.

---

## ⚙️ Setup and Installation

### 1. Database Setup
Create a schema in your MySQL environment named `auth_db`:
```sql
CREATE DATABASE auth_db;

```

### 2. Backend Configurations

Navigate into `AuthBackend/src/main/resources/application.properties` and add your MySQL database password:

```properties
spring.datasource.username=root
spring.datasource.password=YOUR_MYSQL_PASSWORD

```

Run the Spring Boot application using your IDE or terminal:

```bash
mvn spring-boot:run

```

### 3. Frontend Configurations

Navigate into `auth-frontend` and spin up the local development engine:

```bash
npm install
npm run dev

```

---

## 🛣️ API Endpoints Summary

### Public Endpoints (No Token Required)

* `POST /api/auth/signup` - Registers a new profile (accepts roles: `USER`, `ADMIN`).
* `POST /api/auth/signin` - Authenticates user email and drops a fresh valid JWT Token string.

### Protected Dashboards (Requires Auth Header)

* `GET /api/test/all` - General access verified for any active logged-in profile.
* `GET /api/test/user` - Restrictive route verified exclusively for `ROLE_USER`.
* `GET /api/test/admin` - Secured system endpoints restricted strictly to `ROLE_ADMIN`.

```

Isko paste karke **Commit changes...** par click kar dijiye. Aapki profile kafi impactful dikhegi!

```
