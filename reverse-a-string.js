// Problem 1: Reverse a String

const string = 'programming'

let reversedString = '';

for(let i = string.length - 1; i >= 0; i--){
  reversedString = reversedString + string[i];
}

console.log(reversedString);



// Problem 2: Count Vowels in a String

const vowels = ['a', 'e', 'i', 'o', 'u'];
let vowelCount = string.split('').filter(v => vowels.includes(v.toLowerCase()) )
console.log(vowelCount.length)



// Problem 3: Check for Palindrome

function isPalindrome(string){
  const reverseString = string.split('').reverse().join('');
  console.log(string === reverseString);
}

isPalindrome('madam');
isPalindrome('hello');
