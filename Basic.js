// 1. Reverse a String

// function reverseString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }
// console.log(reverseString("hello")); // "olleh"

// 2. Check if a String is a Palindrome

function isPalindrome(str) {
  let left = 0, right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  return true;
}
console.log(isPalindrome("racecar")); // true

// 3. Factorial of a Number (Iterative)

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) result *= i;
  return result;
}
console.log(factorial(5)); // 120

// 4. Count Vowels in a String
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("hello world")); // 3

// 5. Find the Largest Number in an Array
function findLargest(arr) {
    if (arr.length === 0) return null;
    let largest = arr[0];
    for (let num of arr) {
        if (num > largest) largest = num;
    }
    return largest;
    }
console.log(findLargest([3, 5, 7, 2, 8])); // 8

function findMinMax(arr) {
  let min = arr[0], max = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }
  return { min, max };
}
console.log(findMinMax([3, 1, 4, 5])); // { min: 1, max: 5 }

// 6. Remove Duplicates from an Array
function removeDuplicates(arr) {
    const unique = [];
    for (let item of arr) {
        if (!unique.includes(item)) unique.push(item);
    }
    return unique;
    }
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // [1, 2, 3, 4, 5]

// 7. Check if a Number is Prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true

// 8. Merge Two Sorted Arrays
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
        } else {
        merged.push(arr2[j]);
        j++;
        }
    }
    
    while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
    }
    
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }
    
    return merged;
    }
console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); // [1, 2, 3, 4, 5, 6]

// 9. Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray([1, 2, 3, 4])); // 10

// 10. Second Largest Number in an Array
function secondLargest(arr) {
  if (arr.length < 2) return null;
  let largest = -Infinity, second = -Infinity;
  
  for (let num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }
  
  return second === -Infinity ? null : second;
}
console.log(secondLargest([3, 5, 1, 4])); // 4

