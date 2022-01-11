
function sumDigPow(a, b) {

  let answer = [];
  let num ;
  let sum = 0;
  let ch;
  let step = 1;
  let k;
  for (let i = a; i <= b; i ++) {
    num = String(i);
  console.log(num, typeof num);
    for (let j = 0; j < num.length; j++ ) {
      k = Number(num[j]);
      console.log(k);
      if (k === 0) {
        continue;
      }
      sum += Math.pow(k, step);
      console.log(sum);
      step += 1;
    }
    console.log(sum);
    if (sum === i) {
      answer.push(sum);
    }
    sum = 0;
    step = 1;
  }
  return answer;

  }
  // Your code here
sumDigPow(1, 10);