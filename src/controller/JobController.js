const Job = require("../model/Job");

class JobController {

    async job({id}){

        const listJobs = await Job.findAll({ where: { jobId: id} });

        return listJobs;

    }

    async jobs(){

        const listJobs = await Job.findAll();

        return listJobs;

    }

    createJob({title, description, salary, companyName, contactEmail}){

        const job = {

            title: title,
            description: description,
            salary: salary,
            companyName: companyName,
            contactEmail: contactEmail

        }

        Job.create(job).then((data) => {

            return data;

        }).catch((error) => {

            console.log(error);

        });

    }

}

module.exports = new JobController();