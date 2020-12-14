'use strict'

const { graphql, buildSchema } = require('graphql');

// define the schema
const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// execute query 'hello'
graphql(schema, '{ hello }')
  .then(data => console.log(data))
  .catch(error => console.log(error));