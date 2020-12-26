// 1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:
// Функция для вывода на экран информации об автомобиле;
// Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час. 
let carDescription = {
    company: "VW",
    model: "Passat",
    year: 2020,
    averageSpeed: 120,
  }
  function carInfo(car) {
    for (let key in car)
      console.log(key + ": " + car[key])
  }
  carInfo(carDescription);
  
    function travelTime(car, distance) {
      let result = distance / car.averageSpeed
      let relax = 0;
      for (let hour = 1; hour <= result; hour++) {
              if (hour % 5 == 0) {
                  relax++;
                  result++;
              }
          }
      if (relax == 0) {
              console.log(`If you want to pass: ${distance} km. You need - ${result}h and don't need relax.`);
          } else {
              console.log(`If you want to pass: ${distance} km. You need - ${result}h. Your relax time - ${relax}h.`);
   
          }
    }
  travelTime(carDescription, 300);
  travelTime(carDescription, 1800);



//2.  Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
// Функция сложения 2-х объектов-дробей; Функция вычитания 2-х объектов-дробей; Функция умножения 2-х объектов-дробей; 
// Функция деления 2-х объектов-дробей; Функция сокращения объекта-дроби.
let firstFraction = {
    numerator: 16,
    denominator: 21
  }, 
   secondFraction = {
    numerator: 4,
    denominator: 7
  }
  function sumFraction(firstFraction, secondFraction) {
    let sumNumerator = firstFraction.numerator +  secondFraction.numerator;
    let sumDenominator = firstFraction.denominator +  secondFraction.denominator;
    let result = sumNumerator + "/" + sumDenominator;
    console.log(result)
  }
  sumFraction(firstFraction, secondFraction);
  
  function multiplyFraction(firstFraction, secondFraction) {
    let sumNumerator = firstFraction.numerator *  secondFraction.numerator;
    let sumDenominator = firstFraction.denominator *  secondFraction.denominator;
    let result = sumNumerator + "/" + sumDenominator;
    console.log(result)
  }
  multiplyFraction(firstFraction, secondFraction);
  
  function divideFraction(firstFraction, secondFraction) {
    let sumNumerator = firstFraction.numerator /  secondFraction.numerator;
    let sumDenominator = firstFraction.denominator /  secondFraction.denominator;
    let result = sumNumerator + "/" + sumDenominator;
    console.log(result)
  }
  divideFraction(firstFraction, secondFraction);
  
  function reductionFraction(firstFraction, secondFraction, ) {
    let reductionNumber = 4;
    let sumNumerator = firstFraction.numerator /  secondFraction.numerator;
    let sumDenominator = firstFraction.denominator /  secondFraction.denominator;
    let resultOfFirstFraction = (firstFraction.numerator / reductionNumber) + "/" + (firstFraction.denominator / reductionNumber);
  let resultOfSecondFraction = (secondFraction.numerator / reductionNumber) + "/" + (secondFraction.denominator / reductionNumber);
    console.log(resultOfFirstFraction);
    console.log(resultOfSecondFraction)
  }
  reductionFraction(firstFraction, secondFraction)


//3.  Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 
// Функция вывода времени на экран; Функция изменения времени на переданное количество секунд;
// Функция изменения времени на переданное количество минут; Функция изменения времени на переданное количество часов. 
// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» 
// добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».
let date = {
  hour: 20,
  minutes: 40,
  seconds: 25
}
function getCurrentTime() {
  let currentTime = new Date();
  alert(currentTime)
}
getCurrentTime();

function getTime() {
  console.log(date.hour + ":" + date.minutes + ":" + date.seconds)
}
getTime()

function addSeconds(seconds) {
  let minutes = Math.trunc((seconds % 3600) / 60);
  let newSeconds = seconds % 3600 % 60;
  console.log(date.hour + ":" + (date.minutes + minutes) + ":" + (date.seconds + newSeconds))
}
addSeconds(60)

function addMinutes(newMinutes) {
  let hours = Math.trunc(newMinutes % (3600 * 24) / 3600);
  let min = Math.trunc(newMinutes % 3600 / 60);
  console.log(date.hour + hours + ":" + (date.minutes + min) + ":" + date.seconds)
}
addMinutes(50000)



