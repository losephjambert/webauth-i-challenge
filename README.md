# Authentication Project

## Topics

- Authentication.
- Express Middleware.
- Password Hashing.
- Sessions
- Cookies

## Description

Use `Node.js`, `Express` and `Knex` to build an API that provides **Register** and **Login** functionality using `SQLite` to store _User_ information. Make sure the password is not stored as plain text.

## Assignment

Plan:

1. Install dependencies (express, knex, sqlite3, helmet, cors, bcrypt) ✔
2. Scaffold express app entry point (index.js) ✔
3. Scaffold server root file (server.sj) ✔
4. Scaffold router root (api-router.js) ✔
5. Scaffold db ✔
6. Scaffold auth router ✔
7. Scaffold user router ✔
8. Set up database queries for add, find, findBy(filter), findById ✔
9. Scaffold global Middleware ✔
10. Create `/auth/register` ✔
11. Create `/auth/login` ✔
12. Scaffold requiresAuth ✔

### Complete the following endpoints:

| Method | Endpoint      | Description                                                                                                                                                                                                                                                                                         |
| ------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| POST   | /api/register | Creates a `user` using the information sent inside the `body` of the request. **Hash the password** before saving the user to the database.                                                                                                                                                         |
| POST   | /api/login    | Use the credentials sent inside the `body` to authenticate the user. On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id. If login fails, respond with the correct status code and the message: 'You shall not pass!' |
| GET    | /api/users    | If the user is logged in, respond with an array of all the users contained in the database. If the user is not logged in repond with the correct status code and the message: 'You shall not pass!'.                                                                                                |

### After we cover the lecture on **sessions** and **cookies**, use them to keep a record of logged in users across requests.

## Stretch Problem

- Write a piece of **global** middleware that ensures a user is logged in when accessing _any_ route prefixed by `/api/restricted/`. For instance, `/api/restricted/something`, `/api/restricted/other`, and `/api/restricted/a` should all be protected by the middleware; only logged in users should be able to access these routes.
- Build a React application that implements components to register, login and view a list of users. Gotta keep sharpening your React skills.
