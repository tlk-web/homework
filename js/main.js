// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

// const person = {
//   age: "25",
//   city: "Rostovondon",
//   gender: "man",
// };

// const { city, age, gender } = person;
// console.log(gender, age, city);
// или;
// console.log(person["age"], person["city"], person["gender"]);

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

// const trueFalse = {};

// function isEmpty() {
//   for (let key in trueFalse) {
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty());

// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.

// const task = {
//   title: "Привет",
//   description: "text - text",
//   isCompleted: false,
// };

// function cloneAndModify(object, modifications) {
//   return { ...object, ...modifications };
// }

// // Я как понял здесь мы сокращаем всей этой процедуры через переменную
// const updateTask = cloneAndModify(task, { isCompleted: true, title: "Готово" });

// // И вот конечная переменная с изменением modifications чтобы оставить только значения ключей можно убрать вложенность (key, updatetask[key]) > console.log(updateTaskp[key])
// for (const key in task) {
//   console.log(key, updateTask[key]);
// }

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.
function callAllMethods(obj) {
  for (const key in obj) {
    obj[key]();
  }
}

const myObject = {
  method1() {
    console.log("Метод 1 вызван");
  },
  method2() {
    console.log("Метод 2 вызван");
  },
};

// Че за фигня как он показывать начал хахахахаха без консоль лог
callAllMethods(myObject);
