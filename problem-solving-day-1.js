// 1.Task: Array Filtering And Mapping
// Create An Array Of Objects, Each Representing A Person With Properties Like Name, Age, And Gender. Write A Function To Filter Out All Females And Then Map The Remaining People To An Array Of Names. Print The Final Result.
const people = [
  {
    name: "John Doe",
    age: 30,
    gender: "Male",
  },
  {
    name: "Jane Smith",
    age: 25,
    gender: "Female",
  },
  {
    name: "Alex Johnson",
    age: 40,
    gender: "Male",
  },
  {
    name: "Maria Garcia",
    age: 35,
    gender: "Female",
  },
];
const filterMen = (peoples) => {
  const peoplesWithoutFemales = peoples.filter(
    (people) => people.gender !== "Female"
  );
  const result = peoplesWithoutFemales.map(
    (peoplesWithoutFemale) => peoplesWithoutFemale.name
  );
  return result;
};

const allMaleNames = filterMen(people);
//   console.log(allMaleNames);

// 2.Task: Object Manipulation
// Create an array of objects representing books with properties like title, author, and year. Write a function that takes the array and returns a new array with only the book titles. Print the result.

const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    year: 1851,
  },
];

const allBookNames = (books) => {
  const booksName = books.map((book) => book.title);
  return booksName;
};

const booksNames = allBookNames(books);
// console.log(booksNames);

// 3. Task: Function Composition
// Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.
const squares = (num) => {
  return num * num;
};
const double = (num) => {
  return num * 2;
};
const addFive = (num) => {
  return num + 5;
};
const allInOne = (number) => {
  const squaresNumber = squares(number);
  const doubleNumber = double(squaresNumber);
  const addFiveNumber = addFive(doubleNumber);
  return addFiveNumber;
};

const num = allInOne(2);
// console.log(num);

// 4.Task: Sorting Objects
// Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.
const cars = [
  { make: "Toyota", model: "Camry", year: 2020 },
  { make: "Honda", model: "Civic", year: 2019 },
  { make: "Ford", model: "F-150", year: 2021 },
  { make: "Chevrolet", model: "Malibu", year: 2018 },
  { make: "BMW", model: "X5", year: 2022 },
];

const sortCarsByYear = (cars) => {
  return cars.sort((a, b) => a.year - b.year);
};

const sortCars = sortCarsByYear(cars);
// console.log(sortCars);

// 5. Task: Find And Modify
// Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

const findAndUpdate = (peoples, name, newAge) => {
  const person = peoples.find((element) =>
    element.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  const people = peoples.map((element) => {
    if (element.name === person.name) {
      element.age = newAge;
      return element;
    }
    return element;
  });
  return people;
};
const printUpdatePeople = findAndUpdate(people, "jo", 27);
// console.log(printUpdatePeople);

//6. Task: Array Reduction
// Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sumOfEvens = (arr) =>
  arr.reduce((sum, num) => (num % 2 === 0 ? sum + num : sum), 0);

console.log(sumOfEvens(array));

//7. Task: Leap Year Checker
// Write a function that determines whether a given year is a leap year.
const isLeapYear = (year) =>
  (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));

//8. Task: Count Vowels:
// Write a function that counts the number of vowels in a given string.
// Example: Happy New Year
const countVowels = (str) => {
  const vowels = "aeiouAEIOU";
  return [...str].filter((char) => vowels.includes(char)).length;
};

console.log(countVowels("Happy New Year"));

//9. Task: Unique Values
// Create an array of numbers with some duplicate values. Write a function to filter out the duplicate values and return a new array with only unique numbers. Print the result.
const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];

const uniqueValues = (arr) => {
  return arr.filter((item, index, array) => {
    array.indexOf(item) === index;
  });
};

console.log(uniqueValues(numbers));

//10. Task: Find Maximum Value:
// Write a function that takes an array of numbers and returns the maximum value.
const findMaxValue = (arr) => Math.max(...arr);

console.log(findMaxValue([1, 2, 3, 10, 4, 5]));

//11. Task: Advanced Sorting
// Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.
const students = [
  { name: "Alice", grades: [85, 92, 88] },
  { name: "Bob", grades: [75, 81, 79] },
  { name: "Charlie", grades: [95, 90, 93] },
  { name: "David", grades: [70, 68, 65] },
];

const calculateAverage = (grades) => {
  grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
};

const sortStudentsByAverageGrade = (students) => {
  students.sort(
    (a, b) => calculateAverage(b.grades) - calculateAverage(a.grades)
  );
};
const sortedStudents = sortStudentsByAverageGrade(students);
console.log(sortedStudents);

//12. Task: Functional Programming - Reduce
// Write a function that uses the reduce function to calculate the total value of an array of objects with a 'quantity' and 'price' property.interview
const items = [
  { quantity: 2, price: 50 },
  { quantity: 1, price: 100 },
  { quantity: 4, price: 25 },
];

const calculateTotalValue = (items) => {
  items.reduce((total, item) => {
    return total + item.quantity * item.price, 0;
  });
};
const totalValue = calculateTotalValue(items);
console.log(totalValue);

//13. Task: Array Intersection
// Write a function that takes two arrays and returns a new array containing only the elements that appear in both arrays.

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
const arrayIntersection = (arr1, arr2) => {
  return arr1.filter((element) => arr2.includes(element));
};
const intersection = arrayIntersection(array1, array2);
console.log(intersection);

//14. Task: Object Transformation
// Create an array of objects representing customers with 'name', 'purchases', and 'loyaltyPoints' properties. Write a function to transform the array by doubling the 'loyaltyPoints' of customers with more than 5 purchases.
const customers = [
  { name: "John", purchases: 3, loyaltyPoints: 100 },
  { name: "Jane", purchases: 6, loyaltyPoints: 150 },
  { name: "Sam", purchases: 8, loyaltyPoints: 200 },
  { name: "Alice", purchases: 5, loyaltyPoints: 120 },
];

const doubleLoyaltyPoints = (customers) => {
  customers.map((customer) => {
    if (customer.purchases > 5) {
      return { ...customer, loyaltyPoints: customer.loyaltyPoints * 2 };
    }
    return customer;
  });
};

const updatedCustomers = doubleLoyaltyPoints(customers);
console.log(updatedCustomers);
//15. Task: Function Memoization
// Implement a memoization function that caches the results of expensive function calls and returns the cached result when the same inputs occur again.
