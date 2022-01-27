function digitize(n) {
    return String(n).split('').map(el => Number(el)).reverse();
  }
  console.log(digitize(12));
  //[1,3,2,5,3]