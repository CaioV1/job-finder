require("dotenv").config();
const server = require("./src/config/Server");
const database = require("./src/config/DatabaseConnection");

server.startServer();
server.setupMiddlewares();

database.connect();

// const sqlite = require("sqlite3");

// const db = new sqlite.Database("./data/app.db");

// db.run("DROP TABLE jobs");
// db.run("CREATE TABLE jobs(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, description TEXT, salary REAL, companyName TEXT, contactEmail TEXT, createdAt TEXT, updatedAt TEXT)");
// db.close();