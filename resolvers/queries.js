'use strict'

const dbConnection = require('../db');

module.exports = {
  getCourses: () => {
    return courses
  },
  getCourse: (root, args) => { // args, here the arguments are comming!!!
    const course = courses.find(course => course._id === args.id)
    return course
  },
  getSicks: async () => {
    let db 
    let sicks = []

    try {
      db = await new dbConnection().connect()
      sicks = await db.collection('CareYouDBTesting').find().toArray()
      return sicks
    } catch(error) {
      console.log(error)
    }
  },
  getSick: async (root, args) => {
    let db
    let sick

    try {
      db = await new dbConnection().connect()
      sick = await db.collection('CareYouDBTesting').findOne({name: args.name})
      return sick
    } catch (error) {
      console.log(error.message)
    }
  }
}
