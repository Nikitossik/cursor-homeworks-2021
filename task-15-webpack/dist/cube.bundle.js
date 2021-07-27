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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/cube/style.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/cube/style.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task-controls {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding-top: 40px;\r\n}\r\n\r\n.task-input {\r\n    margin: 0 20px 10px 0;\r\n    padding: 8px 25px;\r\n    border: 1px solid #333;\r\n    border-radius: 10px;\r\n    font-size: 1em;\r\n}\r\n\r\n.task-output {\r\n    padding-top: 150px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.blocks-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n}", "",{"version":3,"sources":["webpack://./src/cube/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;IACjB,sBAAsB;IACtB,mBAAmB;IACnB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;AACrB","sourcesContent":[".task-controls {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding-top: 40px;\r\n}\r\n\r\n.task-input {\r\n    margin: 0 20px 10px 0;\r\n    padding: 8px 25px;\r\n    border: 1px solid #333;\r\n    border-radius: 10px;\r\n    font-size: 1em;\r\n}\r\n\r\n.task-output {\r\n    padding-top: 150px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.blocks-row {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/global.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/global.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  overflow-anchor: none;\r\n}\r\n\r\n.wrapper {\r\n  overflow-anchor: none\r\n}\r\n\r\n.section {\r\n  padding-top: 50px;\r\n  min-height: 100vh;\r\n}\r\n\r\n.section__inner {\r\n  padding: 0px 10px 20px 10px;\r\n}", "",{"version":3,"sources":["webpack://./src/global.css"],"names":[],"mappings":"AAAA;;;EAGE,SAAS;EACT,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE;AACF;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,2BAA2B;AAC7B","sourcesContent":["*,\r\n*::before,\r\n*::after {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n  overflow-anchor: none;\r\n}\r\n\r\n.wrapper {\r\n  overflow-anchor: none\r\n}\r\n\r\n.section {\r\n  padding-top: 50px;\r\n  min-height: 100vh;\r\n}\r\n\r\n.section__inner {\r\n  padding: 0px 10px 20px 10px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/cube/style.css":
/*!****************************!*\
  !*** ./src/cube/style.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/cube/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./src/global.css":
/*!************************!*\
  !*** ./src/global.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
  !*** ./src/cube/index.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../global.css */ "./src/global.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/cube/style.css");
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exports */ "./src/exports.js");



