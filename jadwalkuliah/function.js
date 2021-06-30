class schedule {
  constructor(learning) {
    this.learning = learning;
  }
  Starts(parms) {
    let arr = this.learning;
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) 
      {[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];}
    }
    return { arr, parms };
  }

  TheEnd(parms) {
    let arr = this.learning;
    for (let i = 1; i < arr.length; i++) {
      for (let j = i - 1; j >= 0; j--) 
      {[arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];}
    }
    return { arr, parms };
  }

  loopingLearning(learning) {
    let result = [];
    let arr = learning.arr;
    if (learning.parms === "asc" || learning.parms === "dsc" ) {
      for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i].start >= result[result.length - 1].end) 
        {result.push(arr[i]);}
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i].end <= result[result.length - 1].start) 
        {result.push(arr[i]);}
      }
    }
    return result;
  }

  ShowLearning() 
  {
    let result = [];

    let container = this.loopingLearning(this.TheEnd());
    container.length > result.length ? (result = container) : null;
    let container2 = this.loopingLearning(this.TheEnd());
    container2.length > result.length ? (result = container2) : null;
    let container3 = this.loopingLearning(this.Starts());
    container3.length > result.length ? (result = container3) : null;
    let container4 = this.loopingLearning(this.Starts());
    container4.length > result.length ? (result = container4) : null;

    return result;
  }
}

module.exports = schedule;
