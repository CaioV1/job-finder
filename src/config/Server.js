const express = require("express");
const JobResolver = require("../resolver/JobResolver");
const database = require("./DatabaseConnection");

class Server {

    constructor(){

        this.app = express();
        this.setupMiddlewares();
        database.connect();

    }

    startServer(){

        const PORT = process.env.EXPRESS_PORT;

        this.app.listen(PORT, () => {

            console.log(`O servidor está rodando na porta ${PORT}`);

        });

    }

    setupMiddlewares(){

        const jobResolver = JobResolver.getInstance();

        this.app.use("/graphql", jobResolver.getMiddleware());

    }

}

module.exports = new Server();