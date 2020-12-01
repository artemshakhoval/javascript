// 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!».
let userName = prompt("What's your name?");
alert(`Hello, ${userName}!`);

//2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. 
// Текущий год укажите в коде как константу.
const currentYear = 2020;
let userBirthYear = prompt("What's your year's birth?");
let userAge = currentYear - `${userBirthYear}`;
alert( `Than you are ${userAge} years old.` );

//3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата.
let lengthSide = prompt("Specify the side's length?");
let squarePerimeter = `${lengthSide}` * 4;
alert( `Square's perimeter is ${squarePerimeter} (cm).`);

//4. Запросите у пользователя радиус окружности и выведите площадь такой окружности.
const PI = 3.14;
let circleRadius = prompt("Specify the circle's radius");
let circleSquare = PI * (circleRadius ** 2);
alert(`Circle's square is ${circleSquare} (cm).`);

//5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. 
// Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя.
let distance = prompt("Specify the distance between cities (km)");
let time = prompt("Specify the time you need to get to the city (hr)");
let speed = (distance / time);
alert(`If you want to get to the city for ${time} hr your speed must be ${speed} km.`) 

//6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе.
const currency = 0.83;
let userMoney$ = prompt("Specify the number of currency (in $)");
let userGetMoney = (userMoney$ * currency);
alert(`If you exchange ${userMoney$}$ you get ${userGetMoney}euro`);

//7. Пользователь указывает объем флешки в Гб. Программа должна посчитать, сколько файлов размером в 820 Мб помещается на флешку.
const FILESIZE = 820;
const MBLENGTH = 1000;
let userFleshMemory = prompt("Specify the flesh memory (in Gb)");
let MbFleshLength = MBLENGTH * userFleshMemory;
let filesNumber = MbFleshLength / FILESIZE;
let clearFilesNumber = Math.floor(filesNumber);
alert(`If you have ${userFleshMemory}Gb's flesh you can put ${clearFilesNumber} files on flesh drive.`)

//8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. 
// Программа выводит, сколько шоколадок может купить пользователь, и сколько сдачи у него останется.
let walletAmount = prompt("How much money can you give for chocolate?");
let chocolatePrice = prompt("What's chocolate's price?");
let chocolateAmount = Math.trunc((walletAmount / chocolatePrice));
let moneyChange = walletAmount - chocolateAmount * chocolatePrice;
alert(`If you have ${walletAmount} hrn you can buy ${chocolateAmount} chocolates. Your exchange is ${moneyChange} hrn.`);

//9. Запросите у пользователя трехзначное число и выведите его задом наперед. 
// Для решения задачи вам понадобится оператор % (остаток от деления).
let threeDigit = prompt ("Specify three-digit number");
let firstNumber = (threeDigit % 100) % 10;
let secondNumber = ((threeDigit % 100) - firstNumber) / 10;
let thirdNumber = (threeDigit - (secondNumber * 10 + firstNumber)) / 100;
alert(`${firstNumber}${secondNumber}${thirdNumber}`);

//10. Пользователь вводит сумму вклада в банк на 2 месяца, с процентной ставкой депозита 5% годовых. 
// Вывести сумму начисленных процентов.
const depositValueInYear = 5;
let userDeposit = prompt("What's amount of deposit?");
let depositTerm = 2;
let userPercent = (depositValueInYear / 12) * depositTerm;
let userDepositPercent = depositValueInYear / 100 * userPercent;
let userDepositTotal = depositValueInYear + userDepositPercent;
let userDepositPercentClear = userDepositPercent.toFixed(2);
let userDepositTotalClear = userDepositTotal.toFixed(2);        
alert(`If you put money under deposit ${depositValueInYear}% in a year, with term ${depositTerm} month it will be ${userDepositPercentClear}% or ${userDepositTotalClear} money.`); 

// Работа с переменными
let admin;
let name;
name = "Djon";
admin = name;
alert(admin);

// Шаблонные строки
// Что выведет этот скрипт?
let firstName = "Ilya";
alert( `hello ${1}` ); // hello 1
alert( `hello ${"name"}` ); // hello name
alert( `hello ${name}` ); // hello Ilya

// Исправьте сложение
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);
alert(+a + +b); // 3
