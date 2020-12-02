/*1. Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), 
 подростком (12–18), взрослым (18_60) или пенсионером (60– ...).*/
let age = 18;
if (age >= 0 && age <= 2) {
  console.log("kid")
} else if (age >= 12 && age <= 17) {
  console.log("teenager")
} else if (age >= 18 && age <= 59) {
  console.log("adult")
} else if (age >= 60 && age <= 150) {
  console.log("pensioner")
} else {
  console.log("unknown")
}

/*2. Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
который расположен на этой клавише (1–!, 2–@, 3–# и т. д).*/
let number = 3;
if (number == 0) {
  console.log(")")
} else if (number == 1) {
  console.log("!")
} else if (number == 2) {
  console.log("@")
} else if (number == 3) {
  console.log("#") 
} else if (number == 4) {
  console.log("$") 
} else if (number == 5) {
  console.log("%")
} else if (number == 6) {
  console.log("^")
} else if (number == 7) {
  console.log("&")
} else if (number == 8) {
  console.log("*")
} else if (number == 9) {
  console.log("(")
} else {
  console.log("wrong")
}

//3. Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.
let number = 155;
let number1 = parseInt(number / 100);
let number2 = parseInt(number / 10) % 10;
let number3 = number % 10;
if (number1===number2 || number2===number3 || number1===number3) {
console.log('Найдено совпадение цифр');
} else {
console.log('Совпадений не найдено');
}

/*4. Запросить у пользователя год и проверить, високосный он или нет. 
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.*/
const leapYear = (year) => (year % 100 === 0 ? year % 400 === 0 : year % 4 === 0);
console.log(leapYear(2020)); // true