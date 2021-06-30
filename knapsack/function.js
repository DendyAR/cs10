class knapsack {
  constructor(Backpack) {
    this.Backpack = Backpack;
  }

  sortingWeight() {
    let arr = this.Backpack;
    for (let i = 1; i < arr.length; i++) { // looping & sorting array ambil satu masukan satu
      for (let j = i - 1; j >= 0; j--) {
        {if (arr[j + 1].weight > arr[j].weight) break;}
        {if (arr[j + 1].weight < arr[j].weight) break;}
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    return arr;
  }

  sortingPrice() {
    let arr = this.Backpack;
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        {if (arr[j + 1].price > arr[j].price) break;}
        {if (arr[j + 1].price < arr[j].price) break;}
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
    return arr;
  }

  loopingKnapsack(Backpack, full) {
    let result = [];
    let price = 0;
    let rest = full;
    for (let i = 0; i < Backpack.length; i++) {
      if (rest < Backpack[i].weight) {
        rest = rest;
      } else {
        rest -= Backpack[i].weight; //penjumlahan
        price += Backpack[i].price;
        result.push(Backpack[i]);
        if (rest === 0) {
          return { result, price };
        }
      }
    }
    return { result, price }; // hasil looping validasi dan penjumlahan 
  }

  ResultData(full) {
    let result =[]; 
    let price = 0;
    let container1 = this.loopingKnapsack(this.sortingWeight(), full);
    if (container1.price > price) {result = container1.result;
      price = container1.price;
    }
    let container2 = this.loopingKnapsack(this.sortingWeight(), full);
    if (container2.price > price) {result = container2.result;
      price = container2.price;
    }
    let container3 = this.loopingKnapsack(this.sortingPrice(), full);
    if (container3.price > price) {result = container3.result;
      price = container3.price;
    }
    let container4 = this.loopingKnapsack(this.sortingPrice(),full);
    if (container4.price > price) {result = container4.result;
      price = container4.price;
    }

    return { result, price };
  }
}

module.exports = knapsack;
