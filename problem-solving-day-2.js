//6. Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfEvens = (arr) =>
  arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log(sumOfEvens(array));

//7. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
const isLeapYear = year => (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023));

//8. Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year
const countVowels = str => {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
};

console.log(countVowels('Happy New Year')); 

//9. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const uniqueValues = (arr) =>{ 
    return arr.filter((item, index, array) =>{
        array.indexOf(item) === index})
   }

console.log(uniqueValues(numbers)); 


//10. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.
const findMaxValue = arr => Math.max(...arr);

console.log(findMaxValue([1, 2, 3, 10, 4, 5])); 
