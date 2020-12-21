'use strict'

const { MongoClient } = require('mongodb')
const { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } = require('./config')

// mongodb URI to make the connection
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`

// build mongo library to make the connection with a singleton structure
class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    this.dbName = DB_NAME
  }

  connect(db) {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((resolve, reject) => {
        this.client.connect(error => {
          if (error) {
            reject(error.message)
          } else {
             console.log('Connected successfully to MongoDB')
             resolve(this.client.db(this.dbName))
          }
        })
      })
    }
    return MongoLib.connection;
  }

}

module.exports = MongoLib