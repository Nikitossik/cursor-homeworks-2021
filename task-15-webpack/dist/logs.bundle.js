/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/exports.js":
/*!************************!*\
  !*** ./src/exports.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPalyndrom": () => (/* binding */ isPalyndrom),
/* harmony export */   "students": () => (/* binding */ students),
/* harmony export */   "marks": () => (/* binding */ marks),
/* harmony export */   "setStudentsMarks": () => (/* binding */ setStudentsMarks),
/* harmony export */   "replaceBadWords": () => (/* binding */ replaceBadWords),
/* harmony export */   "calculateWordLetters": () => (/* binding */ calculateWordLetters),
/* harmony export */   "ukraine": () => (/* binding */ ukraine),
/* harmony export */   "getTotalTaxes": () => (/* binding */ getTotalTaxes),
/* harmony export */   "Student": () => (/* binding */ Student),
/* harmony export */   "getRandomColor": () => (/* binding */ getRandomColor),
/* harmony export */   "createBlock": () => (/* binding */ createBlock),
/* harmony export */   "generateBlocks": () => (/* binding */ generateBlocks),
/* harmony export */   "playAudio": () => (/* binding */ playAudio),
/* harmony export */   "getRandomChinese": () => (/* binding */ getRandomChinese),
/* harmony export */   "loadJSON": () => (/* binding */ loadJSON),
/* harmony export */   "loadPeople": () => (/* binding */ loadPeople),
/* harmony export */   "getGenderIcon": () => (/* binding */ getGenderIcon),
/* harmony export */   "showPeople": () => (/* binding */ showPeople),
/* harmony export */   "formatProperty": () => (/* binding */ formatProperty),
/* harmony export */   "showPlanets": () => (/* binding */ showPlanets),
/* harmony export */   "createIdGenerator": () => (/* binding */ createIdGenerator)
/* harmony export */ });
var _marked = /*#__PURE__*/regeneratorRuntime.mark(createIdGenerator);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// 3
function isPalyndrom(string) {
  var compressed = string.toLowerCase().replaceAll(/[\s—_,\.]/gi, '').split('').join('');
  var reversed = compressed.split('').reverse().join('');
  return "\u0421\u0442\u0440\u043E\u043A\u0430 \"".concat(string, "\" ").concat(compressed === reversed ? '' : 'не ', "\u044F\u0432\u043B\u044F\u0435\u0442\u044C\u0441\u044F \u043F\u043E\u043B\u0438\u043D\u0434\u0440\u043E\u043C\u043E\u043C");
} // 4 

var students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
var marks = [4, 5, 5, 3, 4, 5];
var setStudentsMarks = function setStudentsMarks(students, marks) {
  var studentsMarks = [];

  for (var i = 0; i < students.length; i++) {
    studentsMarks[i] = [students[i], marks[i]];
  }

  return studentsMarks;
}; // 5

function replaceBadWords(string) {
  if (!string.length) return 'Ви нічого не ввели!';

  for (var _len = arguments.length, additional = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    additional[_key - 1] = arguments[_key];
  }

  var expletives = ['shit', 'fuck'].concat(additional);
  var words = string.split(' ');
  words = words.map(function (word) {
    if (expletives.some(function (curse) {
      return word.toLowerCase().includes(curse);
    })) {
      var foundCurses = expletives.filter(function (curse) {
        return word.toLowerCase().includes(curse);
      });
      foundCurses.forEach(function (curse) {
        var censure = '*'.repeat(curse.length),
            regExp = new RegExp(curse, 'gi');
        word = word.replaceAll(regExp, censure);
      });
    }

    ;
    return word;
  });
  return words.join(' ');
} // 6

function calculateWordLetters(word) {
  if (!word) return 'Пусте слово';

  var repeats = _toConsumableArray(word).reduce(function (resultObj, letter) {
    resultObj[letter] = letter in resultObj ? resultObj[letter] : 0;
    resultObj[letter]++;
    return resultObj;
  }, {});

  return repeats;
} // 7

var ukraine = {
  tax: 0.195,
  middleSalary: 1789,
  vacancies: 11476
};
function getTotalTaxes() {
  return Math.floor(this.tax * this.middleSalary * this.vacancies);
} //8 

var Student = /*#__PURE__*/function () {
  function Student(university, course, fullName) {
    var _this = this;

    _classCallCheck(this, Student);

    _defineProperty(this, "getInfo", function () {
      return "\u0421\u0442\u0443\u0434\u0435\u043D\u0442 ".concat(_this.course, "-\u0433\u043E \u043A\u0443\u0440\u0441\u0443 ").concat(_this.university, ", ").concat(_this.fullName);
    });

    _defineProperty(this, "getAverageMark", function () {
      if (_this.accepted) {
        var sum = _this.marks.reduce(function (prev, total) {
          return total + prev;
        }, 0);

        var count = _this.marks.length;
        return +(sum / count).toFixed(1);
      }

      return null;
    });

    _defineProperty(this, "dismiss", function () {
      _this.accepted = false;
    });

    _defineProperty(this, "recover", function () {
      _this.accepted = true;
    });

    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = [];
    this.accepted = true;
  }

  _createClass(Student, [{
    key: "studentMarks",
    get: function get() {
      if (this.accepted) return this.marks;
      return null;
    },
    set: function set(mark) {
      if (this.accepted) this.marks.push(mark);
    }
  }]);

  return Student;
}(); // 9

