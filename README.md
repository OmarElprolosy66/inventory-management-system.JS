# Inventory Management System API

A Node.js, Express, and MongoDB backend for managing products, categories, suppliers, purchases, and users.  
Includes JWT authentication, validation, modular architecture, and integration/unit tests with Vitest.

---

## Table of Contents

- [Inventory Management System API](#inventory-management-system-api)
  - [Table of Contents](#table-of-contents)
  - [Features](#features)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [API Endpoints](#api-endpoints)
  - [Testing](#testing)
  - [Environment Variables](#environment-variables)
  - [Swagger Docs](#swagger-docs)
  - [License](#license)

---

## Features

- **ESM (import/export) support**
- **JWT authentication & role-based authorization**
- **Express-validator for request validation**
- **Modular services, controllers, and models**
- **Rate limiting, security headers, logging**
- **Integration & unit tests with Vitest and Supertest**
- **Swagger/OpenAPI documentation**

---

## Getting Started

1. **Clone the repo**
   ```sh
   git clone <your-repo-url>
   cd node_ims
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env` and fill in:
     ```
     MONGO_URI=mongodb://localhost:27017/ims
     SECRET=your_jwt_secret
     PORT=50000
     ```

4. **Start the server**
   ```sh
   npm start
   ```
   The API runs at `http://localhost:50000/api`

---

## Project Structure

```
server/
  app/
    controllers/
    events/
    models/
    services/
  config/
    app.mjs
    db.mjs
  middlewares/
  routes/
  validators/
  __tests__/
    integration/
    unit/
```

---

## API Endpoints

- **Auth**
  - `POST /api/v1/login` — Login, returns JWT

- **Users**
  - `GET /api/v1/users` — List users (admin/manager)
  - `POST /api/v1/users` — Create user (admin)
  - `PATCH /api/v1/users/:id` — Update user (admin)
  - `DELETE /api/v1/users/:id` — Delete user (admin)

- **Products**
  - `GET /api/v1/products` — List products
  - `POST /api/v1/products` — Create product
  - `PATCH /api/v1/products/:id` — Update product
  - `DELETE /api/v1/products/:id` — Delete product (admin/manager)

- **Categories**
  - `GET /api/v1/categories`
  - `POST /api/v1/categories`
  - `PATCH /api/v1/categories/:id`
  - `DELETE /api/v1/categories/:id`

- **Suppliers**
  - `GET /api/v1/suppliers`
  - `POST /api/v1/suppliers`
  - `PATCH /api/v1/suppliers/:id`
  - `DELETE /api/v1/suppliers/:id`

- **Purchases**
  - `GET /api/v1/purchases`
  - `POST /api/v1/purchases`
  - `PATCH /api/v1/purchases/:id`
  - `DELETE /api/v1/purchases/:id`

---

## Testing

- **Run all tests**
  ```sh
  npm test
  ```
- **Test files:**  
  - `server/__tests__/unit/` — Unit tests (mocked services/models)
  - `server/__tests__/integration/` — Integration tests (real endpoints)

---

## Environment Variables

| Name        | Description           | Example                        |
|-------------|----------------------|--------------------------------|
| MONGO_URI   | MongoDB connection   | mongodb://localhost:27017/ims  |
| SECRET      | JWT secret           | mysecretkey                    |
| PORT        | Server port          | 50000                          |

---

## Swagger Docs

- API docs available at [`/api-docs`](http://localhost:50000/api-docs) (development only).

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Made with Node.js, Express, MongoDB, and Vitest**
