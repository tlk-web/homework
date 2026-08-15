// Задача 1
const firstName = "Ivan";
const lastName = "Jones";
const isStudent = true;

// Задача 2
const age = 28;
const currentYear = 2026;
const birthYear = currentYear - age;

// Задача 3
console.log(`Меня зовут ${firstName} ${lastName}, мне ${age} лет. Я ученик курса: ${isStudent}.`);

// Задача 4
let a = "123";
let b = +"456";
let c = Number("789");
let d = Boolean(0);
let e = Boolean(" ");
let result = a + b + c + d + e;

console.log(result);

// Результат: 123456789falsetrue
