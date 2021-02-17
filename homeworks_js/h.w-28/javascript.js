                                                        // На forEach 

// 1. Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел. 
let numbers = [9,16,36,64];
let squareNumbers = [];
numbers.forEach(getNumberToSquare);

function getNumberToSquare(item,index,arr) {
    squareNumbers[index] = item ** 2;
    return squareNumbers
}
console.log(numbers)
console.log(squareNumbers)

//2. Дан массив с числами. Найдите сумму этих чисел. 
let sum = 0;
let simpleNumbers = [9,16,36,64];
numbers.forEach(getSumOfNumbers);

function getSumOfNumbers(item) {
  sum += item;
}
console.log(sum)

                                                       // На Map

//3. Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел. 
let num = [9,16,36,64];
let squareNum = num.slice();
squareNum = num.map(getNumToSquare);

function getNumToSquare(item) {
  return item ** 2;
}
console.log(num)
console.log(squareNum)

                                                      // На every, some

//4.  Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля.
Numbers = [9,16,36,64];
let numbersMoreThanZero = Numbers.every(function(element) {
  return element > 0;
})

console.log(numbersMoreThanZero);

// 5. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы. 
arr = [9,-16,36,64];
let numbersLessThanZero = arr.some(function(element) {
  return element < 0;
})

console.log(numbersLessThanZero);

                                                      // На filter


// 6.  Дан массив с числами. Оставьте в нем только отрицательные числа.
arrayOfNumbers = [1, 2, 3, 4, 5, 6];

let oddNumbers = arrayOfNumbers.filter(function(element) {
  return element % 2 != 0;
});

console.log(oddNumbers);

// 7. Дан массив с числами. Оставьте в нем только четные числа. 
arrayOfNum = [1, 2, 3, 4, 5, 6];

let evenNumbers = arrayOfNum.filter(function(element) {
  return element % 2 == 0;
});

console.log(evenNumbers); 

//8. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов. 
arrayOfStr = ['iphone', 'samsung', 'nokia', 'lenovo', 'lg'];

let stringLengthMoreThanFive = arrayOfStr.filter(function(element) {
  return element.length > 5;
});

console.log(stringLengthMoreThanFive);


//9. Дан массив, в нем могут быть обычные элементы и подмассивы, например [1, 2, [3, 4], 5, [6, 7]]. Оставьте в нем только подмассивы.
array = [1, 2, [3, 4], 5, [6, 7]];

let underArray = array.filter(function(element) {
  return Array.isArray(element);
});

console.log(underArray);

//10. Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве. 
arrOfNumbers = [1, 2, 3, 4, 5, 6, 7];

let amountOfOddsNumbers = arrOfNumbers.filter(function(element) {
  return element % 2 != 0;
});

console.log(amountOfOddsNumbers.length); 

                                                      // На reduce, reduceRight

//11. Дан массив с числами. Найдите сумму этих чисел.
arrOfNum = [5, 9, 14, 21, 34];
let sumOfNum = arrOfNum.reduce(function(total, num) {
  return total + num
});
console.log(sumOfNum)

//12.  Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - 
//суммируем первые 3 элемента, так как дальше стоит элемент с числом 0.
reduceRightArr = [1, 2, 3, 0, 4, 5, 6];
let sumToZero = reduceRightArr.reduceRight(function(total, num) {
  if (num != 0) {
      return total + num;
   } else {
     return false;
   }
});
console.log(sumToZero)

//13. Дан массив с числами. Найдите сумму последних N элементов до первого нуля с конца. Пример: [1, 2, 3, 0, 4, 5, 6] - 
//суммируем последние 3 элемента, так как дальше стоит элемент с числом 0. 
reduceArr = [1, 2, 3, 0, 4, 5, 6];
let resToZero = reduceArr.reduce(function(total, num) {
  if (num != 0) {
      return total + num;
   } else {
     return false;
   }
});
console.log(resToZero);


