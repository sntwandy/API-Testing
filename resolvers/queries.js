'use strict';

const dbConnection = require('../db');
const { ObjectId } = require('mongodb');

module.exports = {
  getCourses: () => {
    return courses;
  },
  getCourse: (root, args) => {
    // args, here the arguments are comming!!!
    const course = courses.find((course) => course._id === args.id);
    return course;
  },
  getSicks: async () => {
    let db;
    let sicks = [];

    try {
      db = await new dbConnection().connect();
      sicks = await db.collection('CareYouDBTesting').find().toArray();
      return sicks;
    } catch (error) {
      console.log(error);
    }
  },
  getSick: async (root, args) => {
    let db;
    let sick;

    try {
      db = await new dbConnection().connect();
      sick = await db
        .collection('CareYouDBTesting')
        .findOne({ name: args.name });
      return sick;
    } catch (error) {
      console.log(error.message);
    }
  },
  getUsers: async () => {
    try {
      const db = await new dbConnection().connect();
      const users = await db
        .collection('CareYouDBTestingUsers')
        .find()
        .toArray();
      return users;
    } catch (error) {
      console.log(error.message);
    }
  },
  getUser: async (root, { id }) => {
    try {
      const db = await new dbConnection().connect();
      const user = await db
        .collection('CareYouDBTestingUsers')
        .findOne({ _id: ObjectId(id) });
      return user;
    } catch (error) {
      console.log(error.message);
    }
  },
  getDiagnostic: () => {
    const diagnostic = {
      sicks: [
        {
          sickName: 'COVID-19',
          sickProbability: 67,
        },
        {
          sickName: 'SARS',
          sickProbability: 89,
        },
        {
          sickName: 'FEVER',
          sickProbability: 21,
        },
      ],
    };

    return diagnostic;
  },
};
