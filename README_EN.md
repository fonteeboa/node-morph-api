# 🚀 node-morph-api

Para a versão em português deste README, clique [aqui](README.md).

**node-morph-api** is a dynamic and flexible API that allows you to easily connect to a database and consume data without complex configurations. This API is designed to facilitate backend integration for frontend developers, enabling fast data retrieval and testing of frontend workflows.

## 🌟 Features

✅ **Easy Database Connection** - Quickly set up and connect to your database without manual schema definitions.  
✅ **Dynamic Table Access** - Query and manipulate any table using RESTful endpoints.  
✅ **Fast Testing** - Ideal for frontend developers to test UI interactions without building a full backend.  
✅ **CRUD Operations** - Supports `GET`, `POST`, `PUT`, and `DELETE` requests for seamless data management.  
✅ **Secure & Efficient** - Built with input validation to prevent SQL injection and ensure stability.  
✅ **Comprehensive Error Handling** - Handles all possible database errors, including connection issues and query failures.  

## 📘 Database Configuration (Sequelize)

This project uses [Sequelize](https://sequelize.org/) to manage database connections. Below are the configurable environment variables and their default values.

### 📌 **Environment Variables**

| Variable | Default Value | Description |
|----------|--------------|-------------|
| `POSTGRES_DB` | `postgres` | The name of the database. |
| `POSTGRES_USER` | `postgres` | The username for database authentication. |
| `POSTGRES_PASSWORD` | `postgres` | The password for database authentication. |
| `POSTGRES_DB_HOST` | `localhost` | The database host. |
| `POSTGRES_DB_PORT` | `5432` | The database port. |
| `POSTGRES_DB_DIALECT` | `postgres` | The database dialect (e.g., `postgres`, `mysql`, `mariadb`, etc.). |
| `POSTGRES_DB_LOGGING` | `false` | Enables logging of SQL queries if set to `"true"`. |
| `POSTGRES_DB_SSL` | `false` | Enables SSL connection to the database if set to `"true"`. |
| `POSTGRES_DB_POOL_MAX` | `5` | Maximum number of database connections in the pool. |
| `POSTGRES_DB_POOL_MIN` | `0` | Minimum number of database connections in the pool. |
| `POSTGRES_DB_POOL_ACQUIRE` | `30000` | Maximum time (in ms) to wait for a database connection before throwing an error. |
| `POSTGRES_DB_POOL_IDLE` | `10000` | Maximum time (in ms) a connection can remain idle before being released. |
| `POSTGRES_DB_POOL_EVICT` | `10000` | Interval (in ms) at which idle connections will be checked and removed. |
| `POSTGRES_DB_POOL_MAX_USES` | `Infinity` | Number of times a connection can be used before being discarded. |

### 🛠 **How to Configure**

You can set these variables in a `.env` file at the root of your project:

```env
POSTGRES_DB=mydatabase
POSTGRES_USER=myuser
POSTGRES_PASSWORD=mypassword
POSTGRES_DB_HOST=localhost
POSTGRES_DB_PORT=5432
POSTGRES_DB_DIALECT=postgres
POSTGRES_DB_LOGGING=false
POSTGRES_DB_SSL=true
POSTGRES_DB_POOL_MAX=10
POSTGRES_DB_POOL_MIN=2
POSTGRES_DB_POOL_ACQUIRE=30000
POSTGRES_DB_POOL_IDLE=10000
POSTGRES_DB_POOL_EVICT=10000
POSTGRES_DB_POOL_MAX_USES=10000
```

## 🔄 API Endpoints

### 📌 Get all records from a table

```http
GET /api/{table}
```

### 📌 Get a specific record by ID

```http
GET /api/{table}/{id}
```

### 📌 Create a new record

```http
POST /api/{table}
Content-Type: application/json
```

### 📌 Update an existing record

```http
PUT /api/{table}/{id}
Content-Type: application/json
```

### 📌 Delete a record

```http
DELETE /api/{table}/{id}
```

## 📌 Examples

### 🟢 Get all records from a table

```http
GET /api/users
```

**Response:**

```json
[
  { "id": 1, "name": "John Doe", "email": "john@example.com" },
  { "id": 2, "name": "Jane Doe", "email": "jane@example.com" }
]
```

### 🟢 Get a specific record by ID

```http
GET /api/users/1
```

**Response:**

```json
{ "id": 1, "name": "John Doe", "email": "john@example.com" }
```

### 🟢 Create a new record

```json
{
  "name": "Alice Smith",
  "email": "alice@example.com"
}
```

**Response:**

```json
{ "id": 3, "name": "Alice Smith", "email": "alice@example.com" }
```

### 🟢 Update an existing record

```json
{
  "email": "newemail@example.com"
}
```

**Response:**

```json
{ "id": 1, "name": "John Doe", "email": "newemail@example.com" }
```

### 🟢 Delete a record

```http
DELETE /api/users/1
```

**Response:**

```json
{ "message": "Record deleted successfully" }
```

## 🔧 Built With

- **Node.js** - JavaScript runtime for the backend.
- **Express.js** - Lightweight framework for handling routes.
- **Sequelize** - ORM for database connection.
- **PostgreSQL** - Default database (can be changed if needed).
- **dotenv** - Environment variable management.

## 💡 Use Cases

🔹 **Frontend Testing** - Quickly set up a backend to test API calls.  
🔹 **Database Prototyping** - Access tables dynamically without manual schema definitions.  
🔹 **Mock Data Retrieval** - Fetch and manipulate data without a pre-built backend.  
🔹 **Developer-Friendly** - Focus on frontend workflows while the API handles backend logic.  

### 🔒 **Security Considerations**

- **Never expose sensitive credentials** in public repositories. Use `.env` files and `.gitignore` to protect them.
- **Enable SSL** (`POSTGRES_DB_SSL=true`) when connecting to cloud-hosted databases.
- **Use strong passwords** and manage credentials securely using vaults or environment management tools.

## 🚀 Contributing

We welcome contributions! Feel free to open issues, suggest improvements, or submit pull requests.

## 📜 License

This project is licensed under the MIT License.
