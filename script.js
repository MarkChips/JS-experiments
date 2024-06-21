/** Returns an array of divisors. */
function divisors(integer) {
    let divisors = [];
    for (let i = 2; i < integer; i++) {
      if (integer % i === 0) {
        divisors.push(i);
      }
    }
    if (divisors.length === 0) {
      return `${integer} is prime`;
    }
    return divisors;
  }
  console.log(divisors(35)); // [ 5, 7 ]
  
  /** Creates an array of divisors for all numbers up to and including argument int. 
   * Int is put in the array next to its divisor array. This is all contained within another array. */
  function divisorMatrix(int) {
    let arrZ = [];
    for (let i = int; i > 2; i--) {
      let arrY = [];
      let arrX = [];
      arrX.push(i);
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          arrY.push(j);
        }
      }
      if (arrY.length === 0) {
        continue;
      }
      arrX.push(arrY);
      arrZ.push(arrX);
    }
    return arrZ;
  }
  console.log(divisorMatrix(35));
  /*  [
  [ 35, [ 5, 7 ] ],
  [ 34, [ 2, 17 ] ],
  [ 33, [ 3, 11 ] ],
  [ 32, [ 2, 4, 8, 16 ] ],
  [ 30, [ 2, 3, 5, 6, 10, 15 ] ],
  [ 28, [ 2, 4, 7, 14 ] ],
  [ 27, [ 3, 9 ] ],
  [ 26, [ 2, 13 ] ],
  [ 25, [ 5 ] ],
  [ 24, [ 2, 3, 4, 6, 8, 12 ] ],
  [ 22, [ 2, 11 ] ],
  [ 21, [ 3, 7 ] ],
  [ 20, [ 2, 4, 5, 10 ] ],
  [ 18, [ 2, 3, 6, 9 ] ],
  [ 16, [ 2, 4, 8 ] ],
  [ 15, [ 3, 5 ] ],
  [ 14, [ 2, 7 ] ],
  [ 12, [ 2, 3, 4, 6 ] ],
  [ 10, [ 2, 5 ] ],
  [ 9, [ 3 ] ],
  [ 8, [ 2, 4 ] ],
  [ 6, [ 2, 3 ] ],
  [ 4, [ 2 ] ]
] */
  