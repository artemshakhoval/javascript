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

/*6. Написать конвертор валют. Пользователь вводит количество USD, выбирает, 
в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.*/
let USD = 30;
const EUR = 0.84;
const UAN = 28.50;
const AZN = 1.70;
let result;
let currency = "UAN";
switch (currency) {
  case "EUR": result = USD * EUR;
    break;
  case "UAN": result = USD * UAN;
    break;
  case "AZN": result = USD * AZN;
    break;
  default: result = "not correct currency";
}
console.log(result);

/*7. Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: от 200 до 300 – скидка будет 3%, 
от 300 до 500 – 5%, от 500 и выше – 7%.*/
let sale1 = 0.03;
let sale2 = 0.05;
let sale3 = 0.07;
let amount = 500;
if (amount >= 200 && amount < 300) {
  console.log(amount = amount - (amount * sale1))
} else if (amount >= 300 && amount < 500) {
  console.log(amount = amount - (amount * sale2))
} else if (amount >= 500) {
  console.log(amount = amount - (amount * sale3))
} else {
  console.log("unknown")
}

/*8. Запросить у пользователя длину окружности и периметр квадрата. 
Определить, может ли такая окружность поместиться в указанный квадрат.*/
let circleLength = 80;
let squarePerimetr = 90;

if (circleLength < squarePerimetr) {
  console.log("Circle will fit in the square")
} else if (circleLength > squarePerimetr) {
  console.log("Circle will not fit in the square!")
} else {
  console.log("undefinded")
}

/*9. Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 балла. 
После вопросов выведите пользователю количество набранных баллов.*/
let questionToUser1 = +prompt("How much will be 2 * 2: \n6, 4, 8?");
let questionToUser2 = +prompt("How much will be 5 * 5: \n25, 30, 35?");
let questionToUser3 = +prompt("How much will be 8 * 7: \n50, 54, 56?");
let rightAnswer = 0;
if (questionToUser1 == 4) {
  console.log(rightAnswer += 2)
} else {
  console.log(`Wrong Answer!`)
}
if (questionToUser2 == 25) {
  console.log(rightAnswer += 2)
} else {
  console.log(`Wrong Answer!`)
}
if (questionToUser3 == 56) {
  console.log(rightAnswer += 2)
} else {
  console.log(`Wrong Answer!`)
}
console.log(`In general you received ${rightAnswer} points`)

/*10. Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
Учтите возможность перехода на следующий месяц, год, а также високосный год.*/
let day = +prompt("Enter your day");
let month = +prompt("Enter your month");
let year = +prompt("Enter your year");
let nextDay = day;
let nextMonth = month;
let nextYear = year;
let date;

if (day > 0 && year > 0 && day < 32) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
                if (day == 31) {
                    nextDay = 1;

                    if (month == 12) {
                        nextMonth == 1;
                        nextYear == year + 1;
                    } else {
                        nextMonth = month + 1;
                    }
                } else {
                    nextDay = day + 1
                }
                date = `day: ${nextDay}; month: ${nextMonth}; year: ${nextYear}`;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                if (day == 30) {
                    nextDay = 1;
                    nextMonth = month + 1;
                } else {
                    if (day > 30) {
                        date = "The date is wrong";
                        break;
                    } else {
                        nextDay = day + 1;
                    }
                }
                date = `day: ${nextDay}; month: ${nextMonth}; year: ${nextYear}`;
                break;
            case 2:
                if (day == 29 && year % 4 == 0 ) { 
                    nextDay = 1;
                    nextMonth = month + 1 
                } else if (day == 28 && year % 4 != 0) {
                    nextDay = 1;
                    nextMonth = month + 1 
                } else {
                    if ((year % 4 == 0 && day > 29) || (year % 4 != 0 && day > 28)) {
                        date = "The date is wrong";
                        break;
                    } else {
                        nextDay = day + 1;
                    }
                }
                date = `day: ${nextDay}; month: ${nextMonth}; year: ${nextYear}`;
                break;
            default:
                date = "The date is wrong";
                break;
        }
    } else {
        date = "The date is wrong";   
    }

    console.log(date);