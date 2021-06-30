const knapsack = require('./function')

const Backpack = [
  {
    name: 'ABC',
    weight: 2,
    price: 2600000
  },
  {
    name: 'DEF',
    weight: 3,
    price: 2600000
  },
  {
    name: 'GHI',
    weight: 2,
    price: 2450000
  },
  {
    name: 'JKL',
    weight: 4,
    price: 4800000
  },
  {
    name: 'MNO',
    weight: 5,
    price: 5100000
  }
]

const ShowData = new knapsack(Backpack)
let Result = ShowData.ResultData(7)
console.log(Result)