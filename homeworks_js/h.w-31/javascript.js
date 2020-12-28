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




//3.  Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.



//Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.
const fill = a => {
  const progressBar = document.getElementById('progress-bar');
  progressBar.style.width = (parseInt(progressBar.style.width) + parseInt(a.target.dataset.value)) + '%'
  }
   
  let button = document.getElementsByTagName('button');
  [].forEach.call(button, (button) => {
  button.onclick = fill;
  })