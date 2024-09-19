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