// Функция принимает объект-прямоугольник и возвращает его ширину.(без "this")
let rectangle = {
  top: {
    x: 1, 
    y: 10
  }, 
  bottom: {
    x: 5, 
    y: 3
  },
  getWidth: function() {
    return (rectangle.bottom.x - rectangle.top.x);
  }
}

let width = rectangle.getWidth();
console.log(width);




//1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, 
//необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.
// still in progress
class Product {
  constructor(params = {}) {
    Object.assign(this, {
      pName: null, 
      amount: 1, 
      bought: false
    }, { ...params }); 
  }

  static sortDefault(a, b) {  // чтобы сначала шли некупленные продукты, а потом – купленные
    return (a.bought - b.bought) * 10 + a.pName.localeCompare(b.pName); 
  }; 
}
Product.prototype.toString = function () {
  return `${this.pName} (x${this.amount}), ${this.bought ? 'куплено' : 'не куплено'}`;
}; 


const shopList = [
  { pName: 'Банан', amount: 2 },
  { pName: 'Апельсин', amount: 5, bought: true },
  { pName: 'Молоко', bought: true },
  { pName: 'Груша', amount: 10 }
].map(prodDef => new Product(prodDef));

const addToShopList = prodDef => {  // при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую
  const prod = shopList.find(prod => prod.pName === prodDef.pName); 
  if (!prod) return shopList.push(new Product(prodDef)); 
  prod.amount += prodDef.amount; 
}; 
const printShopList = () => shopList.forEach(
  (prod, i) => console.log(`${i + 1}. ${prod}`)
); 

shopList.sort(Product.sortDefault);
printShopList();
console.log('---'); 

addToShopList({ pName: 'Банан', amount: 3 });
addToShopList({ pName: 'Шоколад', amount: 2 });
shopList.sort(Product.sortDefault);
printShopList();


// 2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, 
//количества и цены за единицу товара. Написать следующие функции:
//Распечатка чека на экран; Подсчет общей суммы покупки; Получение самой дорогой покупки в чеке; Подсчет средней стоимости одного товара в чеке.

let check = [
  {
    name: "sugar",
    total: 4,
    price: 12,
    buy: true,
  },
    {
    name: "bread",
    total: 3,
    price: 2,
    buy: false,
  },
  {
    name: "banana",
    total: 5,
    price: 6,
    buy: true,
  }
]
let name = "name";

function info(shoppingList) {
  for (let item of shoppingList) {
    console.log(`You buy ${item[name]}`);
  }
}

function totalPrice(shoppingList) {
  let result = 0;
  for (let item of shoppingList) {
    result += item.total * item.price;
  }
  console.log(result);
}

function maxPrice(shoppingList) {
  let mostExspensive = 0;
  let mostExspensiveItem;
  for (let item of shoppingList) {
    if (mostExspensive < item.total * item.price) {
      mostExspensive = item.total * item.price;
      mostExspensiveItem = item.name;
    } 
  }
  return mostExspensiveItem;
}

function averagePrice(shoppingList) {
  let sum = 0;
  for (let item of shoppingList) {
    sum += item.price;
  }
  console.log(sum / shoppingList.length);
}

console.log(maxPrice(check));
info(check);
totalPrice(check);
averagePrice(check);


//3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). Каждый элемент массива – это объект, 
//состоящий из двух свойств: название стиля и значение стиля. Написать функцию, которая принимает массив стилей и текст, 
//и выводит этот текст с помощью document.write() в тегах <p></p>, добавив в открывающий тег атрибут style со всеми стилями, 
//перечисленными в массиве.
let style = [
  {
    propertyName: "color",
    propertyValue: "red"
  },
  {
    propertyName: "font-size",
    propertyValue: "20px"
  }  
]

function textStyle(style, text) {
  let string = "";
  for (let element of style) {
    string += `${element.propertyName}:${element.propertyValue}`;
}
  console.log(string);
  document.write(`<p style=${string}>${text}</p>`)
}


textStyle(style, "askdasdlkasdjl");