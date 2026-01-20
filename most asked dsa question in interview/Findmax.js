// let c = [3, 5, 7, 2, 8, 1];
// let max = c[0];  // assume first element is the maximum
// for (let i = 1; i < c.length; i++) {
//   if (c[i] > max) {
//     max = c[i];  // update max if current element is greater
//   } 
// }
// console.log("Maximum value is:", max);

let c = [3, 5, 7, 2, 8, 1];
let max = Math.max(...c);  // use spread operator with Math.max
console.log("Maximum value is:", max);

