//1. Подсчитать сумму всех чисел в заданном пользователем диапазоне.
let firstNumber = Number(prompt("Enter the start of the range",""));
let lastNumber = Number(prompt("Enter the end of the range",""));
let sum = 0;
 
while(firstNumber <= lastNumber){       
       sum+=firstNumber;  
       firstNumber++;
    }
 
console.log(sum)

//2. Запросить 2 числа и найти только наибольший общий делитель.
let userFirstNumber = 86;
let userSecondNumber = 90;

while (userFirstNumber != 0 && userSecondNumber != 0) {
    if (userFirstNumber > userSecondNumber) {
        userFirstNumber = userFirstNumber % userSecondNumber }
    else {
        userSecondNumber = userSecondNumber % userFirstNumber
    }
}

console.log(userFirstNumber + userSecondNumber)

//3. Запросить у пользователя число и вывести все делители этого числа.
let number = 21;
for (let i = 1; i <= number; i++) {
  if (number % i == 0) {
    console.log(i);
  }
}

//4. Определить количество цифр в введенном числе.
let userNumber = Number(prompt("Enter your number"));
while (userNumber % 1 != 0) {}

let g = 1;
for (let i = 10; ; i *= 10) {
    if (Math.abs(userNumber) < i) {
        console.log(`In your number there are ${g} numerics`);
        break;
    } else {
        g++;
    }
}

/*5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, 
сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем*/
// let countNull = 0, countNeg = 0, countPos = 0;
// for (i = 0; i < 10; i++) {
//   let num = prompt("Enter a number");
//   if (num == 0) {
//     countNull++ }
//   else if (num < 0) {
//     countNeg++
//   }
//   else if (num > 0) {
//     countPos++
//   }
// }
// console.log(countNull, countNeg, countPos)
let positive = 0;
let negative = 0;
let zero = 0;
let odd = 0;
let even = 0;

for (let i = 0; i < 10; i++) {
  let num = +prompt("Enter a number....");

  num == 0 ? zero++ : num > 0 ? positive++ : negative++;
  num % 2 ? odd++ : even++;
}

console.log(` You have entered:
Positive numbers: ${positive}
Negative numbers: ${negative}
Zeroes:           ${zero}
Odd numbers:      ${odd}
Even numbers:     ${even}`);


/*6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, 
хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.*/
let firstNum;
let secondNum;
let operator;
let result;
let action;

do {
    firstNum = Number(prompt("Enter a first number"));
    secondNum = Number(prompt("Enter a second number"));
    operator = prompt("Enter an operator");

    if (!firstNum || !secondNum || (operator != "+" && operator != "-" && operator != "*" && operator != "/")) {
    } else {
        switch (operator) {
            case "+":
                result = firstNum + secondNum;
                break;
            case "-":
                result = firstNum - secondNum;
                break;
            case "*":
                result = firstNum * secondNum;
                break;
            case "/":
                result = firstNum / secondNum;
                break;
            }

        do {
            action = prompt(`Your result is ${result}. Do you want to continue? Answer: 'continue' or 'cancel'`)
        } while (action != "continue" && action != "cancel")
    }
} while (action == "continue")


/*7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат 
(если число 123456 сдвинуть на 2 цифры, то получится 345612).*/
// let str = prompt("Enter a number");
// let move = prompt("Enter on how much numerics number must move?");
// console.log(str.slice(move) + str.slice(0, move));
let numbers = 12345;
let move = 2;
let i = 0;
let n1 = numbers;

do {
n1 = Math.trunc(n1 / 10);
i++;
} while (n1);

for(let j = 1; j <= move; j++) {
  numbers = Math.trunc(number / 10 ** (i-1)) + Math.trunc(numbers % 10 ** (i-1) * 10);
}
console.log(numbers);


/*8. Зациклить вывод дней недели таким образом: «День недели. 
Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/
let day = 'Monday';
while(confirm(`${day} try again?`)) {
  switch(day) {
    case 'Monday' : day = 'Tuesday';
      break;
    case 'Tuesday' : day = 'Wednesday';
      break;
    case 'Wednesday' : day = 'Thursday';
      break;
    case 'Thursday' : day = 'Friday';
      break;
    case 'Friday' : day = 'Saturday';
      break;
    case 'Saturday' : day = 'Sunday';
      break;
    case 'Sunday' : day = 'Monday';
      break;
  }
}

//9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
for (let i = 2; i <= 9; i++) {
  console.log('i', i); 
  for (let j = 1; j <= 10; j++) {
  console.log('j', j);
 
    console.log(`${i} * ${j} = ${i * j}`);
}
}


/*10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию 
цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/
// let down = 0;
// let up = 100;
// let range = 50;
// let numberUs = 65;
// while (numberUs != range) {
//   if (confirm(`Your number is > ${range}`)) {
//     down = range;
//     range = down + range / 2;
//   } else {
//     up = range;
//     range = up - range / 2;
//   }
// }
let secret = 36;
let factor = 24;
let condition;
do {
  condition = prompt(`  Your number is ${secret} ( = )
  Your number is greater than  ${secret}  ( > )
  Your number is less than  ${secret}  ( < ) `);
  condition == ">"
    ? (secret = Math.min(secret + factor, 100))
    : condition == "<"
    ? (secret = secret - factor)
    : {};
  factor = Math.max(factor / 2, 1);
} while (condition != "=");

console.log(`Your number is ${secret}`);