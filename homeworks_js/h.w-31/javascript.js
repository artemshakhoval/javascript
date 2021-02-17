//Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.
const fill = a => {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = (parseInt(progressBar.style.width) + parseInt(a.target.dataset.value)) + '%'
  }
   
  let button = document.getElementsByTagName('button');
  [].forEach.call(button, (button) => {
  button.onclick = fill;
  })



// 1. Создать страницу, которая выводит нумерованный список песен
let playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },

  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },

  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },

  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },

  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },

  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },

  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },

  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

class playlist {
  constructor(list) {
    this.list = list;
  }
  playList() {
    let numericList = document.createElement("ol");
    document.body.appendChild(numericList);
    for (let item of this.list) {
      numericList.appendChild(document.createElement("li"));
    }
    let li = document.querySelectorAll("li");
    [].map.call(li, (item, i) => {
      item.innerHTML = `author: "${this.list[i].author}", song: "${this.list[i].song}"`;
    });
  }
}

let List = new playlist(playList);

List.playList();


//2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". 
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает. 
let div = document.createElement("div");
let btnClose = document.createElement("button");
let p = document.createElement("p");

btnClose.innerHTML = "CLOSE";
p.innerHTML = "Modal Window";

div.style = "width: 400px; height: 300px; background-color: #066380; margin: 20px auto; display: none"; 
btnClose.style = "width: 100px; height: 40px; display: block; margin: 30% auto";
p.style = "width: 200px; height: 40px; color: #838996; font-size: 20px; padding: 50px 150px 0";

let btnOpen =  document.createElement("button");
btnOpen.innerHTML = "OPEN";
btnOpen.style = "width: 100px; height: 40px; display: block; margin: 5% auto";

let active = true
btnOpen.onclick = function() {
  active = !active;
  if (active) {
    div.style.display = "block";
  } 
}
btnClose.onclick = function() {
  active = !active;
  if (active) {
    div.style.display = "none";
  } 
}

document.body.appendChild(div);
div.appendChild(p);
div.appendChild(btnClose);
document.body.appendChild(btnOpen);



//3.  Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.


  class TrafficLights {
  lightsSwitch() {
    const container = document.createElement("div");
    document.body.appendChild(container);
    container.classList.add("container");
    let colors = ["red", "yellow", "green"];
    for (let color of colors) {
      const light = document.createElement("div");
      container.appendChild(light);
      light.classList.add("light", `light_${color}`);
     /*  if (color != "red") {
        light.classList.add("light_off");
      } */
      if (color == "red") {
        light.classList.add("active");
      } 
    }
    const btn = document.createElement("button");
    document.body.appendChild(btn);
    btn.innerHTML = "Click Me";
    btn.classList.add("btn");
    let counter = 1;
    /* btn.onclick = function () {
      let lights = document.querySelectorAll(".light");
      if (!((counter - 1) % 4)) {
        lights[0].classList.toggle("light_off");
        lights[1].classList.toggle("light_off");
      } else if (!((counter + 1) % 4)) {
        lights[1].classList.toggle("light_off");
        lights[2].classList.toggle("light_off");
      } else if (!(counter % 4)) {
        lights[1].classList.toggle("light_off");
        lights[0].classList.toggle("light_off");
      } else {
        lights[1].classList.toggle("light_off");
        lights[2].classList.toggle("light_off");
      }
      counter++;
      counter %= 4;
    }; */
    let stateDown = true;
    btn.onclick = function () {
       let lightActive = document.querySelector(".active");
       if(lightActive.nextSibling && stateDown) {
       
       lightActive.classList.toggle('active');
       lightActive.nextSibling.classList.toggle('active');
       } else if (lightActive.previousSibling)
       {stateDown = !stateDown;
        lightActive.classList.toggle('active');
        lightActive.previousSibling.classList.toggle('active');
       }
       let lightActiveIsRed = document.querySelector(".active");
       if (lightActiveIsRed.classList.contains('light_red')) {
         stateDown = !stateDown;
       }
    }
  }
}

let myTrafficLights = new TrafficLights(1);

myTrafficLights.lightsSwitch();