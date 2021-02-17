// 1. Создать HTML-страницу для отображения/редактирования текста. При открытии страницы текст отображается с помощью тега div. 
// При нажатии Ctrl + E, вместо div появляется textarea с тем же текстом, который теперь можно редактировать. При нажатии Ctrl + , 
// вместо textarea появляется div с уже измененным текстом. Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.
document.body.addEventListener("keydown", (event) => {
  const resizer = document.createElement("div");
  if ((event.code === "KeyE" || event.code === "Equal" || event.code === "NumpadAdd") && event.ctrlKey) {
    event.preventDefault();
    let elem = document.querySelector(".content__textarea");
    if (event.code === "KeyE" && elem.nodeName === "DIV") {
      let newEl = document.createElement("textarea");
      newEl.setAttribute("cols", 50);
      newEl.setAttribute("rows", 20);
      newEl.className = "content__textarea";
      newEl.textContent = elem.textContent;
      elem.replaceWith(newEl);
    } else if (event.code === "Equal" || event.code === "NumpadAdd" && elem.nodeName === "TEXTAREA") {
      let newEl = document.createElement("div");
      newEl.className = "content__textarea";
      newEl.textContent = elem.value;
      resizer.className = "content__textarea--resizer";

      const initResize = e => {
        e.preventDefault;
        window.addEventListener("mousemove", startResize);
        window.addEventListener("mouseup", stopResize);
      };

      const startResize = e => {
        newEl.style.width = (e.clientX - newEl.offsetLeft) + "px";
      };
      const stopResize = e => {
        window.removeEventListener('mousemove', startResize);
        window.removeEventListener('mouseup', stopResize);
      };

      resizer.addEventListener("mousedown", initResize);
      newEl.append(resizer);
      elem.replaceWith(newEl);
    }
  }

});


// 2. Создать HTML-страницу с большой таблицей. При клике по заголовку колонки, необходимо отсортировать данные по этой колонке. 
//Учтите, что числовые значения должны сортироваться как числа, а не как строки.

// let sortDirect = false;

// class Employee {
//   constructor(name, surname, age, position, salary) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.position = position;
//     this.salary = salary;
//   }
// }

// class EmpTable {
//   constructor(employees) {
//     this.employees = employees;
//   }

//   getHTML() {
//     let tableBody = "";
//     for (let item of this.employees) {
//       tableBody += `<tr><td>${item.name}</td><td>${item.surname}</td><td>${item.age}</td><td>${item.position}</td><td>${item.salary}</td></tr>`;
//     }
//     return `<table><caption>------------ Bank Employees List -----------</caption> <tr>
//     <th>Name</th>
//     <th>Surname</th>
//     <th>Age</th>
//     <th>Position</th>
//     <th>Salary</th>
//    </tr> ${tableBody}</table>`;
//   }
//   printHTML() {
//     document.write(this.getHTML());
//     const headers = [...document.querySelectorAll("th")];

//     const sortCol = (event) => {
//       console.log(this.sortDirect);
//       let index = headers.indexOf(event.target);
//       const rows = [...document.querySelectorAll("tr")];
//       rows.shift(0);

//       let arr = []; 
//       for (let row of rows) {
//         const cells = [...row.querySelectorAll("td")];
//         let arrEl = [];
//         for (let cell of cells) {
//           arrEl.push(cell.innerText);
//         }
//         arr.push(arrEl);
//       }

//       arr = parseInt(arr[0][index])
//         ? arr.sort(function (a, b) {
//             return parseInt(a[index]) - parseInt(b[index]);
//           })
//         : arr.sort(function (a, b) {
//             var nameA = a[index].toLowerCase(),
//               nameB = b[index].toLowerCase();
//             if (nameA < nameB) return -1;
//             if (nameA > nameB) return 1;
//             return 0;
//           });
//       if (sortDirect) arr = arr.reverse();
//       console.log(arr);
//       sortDirect = !sortDirect;
//       document.body.querySelector("table").remove();
//       let employees = [];
//       for (let person of arr) {
//         employees.push(new Employee(...person));
//       }

//       let personelSorted = new EmpTable(employees);
//       document.title = "Oleksii Tarasenko JS - 10-2 Sort Table";
//       personelSorted.printHTML();
//     };

//     headers.map((item) => item.addEventListener("click", sortCol));
//   }
// }

// let john = new Employee("John", "Brown", 32, "Teller", "2100$");
// let mary = new Employee("Mary", "Smith", 22, "Manager", "1400$");
// let karl = new Employee("Karl", "Morgan", 50, "CEO", "15000$");
// let peter = new Employee("Peter", "Terry", 42, "Head of Security", "5100$");
// let lisa = new Employee("Lisa", "Onyriuiba", 36, "Chief Accountant", "7400$");
// let sam = new Employee("Sam", "Lee", 44, "Collector", "5770$");
// let jim = new Employee("Jim", "Stark", 34, "Loan Officer", "4200$");
// let kate = new Employee("Kate", "Mason", 27, "Financial Advisor", "3600$");

// let bankEmployees = [john, mary, karl, peter, lisa, sam, jim, kate];
// console.log(bankEmployees);
// let personel = new EmpTable(bankEmployees);
// console.log(personel);
// console.log(personel.getHTML());
// personel.printHTML();



// 3. Создать HTML-страницу с блоком текста в рамочке. Реализовать возможность изменять размер блока, если зажать мышку в правом 
// нижнем углу и тянуть ее дальше.
const resDiv = document.getElementById("content__textarea");
const resizer = document.querySelector("div.content__textarea--resizer");

const initResize = e => {
  e.preventDefault;
  window.addEventListener("mousemove", startResize);
  window.addEventListener("mouseup", stopResize);
};

const startResize = e => {
  resDiv.style.width = (e.clientX - resDiv.offsetLeft) + "px";
};
const stopResize = e => {
  window.removeEventListener('mousemove', startResize);
  window.removeEventListener('mouseup', stopResize);
};

resizer.addEventListener("mousedown", initResize);