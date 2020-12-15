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
    _id: 'anyway 2345',
    title: 'Course for',
    teacher: 'Zeus Amenadiel',
    description: 'How to eat dinner',
    topic: 'Eat',
  },
  {
    _id: 'anyway 2345sahjbd723',
    title: 'Course if-else',
    teacher: 'Atenas Elizabeth',
    description: 'How to eat much better',
    topic: 'Eat better',
  },
]

module.exports = {
  getCourses: () => {
    return courses
  }
}