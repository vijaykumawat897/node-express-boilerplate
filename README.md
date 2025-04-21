# Node-Express-Server

This is built using **Node.js**, **Express.js**, and **MySQL**, following a modular architecture to ensure scalability and maintainability.



## 🔧 Tech Stack

- **Node.js**
- **Express.js**
- **MySQL** (with `mysql2/promise`)
- **Modular folder structure**
- **ESModules/Path aliasing via `jsconfig.json`**
- **http-status-codes** for proper status handling
- **AppError** utility for clean error management



## 🔍 Folder Responsibilities

| Folder       | Description                                                                 |
|--------------|-----------------------------------------------------------------------------|
| `config/`    | Configuration setup, like DB connection using `mysql2/promise`.            |
| `constants/` | Holds enums or common messages to avoid hardcoding throughout the app.     |
| `controllers/`| Accepts request, calls services/repositories, sends response.              |
| `middlewares/`| Reusable Express middlewares (e.g., request validator, error handler).     |
| `repositories/`| Pure database access layer. No business logic.                             |
| `routes/`     | Defines the API endpoints and binds them to controllers + middlewares.     |
| `services/`   | Contains business logic and orchestration between repos, utils, etc.       |
| `utils/`      | Shared helper utilities (e.g., error classes, hashing, logging, etc.)      |



## 🚀 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/vijaykumawat897/node-express-boilerplate.git
   cd node-express-boilerplate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create .env file and add the following variables
   ```bash
   DB_HOST=
   DB_USER=
   DB_PASSWORD=
   DB_NAME=
   PORT=
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```


## 📎 Notes

- All static messages (success/errors) are defined in `constants/messages.js` for easy updates.

- Error handling is centralized using a custom `AppError` class and `errorHandler` middleware.

- Path aliases like `@controllers`, `@services` are enabled using `module-alias` via `_moduleAliases` in `package.json`, and auto-import IntelliSense support is provided by `jsconfig.json`.

## 🔄 catchAsync Utility

To avoid repetitive `try-catch` blocks in every asynchronous controller or middleware function, we use a utility called `catchAsync`.

### ✅ Why we use it

In Express.js, if an asynchronous function throws an error, it **won’t be caught automatically** unless explicitly handled. This can lead to unhandled promise rejections and inconsistent error responses.

`catchAsync` wraps any async function and automatically forwards any thrown error to the centralized error handling middleware using `next(err)`.

---

### 🧩 How it works

```js
// utils/errors/catch-async.js
module.exports = (fn) => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};
```

### 🛠️ Usage Example
Instead of this verbose try-catch:
```js
const someFunction = async (req, res, next) => {
  try {
    // you code here
  } catch (err) {
    next(err);
  }
};
```
Use catchAsync like this:
```js
const { catchAsync } = require("@utils/index");

const someFunction = catchAsync(async (req, res, next) => {
 // your code here
});
```

## 👨‍💻 Contributing

Please follow the structure and naming conventions and write meaningful commit messages.