const Job = require("../model/Job");

class JobController {

    async job({id}){

        const job = await Job.findAll({ where: { jobId: id} });

        return job;

    }

    async jobs(){

        const listJobs = await Job.findAll();

        return listJobs;

    }

    async createJob({title, description, salary, companyName, contactEmail}){

        const job = {

            title: title,
            description: description,
            salary: salary,
            companyName: companyName,
            contactEmail: contactEmail

        }

        const jobCreated = await Job.create(job);

        return jobCreated;

    }

}

module.exports = new JobController();