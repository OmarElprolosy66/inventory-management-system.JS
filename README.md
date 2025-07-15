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

- **Easy Inventory Management:**  
  Add, update, and track products, categories, suppliers, and purchases in one place.

- **User Roles & Security:**  
  Secure login with JWT authentication and role-based access (admin, manager, staff).

- **Accurate Stock Tracking:**  
  Automatically updates product quantities with every purchase or sale.

- **Supplier & Purchase Records:**  
  Manage supplier details and keep a history of all purchase transactions.

- **Validation & Error Handling:**  
  Prevents bad data entry and guides users with clear error messages.

- **Fast & Reliable API:**  
  Built with Express and MongoDB for quick response times and robust data storage.

- **API Documentation:**  
  Interactive Swagger docs for easy integration with other apps or frontends.

- **Automated Testing:**  
  Ensures reliability and stability with unit and integration tests.

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
