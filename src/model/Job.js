const Sequelize = require("sequelize");
const databaseConnection = require("../config/DatabaseConnection");

const Job = databaseConnection.database.define("job", {

    title : { type: Sequelize.STRING },
    description : { type: Sequelize.STRING },
    salary : { type: Sequelize.DOUBLE },
    companyName : { type: Sequelize.STRING },
    contactEmail : { type: Sequelize.STRING }

});

module.exports = Job;