const Sequelize = require("sequelize");

class DatabaseConnection {

    constructor(){

        this.database = new Sequelize({

            dialect: "sqlite",
            storage: "./data/app.db"
        
        });

    }

    connect(){

        this.database
            .authenticate()
            .then(() => {
                console.log("Conectou a base de dados");
            })
            .catch((err) => {
                console.log("Ocorreu um erro ao se conectar a base de dados");
                throw err;
            });

    }

}

module.exports = new DatabaseConnection();