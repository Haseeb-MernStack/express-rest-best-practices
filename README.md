# Express REST Best Practices

An example boilerplate implementing REST API best practices using Express.js. This repository demonstrates a clean, modular structure for building production-ready REST services with clear separation of concerns, validation, error handling, pagination, and consistent API responses.

**Why use this repo**

- Starter template: get a clean starting point for building Express REST APIs.
- Opinionated best practices: structure, controllers, services, middleware, and utilities separated for maintainability.
- Production-ready patterns: centralized error handling, request validation, consistent API responses, and pagination support.
- Easy to extend: small, well-scoped files make adding new routes and features straightforward.

**Problems this solves**

- Prevents monolithic controllers by separating concerns (controllers vs services).
- Provides a consistent error and response shape across endpoints.
- Reduces boilerplate for common features (validation, pagination, response helpers).
- Demonstrates how to structure a Node/Express app for team collaboration and easier testing.

**Key Features**

- Clean project layout (`src/`): `controllers/`, `services/`, `routes/`, `models/`, `middlewares/`, `utils/`, `config/`.
- Centralized error handling via middleware.
- Validation middleware to validate incoming requests.
- API response helper for consistent success/error payloads.
- Simple pagination utility for listing endpoints.

Project layout

- `server.js` — App entrypoint that starts the HTTP server.
- `src/app.js` — Express app setup (middlewares, routes registration).
- `src/config/db.js` — Database connection setup (placeholder for DB integration).
- `src/routes/` — Route definitions (e.g., `user.routes.js`).
- `src/controllers/` — Request handlers that call services.
- `src/services/` — Business logic, data access, and orchestration.
- `src/models/` — Data models or ORM schemas.
- `src/middlewares/` — Error handling and validation middleware.
- `src/utils/` — Helpers like `apiResponse.js` and `pagination.js`.

Getting started

1. Install dependencies:

```
npm install
```

2. Run in development (with nodemon):

```
npm run dev
```

3. Configure environment

- Add any environment variables needed (DB connection string, PORT, etc.). The repo contains a `src/config/` folder for database and config wiring — adapt it to your environment.

Usage and conventions

- Controllers are thin: they parse request input and call services.
- Services contain application logic and interact with models or external systems.
- Use `apiResponse.js` to return consistent JSON structures for success and error responses.
- Use validation middleware to enforce request schemas before controllers run.

Example API (based on included user route)

- `POST /users` — Create a new user (validate payload first).
- `GET /users` — List users (supports pagination via query params).
- `GET /users/:id` — Get user by id.
- `PUT /users/:id` — Update user.
- `DELETE /users/:id` — Remove user.

Contributing

- Follow the repository structure and add new features under `src/` grouped by responsibility.
- Write unit tests for services and integration tests for routes where applicable.

Next steps / Suggestions

- Hook up a real database in `src/config/db.js` and `src/models/` (MongoDB, Postgres, etc.).
- Add request schema validation (e.g., `Joi` or `yup`) in `src/middlewares/validate.middleware.js`.
- Add authentication/authorization middleware if needed.
- Add automated tests and CI configuration.

License

This project is provided as an example template — add a license if you plan to reuse it in production.
