class JobController {

    constructor(){

        this.arrayJob = [];

    }

    job({id}){

        return this.arrayJob[id];

    }

    jobs(){

        return this.arrayJob;

    }

    createJob({title, description, salary, companyName, contactEmail}){

        const job = {

            jobId: 1,
            title: title,
            description: description,
            salary: salary,
            companyName: companyName,
            contactEmail: contactEmail

        }

        this.arrayJob.push(job);

    }

}

module.exports = new JobController();