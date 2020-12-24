const { buildSchema } = require("graphql");

class JobSchema {

    static getInstance(){

        if(this.instance == null){

            this.instance = new JobSchema();

        }

        return this.instance;

    }

    getSchema(){

        return buildSchema(`
        
            type Job {

                id: ID
                title: String
                description: String
                salary: Float
                companyName: String
                contactEmail: String

            }

            type Query {

                job(id: ID!): Job
                jobs: [Job]

            }

            type Mutation {

                createJob(title: String!, description: String!, salary: Float, companyName: String!, contactEmail: String!): Job

            }
        
        `);

    }

}

module.exports = JobSchema;