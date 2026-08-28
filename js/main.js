// Задание 1.
// Дан массив пользователей:
// const users = [
//   { name: 'Alex', age: 24, isAdmin: false },
//   { name: 'Bob', age: 13, isAdmin: false },
//   { name: 'John', age: 31, isAdmin: true },
//   { name: 'Jane', age: 20, isAdmin: false },
//]
// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

// function getUserAverageAge(users) {
//   let sum = 0;
//   users.forEach(function (user) {
//     sum += user.age;
//   });

//   const middleAge = sum / users.length;

//   return middleAge;
// }

// console.log(getUserAverageAge(users));

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

function getAllAdmins(users) {
  const adminUsers = [];

  users.forEach(function (user) {
    if (user.isAdmin === true) {
      adminUsers.push(user);
    }
  });

  return adminUsers;
}

console.log(getAllAdmins(users));

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const number = [1, 2, 3, 4, 5, 6];

const string = ["apple", "orange", "strawberry", "banana", "potato", "tomato"];

function first(arr, n) {
  let newMas = [];

  if (n == 0) {
    return newMas;
  } else if (n == undefined) {
    newMas.push(arr[0]);
  } else {
    for (i = 0; i < n; i++) {
      newMas.push(arr[i]);
    }
  }

  return newMas;
}

console.log(first(string));
