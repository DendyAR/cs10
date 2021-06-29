const Jadwal = require('./function')

let w = []
let v = []

let n = new Jadwal()
let hasil = n.knapsack(w, v )
console.log(hasil)