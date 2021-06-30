const knapsack = require('./function')

let v = [
    {
        nama : "ABC",
        berat : 2,
        harga : 2600000
    },
    {
        nama : "DEF",
        berat : 3,
        harga : 2600000
    },
    {
        nama : "GHI",
        berat : 2,
        harga : 2450000
    },
    {
        nama : "JKL",
        berat : 4,
        harga : 4800000
    },
    {
        nama : "MNO",
        berat : 5,
        harga : 5100000
    },
]

let berat = v.map(x => {return x.berat}).sort();
let harga = v.map(z => {return z.harga}).sort()
let capacity = 7
let result = new knapsack(berat,harga,capacity);
result.see()