'use strict'

const courses = [
  {
    _id: 'anyway',
    title: 'Course this',
    teacher: 'Megan E.',
    description: 'How to cook brownies',
    topic: 'Cook',
  },
  {
    _id: 'anyway2345',
    title: 'Course for',
    teacher: 'Zeus Amenadiel',
    description: 'How to eat dinner',
    topic: 'Eat',
  },
  {
    _id: 'anyway2345sahjbd723',
    title: 'Course if-else',
    teacher: 'Atenas Elizabeth',
    description: 'How to eat much better',
    topic: 'Eat better',
  },
]

const sicks = [
  {
    _id: '0956295738',
    name: 'Headache',
    symptoms: {
      name: ['Fever', 'Eye Pain']
    }
  },
  {
    _id: '8565502987',
    name: 'COVID-19',
    symptoms: {
      name: ['Fever', 'Eye Pain', 'Headache', 'Muscle Pain']
    }
  }
]

module.exports = {
  Query: {
    getCourses: () => {
      return courses
    },
    getCourse: (root, args) => { // args, here the arguments are comming!!!
      const course = courses.find(course => course._id === args.id)
      return course
    },
    getSicks: () => {
      return sicks
    }
  }
}