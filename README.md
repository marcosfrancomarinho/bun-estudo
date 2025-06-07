# API Documentation

This document outlines the available endpoints for interacting with the user management system.

---

## Setup

To get started, follow these steps:

1.  **Install Dependencies:**
    ```bash
    bun install
    ```
2.  **Run the Application:**
    ```bash
    bun run build
    bun run start
    ```

---

## Endpoints

### 1. Create User

-   **Method:** `POST`
-   **URL:** `/create-user`
-   **Description:** Creates a new user in the system.
-   **Request Body:**
    ```json
    {
      "name": "string",
      "age": "integer"
    }
    ```
    * `name`: The name of the user (e.g., "pedro").
    * `age`: The age of the user (e.g., 30).
-   **Example Request:**
    ```http
    POST /users/create-user HTTP/1.1
    Content-Type: application/json

    {
      "name": "pedro",
      "age": 30
    }
    ```

---

### 2. Find User by Name

-   **Method:** `GET`
-   **URL:** `/find-user`
-   **Description:** Retrieves a user's information by their name.
-   **Query Parameters:**
    * `name`: The name of the user to search for (e.g., "pedro").
-   **Example Request:**
    ```http
    GET /find-user?name=pedro HTTP/1.1
    ```

---

### 3. Find All Users

-   **Method:** `GET`
-   **URL:** `/find-user-all`
-   **Description:** Retrieves a list of all registered users.
-   **Example Request:**
    ```http
    GET /find-user-all HTTP/1.1
    ```