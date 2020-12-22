const express = require("express");

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

}

module.exports = new Server();