const express = require("express");
const JobResolver = require("../resolver/JobResolver");

class Server {

    constructor(){

        this.app = express();

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