var taskForm = document.querySelector('.task-form');
var defaultSize = 50;
var defaultCols = 5;
var defaultRows = 5;
(0,_exports__WEBPACK_IMPORTED_MODULE_2__.generateBlocks)(defaultSize, defaultCols, defaultRows);
var interval = setInterval(_exports__WEBPACK_IMPORTED_MODULE_2__.generateBlocks, 1000, defaultSize, defaultCols, defaultRows);
taskForm.addEventListener('change', function () {
  var size = document.getElementById('size').value || defaultSize;
  var cols = document.getElementById('cols').value || defaultCols;
  var rows = document.getElementById('rows').value || defaultRows;
  clearInterval(interval);
  (0,_exports__WEBPACK_IMPORTED_MODULE_2__.generateBlocks)(size, cols, rows);
  interval = setInterval(_exports__WEBPACK_IMPORTED_MODULE_2__.generateBlocks, 1000, size, cols, rows);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZXhwb3J0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY3ViZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvY3ViZS9zdHlsZS5jc3M/ZTM2ZSIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZ2xvYmFsLmNzcz9kM2JjIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9jdWJlL2luZGV4LmpzIl0sIm5hbWVzIjpbImNyZWF0ZUlkR2VuZXJhdG9yIiwiaXNQYWx5bmRyb20iLCJzdHJpbmciLCJjb21wcmVzc2VkIiwidG9Mb3dlckNhc2UiLCJyZXBsYWNlQWxsIiwic3BsaXQiLCJqb2luIiwicmV2ZXJzZWQiLCJyZXZlcnNlIiwic3R1ZGVudHMiLCJtYXJrcyIsInNldFN0dWRlbnRzTWFya3MiLCJzdHVkZW50c01hcmtzIiwiaSIsImxlbmd0aCIsInJlcGxhY2VCYWRXb3JkcyIsImFkZGl0aW9uYWwiLCJleHBsZXRpdmVzIiwid29yZHMiLCJtYXAiLCJ3b3JkIiwic29tZSIsImN1cnNlIiwiaW5jbHVkZXMiLCJmb3VuZEN1cnNlcyIsImZpbHRlciIsImZvckVhY2giLCJjZW5zdXJlIiwicmVwZWF0IiwicmVnRXhwIiwiUmVnRXhwIiwiY2FsY3VsYXRlV29yZExldHRlcnMiLCJyZXBlYXRzIiwicmVkdWNlIiwicmVzdWx0T2JqIiwibGV0dGVyIiwidWtyYWluZSIsInRheCIsIm1pZGRsZVNhbGFyeSIsInZhY2FuY2llcyIsImdldFRvdGFsVGF4ZXMiLCJNYXRoIiwiZmxvb3IiLCJTdHVkZW50IiwidW5pdmVyc2l0eSIsImNvdXJzZSIsImZ1bGxOYW1lIiwiYWNjZXB0ZWQiLCJzdW0iLCJwcmV2IiwidG90YWwiLCJjb3VudCIsInRvRml4ZWQiLCJtYXJrIiwicHVzaCIsImdldFJhbmRvbUNvbG9yIiwiY29sb3IiLCJyYW5kb20iLCJjcmVhdGVCbG9jayIsInNpemUiLCJibG9jayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInN0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJnZW5lcmF0ZUJsb2NrcyIsImNvbHMiLCJyb3dzIiwiY29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsImlubmVySFRNTCIsInJvdyIsImoiLCJhcHBlbmQiLCJwbGF5QXVkaW8iLCJhdWRpbyIsImN1cnJlbnRUaW1lIiwicGxheSIsImdldFJhbmRvbUNoaW5lc2UiLCJyZXN1bHQiLCJpdGVyYXRpb24iLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJjaGluZXNlIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiRGF0ZSIsIm5vdyIsInRvU3RyaW5nIiwic2xpY2UiLCJsb2FkSlNPTiIsInVybCIsImZldGNoIiwidGhlbiIsImRhdGEiLCJqc29uIiwibG9hZFBlb3BsZSIsImZpbG0iLCJmb3JtYXQiLCJjaGFyYWN0ZXJzTGlua3MiLCJjaGFyYWN0ZXJzIiwicmVxdWVzdHMiLCJjaGFyYWN0ZXJMaW5rIiwiYWxsIiwiZ2V0R2VuZGVySWNvbiIsImdlbmRlciIsIm1hbGVWYWx1ZSIsImZlbWFsZVZhbHVlIiwic2hvd1Blb3BsZSIsInBlb3BsZSIsImltYWdlcyIsInBlb3BsZUltYWdlcyIsImNvbnRlbnRNYWluIiwicGVvcGxlU2VjdGlvbiIsInBlb3BsZVNlY3Rpb25Jbm5lciIsInBlb3BsZVRpdGxlIiwicGVvcGxlUm93IiwidGV4dENvbnRlbnQiLCJlcGlzb2RlX2lkIiwidGl0bGUiLCJuYW1lUHJvcGVydHkiLCJiaXJ0aFllYXJQcm9wZXJ0eSIsImdlbmRlclByb3BlcnR5IiwiaHVtYW4iLCJpbmRleCIsImh1bWFuSW1hZ2VQYXRoIiwiaHVtYW5Db2x1bW4iLCJmb3JtYXRQcm9wZXJ0eSIsInByb3BlcnR5IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzaG93UGxhbmV0cyIsInBsYW5ldHMiLCJwbGFuZXRzTGlzdCIsInJlc3VsdHMiLCJwbGFuZXRzSW1hZ2VzIiwicHJldlVybCIsInByZXZpb3VzIiwibmV4dFVybCIsIm5leHQiLCJwbGFuZXRzTGlua3MiLCJwbGFuZXQiLCJwbGFuZXRzU2VjdGlvbiIsInBsYW5ldHNTZWN0aW9uSW5uZXIiLCJwbGFuZXRzVGl0bGUiLCJwbGFuZXRzUm93IiwicGxhbmV0SW5mbyIsInBsYW5ldEltYWdlUGF0aCIsInBsYW5ldENvbHVtbiIsInByZXZCdXR0b24iLCJnZXRFbGVtZW50QnlJZCIsIm5leHRCdXR0b24iLCJkYXRhc2V0IiwidGFza0Zvcm0iLCJkZWZhdWx0U2l6ZSIsImRlZmF1bHRDb2xzIiwiZGVmYXVsdFJvd3MiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInZhbHVlIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttREEwUmlCQSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExUmpCO0FBRU8sU0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDaEMsTUFBTUMsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVAsR0FBcUJDLFVBQXJCLENBQWdDLGFBQWhDLEVBQStDLEVBQS9DLEVBQW1EQyxLQUFuRCxDQUF5RCxFQUF6RCxFQUE2REMsSUFBN0QsQ0FBa0UsRUFBbEUsQ0FBbkI7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixFQUFqQixFQUFxQkcsT0FBckIsR0FBK0JGLElBQS9CLENBQW9DLEVBQXBDLENBQWpCO0FBRUEsMERBQWtCTCxNQUFs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Q0EsTUFBTXpGLElBQUksR0FBR1QsUUFBUSxDQUFDOEYsY0FBVCxDQUF3QixNQUF4QixFQUFnQ1UsS0FBaEMsSUFBeUNMLFdBQXREO0FBQ0EsTUFBTXpGLElBQUksR0FBR1YsUUFBUSxDQUFDOEYsY0FBVCxDQUF3QixNQUF4QixFQUFnQ1UsS0FBaEMsSUFBeUNKLFdBQXREO0FBRUFLLGVBQWEsQ0FBQ0osUUFBRCxDQUFiO0FBQ0E3RiwwREFBYyxDQUFDVixJQUFELEVBQU9XLElBQVAsRUFBYUMsSUFBYixDQUFkO0FBQ0EyRixVQUFRLEdBQUdDLFdBQVcsQ0FBQzlGLG9EQUFELEVBQWlCLElBQWpCLEVBQXVCVixJQUF2QixFQUE2QlcsSUFBN0IsRUFBbUNDLElBQW5DLENBQXRCO0FBQ0gsQ0FSRCxFIiwiZmlsZSI6ImN1YmUuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gM1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUGFseW5kcm9tKHN0cmluZykge1xyXG4gICAgY29uc3QgY29tcHJlc3NlZCA9IHN0cmluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2VBbGwoL1tcXHPigJRfLFxcLl0vZ2ksICcnKS5zcGxpdCgnJykuam9pbignJyk7XHJcbiAgICBjb25zdCByZXZlcnNlZCA9IGNvbXByZXNzZWQuc3BsaXQoJycpLnJldmVyc2UoKS5qb2luKCcnKTtcclxuXHJcbiAgICByZXR1cm4gYNCh0YLRgNC+0LrQsCBcIiR7c3RyaW5nfVwiICR7Y29tcHJlc3NlZCA9PT0gcmV2ZXJzZWQgPyAnJyA6ICfQvdC1ICd90Y/QstC70Y/QtdGC0YzRgdGPINC/0L7Qu9C40L3QtNGA0L7QvNC+0LxgO1xyXG59XHJcblxyXG4vLyA0IFxyXG5cclxuZXhwb3J0IGNvbnN0IHN0dWRlbnRzID0gW1wi0J7Qu9C10LrRgdCw0L3QtNGAXCIsIFwi0IbQs9C+0YBcIiwgXCLQntC70LXQvdCwXCIsIFwi0IbRgNCwXCIsIFwi0J7Qu9C10LrRgdGW0LlcIiwgXCLQodCy0ZbRgtC70LDQvdCwXCJdO1xyXG5leHBvcnQgY29uc3QgbWFya3MgPSBbNCwgNSwgNSwgMywgNCwgNV07XHJcblxyXG5leHBvcnQgY29uc3Qgc2V0U3R1ZGVudHNNYXJrcyA9IChzdHVkZW50cywgbWFya3MpID0+IHtcclxuICAgIGNvbnN0IHN0dWRlbnRzTWFya3MgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0dWRlbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHN0dWRlbnRzTWFya3NbaV0gPSBbc3R1ZGVudHNbaV0sIG1hcmtzW2ldXTtcclxuXHJcbiAgICByZXR1cm4gc3R1ZGVudHNNYXJrcztcclxufVxyXG5cclxuLy8gNVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VCYWRXb3JkcyhzdHJpbmcsIC4uLmFkZGl0aW9uYWwpIHtcclxuXHJcbiAgICBpZiAoIXN0cmluZy5sZW5ndGgpIHJldHVybiAn0JLQuCDQvdGW0YfQvtCz0L4g0L3QtSDQstCy0LXQu9C4ISc7XHJcblxyXG4gICAgY29uc3QgZXhwbGV0aXZlcyA9IFsnc2hpdCcsICdmdWNrJywgLi4uYWRkaXRpb25hbF07XHJcbiAgICBsZXQgd29yZHMgPSBzdHJpbmcuc3BsaXQoJyAnKTtcclxuICAgIHdvcmRzID0gd29yZHMubWFwKHdvcmQgPT4ge1xyXG4gICAgICAgIGlmIChleHBsZXRpdmVzLnNvbWUoY3Vyc2UgPT4gd29yZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGN1cnNlKSkpIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kQ3Vyc2VzID0gZXhwbGV0aXZlcy5maWx0ZXIoY3Vyc2UgPT4gd29yZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGN1cnNlKSk7XHJcbiAgICAgICAgICAgIGZvdW5kQ3Vyc2VzLmZvckVhY2goY3Vyc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNlbnN1cmUgPSAnKicucmVwZWF0KGN1cnNlLmxlbmd0aCksIHJlZ0V4cCA9IG5ldyBSZWdFeHAoY3Vyc2UsICdnaScpO1xyXG4gICAgICAgICAgICAgICAgd29yZCA9IHdvcmQucmVwbGFjZUFsbChyZWdFeHAsIGNlbnN1cmUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiB3b3JkO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gd29yZHMuam9pbignICcpO1xyXG59XHJcblxyXG4vLyA2XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsY3VsYXRlV29yZExldHRlcnMod29yZCkge1xyXG4gICAgaWYgKCF3b3JkKSByZXR1cm4gJ9Cf0YPRgdGC0LUg0YHQu9C+0LLQvic7XHJcbiAgICBjb25zdCByZXBlYXRzID0gWy4uLndvcmRdLnJlZHVjZSgocmVzdWx0T2JqLCBsZXR0ZXIpID0+IHtcclxuICAgICAgICByZXN1bHRPYmpbbGV0dGVyXSA9IGxldHRlciBpbiByZXN1bHRPYmogPyByZXN1bHRPYmpbbGV0dGVyXSA6IDA7XHJcbiAgICAgICAgcmVzdWx0T2JqW2xldHRlcl0rKztcclxuICAgICAgICByZXR1cm4gcmVzdWx0T2JqO1xyXG4gICAgfSwge30pO1xyXG5cclxuICAgIHJldHVybiByZXBlYXRzO1xyXG59XHJcblxyXG4vLyA3XHJcblxyXG5leHBvcnQgY29uc3QgdWtyYWluZSA9IHsgdGF4OiAwLjE5NSwgbWlkZGxlU2FsYXJ5OiAxNzg5LCB2YWNhbmNpZXM6IDExNDc2IH07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VG90YWxUYXhlcygpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKHRoaXMudGF4ICogdGhpcy5taWRkbGVTYWxhcnkgKiB0aGlzLnZhY2FuY2llcyk7XHJcbn1cclxuXHJcbi8vOCBcclxuXHJcbmV4cG9ydCBjbGFzcyBTdHVkZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHVuaXZlcnNpdHksIGNvdXJzZSwgZnVsbE5hbWUpIHtcclxuICAgICAgICB0aGlzLnVuaXZlcnNpdHkgPSB1bml2ZXJzaXR5O1xyXG4gICAgICAgIHRoaXMuY291cnNlID0gY291cnNlO1xyXG4gICAgICAgIHRoaXMuZnVsbE5hbWUgPSBmdWxsTmFtZTtcclxuICAgICAgICB0aGlzLm1hcmtzID0gW107XHJcbiAgICAgICAgdGhpcy5hY2NlcHRlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5mbyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYNCh0YLRg9C00LXQvdGCICR7dGhpcy5jb3Vyc2V9LdCz0L4g0LrRg9GA0YHRgyAke3RoaXMudW5pdmVyc2l0eX0sICR7dGhpcy5mdWxsTmFtZX1gO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF2ZXJhZ2VNYXJrID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFjY2VwdGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN1bSA9IHRoaXMubWFya3MucmVkdWNlKChwcmV2LCB0b3RhbCkgPT4gdG90YWwgKyBwcmV2LCAwKTtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLm1hcmtzLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiArKHN1bSAvIGNvdW50KS50b0ZpeGVkKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3R1ZGVudE1hcmtzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFjY2VwdGVkKSByZXR1cm4gdGhpcy5tYXJrcztcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3R1ZGVudE1hcmtzKG1hcmspIHtcclxuICAgICAgICBpZiAodGhpcy5hY2NlcHRlZCkgdGhpcy5tYXJrcy5wdXNoKG1hcmspO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc21pc3MgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlY292ZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY2NlcHRlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIDlcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRSYW5kb21Db2xvciA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbG9yID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICBjb2xvci5wdXNoKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1NikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBgcmdiKCR7Y29sb3JbMF19LCR7Y29sb3JbMV19LCR7Y29sb3JbMl19KWA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVCbG9jayA9IChzaXplLCBjb2xvcikgPT4ge1xyXG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoJ2Jsb2NrJyk7XHJcbiAgICBibG9jay5zdHlsZS53aWR0aCA9IGAke3NpemV9cHhgO1xyXG4gICAgYmxvY2suc3R5bGUuaGVpZ2h0ID0gYCR7c2l6ZX1weGA7XHJcbiAgICBibG9jay5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjb2xvcjtcclxuXHJcbiAgICByZXR1cm4gYmxvY2s7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZW5lcmF0ZUJsb2NrcyA9IChzaXplID0gNTAsIGNvbHMgPSA1LCByb3dzID0gNSkgPT4ge1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpO1xyXG5cclxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XHJcbiAgICAgICAgY29uc3Qgcm93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgcm93LmNsYXNzTGlzdC5hZGQoJ2Jsb2Nrcy1yb3cnKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspIHtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2sgPSBjcmVhdGVCbG9jayhzaXplLCBnZXRSYW5kb21Db2xvcigpKTtcclxuICAgICAgICAgICAgcm93LmFwcGVuZChibG9jayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocm93KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gMTAgKGF1ZGlvIHBsYXkgZnVuYylcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwbGF5QXVkaW8oYXVkaW8pIHtcclxuICAgIGlmICghYXVkaW8pIHJldHVybjtcclxuICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxufVxyXG5cclxuXHJcbi8vIDExXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hpbmVzZShsZW5ndGgpIHtcclxuICAgIGxldCByZXN1bHQgPSAnJztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlcmF0aW9uID0gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGluZXNlID0gU3RyaW5nLmZyb21DaGFyQ29kZSgrRGF0ZS5ub3coKS50b1N0cmluZygpLnNsaWNlKC01KSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNoaW5lc2UpO1xyXG4gICAgICAgICAgICB9LCA1MCAqIGkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJlc3VsdCArPSBhd2FpdCBpdGVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuLy8gMTNcclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkSlNPTiA9ICh1cmwpID0+IHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwpLnRoZW4oZGF0YSA9PiBkYXRhLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsb2FkUGVvcGxlID0gKGZpbG0sIGZvcm1hdCkgPT4ge1xyXG4gICAgY29uc3QgY2hhcmFjdGVyc0xpbmtzID0gZmlsbS5jaGFyYWN0ZXJzO1xyXG4gICAgY29uc3QgcmVxdWVzdHMgPSBjaGFyYWN0ZXJzTGlua3MubWFwKGNoYXJhY3RlckxpbmsgPT4gbG9hZEpTT04oY2hhcmFjdGVyTGluayArICc/Zm9ybWF0PScgKyBmb3JtYXQpKTtcclxuICAgIHJldHVybiBQcm9taXNlLmFsbChyZXF1ZXN0cyk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRHZW5kZXJJY29uID0gKGdlbmRlciwgZm9ybWF0KSA9PiB7XHJcbiAgICBjb25zdCBtYWxlVmFsdWUgPSBmb3JtYXQgPT09ICd3b29raWVlJyA/ICdzY3JhYW53bycgOiAnbWFsZSc7XHJcbiAgICBjb25zdCBmZW1hbGVWYWx1ZSA9IGZvcm1hdCA9PT0gJ3dvb2tpZWUnID8gJ3d3d29zY3JhYW53bycgOiAnZmVtYWxlJztcclxuICAgIGlmIChnZW5kZXIgPT09IG1hbGVWYWx1ZSkgcmV0dXJuICc8c3BhbiBjbGFzcz1cImdlbmRlclwiPjxpIGNsYXNzPVwiZmFzIGZhLW1hcnNcIj48L2k+PC9zcGFuPic7XHJcbiAgICBlbHNlIGlmIChnZW5kZXIgPT09IGZlbWFsZVZhbHVlKSByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZ2VuZGVyXCI+PGkgY2xhc3M9XCJmYXMgZmEtdmVudXNcIj48L2k+PC9zcGFuPic7XHJcbiAgICByZXR1cm4gYDxzcGFuIGNsYXNzPVwiZ2VuZGVyXCI+JHtnZW5kZXJ9PC9zcGFuPmA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaG93UGVvcGxlID0gYXN5bmMgKHBlb3BsZSwgaW1hZ2VzLCBmaWxtLCBmb3JtYXQpID0+IHtcclxuICAgIGNvbnN0IHBlb3BsZUltYWdlcyA9IGltYWdlcy5wZW9wbGU7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzTGlua3MgPSBmaWxtLmNoYXJhY3RlcnM7XHJcblxyXG4gICAgY29uc3QgY29udGVudE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgcGVvcGxlU2VjdGlvbiA9IGNvbnRlbnRNYWluLnF1ZXJ5U2VsZWN0b3IoJy5wZW9wbGUtc2VjdGlvbicpO1xyXG4gICAgY29uc3QgcGVvcGxlU2VjdGlvbklubmVyID0gcGVvcGxlU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faW5uZXInKTtcclxuICAgIGNvbnN0IHBlb3BsZVRpdGxlID0gcGVvcGxlU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9fdGl0bGUnKTtcclxuICAgIGNvbnN0IHBlb3BsZVJvdyA9IHBlb3BsZVNlY3Rpb25Jbm5lci5xdWVyeVNlbGVjdG9yKCcucm93LnBlb3BsZS1yb3cnKTtcclxuXHJcbiAgICBwZW9wbGVUaXRsZS50ZXh0Q29udGVudCA9IGBQZW9wbGUgZnJvbSBlcGlzb2RlICR7ZmlsbS5lcGlzb2RlX2lkfTogXCIke2ZpbG0udGl0bGV9XCJgO1xyXG4gICAgcGVvcGxlUm93LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IG5hbWVQcm9wZXJ0eSA9IGZvcm1hdCA9PT0gJ3dvb2tpZWUnID8gJ3docmFzY3dvJyA6ICduYW1lJztcclxuICAgIGNvbnN0IGJpcnRoWWVhclByb3BlcnR5ID0gZm9ybWF0ID09PSAnd29va2llZScgPyAncmhhaHJjYW9hY19yb3dvcmFyYycgOiAnYmlydGhfeWVhcic7XHJcbiAgICBjb25zdCBnZW5kZXJQcm9wZXJ0eSA9IGZvcm1hdCA9PT0gJ3dvb2tpZWUnID8gJ3Jyd293aHdhd29yYycgOiAnZ2VuZGVyJztcclxuXHJcbiAgICBwZW9wbGUuZm9yRWFjaCgoaHVtYW4sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaHVtYW5JbWFnZVBhdGggPSBwZW9wbGVJbWFnZXNbY2hhcmFjdGVyc0xpbmtzW2luZGV4XV07XHJcbiAgICAgICAgY29uc3QgaHVtYW5Db2x1bW4gPSBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2NvbC1sZy00IGNvbC1tZC02IGh1bWFuLXdyYXBwZXInPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPSdodW1hbic+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdodW1hbl9faGVhZGVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPSdodW1hbl9fcGhvdG8nIHNyYz0nJHtodW1hbkltYWdlUGF0aH0nPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSdodW1hbl9fYm9keSc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzPSdodW1hbl9fbmFtZSc+JHtodW1hbltuYW1lUHJvcGVydHldfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9J2h1bWFuX19iaXJ0aC15ZWFyJz4ke2Zvcm1hdFByb3BlcnR5KGJpcnRoWWVhclByb3BlcnR5KX06ICR7aHVtYW5bYmlydGhZZWFyUHJvcGVydHldfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naHVtYW5fX2dlbmRlcic+JHtmb3JtYXRQcm9wZXJ0eShnZW5kZXJQcm9wZXJ0eSl9OiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtnZXRHZW5kZXJJY29uKGh1bWFuW2dlbmRlclByb3BlcnR5XSwgZm9ybWF0KX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgcGVvcGxlUm93LmlubmVySFRNTCArPSBodW1hbkNvbHVtbjtcclxuICAgIH0pO1xyXG5cclxuICAgIHBlb3BsZVNlY3Rpb25Jbm5lci5hcHBlbmQocGVvcGxlUm93KTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcm1hdFByb3BlcnR5ID0gKHByb3BlcnR5KSA9PiBwcm9wZXJ0eS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BlcnR5LnNsaWNlKDEpLnJlcGxhY2VBbGwoJ18nLCBcIiBcIik7XHJcblxyXG5leHBvcnQgY29uc3Qgc2hvd1BsYW5ldHMgPSBhc3luYyAocGxhbmV0cywgaW1hZ2VzLCBmb3JtYXQpID0+IHtcclxuICAgIGNvbnN0IHBsYW5ldHNMaXN0ID0gcGxhbmV0cy5yZXN1bHRzO1xyXG4gICAgY29uc3QgcGxhbmV0c0ltYWdlcyA9IGltYWdlcy5wbGFuZXRzO1xyXG4gICAgY29uc3QgcHJldlVybCA9IHBsYW5ldHMucHJldmlvdXM7XHJcbiAgICBjb25zdCBuZXh0VXJsID0gcGxhbmV0cy5uZXh0O1xyXG4gICAgY29uc3QgcGxhbmV0c0xpbmtzID0gcGxhbmV0cy5yZXN1bHRzLm1hcChwbGFuZXQgPT4gcGxhbmV0LnVybCk7XHJcblxyXG4gICAgY29uc3QgY29udGVudE1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xyXG4gICAgY29uc3QgcGxhbmV0c1NlY3Rpb24gPSBjb250ZW50TWFpbi5xdWVyeVNlbGVjdG9yKCcucGxhbmV0cy1zZWN0aW9uJyk7XHJcbiAgICBjb25zdCBwbGFuZXRzU2VjdGlvbklubmVyID0gcGxhbmV0c1NlY3Rpb24ucXVlcnlTZWxlY3RvcignLnNlY3Rpb25fX2lubmVyJyk7XHJcbiAgICBjb25zdCBwbGFuZXRzVGl0bGUgPSBwbGFuZXRzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9fdGl0bGUnKTtcclxuICAgIGNvbnN0IHBsYW5ldHNSb3cgPSBwbGFuZXRzU2VjdGlvbklubmVyLnF1ZXJ5U2VsZWN0b3IoJy5yb3cucGxhbmV0cy1yb3cnKTtcclxuXHJcbiAgICBwbGFuZXRzVGl0bGUudGV4dENvbnRlbnQgPSBgUGxhbmV0cyBmcm9tIFwiU3RhciBXYXJzXCJgO1xyXG4gICAgcGxhbmV0c1Jvdy5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgICBjb25zdCBuYW1lUHJvcGVydHkgPSBmb3JtYXQgPT09ICd3b29raWVlJyA/ICd3aHJhc2N3bycgOiAnbmFtZSc7XHJcblxyXG4gICAgcGxhbmV0c0xpc3QuZm9yRWFjaChhc3luYyAocGxhbmV0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldEluZm8gPSBhd2FpdCBsb2FkSlNPTihwbGFuZXQudXJsICsgJz9mb3JtYXQ9JyArIGZvcm1hdCk7XHJcbiAgICAgICAgY29uc3QgcGxhbmV0SW1hZ2VQYXRoID0gcGxhbmV0c0ltYWdlc1twbGFuZXRzTGlua3NbaW5kZXhdXTtcclxuICAgICAgICBjb25zdCBwbGFuZXRDb2x1bW4gPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz0nY29sLWxnLTMgY29sLW1kLTYgcGxhbmV0LXdyYXBwZXInPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9J3BsYW5ldCc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsYW5ldF9faGVhZGVyJz5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J3BsYW5ldF9fcGhvdG8nIHNyYz0nJHtwbGFuZXRJbWFnZVBhdGh9Jz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J3BsYW5ldF9fYm9keSc+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9J3BsYW5ldF9fbmFtZSc+JHtwbGFuZXRJbmZvW25hbWVQcm9wZXJ0eV19PC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBwbGFuZXRzUm93LmlubmVySFRNTCArPSBwbGFuZXRDb2x1bW47XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2LWJ0bicpO1xyXG4gICAgY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0LWJ0bicpO1xyXG5cclxuICAgIHByZXZCdXR0b24uZGF0YXNldC51cmwgPSBwcmV2VXJsICE9PSBudWxsID8gcHJldlVybCA6ICcnO1xyXG4gICAgbmV4dEJ1dHRvbi5kYXRhc2V0LnVybCA9IG5leHRVcmwgIT09IG51bGwgPyBuZXh0VXJsIDogJyc7XHJcbn1cclxuXHJcbi8vIDE0XHJcblxyXG5leHBvcnQgZnVuY3Rpb24qIGNyZWF0ZUlkR2VuZXJhdG9yKCkge1xyXG4gICAgbGV0IGkgPSAwO1xyXG5cclxuICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgeWllbGQgaSsrO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhc2stY29udHJvbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staW5wdXQge1xcclxcbiAgICBtYXJnaW46IDAgMjBweCAxMHB4IDA7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAyNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stb3V0cHV0IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2Nrcy1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2N1YmUvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRhc2stY29udHJvbHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staW5wdXQge1xcclxcbiAgICBtYXJnaW46IDAgMjBweCAxMHB4IDA7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAyNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stb3V0cHV0IHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJsb2Nrcy1yb3cge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxyXFxuICBvdmVyZmxvdy1hbmNob3I6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi53cmFwcGVyIHtcXHJcXG4gIG92ZXJmbG93LWFuY2hvcjogbm9uZVxcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbiB7XFxyXFxuICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VjdGlvbl9faW5uZXIge1xcclxcbiAgcGFkZGluZzogMHB4IDEwcHggMjBweCAxMHB4O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsU0FBUztFQUNULFVBQVU7RUFDVixTQUFTO0VBQ1Qsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcclxcbiAgb3ZlcmZsb3ctYW5jaG9yOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JhcHBlciB7XFxyXFxuICBvdmVyZmxvdy1hbmNob3I6IG5vbmVcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb24ge1xcclxcbiAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlY3Rpb25fX2lubmVyIHtcXHJcXG4gIHBhZGRpbmc6IDBweCAxMHB4IDIwcHggMTBweDtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi4vZ2xvYmFsLmNzcyc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5cclxuaW1wb3J0IHtcclxuICAgIGdldFJhbmRvbUNvbG9yLCBjcmVhdGVCbG9jaywgZ2VuZXJhdGVCbG9ja3NcclxufSBmcm9tICcuLi9leHBvcnRzJztcclxuXHJcblxyXG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWZvcm0nKTtcclxuY29uc3QgZGVmYXVsdFNpemUgPSA1MDtcclxuY29uc3QgZGVmYXVsdENvbHMgPSA1O1xyXG5jb25zdCBkZWZhdWx0Um93cyA9IDU7XHJcblxyXG5nZW5lcmF0ZUJsb2NrcyhkZWZhdWx0U2l6ZSwgZGVmYXVsdENvbHMsIGRlZmF1bHRSb3dzKTtcclxubGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZ2VuZXJhdGVCbG9ja3MsIDEwMDAsIGRlZmF1bHRTaXplLCBkZWZhdWx0Q29scywgZGVmYXVsdFJvd3MpO1xyXG5cclxudGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgY29uc3Qgc2l6ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaXplJykudmFsdWUgfHwgZGVmYXVsdFNpemU7XHJcbiAgICBjb25zdCBjb2xzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbHMnKS52YWx1ZSB8fCBkZWZhdWx0Q29scztcclxuICAgIGNvbnN0IHJvd3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm93cycpLnZhbHVlIHx8IGRlZmF1bHRSb3dzO1xyXG5cclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG4gICAgZ2VuZXJhdGVCbG9ja3Moc2l6ZSwgY29scywgcm93cyk7XHJcbiAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGdlbmVyYXRlQmxvY2tzLCAxMDAwLCBzaXplLCBjb2xzLCByb3dzKTtcclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9