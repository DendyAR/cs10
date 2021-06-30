class Knapsack {
    constructor(berat,harga,capacity) {
        this.berat = berat
        this.harga = harga
        this.capacity = capacity
    }
    reply(hasil, add){
        let temp1, temp2
        for (let i = 1; i < hasil.length; i++) {
            let j = i
            temp1 = hasil[i]
            temp2 = add[i]
            while (j > 0 && temp1 < hasil[j - 1]) {
                hasil[j] = hasil[j - 1]
                add[j] = add[j - 1]
                j--
            }
            hasil[j] = temp1
            add[j] = temp2
        }
        console.log(hasil)
        console.log(add)
        return `Berat : ${add[add.length-1].split('')} (kg) \n harga : Rp. ${hasil[hasil.length-1]}`
    }

    knapSack() {
        let berat = this.berat
        let harga = this.harga
        let capacity = this.capacity

        let add = []
        let hasil = []
        let logic = (s, berat, sp, harga, count) => {
            for(let i=0; i<berat.length; i++){

                if(s  + berat[i] <= capacity){
                    add.push(`${sp}${berat[i]}`)
                    hasil.push(`${count  + harga[i]}`)
                }
                logic(s + berat[i], berat.slice(i+1), sp + berat[i], harga.slice(i+1), count + harga[i])

            }
        }
        logic(0, berat, '', harga, 0)
        console.log(this.reply(hasil, add))
    }

    see() {
        this.knapSack()
    }
}

module.exports=Knapsack