var getRandomColor = function getRandomColor() {
  var color = [];

  for (var i = 0; i < 3; i++) {
    color.push(Math.floor(Math.random() * 256));
  }

  return "rgb(".concat(color[0], ",").concat(color[1], ",").concat(color[2], ")");
};
var createBlock = function createBlock(size, color) {
  var block = document.createElement('div');
  block.classList.add('block');
  block.style.width = "".concat(size, "px");
  block.style.height = "".concat(size, "px");
  block.style.backgroundColor = color;
  return block;
};
var generateBlocks = function generateBlocks() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 50;
  var cols = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var rows = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;
  var container = document.querySelector('.container');
  container.innerHTML = '';

  for (var i = 0; i < rows; i++) {
    var row = document.createElement('div');
    row.classList.add('blocks-row');

    for (var j = 0; j < cols; j++) {
      var block = createBlock(size, getRandomColor());
      row.append(block);
    }

    container.append(row);
  }
}; // 10 (audio play func)

function playAudio(audio) {
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
} // 11

function getRandomChinese(_x) {
  return _getRandomChinese.apply(this, arguments);
} // 13

function _getRandomChinese() {
  _getRandomChinese = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(length) {
    var result, _loop, i;

    return regeneratorRuntime.wrap(function _callee4$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            result = '';
            _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop(i) {
              var iteration;
              return regeneratorRuntime.wrap(function _loop$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      iteration = new Promise(function (resolve) {
                        setTimeout(function () {
                          var chinese = String.fromCharCode(+Date.now().toString().slice(-5));
                          resolve(chinese);
                        }, 50 * i);
                      });
                      _context5.t0 = result;
                      _context5.next = 4;
                      return iteration;

                    case 4:
                      result = _context5.t0 += _context5.sent;

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _loop);
            });
            i = 0;

          case 3:
            if (!(i < length)) {
              _context6.next = 8;
              break;
            }

            return _context6.delegateYield(_loop(i), "t0", 5);

          case 5:
            i++;
            _context6.next = 3;
            break;

          case 8:
            return _context6.abrupt("return", result);

          case 9:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee4);
  }));
  return _getRandomChinese.apply(this, arguments);
}

