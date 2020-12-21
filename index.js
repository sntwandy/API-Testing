'use strict'

require('dotenv').config();
const express = require('express')
const { graphqlHTTP } = require('express-graphql') // graphql middleware for express
const { makeExecutableSchema } = require('graphql-tools')
const { readFileSync } = require('fs')
const { join } = require('path')
const resolvers = require('./resolvers');

// initializing express
const app = express()
const port = process.env.port || 3000 // defining the port

// define the schema
const typeDefs = readFileSync(join(__dirname, 'lib', 'schema.graphql'), 'utf-8')

const schema = makeExecutableSchema({ typeDefs, resolvers })

// defining the middleware into express
app.use('/api', graphqlHTTP({
  schema: schema, // schema of the all the App
  rootValue: resolvers, // Resolvers to the app use
  graphiql: true // enable the graphiql enviroment
}))

app.listen(port, () => {
  console.log(`The server is listening at port: http://localhost:${port}/api`)
})
