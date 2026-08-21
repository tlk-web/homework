// Задача 1.
// Напишите функцию calculateFinalPrice, которая принимает базовую цену товара, процент скидки и налоговую ставку. Функция должна вычислять скидку, затем прибавлять налог и возвращать итоговую цену.

// let sum = +prompt("Введите сумму");

// function calculateFinalPrice(price, discount, tax) {
//   let discountPrice = (price * discount) / 100;
//   let priceSum = price - discountPrice;
//   let taxPrice = priceSum * tax;
//   return taxPrice + priceSum;
// }

// alert(
//   "Ваша итоговая сумма заказа с учетом налога " +
//     calculateFinalPrice(sum, 10, 0.2) +
//     " ₽",
// );

// Задача 2.
// Напишите функцию checkAccess, которая принимает имя пользователя и пароль. Если имя пользователя равно "admin" и пароль равен "123456", функция должна возвращать строку "Доступ разрешен", иначе — "Доступ запрещен".
// let userLogin = prompt("Введите логин");
// let userPassword = prompt("Введите пароль только цифры");

// function checkAccess(login, password) {
//   //Я решил сделать password строчным как в условии задачи хотя думал написать +prompt
//   if (login === "admin" && password === "123456") {
//     return "Доступ разрешён";
//   } else {
//     return "Доступ запрещён";
//   }
// }

// alert(checkAccess(userLogin, userPassword));

// Задача 3.
// Напишите функцию getTimeOfDay, которая принимает текущее время (число от 0 до 23) и возвращает строку:
// "Ночь" (с 0 до 5 часов),
// "Утро" (с 6 до 11 часов),
// "День" (с 12 до 17 часов),
// "Вечер" (с 18 до 23 часов).
// Если введённое значение не попадает в этот диапазон, возвращайте `"Некорректное время"`.

// let userInputTime = +prompt("Введите текущее время в часах (от 0 до 23):");

// function getTimeOfDay(timeClock) {
//   if (timeClock >= 0 && timeClock <= 5) {
//     return "Ночь";
//   } else if (timeClock >= 6 && timeClock <= 11) {
//     return "Утро";
//   } else if (timeClock >= 12 && timeClock <= 17) {
//     return "День";
//   } else if (timeClock >= 18 && timeClock <= 23) {
//     return "Вечер";
//   } else {
//     return "Некорректное время";
//   }
// }

// alert("Время суток " + getTimeOfDay(userInputTime) + ", отдыхайте");

// Задача 4.
// Напишите функцию findFirstEven, которая принимает два числа start и end и находит первое чётное число в указанном диапазоне.
// Если чётного числа в этом диапазоне нет, функция должна вернуть "Чётных чисел нет".

// let numberStart = +prompt("Введите число от которого начнём");
// let numberEnd = +prompt("Введите число до которого закончим(включительно)");

// function findFirstEven(numberOne, numberTwo) {
//   for (let i = numberOne; i <= numberTwo; i++) {
//     if (i % 2 === 0 && i > 0) {
//       return `Число ${i} чётное`;
//     }
//   }
//   return `Чётных чисел нет`;
// }

// console.log(findFirstEven(numberStart, numberEnd));