var loadJSON = function loadJSON(url) {
  return fetch(url).then(function (data) {
    return data.json();
  });
};
var loadPeople = function loadPeople(film, format) {
  var charactersLinks = film.characters;
  var requests = charactersLinks.map(function (characterLink) {
    return loadJSON(characterLink + '?format=' + format);
  });
  return Promise.all(requests);
};
var getGenderIcon = function getGenderIcon(gender, format) {
  var maleValue = format === 'wookiee' ? 'scraanwo' : 'male';
  var femaleValue = format === 'wookiee' ? 'wwwoscraanwo' : 'female';
  if (gender === maleValue) return '<span class="gender"><i class="fas fa-mars"></i></span>';else if (gender === femaleValue) return '<span class="gender"><i class="fas fa-venus"></i></span>';
  return "<span class=\"gender\">".concat(gender, "</span>");
};
var showPeople = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(people, images, film, format) {
    var peopleImages, charactersLinks, contentMain, peopleSection, peopleSectionInner, peopleTitle, peopleRow, nameProperty, birthYearProperty, genderProperty;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            peopleImages = images.people;
            charactersLinks = film.characters;
            contentMain = document.querySelector('.content');
            peopleSection = contentMain.querySelector('.people-section');
            peopleSectionInner = peopleSection.querySelector('.section__inner');
            peopleTitle = peopleSection.querySelector('.section__title');
            peopleRow = peopleSectionInner.querySelector('.row.people-row');
            peopleTitle.textContent = "People from episode ".concat(film.episode_id, ": \"").concat(film.title, "\"");
            peopleRow.innerHTML = '';
            nameProperty = format === 'wookiee' ? 'whrascwo' : 'name';
            birthYearProperty = format === 'wookiee' ? 'rhahrcaoac_roworarc' : 'birth_year';
            genderProperty = format === 'wookiee' ? 'rrwowhwaworc' : 'gender';
            people.forEach(function (human, index) {
              var humanImagePath = peopleImages[charactersLinks[index]];
              var humanColumn = "\n            <div class='col-lg-4 col-md-6 human-wrapper'>\n            <div class='human'>\n                <div class='human__header'>\n                    <img class='human__photo' src='".concat(humanImagePath, "'>\n                </div>\n                <div class='human__body'>\n                    <h3 class='human__name'>").concat(human[nameProperty], "</h3>\n                    <span class='human__birth-year'>").concat(formatProperty(birthYearProperty), ": ").concat(human[birthYearProperty], "</span>\n                    <span class='human__gender'>").concat(formatProperty(genderProperty), ": \n                        ").concat(getGenderIcon(human[genderProperty], format), "\n                    </span>\n                </div>\n            </div>\n            </div>\n        ");
              peopleRow.innerHTML += humanColumn;
            });
            peopleSectionInner.append(peopleRow);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function showPeople(_x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();
var formatProperty = function formatProperty(property) {
  return property.charAt(0).toUpperCase() + property.slice(1).replaceAll('_', " ");
};
var showPlanets = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(planets, images, format) {
    var planetsList, planetsImages, prevUrl, nextUrl, planetsLinks, contentMain, planetsSection, planetsSectionInner, planetsTitle, planetsRow, nameProperty, prevButton, nextButton;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            planetsList = planets.results;
            planetsImages = images.planets;
            prevUrl = planets.previous;
            nextUrl = planets.next;
            planetsLinks = planets.results.map(function (planet) {
              return planet.url;
            });
            contentMain = document.querySelector('.content');
            planetsSection = contentMain.querySelector('.planets-section');
            planetsSectionInner = planetsSection.querySelector('.section__inner');
            planetsTitle = planetsSection.querySelector('.section__title');
            planetsRow = planetsSectionInner.querySelector('.row.planets-row');
            planetsTitle.textContent = "Planets from \"Star Wars\"";
            planetsRow.innerHTML = '';
            nameProperty = format === 'wookiee' ? 'whrascwo' : 'name';
            planetsList.forEach( /*#__PURE__*/function () {
              var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(planet, index) {
                var planetInfo, planetImagePath, planetColumn;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return loadJSON(planet.url + '?format=' + format);

                      case 2:
                        planetInfo = _context2.sent;
                        planetImagePath = planetsImages[planetsLinks[index]];
                        planetColumn = "\n        <div class='col-lg-3 col-md-6 planet-wrapper'>\n        <div class='planet'>\n            <div class='planet__header'>\n                <img class='planet__photo' src='".concat(planetImagePath, "'>\n            </div>\n            <div class='planet__body'>\n                <h3 class='planet__name'>").concat(planetInfo[nameProperty], "</h3>\n            </div>\n        </div>\n        </div>\n        ");
                        planetsRow.innerHTML += planetColumn;

                      case 6:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x9, _x10) {
                return _ref3.apply(this, arguments);
              };
            }());
            prevButton = document.getElementById('prev-btn');
            nextButton = document.getElementById('next-btn');
            prevButton.dataset.url = prevUrl !== null ? prevUrl : '';
            nextButton.dataset.url = nextUrl !== null ? nextUrl : '';

          case 18:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function showPlanets(_x6, _x7, _x8) {
    return _ref2.apply(this, arguments);
  };
}(); // 14

function createIdGenerator() {
  var i;
  return regeneratorRuntime.wrap(function createIdGenerator$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          i = 0;

        case 1:
          if (false) {}

          _context4.next = 4;
          return i++;

        case 4:
          _context4.next = 1;
          break;

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  }, _marked);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/logs/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exports */ "./src/exports.js");

console.log("isPalyndrom('\u0438\u0441\u043A\u0430\u0442\u044C \u0442\u0430\u043A\u0441\u0438'): ".concat((0,_exports__WEBPACK_IMPORTED_MODULE_0__.isPalyndrom)('искать такси')));
console.log("setStudentsMarks(students, marks): ".concat((0,_exports__WEBPACK_IMPORTED_MODULE_0__.setStudentsMarks)(_exports__WEBPACK_IMPORTED_MODULE_0__.students, _exports__WEBPACK_IMPORTED_MODULE_0__.marks)));
console.log("replaceBadWords('Fucking piece of shit'): ".concat((0,_exports__WEBPACK_IMPORTED_MODULE_0__.replaceBadWords)('Fucking piece of shit')));
console.log("calculateWordLetters('\u0442\u0435\u0441\u0442'): ".concat(JSON.stringify((0,_exports__WEBPACK_IMPORTED_MODULE_0__.calculateWordLetters)('искать такси'))));
console.log("getTotalTaxes.call(ukraine): ".concat(_exports__WEBPACK_IMPORTED_MODULE_0__.getTotalTaxes.call(_exports__WEBPACK_IMPORTED_MODULE_0__.ukraine)));
console.group('Звичайний студент');
var student = new _exports__WEBPACK_IMPORTED_MODULE_0__.Student('Вищої Школи Психотерапії м.Одеса', 2, 'Остап Бендер');
console.log('student.getInfo(): ' + student.getInfo());

for (var i = 0; i < 3; i++) {
  student.studentMarks = 5;
}

console.group('Поставлено 3 оцінки 5');
console.log('student.studentMarks: ' + student.studentMarks);
console.log('student.getAverageMark(): ' + student.getAverageMark());
console.groupEnd();
student.dismiss();
console.group('Студента виключено!');
console.log('student.studentMarks: ' + student.studentMarks);
console.log('student.getAverageMark(): ' + student.getAverageMark());
console.groupEnd();
student.recover();
console.group('Студента поновлено!');
console.log('student.studentMarks: ' + student.studentMarks);
console.log('student.getAverageMark(): ' + student.getAverageMark());
console.groupEnd();
console.groupEnd();
(0,_exports__WEBPACK_IMPORTED_MODULE_0__.getRandomChinese)(10).then(function (res) {
  return console.log("Random chinese: ".concat(res));
});
var idGenerator = (0,_exports__WEBPACK_IMPORTED_MODULE_0__.createIdGenerator)();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZXhwb3J0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvbG9ncy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVJZEdlbmVyYXRvciIsImlzUGFseW5kcm9tIiwic3RyaW5nIiwiY29tcHJlc3NlZCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZUFsbCIsInNwbGl0Iiwiam9pbiIsInJldmVyc2VkIiwicmV2ZXJzZSIsInN0dWRlbnRzIiwibWFya3MiLCJzZXRTdHVkZW50c01hcmtzIiwic3R1ZGVudHNNYXJrcyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQmFkV29yZHMiLCJhZGRpdGlvbmFsIiwiZXhwbGV0aXZlcyIsIndvcmRzIiwibWFwIiwid29yZCIsInNvbWUiLCJjdXJzZSIsImluY2x1ZGVzIiwiZm91bmRDdXJzZXMiLCJmaWx0ZXIiLCJmb3JFYWNoIiwiY2Vuc3VyZSIsInJlcGVhdCIsInJlZ0V4cCIsIlJlZ0V4cCIsImNhbGN1bGF0ZVdvcmRMZXR0ZXJzIiwicmVwZWF0cyIsInJlZHVjZSIsInJlc3VsdE9iaiIsImxldHRlciIsInVrcmFpbmUiLCJ0YXgiLCJtaWRkbGVTYWxhcnkiLCJ2YWNhbmNpZXMiLCJnZXRUb3RhbFRheGVzIiwiTWF0aCIsImZsb29yIiwiU3R1ZGVudCIsInVuaXZlcnNpdHkiLCJjb3Vyc2UiLCJmdWxsTmFtZSIsImFjY2VwdGVkIiwic3VtIiwicHJldiIsInRvdGFsIiwiY291bnQiLCJ0b0ZpeGVkIiwibWFyayIsInB1c2giLCJnZXRSYW5kb21Db2xvciIsImNvbG9yIiwicmFuZG9tIiwiY3JlYXRlQmxvY2siLCJzaXplIiwiYmxvY2siLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZ2VuZXJhdGVCbG9ja3MiLCJjb2xzIiwicm93cyIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJyb3ciLCJqIiwiYXBwZW5kIiwicGxheUF1ZGlvIiwiYXVkaW8iLCJjdXJyZW50VGltZSIsInBsYXkiLCJnZXRSYW5kb21DaGluZXNlIiwicmVzdWx0IiwiaXRlcmF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY2hpbmVzZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInNsaWNlIiwibG9hZEpTT04iLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsImxvYWRQZW9wbGUiLCJmaWxtIiwiZm9ybWF0IiwiY2hhcmFjdGVyc0xpbmtzIiwiY2hhcmFjdGVycyIsInJlcXVlc3RzIiwiY2hhcmFjdGVyTGluayIsImFsbCIsImdldEdlbmRlckljb24iLCJnZW5kZXIiLCJtYWxlVmFsdWUiLCJmZW1hbGVWYWx1ZSIsInNob3dQZW9wbGUiLCJwZW9wbGUiLCJpbWFnZXMiLCJwZW9wbGVJbWFnZXMiLCJjb250ZW50TWFpbiIsInBlb3BsZVNlY3Rpb24iLCJwZW9wbGVTZWN0aW9uSW5uZXIiLCJwZW9wbGVUaXRsZSIsInBlb3BsZVJvdyIsInRleHRDb250ZW50IiwiZXBpc29kZV9pZCIsInRpdGxlIiwibmFtZVByb3BlcnR5IiwiYmlydGhZZWFyUHJvcGVydHkiLCJnZW5kZXJQcm9wZXJ0eSIsImh1bWFuIiwiaW5kZXgiLCJodW1hbkltYWdlUGF0aCIsImh1bWFuQ29sdW1uIiwiZm9ybWF0UHJvcGVydHkiLCJwcm9wZXJ0eSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2hvd1BsYW5ldHMiLCJwbGFuZXRzIiwicGxhbmV0c0xpc3QiLCJyZXN1bHRzIiwicGxhbmV0c0ltYWdlcyIsInByZXZVcmwiLCJwcmV2aW91cyIsIm5leHRVcmwiLCJuZXh0IiwicGxhbmV0c0xpbmtzIiwicGxhbmV0IiwicGxhbmV0c1NlY3Rpb24iLCJwbGFuZXRzU2VjdGlvbklubmVyIiwicGxhbmV0c1RpdGxlIiwicGxhbmV0c1JvdyIsInBsYW5ldEluZm8iLCJwbGFuZXRJbWFnZVBhdGgiLCJwbGFuZXRDb2x1bW4iLCJwcmV2QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0QnV0dG9uIiwiZGF0YXNldCIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5IiwiZ3JvdXAiLCJzdHVkZW50IiwiZ2V0SW5mbyIsInN0dWRlbnRNYXJrcyIsImdldEF2ZXJhZ2VNYXJrIiwiZ3JvdXBFbmQiLCJkaXNtaXNzIiwicmVjb3ZlciIsInJlcyIsImlkR2VuZXJhdG9yIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bURBMFJpQkEsaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMVJqQjtBQUVPLFNBQVNDLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCO0FBQ2hDLE1BQU1DLFVBQVUsR0FBR0QsTUFBTSxDQUFDRSxXQUFQLEdBQXFCQyxVQUFyQixDQUFnQyxhQUFoQyxFQUErQyxFQUEvQyxFQUFtREMsS0FBbkQsQ0FBeUQsRUFBekQsRUFBNkRDLElBQTdELENBQWtFLEVBQWxFLENBQW5CO0FBQ0EsTUFBTUMsUUFBUSxHQUFHTCxVQUFVLENBQUNHLEtBQVgsQ0FBaUIsRUFBakIsRUFBcUJHLE9BQXJCLEdBQStCRixJQUEvQixDQUFvQyxFQUFwQyxDQUFqQjtBQUVBLDBEQUFrQkwsTUFBbEIsZ0JBQTZCQyxVQUFVLEtB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QUFDQyxHQUFSLENBQVlZLFdBQVcsQ0FBQzNCLElBQVosR0FBbUI0QixLQUEvQjtBQUNBZCxPQUFPLENBQUNDLEdBQVIsQ0FBWVksV0FBVyxDQUFDM0IsSUFBWixHQUFtQjRCLEtBQS9CLEUiLCJmaWxlIjoibG9ncy5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQYWx5bmRyb20oc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb21wcmVzc2VkID0gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgvW1xcc+KAlF8sXFwuXS9naSwgJycpLnNwbGl0KCcnKS5qb2luKCcnKTtcclxuICAgIGNvbnN0IHJldmVyc2VkID0gY29tcHJlc3NlZC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG5cclxuICAgIHJldHVybiBg0KHRgtGA0L7QutCwIFwiJHtzdHJpbmd9XCIgJHtjb21wcmVzc2VkID09PSByZXZlcnNlZCA/ICcnIDogJ9C90LUgJ33Rj9Cy0LvRj9C10YLRjNGB0Y8g0L/QvtC70LjQvdC00YDQvtC80L7QvGA7XHJcbn1cclxuXHJcbi8vIDQgXHJcblxyXG5leHBvcnQgY29uc3Qgc3R1ZGVudHMgPSBbXCLQntC70LXQutGB0LDQvdC00YBcIiwgXCLQhtCz0L7RgFwiLCBcItCe0LvQtdC90LBcIiwgXCLQhtGA0LBcIiwgXCLQntC70LXQutGB0ZbQuVwiLCBcItCh0LLRltGC0LvQsNC90LBcIl07XHJcbmV4cG9ydCBjb25zdCBtYXJrcyA9IFs0LCA1LCA1LCAzLCA0LCA1XTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTdHVkZW50c01hcmtzID0gKHN0dWRlbnRzLCBtYXJrcykgPT4ge1xyXG4gICAgY29uc3Qgc3R1ZGVudHNNYXJrcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R1ZGVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgc3R1ZGVudHNNYXJrc1tpXSA9IFtzdHVkZW50c1tpXSwgbWFya3NbaV1dO1xyXG5cclxuICAgIHJldHVybiBzdHVkZW50c01hcmtzO1xyXG59XHJcblxyXG4vLyA1XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUJhZFdvcmRzKHN0cmluZywgLi4uYWRkaXRpb25hbCkge1xyXG5cclxuICAgIGlmICghc3RyaW5nLmxlbmd0aCkgcmV0dXJuICfQktC4INC90ZbRh9C+0LPQviDQvdC1INCy0LLQtdC70LghJztcclxuXHJcbiAgICBjb25zdCBleHBsZXRpdmVzID0gWydzaGl0JywgJ2Z1Y2snLCAuLi5hZGRpdGlvbmFsXTtcclxuICAgIGxldCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnICcpO1xyXG4gICAgd29yZHMgPSB3b3Jkcy5tYXAod29yZCA9PiB7XHJcbiAgICAgICAgaWYgKGV4cGxldGl2ZXMuc29tZShjdXJzZSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY3Vyc2UpKSkge1xyXG4gICAgICAgICAgICBsZXQgZm91bmRDdXJzZXMgPSBleHBsZXRpdmVzLmZpbHRlcihjdXJzZSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY3Vyc2UpKTtcclxuICAgICAgICAgICAgZm91bmRDdXJzZXMuZm9yRWFjaChjdXJzZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2Vuc3VyZSA9ICcqJy5yZXBlYXQoY3Vyc2UubGVuZ3RoKSwgcmVnRXhwID0gbmV3IFJlZ0V4cChjdXJzZSwgJ2dpJyk7XHJcbiAgICAgICAgICAgICAgICB3b3JkID0gd29yZC5yZXBsYWNlQWxsKHJlZ0V4cCwgY2Vuc3VyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHdvcmQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XHJcbn1cclxuXHJcbi8vIDZcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXb3JkTGV0dGVycyh3b3JkKSB7XHJcbiAgICBpZiAoIXdvcmQpIHJldHVybiAn0J/Rg9GB0YLQtSDRgdC70L7QstC+JztcclxuICAgIGNvbnN0IHJlcGVhdHMgPSBbLi4ud29yZF0ucmVkdWNlKChyZXN1bHRPYmosIGxldHRlcikgPT4ge1xyXG4gICAgICAgIHJlc3VsdE9ialtsZXR0ZXJdID0gbGV0dGVyIGluIHJlc3VsdE9iaiA/IHJlc3VsdE9ialtsZXR0ZXJdIDogMDtcclxuICAgICAgICByZXN1bHRPYmpbbGV0dGVyXSsrO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRPYmo7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGVhdHM7XHJcbn1cclxuXHJcbi8vIDdcclxuXHJcbmV4cG9ydCBjb25zdCB1a3JhaW5lID0geyB0YXg6IDAuMTk1LCBtaWRkbGVTYWxhcnk6IDE3ODksIHZhY2FuY2llczogMTE0NzYgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbFRheGVzKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy50YXggKiB0aGlzLm1pZGRsZVNhbGFyeSAqIHRoaXMudmFjYW5jaWVzKTtcclxufVxyXG5cclxuLy84IFxyXG5cclxuZXhwb3J0IGNsYXNzIFN0dWRlbnQge1xyXG4gICAgY29uc3RydWN0b3IodW5pdmVyc2l0eSwgY291cnNlLCBmdWxsTmFtZSkge1xyXG4gICAgICAgIHRoaXMudW5pdmVyc2l0eSA9IHVuaXZlcnNpdHk7XHJcbiAgICAgICAgdGhpcy5jb3Vyc2UgPSBjb3Vyc2U7XHJcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xyXG4gICAgICAgIHRoaXMubWFya3MgPSBbXTtcclxuICAgICAgICB0aGlzLmFjY2VwdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBg0KHRgtGD0LTQtdC90YIgJHt0aGlzLmNvdXJzZX0t0LPQviDQutGD0YDRgdGDICR7dGhpcy51bml2ZXJzaXR5fSwgJHt0aGlzLmZ1bGxOYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZlcmFnZU1hcmsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3VtID0gdGhpcy5tYXJrcy5yZWR1Y2UoKHByZXYsIHRvdGFsKSA9PiB0b3RhbCArIHByZXYsIDApO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWFya3MubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICsoc3VtIC8gY291bnQpLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdHVkZW50TWFya3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWQpIHJldHVybiB0aGlzLm1hcmtzO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHVkZW50TWFya3MobWFyaykge1xyXG4gICAgICAgIGlmICh0aGlzLmFjY2VwdGVkKSB0aGlzLm1hcmtzLnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzcyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjY2VwdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3ZlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjY2VwdGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gOVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUNvbG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbG9yLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGByZ2IoJHtjb2xvclswXX0sJHtjb2xvclsxXX0sJHtjb2xvclsyXX0pYDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJsb2NrID0gKHNpemUsIGNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcclxuICAgIGJsb2NrLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XHJcbiAgICBibG9jay5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcclxuICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG5cclxuICAgIHJldHVybiBibG9jaztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQmxvY2tzID0gKHNpemUgPSA1MCwgY29scyA9IDUsIHJvd3MgPSA1KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgnYmxvY2tzLXJvdycpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGNyZWF0ZUJsb2NrKHNpemUsIGdldFJhbmRvbUNvbG9yKCkpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kKGJsb2NrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChyb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAxMCAoYXVkaW8gcGxheSBmdW5jKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlBdWRpbyhhdWRpbykge1xyXG4gICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG59XHJcblxyXG5cclxuLy8gMTFcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSYW5kb21DaGluZXNlKGxlbmd0aCkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpdGVyYXRpb24gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaW5lc2UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCtEYXRlLm5vdygpLnRvU3RyaW5nKCkuc2xpY2UoLTUpKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoY2hpbmVzZSk7XHJcbiAgICAgICAgICAgIH0sIDUwICogaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0ICs9IGF3YWl0IGl0ZXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyAxM1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRKU09OID0gKHVybCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihkYXRhID0+IGRhdGEuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRQZW9wbGUgPSAoZmlsbSwgZm9ybWF0KSA9PiB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzTGlua3MgPSBmaWxtLmNoYXJhY3RlcnM7XHJcbiAgICBjb25zdCByZXF1ZXN0cyA9IGNoYXJhY3RlcnNMaW5rcy5tYXAoY2hhcmFjdGVyTGluayA9PiBsb2FkSlNPTihjaGFyYWN0ZXJMaW5rICsgJz9mb3JtYXQ9JyArIGZvcm1hdCkpO1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdlbmRlckljb24gPSAoZ2VuZGVyLCBmb3JtYXQpID0+IHtcclxuICAgIGNvbnN0IG1hbGVWYWx1ZSA9IGZvcm1hdCA9PT0gJ3dvb2tpZWUnID8gJ3NjcmFhbndvJyA6ICdtYWxlJztcclxuICAgIGNvbnN0IGZlbWFsZVZhbHVlID0gZm9ybWF0ID09PSAnd29va2llZScgPyAnd3d3b3NjcmFhbndvJyA6ICdmZW1hbGUnO1xyXG4gICAgaWYgKGdlbmRlciA9PT0gbWFsZVZhbHVlKSByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZ2VuZGVyXCI+PGkgY2xhc3M9XCJmYXMgZmEtbWFyc1wiPjwvaT48L3NwYW4+JztcclxuICAgIGVsc2UgaWYgKGdlbmRlciA9PT0gZmVtYWxlVmFsdWUpIHJldHVybiAnPHNwYW4gY2xhc3M9XCJnZW5kZXJcIj48aSBjbGFzcz1cImZhcyBmYS12ZW51c1wiPjwvaT48L3NwYW4+JztcclxuICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJnZW5kZXJcIj4ke2dlbmRlcn08L3NwYW4+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dQZW9wbGUgPSBhc3luYyAocGVvcGxlLCBpbWFnZXMsIGZpbG0sIGZvcm1hdCkgPT4ge1xyXG4gICAgY29uc3QgcGVvcGxlSW1hZ2VzID0gaW1hZ2VzLnBlb3BsZTtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNMaW5rcyA9IGZpbG0uY2hhcmFjdGVycztcclxuXHJcbiAgICBjb25zdCBjb250ZW50TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBwZW9wbGVTZWN0aW9uID0gY29udGVudE1haW4ucXVlcnlTZWxlY3RvcignLnBlb3BsZS1zZWN0aW9uJyk7XHJcbiAgICBjb25zdCBwZW9wbGVTZWN0aW9uSW5uZXIgPSBwZW9wbGVTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19pbm5lcicpO1xyXG4gICAgY29uc3QgcGVvcGxlVGl0bGUgPSBwZW9wbGVTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX190aXRsZScpO1xyXG4gICAgY29uc3QgcGVvcGxlUm93ID0gcGVvcGxlU2VjdGlvbklubmVyLnF1ZXJ5U2VsZWN0b3IoJy5yb3cucGVvcGxlLXJvdycpO1xyXG5cclxuICAgIHBlb3BsZVRpdGxlLnRleHRDb250ZW50ID0gYFBlb3BsZSBmcm9tIGVwaXNvZGUgJHtmaWxtLmVwaXNvZGVfaWR9OiBcIiR7ZmlsbS50aXRsZX1cImA7XHJcbiAgICBwZW9wbGVSb3cuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgbmFtZVByb3BlcnR5ID0gZm9ybWF0ID09PSAnd29va2llZScgPyAnd2hyYXNjd28nIDogJ25hbWUnO1xyXG4gICAgY29uc3QgYmlydGhZZWFyUHJvcGVydHkgPSBmb3JtYXQgPT09ICd3b29raWVlJyA/ICdyaGFocmNhb2FjX3Jvd29yYXJjJyA6ICdiaXJ0aF95ZWFyJztcclxuICAgIGNvbnN0IGdlbmRlclByb3BlcnR5ID0gZm9ybWF0ID09PSAnd29va2llZScgPyAncnJ3b3dod2F3b3JjJyA6ICdnZW5kZXInO1xyXG5cclxuICAgIHBlb3BsZS5mb3JFYWNoKChodW1hbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBodW1hbkltYWdlUGF0aCA9IHBlb3BsZUltYWdlc1tjaGFyYWN0ZXJzTGlua3NbaW5kZXhdXTtcclxuICAgICAgICBjb25zdCBodW1hbkNvbHVtbiA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29sLWxnLTQgY29sLW1kLTYgaHVtYW4td3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2h1bWFuJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2h1bWFuX19oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2h1bWFuX19waG90bycgc3JjPScke2h1bWFuSW1hZ2VQYXRofSc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2h1bWFuX19ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9J2h1bWFuX19uYW1lJz4ke2h1bWFuW25hbWVQcm9wZXJ0eV19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naHVtYW5fX2JpcnRoLXllYXInPiR7Zm9ybWF0UHJvcGVydHkoYmlydGhZZWFyUHJvcGVydHkpfTogJHtodW1hbltiaXJ0aFllYXJQcm9wZXJ0eV19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdodW1hbl9fZ2VuZGVyJz4ke2Zvcm1hdFByb3BlcnR5KGdlbmRlclByb3BlcnR5KX06IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2dldEdlbmRlckljb24oaHVtYW5bZ2VuZGVyUHJvcGVydHldLCBmb3JtYXQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBwZW9wbGVSb3cuaW5uZXJIVE1MICs9IGh1bWFuQ29sdW1uO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGVvcGxlU2VjdGlvbklubmVyLmFwcGVuZChwZW9wbGVSb3cpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0UHJvcGVydHkgPSAocHJvcGVydHkpID0+IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSkucmVwbGFjZUFsbCgnXycsIFwiIFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93UGxhbmV0cyA9IGFzeW5jIChwbGFuZXRzLCBpbWFnZXMsIGZvcm1hdCkgPT4ge1xyXG4gICAgY29uc3QgcGxhbmV0c0xpc3QgPSBwbGFuZXRzLnJlc3VsdHM7XHJcbiAgICBjb25zdCBwbGFuZXRzSW1hZ2VzID0gaW1hZ2VzLnBsYW5ldHM7XHJcbiAgICBjb25zdCBwcmV2VXJsID0gcGxhbmV0cy5wcmV2aW91cztcclxuICAgIGNvbnN0IG5leHRVcmwgPSBwbGFuZXRzLm5leHQ7XHJcbiAgICBjb25zdCBwbGFuZXRzTGlua3MgPSBwbGFuZXRzLnJlc3VsdHMubWFwKHBsYW5ldCA9PiBwbGFuZXQudXJsKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBwbGFuZXRzU2VjdGlvbiA9IGNvbnRlbnRNYWluLnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXRzLXNlY3Rpb24nKTtcclxuICAgIGNvbnN0IHBsYW5ldHNTZWN0aW9uSW5uZXIgPSBwbGFuZXRzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faW5uZXInKTtcclxuICAgIGNvbnN0IHBsYW5ldHNUaXRsZSA9IHBsYW5ldHNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX190aXRsZScpO1xyXG4gICAgY29uc3QgcGxhbmV0c1JvdyA9IHBsYW5ldHNTZWN0aW9uSW5uZXIucXVlcnlTZWxlY3RvcignLnJvdy5wbGFuZXRzLXJvdycpO1xyXG5cclxuICAgIHBsYW5ldHNUaXRsZS50ZXh0Q29udGVudCA9IGBQbGFuZXRzIGZyb20gXCJTdGFyIFdhcnNcImA7XHJcbiAgICBwbGFuZXRzUm93LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IG5hbWVQcm9wZXJ0eSA9IGZvcm1hdCA9PT0gJ3dvb2tpZWUnID8gJ3docmFzY3dvJyA6ICduYW1lJztcclxuXHJcbiAgICBwbGFuZXRzTGlzdC5mb3JFYWNoKGFzeW5jIChwbGFuZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxhbmV0SW5mbyA9IGF3YWl0IGxvYWRKU09OKHBsYW5ldC51cmwgKyAnP2Zvcm1hdD0nICsgZm9ybWF0KTtcclxuICAgICAgICBjb25zdCBwbGFuZXRJbWFnZVBhdGggPSBwbGFuZXRzSW1hZ2VzW3BsYW5ldHNMaW5rc1tpbmRleF1dO1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldENvbHVtbiA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbGctMyBjb2wtbWQtNiBwbGFuZXQtd3JhcHBlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ncGxhbmV0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncGxhbmV0X19oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0ncGxhbmV0X19waG90bycgc3JjPScke3BsYW5ldEltYWdlUGF0aH0nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncGxhbmV0X19ib2R5Jz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0ncGxhbmV0X19uYW1lJz4ke3BsYW5ldEluZm9bbmFtZVByb3BlcnR5XX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHBsYW5ldHNSb3cuaW5uZXJIVE1MICs9IHBsYW5ldENvbHVtbjtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYtYnRuJyk7XHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnRuJyk7XHJcblxyXG4gICAgcHJldkJ1dHRvbi5kYXRhc2V0LnVybCA9IHByZXZVcmwgIT09IG51bGwgPyBwcmV2VXJsIDogJyc7XHJcbiAgICBuZXh0QnV0dG9uLmRhdGFzZXQudXJsID0gbmV4dFVybCAhPT0gbnVsbCA/IG5leHRVcmwgOiAnJztcclxufVxyXG5cclxuLy8gMTRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY3JlYXRlSWRHZW5lcmF0b3IoKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICB5aWVsZCBpKys7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge1xyXG4gICAgaXNQYWx5bmRyb20sIHN0dWRlbnRzLCBtYXJrcywgc2V0U3R1ZGVudHNNYXJrcywgcmVwbGFjZUJhZFdvcmRzLFxyXG4gICAgY2FsY3VsYXRlV29yZExldHRlcnMsIHVrcmFpbmUsIGdldFRvdGFsVGF4ZXMsIFN0dWRlbnQsXHJcbiAgICBnZXRSYW5kb21DaGluZXNlLCBjcmVhdGVJZEdlbmVyYXRvclxyXG59IGZyb20gJy4uL2V4cG9ydHMnO1xyXG5cclxuY29uc29sZS5sb2coYGlzUGFseW5kcm9tKCfQuNGB0LrQsNGC0Ywg0YLQsNC60YHQuCcpOiAke2lzUGFseW5kcm9tKCfQuNGB0LrQsNGC0Ywg0YLQsNC60YHQuCcpfWApO1xyXG5jb25zb2xlLmxvZyhgc2V0U3R1ZGVudHNNYXJrcyhzdHVkZW50cywgbWFya3MpOiAke3NldFN0dWRlbnRzTWFya3Moc3R1ZGVudHMsIG1hcmtzKX1gKTtcclxuY29uc29sZS5sb2coYHJlcGxhY2VCYWRXb3JkcygnRnVja2luZyBwaWVjZSBvZiBzaGl0Jyk6ICR7cmVwbGFjZUJhZFdvcmRzKCdGdWNraW5nIHBpZWNlIG9mIHNoaXQnKX1gKTtcclxuY29uc29sZS5sb2coYGNhbGN1bGF0ZVdvcmRMZXR0ZXJzKCfRgtC10YHRgicpOiAke0pTT04uc3RyaW5naWZ5KGNhbGN1bGF0ZVdvcmRMZXR0ZXJzKCfQuNGB0LrQsNGC0Ywg0YLQsNC60YHQuCcpKX1gKTtcclxuY29uc29sZS5sb2coYGdldFRvdGFsVGF4ZXMuY2FsbCh1a3JhaW5lKTogJHtnZXRUb3RhbFRheGVzLmNhbGwodWtyYWluZSl9YCk7XHJcblxyXG5jb25zb2xlLmdyb3VwKCfQl9Cy0LjRh9Cw0LnQvdC40Lkg0YHRgtGD0LTQtdC90YInKTtcclxuXHJcbmNvbnN0IHN0dWRlbnQgPSBuZXcgU3R1ZGVudCgn0JLQuNGJ0L7RlyDQqNC60L7Qu9C4INCf0YHQuNGF0L7RgtC10YDQsNC/0ZbRlyDQvC7QntC00LXRgdCwJywgMiwgJ9Ce0YHRgtCw0L8g0JHQtdC90LTQtdGAJyk7XHJcblxyXG5jb25zb2xlLmxvZygnc3R1ZGVudC5nZXRJbmZvKCk6ICcgKyBzdHVkZW50LmdldEluZm8oKSk7XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgc3R1ZGVudC5zdHVkZW50TWFya3MgPSA1O1xyXG59XHJcblxyXG5jb25zb2xlLmdyb3VwKCfQn9C+0YHRgtCw0LLQu9C10L3QviAzINC+0YbRltC90LrQuCA1Jyk7XHJcblxyXG5jb25zb2xlLmxvZygnc3R1ZGVudC5zdHVkZW50TWFya3M6ICcgKyBzdHVkZW50LnN0dWRlbnRNYXJrcyk7XHJcbmNvbnNvbGUubG9nKCdzdHVkZW50LmdldEF2ZXJhZ2VNYXJrKCk6ICcgKyBzdHVkZW50LmdldEF2ZXJhZ2VNYXJrKCkpO1xyXG5cclxuY29uc29sZS5ncm91cEVuZCgpO1xyXG5cclxuc3R1ZGVudC5kaXNtaXNzKCk7XHJcblxyXG5jb25zb2xlLmdyb3VwKCfQodGC0YPQtNC10L3RgtCwINCy0LjQutC70Y7Rh9C10L3QviEnKTtcclxuXHJcbmNvbnNvbGUubG9nKCdzdHVkZW50LnN0dWRlbnRNYXJrczogJyArIHN0dWRlbnQuc3R1ZGVudE1hcmtzKTtcclxuY29uc29sZS5sb2coJ3N0dWRlbnQuZ2V0QXZlcmFnZU1hcmsoKTogJyArIHN0dWRlbnQuZ2V0QXZlcmFnZU1hcmsoKSk7XHJcblxyXG5jb25zb2xlLmdyb3VwRW5kKCk7XHJcblxyXG5zdHVkZW50LnJlY292ZXIoKTtcclxuXHJcbmNvbnNvbGUuZ3JvdXAoJ9Ch0YLRg9C00LXQvdGC0LAg0L/QvtC90L7QstC70LXQvdC+IScpO1xyXG5cclxuY29uc29sZS5sb2coJ3N0dWRlbnQuc3R1ZGVudE1hcmtzOiAnICsgc3R1ZGVudC5zdHVkZW50TWFya3MpO1xyXG5jb25zb2xlLmxvZygnc3R1ZGVudC5nZXRBdmVyYWdlTWFyaygpOiAnICsgc3R1ZGVudC5nZXRBdmVyYWdlTWFyaygpKTtcclxuXHJcbmNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbmNvbnNvbGUuZ3JvdXBFbmQoKTtcclxuXHJcbmdldFJhbmRvbUNoaW5lc2UoMTApLnRoZW4ocmVzID0+IGNvbnNvbGUubG9nKGBSYW5kb20gY2hpbmVzZTogJHtyZXN9YCkpO1xyXG5cclxuY29uc3QgaWRHZW5lcmF0b3IgPSBjcmVhdGVJZEdlbmVyYXRvcigpO1xyXG5cclxuY29uc29sZS5sb2coaWRHZW5lcmF0b3IubmV4dCgpLnZhbHVlKTtcclxuY29uc29sZS5sb2coaWRHZW5lcmF0b3IubmV4dCgpLnZhbHVlKTtcclxuY29uc29sZS5sb2coaWRHZW5lcmF0b3IubmV4dCgpLnZhbHVlKTtcclxuY29uc29sZS5sb2coaWRHZW5lcmF0b3IubmV4dCgpLnZhbHVlKTsiXSwic291cmNlUm9vdCI6IiJ9