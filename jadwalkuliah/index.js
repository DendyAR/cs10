const schedule = require('./function')

const learning = [
  {
    name: 'Indonesian Leanguage',
    start: 7,
    end: 9
  },
  {
    name: 'Citizenship',
    start: 7,
    end: 8
  },
  {
    name: 'Physics',
    start: 9,
    end: 12
  },
  {
    name: 'Mathematics',
    start: 9,
    end: 10
  },
  {
    name: 'Structure learning',
    start: 10,
    end: 12
  },
  {
    name: 'English',
    start: 11,
    end: 12
  },
  {
    name: 'Religion',
    start: 12,
    end: 13
  }
]

const x = new schedule(learning)
let result = x.ShowLearning()
console.log(result)