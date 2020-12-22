require("dotenv").config();
const server = require("./src/config/Server");
const database = require("./src/config/DatabaseConnection");

server.startServer();
database.connect();