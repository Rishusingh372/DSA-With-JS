let a = 121;
let str = a.toString(); // convert number to string
let rev = str.split("").reverse().join("");  // reverse the string
if (str === rev) {
  console.log("palindrome");
} else {
  console.log("not palindrome");
}   
