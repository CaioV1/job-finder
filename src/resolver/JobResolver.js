const { graphqlHTTP } = require("express-graphql");
const Graphql = require("graphql");
const JobSchema = require("../schema/JobSchema");
const jobController = require("../controller/JobController");

class JobResolver {

    static getInstance(){

        if(this.instance == null){

            this.instance = new JobResolver();

        }

        return this.instance;

    }

    getMiddleware(){

        const jobSchema = JobSchema.getInstance();

        const middleware = graphqlHTTP({

            schema: jobSchema.getSchema(),
            rootValue: jobController,
            graphiql: true

        });

        return middleware;

    }

}

module.exports = JobResolver;