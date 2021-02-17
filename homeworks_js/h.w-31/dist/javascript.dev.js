"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 1. Создать страницу, которая выводит нумерованный список песен
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}];

var playlist =
/*#__PURE__*/
function () {
  function playlist(list) {
    _classCallCheck(this, playlist);

    this.list = list;
  }

  _createClass(playlist, [{
    key: "playList",
    value: function playList() {
      var _this = this;

      var numericList = document.createElement("ol");
      document.body.appendChild(numericList);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;
          numericList.appendChild(document.createElement("li"));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      var li = document.querySelectorAll("li");
      [].map.call(li, function (item, i) {
        item.innerHTML = "author: \"".concat(_this.list[i].author, "\", song: \"").concat(_this.list[i].song, "\"");
      });
    }
  }]);

  return playlist;
}();

var List = new playlist(playList);
List.playList(); //2. Создать HTML-страницу с кнопкой "Открыть" и модальным окном. На модальном окне должен быть текст и кнопка "Закрыть". 
// Изначально модальное окно не отображается. При клике на кнопку "Открыть" появляется модальное окно, на кнопку "Закрыть" – исчезает. 
//3.  Создать HTML-страницу со светофором и кнопкой, которая переключает светофор на следующий цвет.

var TrafficLights =
/*#__PURE__*/
function () {
  function TrafficLights() {
    _classCallCheck(this, TrafficLights);
  }

  _createClass(TrafficLights, [{
    key: "lightsSwitch",
    value: function lightsSwitch() {
      var container = document.createElement("div");
      document.body.appendChild(container);
      container.classList.add("container");
      var colors = ["red", "yellow", "green"];

      for (var _i = 0, _colors = colors; _i < _colors.length; _i++) {
        var color = _colors[_i];
        var light = document.createElement("div");
        container.appendChild(light);
        light.classList.add("\"light\", light_".concat(color));
        /*  if (color != "red") {
           light.classList.add("light_off");
         } */

        if (color == "red") {
          light.classList.add("active");
        }
      }

      var btn = document.createElement("button");
      document.body.appendChild(btn);
      btn.innerHTML = "Click Me";
      btn.classList.add("btn");
      var counter = 1;
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

      var stateDown = true;

      btn.onclick = function () {
        var lightActive = document.querySelector(".active");

        if (lightActive.nextSibling && stateDown) {
          lightActive.classList.toggle('active');
          lightActive.nextSibling.classList.toggle('active');
        } else if (lightActive.previousSibling) {
          stateDown = !stateDown;
          lightActive.classList.toggle('active');
          lightActive.previousSibling.classList.toggle('active');
        }

        var lightActiveIsRed = document.querySelector(".active");

        if (lightActiveIsRed.classList.contains('light_red')) {
          stateDown = !stateDown;
        }
      };
    }
  }]);

  return TrafficLights;
}();

var myTrafficLights = new TrafficLights(1);
myTrafficLights.lightsSwitch(); //Создать html-страницу с progressbar и кнопкой, при нажатии на которую заполненность progressbar увеличивается на 5%.

var fill = function fill(a) {
  var progressBar = document.getElementById('progress-bar');
  progressBar.style.width = parseInt(progressBar.style.width) + parseInt(a.target.dataset.value) + '%';
};

var button = document.getElementsByTagName('button');
[].forEach.call(button, function (button) {
  button.onclick = fill;
});