// Problem 1: Reverse a String

function getReversed(string){
  let reversedString = '';
  
  for(let i = string.length - 1; i >= 0; i--){
    reversedString = reversedString + string[i];
  }
  return reversedString;
}

console.log(getReversed('hello'));



// Problem 2: Count Vowels in a String

function getVowelCount(string){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let vowelCount = string.split('').filter(v => vowels.includes(v.toLowerCase()) )
  return vowelCount.length;
}

console.log(getVowelCount('programming'));



// Problem 3: Check for Palindrome

function isPalindrome(string){
  const reverseString = string.split('').reverse().join('');
  console.log(string === reverseString);
}

isPalindrome('madam');
isPalindrome('hello');



// Problem 4: Find the Maximum Number

function getLargest(arr){
  let largest = arr[0];
  for(const num of arr){
    if(num > largest) largest = num;
  }
  return largest;
}

console.log(getLargest([5, 1, 9, 3]));



// Problem 5: Remove Duplicates from an Array

function getUnique(arr){
  const unique = [];
  for(const num of arr){
    if(!unique.includes(num)) unique.push(num);
  }
  return unique;
}

console.log(getUnique( [1, 2, 2, 3, 4, 4]));



// Problem 6: Sum of All Numbers in an Array

const getSum = (arr) => {
  let sum = 0;
  for(const num of arr){
    sum = sum + num;
  }
  return sum;
}

console.log(getSum([1, 2, 3, 4]));



// Problem 7: Find Even Numbers in an Array

function getEven(arr){
  let even = [];
  for(const num of arr){
    if(num % 2 === 0) even.push(num)
  }
  return even;
}

console.log(getEven([1, 2, 3, 4, 5, 6]));



// Problem 8 : Capitalize First Letter of Each Word

function capitalize(string){
  return string.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

console.log(capitalize('hello world'));



// Problem 9: Find the Factorial of a Number

const getFact = (n) => {
  if(n === 0 || n === 1){
    return 1;
  }
  let result = 1;
  for(let i = n; i > 0; i--){
    result *= i;
  }
  return result;
}
console.log(getFact(5));



// Problem 10: PingPong Challenge

function printPingPong(){
  for(let i = 1; i <= 20; i++){
    if(i % 3 === 0 && i % 5 === 0){
      console.log('PingPong');
    } else if(i % 3 === 0){
      console.log('Ping');
    } else if(i % 5 === 0){
      console.log('Pong');
    } else{
      console.log(i);
    }
  }
}

printPingPong();
