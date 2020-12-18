'use strict'

const dbConnection = require('../db')

module.exports = {
  createSick: async (root, { input }) => {
    const defaultsValues = {
      name: '',
    }

    const newSick = Object.assign(defaultsValues, input)
    let db
    let sick
    try {
      db = await new dbConnection().connect()
      sick = await db.collection('CareYouDBTesting').insertOne(newSick)
      newSick._id = sick.insertedId
      return newSick
    } catch (error) {
      console.log(error.message)
    }
  }
}
