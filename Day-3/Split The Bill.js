function splitTheBill(x) {
    let money = Object.values(x);
    let average = money.reduce((a,b) => a + b, 0) / money.length;
  
    for (friend in x) {
      x[friend] = Number((x[friend] - average).toFixed(2)) ;
    }
    return x;
  }