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
while (number % 1 != 0) {}

let g = 1;
for (let i = 10; ; i *= 10) {
    if (Math.abs(number) < i) {
        console.log(`In your number there are ${g} numerics`);
        break;
    } else {
        g++;
    }
}

/*5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, 
сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем*/



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
let str = prompt("Enter a number");
let move = prompt("Enter on how much numerics number must move?");
console.log(str.slice(move) + str.slice(0, move));


/*8. Зациклить вывод дней недели таким образом: «День недели. 
Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.*/



//9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.



/*10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом: каждую итерацию 
цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». 
В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50. 
Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N.*/