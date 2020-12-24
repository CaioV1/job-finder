const Sequelize = require("sequelize");
const databaseConnection = require("../config/DatabaseConnection");

const Job = databaseConnection.database.define("job", {

    jobId : { type: Sequelize.INTEGER },
    title : { type: Sequelize.STRING },
    description : { type: Sequelize.STRING },
    salary : { type: Sequelize.DOUBLE },
    companyName : { type: Sequelize.STRING },
    contactEmail : { type: Sequelize.STRING }

});

module.exports = Job;