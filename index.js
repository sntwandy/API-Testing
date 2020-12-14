'use strict'

const express = require('express');
const { graphqlHTTP } = require('express-graphql'); // graphql middleware for express
const { graphql, buildSchema } = require('graphql');

// initializing express
const app = express();
const port = process.env.port || 3000; // defining the port

// define the schema
const schema = buildSchema(`
  type Query {
    "Return a greeting"
    hello: String
    "Return our children names"
    children: String
  }
`);

// define the resolvers, who execute the query
const resolvers = {
  hello: () => {
    return 'I love your Megan';
  },
  children: () => {
    return 'Darcy, Zeus and Atenas...'
  },
};

// defining the middleware into express
app.use('/api', graphqlHTTP({
  schema: schema, // schema of the all the App
  rootValue: resolvers, // Resolvers to the app use
  graphiql: true, // enable the graphiql enviroment
}));

app.listen(port, () => {
  console.log(`The server is listening at port: http://localhost:${port}/api`);
});

/* execute query 'hello', in the terminal
graphql(schema, '{ children, hello }', resolvers)
  .then(data => console.log(data))
  .catch(error => console.log(error));
*/