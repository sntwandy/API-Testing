'use strict'

const { graphql, buildSchema } = require('graphql');

// define the schema
const schema = buildSchema(`
  type Query {
    hello: String
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
  }
}


// execute query 'hello'
graphql(schema, '{ children, hello }', resolvers)
  .then(data => console.log(data))
  .catch(error => console.log(error));