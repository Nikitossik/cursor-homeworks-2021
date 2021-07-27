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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/drumpad/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/drumpad/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/background.jpg */ "./src/drumpad/images/background.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".banner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center / cover;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.banner::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.4);\r\n    z-index: 0;\r\n}\r\n\r\n.sound-button {\r\n    cursor: pointer;\r\n    width: 100px;\r\n    padding: 20px 0;\r\n    z-index: 1;\r\n    margin: 0 8px 8px 8px;\r\n    background: rgba(255, 255, 255, 0.15);\r\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\r\n    backdrop-filter: blur(10px);\r\n    -webkit-backdrop-filter: blur(10px);\r\n    border-radius: 10px;\r\n    border: 3px solid rgba(255, 255, 255, 0.25);\r\n    transition: 0.2s all ease;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sound-button__key {\r\n    font-size: 2em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    user-select: none;\r\n    pointer-events: none;\r\n}\r\n\r\n.sound-button__sound-name {\r\n    font-size: 1em;\r\n    color: #ffb235;\r\n    user-select: none;\r\n    pointer-events: none;\r\n}\r\n\r\n.sound-button__playing {\r\n    transform: scale(1.1);\r\n    border-color: #ffb235;\r\n}", "",{"version":3,"sources":["webpack://./src/drumpad/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,WAAW;IACX,aAAa;IACb,mFAA0E;IAC1E,UAAU;IACV,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,QAAQ;IACR,SAAS;IACT,WAAW;IACX,YAAY;IACZ,8BAA8B;IAC9B,UAAU;AACd;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;IACf,UAAU;IACV,qBAAqB;IACrB,qCAAqC;IACrC,gDAAgD;IAChD,2BAA2B;IAC3B,mCAAmC;IACnC,mBAAmB;IACnB,2CAA2C;IAC3C,yBAAyB;;IAEzB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,yBAAyB;IACzB,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,iBAAiB;IACjB,oBAAoB;AACxB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB","sourcesContent":[".banner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    background: url(\"./images/background.jpg\") no-repeat center center / cover;\r\n    z-index: 1;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.banner::before {\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background: rgba(0, 0, 0, 0.4);\r\n    z-index: 0;\r\n}\r\n\r\n.sound-button {\r\n    cursor: pointer;\r\n    width: 100px;\r\n    padding: 20px 0;\r\n    z-index: 1;\r\n    margin: 0 8px 8px 8px;\r\n    background: rgba(255, 255, 255, 0.15);\r\n    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);\r\n    backdrop-filter: blur(10px);\r\n    -webkit-backdrop-filter: blur(10px);\r\n    border-radius: 10px;\r\n    border: 3px solid rgba(255, 255, 255, 0.25);\r\n    transition: 0.2s all ease;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n\r\n.sound-button__key {\r\n    font-size: 2em;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n    line-height: 1.2;\r\n    user-select: none;\r\n    pointer-events: none;\r\n}\r\n\r\n.sound-button__sound-name {\r\n    font-size: 1em;\r\n    color: #ffb235;\r\n    user-select: none;\r\n    pointer-events: none;\r\n}\r\n\r\n.sound-button__playing {\r\n    transform: scale(1.1);\r\n    border-color: #ffb235;\r\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }

  if (!url) {
    return url;
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-bounce-2.wav":
/*!************************************************!*\
  !*** ./src/drumpad/audio/8bitkit-bounce-2.wav ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "b89029b77ab6ead645d208bcf8e5f0da.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-coin-10.wav":
/*!***********************************************!*\
  !*** ./src/drumpad/audio/8bitkit-coin-10.wav ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "54d8761d5853aff7571d848e25b8420c.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-explosion-2.wav":
/*!***************************************************!*\
  !*** ./src/drumpad/audio/8bitkit-explosion-2.wav ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "2c65c0205b6afb9b51bd21d551143476.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-fall.wav":
/*!********************************************!*\
  !*** ./src/drumpad/audio/8bitkit-fall.wav ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ace33dadee64fde36650e74aac063be9.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-hit-4.wav":
/*!*********************************************!*\
  !*** ./src/drumpad/audio/8bitkit-hit-4.wav ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "0c988b1cc0ed166a3b39d22940ce61af.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-jump-6.wav":
/*!**********************************************!*\
  !*** ./src/drumpad/audio/8bitkit-jump-6.wav ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "257b5665d4584902ea07e76fcd25ff2a.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-laser-4.wav":
/*!***********************************************!*\
  !*** ./src/drumpad/audio/8bitkit-laser-4.wav ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "6d022aff8cdf01842109329a0c8bf53f.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-powerup-2.wav":
/*!*************************************************!*\
  !*** ./src/drumpad/audio/8bitkit-powerup-2.wav ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "7628c1e5f867a09c9320e57a6b9470de.wav");

/***/ }),

/***/ "./src/drumpad/audio/8bitkit-select-8.wav":
/*!************************************************!*\
  !*** ./src/drumpad/audio/8bitkit-select-8.wav ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "d9e8126f95de872668ff04d85317988d.wav");

/***/ }),

/***/ "./src/drumpad/style.css":
/*!*******************************!*\
  !*** ./src/drumpad/style.css ***!
  \*******************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/drumpad/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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

/***/ }),

/***/ "./src/drumpad/images/background.jpg":
/*!*******************************************!*\
  !*** ./src/drumpad/images/background.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "daebf9785f4e06a85232.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"drumpad": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/drumpad/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exports__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exports */ "./src/exports.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/drumpad/style.css");
/* harmony import */ var _audio_8bitkit_bounce_2_wav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./audio/8bitkit-bounce-2.wav */ "./src/drumpad/audio/8bitkit-bounce-2.wav");
/* harmony import */ var _audio_8bitkit_coin_10_wav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audio/8bitkit-coin-10.wav */ "./src/drumpad/audio/8bitkit-coin-10.wav");
/* harmony import */ var _audio_8bitkit_explosion_2_wav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./audio/8bitkit-explosion-2.wav */ "./src/drumpad/audio/8bitkit-explosion-2.wav");
/* harmony import */ var _audio_8bitkit_fall_wav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audio/8bitkit-fall.wav */ "./src/drumpad/audio/8bitkit-fall.wav");
/* harmony import */ var _audio_8bitkit_hit_4_wav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./audio/8bitkit-hit-4.wav */ "./src/drumpad/audio/8bitkit-hit-4.wav");
/* harmony import */ var _audio_8bitkit_jump_6_wav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./audio/8bitkit-jump-6.wav */ "./src/drumpad/audio/8bitkit-jump-6.wav");
/* harmony import */ var _audio_8bitkit_laser_4_wav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./audio/8bitkit-laser-4.wav */ "./src/drumpad/audio/8bitkit-laser-4.wav");
/* harmony import */ var _audio_8bitkit_powerup_2_wav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./audio/8bitkit-powerup-2.wav */ "./src/drumpad/audio/8bitkit-powerup-2.wav");
/* harmony import */ var _audio_8bitkit_select_8_wav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./audio/8bitkit-select-8.wav */ "./src/drumpad/audio/8bitkit-select-8.wav");











var audioLinks = [_audio_8bitkit_bounce_2_wav__WEBPACK_IMPORTED_MODULE_2__.default, _audio_8bitkit_coin_10_wav__WEBPACK_IMPORTED_MODULE_3__.default, _audio_8bitkit_explosion_2_wav__WEBPACK_IMPORTED_MODULE_4__.default, _audio_8bitkit_fall_wav__WEBPACK_IMPORTED_MODULE_5__.default, _audio_8bitkit_hit_4_wav__WEBPACK_IMPORTED_MODULE_6__.default, _audio_8bitkit_jump_6_wav__WEBPACK_IMPORTED_MODULE_7__.default, _audio_8bitkit_laser_4_wav__WEBPACK_IMPORTED_MODULE_8__.default, _audio_8bitkit_powerup_2_wav__WEBPACK_IMPORTED_MODULE_9__.default, _audio_8bitkit_select_8_wav__WEBPACK_IMPORTED_MODULE_10__.default];
var audios = document.querySelectorAll('audio.sound');
audios.forEach(function (audio, index) {
  audio.src = audioLinks[index];
});
document.addEventListener('keyup', function (e) {
  var code = e.keyCode;
  var audio = document.querySelector("audio[data-key='".concat(code, "']"));
  var soundButton = document.querySelector(".sound-button[data-key='".concat(code, "']"));
  (0,_exports__WEBPACK_IMPORTED_MODULE_0__.playAudio)(audio);
  soundButton.classList.add('sound-button__playing');
});
var soundButtons = document.querySelectorAll('.sound-button');
soundButtons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    var code = e.target.dataset.key;
    var audio = document.querySelector("audio[data-key='".concat(code, "']"));
    (0,_exports__WEBPACK_IMPORTED_MODULE_0__.playAudio)(audio);
    button.classList.add('sound-button__playing');
  });
});
soundButtons.forEach(function (button) {
  button.addEventListener('transitionend', function (e) {
    var prop = e.propertyName;
    if (prop == 'transform') button.classList.remove('sound-button__playing');
  });
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZXhwb3J0cy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZHJ1bXBhZC9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9kcnVtcGFkL2F1ZGlvLzhiaXRraXQtYm91bmNlLTIud2F2Iiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL3NyYy9kcnVtcGFkL2F1ZGlvLzhiaXRraXQtY29pbi0xMC53YXYiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RydW1wYWQvYXVkaW8vOGJpdGtpdC1leHBsb3Npb24tMi53YXYiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RydW1wYWQvYXVkaW8vOGJpdGtpdC1mYWxsLndhdiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZHJ1bXBhZC9hdWRpby84Yml0a2l0LWhpdC00LndhdiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZHJ1bXBhZC9hdWRpby84Yml0a2l0LWp1bXAtNi53YXYiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RydW1wYWQvYXVkaW8vOGJpdGtpdC1sYXNlci00LndhdiIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZHJ1bXBhZC9hdWRpby84Yml0a2l0LXBvd2VydXAtMi53YXYiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RydW1wYWQvYXVkaW8vOGJpdGtpdC1zZWxlY3QtOC53YXYiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2RydW1wYWQvc3R5bGUuY3NzPzAwMjYiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stZGVtby8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stZGVtby93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLWRlbW8vLi9zcmMvZHJ1bXBhZC9pbmRleC5qcyJdLCJuYW1lcyI6WyJjcmVhdGVJZEdlbmVyYXRvciIsImlzUGFseW5kcm9tIiwic3RyaW5nIiwiY29tcHJlc3NlZCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZUFsbCIsInNwbGl0Iiwiam9pbiIsInJldmVyc2VkIiwicmV2ZXJzZSIsInN0dWRlbnRzIiwibWFya3MiLCJzZXRTdHVkZW50c01hcmtzIiwic3R1ZGVudHNNYXJrcyIsImkiLCJsZW5ndGgiLCJyZXBsYWNlQmFkV29yZHMiLCJhZGRpdGlvbmFsIiwiZXhwbGV0aXZlcyIsIndvcmRzIiwibWFwIiwid29yZCIsInNvbWUiLCJjdXJzZSIsImluY2x1ZGVzIiwiZm91bmRDdXJzZXMiLCJmaWx0ZXIiLCJmb3JFYWNoIiwiY2Vuc3VyZSIsInJlcGVhdCIsInJlZ0V4cCIsIlJlZ0V4cCIsImNhbGN1bGF0ZVdvcmRMZXR0ZXJzIiwicmVwZWF0cyIsInJlZHVjZSIsInJlc3VsdE9iaiIsImxldHRlciIsInVrcmFpbmUiLCJ0YXgiLCJtaWRkbGVTYWxhcnkiLCJ2YWNhbmNpZXMiLCJnZXRUb3RhbFRheGVzIiwiTWF0aCIsImZsb29yIiwiU3R1ZGVudCIsInVuaXZlcnNpdHkiLCJjb3Vyc2UiLCJmdWxsTmFtZSIsImFjY2VwdGVkIiwic3VtIiwicHJldiIsInRvdGFsIiwiY291bnQiLCJ0b0ZpeGVkIiwibWFyayIsInB1c2giLCJnZXRSYW5kb21Db2xvciIsImNvbG9yIiwicmFuZG9tIiwiY3JlYXRlQmxvY2siLCJzaXplIiwiYmxvY2siLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwiZ2VuZXJhdGVCbG9ja3MiLCJjb2xzIiwicm93cyIsImNvbnRhaW5lciIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJyb3ciLCJqIiwiYXBwZW5kIiwicGxheUF1ZGlvIiwiYXVkaW8iLCJjdXJyZW50VGltZSIsInBsYXkiLCJnZXRSYW5kb21DaGluZXNlIiwicmVzdWx0IiwiaXRlcmF0aW9uIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwiY2hpbmVzZSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIkRhdGUiLCJub3ciLCJ0b1N0cmluZyIsInNsaWNlIiwibG9hZEpTT04iLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJkYXRhIiwianNvbiIsImxvYWRQZW9wbGUiLCJmaWxtIiwiZm9ybWF0IiwiY2hhcmFjdGVyc0xpbmtzIiwiY2hhcmFjdGVycyIsInJlcXVlc3RzIiwiY2hhcmFjdGVyTGluayIsImFsbCIsImdldEdlbmRlckljb24iLCJnZW5kZXIiLCJtYWxlVmFsdWUiLCJmZW1hbGVWYWx1ZSIsInNob3dQZW9wbGUiLCJwZW9wbGUiLCJpbWFnZXMiLCJwZW9wbGVJbWFnZXMiLCJjb250ZW50TWFpbiIsInBlb3BsZVNlY3Rpb24iLCJwZW9wbGVTZWN0aW9uSW5uZXIiLCJwZW9wbGVUaXRsZSIsInBlb3BsZVJvdyIsInRleHRDb250ZW50IiwiZXBpc29kZV9pZCIsInRpdGxlIiwibmFtZVByb3BlcnR5IiwiYmlydGhZZWFyUHJvcGVydHkiLCJnZW5kZXJQcm9wZXJ0eSIsImh1bWFuIiwiaW5kZXgiLCJodW1hbkltYWdlUGF0aCIsImh1bWFuQ29sdW1uIiwiZm9ybWF0UHJvcGVydHkiLCJwcm9wZXJ0eSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2hvd1BsYW5ldHMiLCJwbGFuZXRzIiwicGxhbmV0c0xpc3QiLCJyZXN1bHRzIiwicGxhbmV0c0ltYWdlcyIsInByZXZVcmwiLCJwcmV2aW91cyIsIm5leHRVcmwiLCJuZXh0IiwicGxhbmV0c0xpbmtzIiwicGxhbmV0IiwicGxhbmV0c1NlY3Rpb24iLCJwbGFuZXRzU2VjdGlvbklubmVyIiwicGxhbmV0c1RpdGxlIiwicGxhbmV0c1JvdyIsInBsYW5ldEluZm8iLCJwbGFuZXRJbWFnZVBhdGgiLCJwbGFuZXRDb2x1bW4iLCJwcmV2QnV0dG9uIiwiZ2V0RWxlbWVudEJ5SWQiLCJuZXh0QnV0dG9uIiwiZGF0YXNldCIsImF1ZGlvTGlua3MiLCJib3VuY2UiLCJjb2luIiwiZXhwbG9zaW9uIiwiZmFsbCIsImhpdCIsImp1bXAiLCJsYXNlciIsInBvd2VydXAiLCJzZWxlY3QiLCJhdWRpb3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwic3JjIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjb2RlIiwia2V5Q29kZSIsInNvdW5kQnV0dG9uIiwic291bmRCdXR0b25zIiwiYnV0dG9uIiwidGFyZ2V0Iiwia2V5IiwicHJvcCIsInByb3BlcnR5TmFtZSIsInJlbW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttREEwUmlCQSxpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUExUmpCO0FBRU8sU0FBU0MsV0FBVCxDQUFxQkMsTUFBckIsRUFBNkI7QUFDaEMsTUFBTUMsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVAsR0FBcUJDLFVBQXJCLENBQWdDLGFBQWhDLEVBQStDLEVBQS9DLEVBQW1EQyxLQUFuRCxDQUF5RCxFQUF6RCxFQUE2REMsSUFBN0QsQ0FBa0UsRUFBbEUsQ0FBbkI7QUFDQSxNQUFNQyxRQUFRLEdBQUdMLFVBQVUsQ0FBQ0csS0FBWCxDQUFpQixFQUFqQixFQUFxQkcsT0FBckIsR0FBK0JGLElBQS9CLENBQW9DLEVBQXBDLENBQWpCO0FBRUEsMERBQWtCTCxNQUFsQixnQkFBNkJDLFVBQVUsS0FBS0ssUUFBZixHQUEwQixF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QU1nSCxZQUFZLEdBQUduSCxRQUFRLENBQUM0RyxnQkFBVCxDQUEwQixlQUExQixDQUFyQjtBQUVBTyxZQUFZLENBQUN0SixPQUFiLENBQXFCLFVBQVV1SixNQUFWLEVBQWtCO0FBQ25DQSxRQUFNLENBQUNOLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVVDLENBQVYsRUFBYTtBQUMxQyxRQUFNQyxJQUFJLEdBQUdELENBQUMsQ0FBQ00sTUFBRixDQUFTckIsT0FBVCxDQUFpQnNCLEdBQTlCO0FBQ0EsUUFBTXBHLEtBQUssR0FBR2xCLFFBQVEsQ0FBQ1ksYUFBVCwyQkFBMENvRyxJQUExQyxRQUFkO0FBQ0EvRix1REFBUyxDQUFDQyxLQUFELENBQVQ7QUFDQWtHLFVBQU0sQ0FBQ2xILFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLHVCQUFyQjtBQUNILEdBTEQ7QUFNSCxDQVBEO0FBU0FnSCxZQUFZLENBQUN0SixPQUFiLENBQXFCLFVBQVV1SixNQUFWLEVBQWtCO0FBQ25DQSxRQUFNLENBQUNOLGdCQUFQLENBQXdCLGVBQXhCLEVBQXlDLFVBQVVDLENBQVYsRUFBYTtBQUNsRCxRQUFNUSxJQUFJLEdBQUdSLENBQUMsQ0FBQ1MsWUFBZjtBQUNBLFFBQUlELElBQUksSUFBSSxXQUFaLEVBQXlCSCxNQUFNLENBQUNsSCxTQUFQLENBQWlCdUgsTUFBakIsQ0FBd0IsdUJBQXhCO0FBQzVCLEdBSEQ7QUFJSCxDQUxELEUiLCJmaWxlIjoiZHJ1bXBhZC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAzXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQYWx5bmRyb20oc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjb21wcmVzc2VkID0gc3RyaW5nLnRvTG93ZXJDYXNlKCkucmVwbGFjZUFsbCgvW1xcc+KAlF8sXFwuXS9naSwgJycpLnNwbGl0KCcnKS5qb2luKCcnKTtcclxuICAgIGNvbnN0IHJldmVyc2VkID0gY29tcHJlc3NlZC5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG5cclxuICAgIHJldHVybiBg0KHRgtGA0L7QutCwIFwiJHtzdHJpbmd9XCIgJHtjb21wcmVzc2VkID09PSByZXZlcnNlZCA/ICcnIDogJ9C90LUgJ33Rj9Cy0LvRj9C10YLRjNGB0Y8g0L/QvtC70LjQvdC00YDQvtC80L7QvGA7XHJcbn1cclxuXHJcbi8vIDQgXHJcblxyXG5leHBvcnQgY29uc3Qgc3R1ZGVudHMgPSBbXCLQntC70LXQutGB0LDQvdC00YBcIiwgXCLQhtCz0L7RgFwiLCBcItCe0LvQtdC90LBcIiwgXCLQhtGA0LBcIiwgXCLQntC70LXQutGB0ZbQuVwiLCBcItCh0LLRltGC0LvQsNC90LBcIl07XHJcbmV4cG9ydCBjb25zdCBtYXJrcyA9IFs0LCA1LCA1LCAzLCA0LCA1XTtcclxuXHJcbmV4cG9ydCBjb25zdCBzZXRTdHVkZW50c01hcmtzID0gKHN0dWRlbnRzLCBtYXJrcykgPT4ge1xyXG4gICAgY29uc3Qgc3R1ZGVudHNNYXJrcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3R1ZGVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgc3R1ZGVudHNNYXJrc1tpXSA9IFtzdHVkZW50c1tpXSwgbWFya3NbaV1dO1xyXG5cclxuICAgIHJldHVybiBzdHVkZW50c01hcmtzO1xyXG59XHJcblxyXG4vLyA1XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUJhZFdvcmRzKHN0cmluZywgLi4uYWRkaXRpb25hbCkge1xyXG5cclxuICAgIGlmICghc3RyaW5nLmxlbmd0aCkgcmV0dXJuICfQktC4INC90ZbRh9C+0LPQviDQvdC1INCy0LLQtdC70LghJztcclxuXHJcbiAgICBjb25zdCBleHBsZXRpdmVzID0gWydzaGl0JywgJ2Z1Y2snLCAuLi5hZGRpdGlvbmFsXTtcclxuICAgIGxldCB3b3JkcyA9IHN0cmluZy5zcGxpdCgnICcpO1xyXG4gICAgd29yZHMgPSB3b3Jkcy5tYXAod29yZCA9PiB7XHJcbiAgICAgICAgaWYgKGV4cGxldGl2ZXMuc29tZShjdXJzZSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY3Vyc2UpKSkge1xyXG4gICAgICAgICAgICBsZXQgZm91bmRDdXJzZXMgPSBleHBsZXRpdmVzLmZpbHRlcihjdXJzZSA9PiB3b3JkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoY3Vyc2UpKTtcclxuICAgICAgICAgICAgZm91bmRDdXJzZXMuZm9yRWFjaChjdXJzZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2Vuc3VyZSA9ICcqJy5yZXBlYXQoY3Vyc2UubGVuZ3RoKSwgcmVnRXhwID0gbmV3IFJlZ0V4cChjdXJzZSwgJ2dpJyk7XHJcbiAgICAgICAgICAgICAgICB3b3JkID0gd29yZC5yZXBsYWNlQWxsKHJlZ0V4cCwgY2Vuc3VyZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHdvcmQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB3b3Jkcy5qb2luKCcgJyk7XHJcbn1cclxuXHJcbi8vIDZcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjYWxjdWxhdGVXb3JkTGV0dGVycyh3b3JkKSB7XHJcbiAgICBpZiAoIXdvcmQpIHJldHVybiAn0J/Rg9GB0YLQtSDRgdC70L7QstC+JztcclxuICAgIGNvbnN0IHJlcGVhdHMgPSBbLi4ud29yZF0ucmVkdWNlKChyZXN1bHRPYmosIGxldHRlcikgPT4ge1xyXG4gICAgICAgIHJlc3VsdE9ialtsZXR0ZXJdID0gbGV0dGVyIGluIHJlc3VsdE9iaiA/IHJlc3VsdE9ialtsZXR0ZXJdIDogMDtcclxuICAgICAgICByZXN1bHRPYmpbbGV0dGVyXSsrO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRPYmo7XHJcbiAgICB9LCB7fSk7XHJcblxyXG4gICAgcmV0dXJuIHJlcGVhdHM7XHJcbn1cclxuXHJcbi8vIDdcclxuXHJcbmV4cG9ydCBjb25zdCB1a3JhaW5lID0geyB0YXg6IDAuMTk1LCBtaWRkbGVTYWxhcnk6IDE3ODksIHZhY2FuY2llczogMTE0NzYgfTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUb3RhbFRheGVzKCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGhpcy50YXggKiB0aGlzLm1pZGRsZVNhbGFyeSAqIHRoaXMudmFjYW5jaWVzKTtcclxufVxyXG5cclxuLy84IFxyXG5cclxuZXhwb3J0IGNsYXNzIFN0dWRlbnQge1xyXG4gICAgY29uc3RydWN0b3IodW5pdmVyc2l0eSwgY291cnNlLCBmdWxsTmFtZSkge1xyXG4gICAgICAgIHRoaXMudW5pdmVyc2l0eSA9IHVuaXZlcnNpdHk7XHJcbiAgICAgICAgdGhpcy5jb3Vyc2UgPSBjb3Vyc2U7XHJcbiAgICAgICAgdGhpcy5mdWxsTmFtZSA9IGZ1bGxOYW1lO1xyXG4gICAgICAgIHRoaXMubWFya3MgPSBbXTtcclxuICAgICAgICB0aGlzLmFjY2VwdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBg0KHRgtGD0LTQtdC90YIgJHt0aGlzLmNvdXJzZX0t0LPQviDQutGD0YDRgdGDICR7dGhpcy51bml2ZXJzaXR5fSwgJHt0aGlzLmZ1bGxOYW1lfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXZlcmFnZU1hcmsgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWQpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3VtID0gdGhpcy5tYXJrcy5yZWR1Y2UoKHByZXYsIHRvdGFsKSA9PiB0b3RhbCArIHByZXYsIDApO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMubWFya3MubGVuZ3RoO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuICsoc3VtIC8gY291bnQpLnRvRml4ZWQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzdHVkZW50TWFya3MoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWNjZXB0ZWQpIHJldHVybiB0aGlzLm1hcmtzO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzdHVkZW50TWFya3MobWFyaykge1xyXG4gICAgICAgIGlmICh0aGlzLmFjY2VwdGVkKSB0aGlzLm1hcmtzLnB1c2gobWFyayk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzbWlzcyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjY2VwdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVjb3ZlciA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjY2VwdGVkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gOVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFJhbmRvbUNvbG9yID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29sb3IgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xyXG4gICAgICAgIGNvbG9yLnB1c2goTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMjU2KSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGByZ2IoJHtjb2xvclswXX0sJHtjb2xvclsxXX0sJHtjb2xvclsyXX0pYDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUJsb2NrID0gKHNpemUsIGNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZCgnYmxvY2snKTtcclxuICAgIGJsb2NrLnN0eWxlLndpZHRoID0gYCR7c2l6ZX1weGA7XHJcbiAgICBibG9jay5zdHlsZS5oZWlnaHQgPSBgJHtzaXplfXB4YDtcclxuICAgIGJsb2NrLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbG9yO1xyXG5cclxuICAgIHJldHVybiBibG9jaztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdlbmVyYXRlQmxvY2tzID0gKHNpemUgPSA1MCwgY29scyA9IDUsIHJvd3MgPSA1KSA9PiB7XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyk7XHJcblxyXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcclxuICAgICAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICByb3cuY2xhc3NMaXN0LmFkZCgnYmxvY2tzLXJvdycpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKykge1xyXG4gICAgICAgICAgICBjb25zdCBibG9jayA9IGNyZWF0ZUJsb2NrKHNpemUsIGdldFJhbmRvbUNvbG9yKCkpO1xyXG4gICAgICAgICAgICByb3cuYXBwZW5kKGJsb2NrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChyb3cpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyAxMCAoYXVkaW8gcGxheSBmdW5jKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBsYXlBdWRpbyhhdWRpbykge1xyXG4gICAgaWYgKCFhdWRpbykgcmV0dXJuO1xyXG4gICAgYXVkaW8uY3VycmVudFRpbWUgPSAwO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG59XHJcblxyXG5cclxuLy8gMTFcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSYW5kb21DaGluZXNlKGxlbmd0aCkge1xyXG4gICAgbGV0IHJlc3VsdCA9ICcnO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBpdGVyYXRpb24gPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNoaW5lc2UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCtEYXRlLm5vdygpLnRvU3RyaW5nKCkuc2xpY2UoLTUpKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoY2hpbmVzZSk7XHJcbiAgICAgICAgICAgIH0sIDUwICogaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmVzdWx0ICs9IGF3YWl0IGl0ZXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG4vLyAxM1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRKU09OID0gKHVybCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCkudGhlbihkYXRhID0+IGRhdGEuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRQZW9wbGUgPSAoZmlsbSwgZm9ybWF0KSA9PiB7XHJcbiAgICBjb25zdCBjaGFyYWN0ZXJzTGlua3MgPSBmaWxtLmNoYXJhY3RlcnM7XHJcbiAgICBjb25zdCByZXF1ZXN0cyA9IGNoYXJhY3RlcnNMaW5rcy5tYXAoY2hhcmFjdGVyTGluayA9PiBsb2FkSlNPTihjaGFyYWN0ZXJMaW5rICsgJz9mb3JtYXQ9JyArIGZvcm1hdCkpO1xyXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHJlcXVlc3RzKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEdlbmRlckljb24gPSAoZ2VuZGVyLCBmb3JtYXQpID0+IHtcclxuICAgIGNvbnN0IG1hbGVWYWx1ZSA9IGZvcm1hdCA9PT0gJ3dvb2tpZWUnID8gJ3NjcmFhbndvJyA6ICdtYWxlJztcclxuICAgIGNvbnN0IGZlbWFsZVZhbHVlID0gZm9ybWF0ID09PSAnd29va2llZScgPyAnd3d3b3NjcmFhbndvJyA6ICdmZW1hbGUnO1xyXG4gICAgaWYgKGdlbmRlciA9PT0gbWFsZVZhbHVlKSByZXR1cm4gJzxzcGFuIGNsYXNzPVwiZ2VuZGVyXCI+PGkgY2xhc3M9XCJmYXMgZmEtbWFyc1wiPjwvaT48L3NwYW4+JztcclxuICAgIGVsc2UgaWYgKGdlbmRlciA9PT0gZmVtYWxlVmFsdWUpIHJldHVybiAnPHNwYW4gY2xhc3M9XCJnZW5kZXJcIj48aSBjbGFzcz1cImZhcyBmYS12ZW51c1wiPjwvaT48L3NwYW4+JztcclxuICAgIHJldHVybiBgPHNwYW4gY2xhc3M9XCJnZW5kZXJcIj4ke2dlbmRlcn08L3NwYW4+YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dQZW9wbGUgPSBhc3luYyAocGVvcGxlLCBpbWFnZXMsIGZpbG0sIGZvcm1hdCkgPT4ge1xyXG4gICAgY29uc3QgcGVvcGxlSW1hZ2VzID0gaW1hZ2VzLnBlb3BsZTtcclxuICAgIGNvbnN0IGNoYXJhY3RlcnNMaW5rcyA9IGZpbG0uY2hhcmFjdGVycztcclxuXHJcbiAgICBjb25zdCBjb250ZW50TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBwZW9wbGVTZWN0aW9uID0gY29udGVudE1haW4ucXVlcnlTZWxlY3RvcignLnBlb3BsZS1zZWN0aW9uJyk7XHJcbiAgICBjb25zdCBwZW9wbGVTZWN0aW9uSW5uZXIgPSBwZW9wbGVTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX19pbm5lcicpO1xyXG4gICAgY29uc3QgcGVvcGxlVGl0bGUgPSBwZW9wbGVTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX190aXRsZScpO1xyXG4gICAgY29uc3QgcGVvcGxlUm93ID0gcGVvcGxlU2VjdGlvbklubmVyLnF1ZXJ5U2VsZWN0b3IoJy5yb3cucGVvcGxlLXJvdycpO1xyXG5cclxuICAgIHBlb3BsZVRpdGxlLnRleHRDb250ZW50ID0gYFBlb3BsZSBmcm9tIGVwaXNvZGUgJHtmaWxtLmVwaXNvZGVfaWR9OiBcIiR7ZmlsbS50aXRsZX1cImA7XHJcbiAgICBwZW9wbGVSb3cuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgY29uc3QgbmFtZVByb3BlcnR5ID0gZm9ybWF0ID09PSAnd29va2llZScgPyAnd2hyYXNjd28nIDogJ25hbWUnO1xyXG4gICAgY29uc3QgYmlydGhZZWFyUHJvcGVydHkgPSBmb3JtYXQgPT09ICd3b29raWVlJyA/ICdyaGFocmNhb2FjX3Jvd29yYXJjJyA6ICdiaXJ0aF95ZWFyJztcclxuICAgIGNvbnN0IGdlbmRlclByb3BlcnR5ID0gZm9ybWF0ID09PSAnd29va2llZScgPyAncnJ3b3dod2F3b3JjJyA6ICdnZW5kZXInO1xyXG5cclxuICAgIHBlb3BsZS5mb3JFYWNoKChodW1hbiwgaW5kZXgpID0+IHtcclxuICAgICAgICBjb25zdCBodW1hbkltYWdlUGF0aCA9IHBlb3BsZUltYWdlc1tjaGFyYWN0ZXJzTGlua3NbaW5kZXhdXTtcclxuICAgICAgICBjb25zdCBodW1hbkNvbHVtbiA9IGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0nY29sLWxnLTQgY29sLW1kLTYgaHVtYW4td3JhcHBlcic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9J2h1bWFuJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2h1bWFuX19oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9J2h1bWFuX19waG90bycgc3JjPScke2h1bWFuSW1hZ2VQYXRofSc+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9J2h1bWFuX19ib2R5Jz5cclxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3M9J2h1bWFuX19uYW1lJz4ke2h1bWFuW25hbWVQcm9wZXJ0eV19PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0naHVtYW5fX2JpcnRoLXllYXInPiR7Zm9ybWF0UHJvcGVydHkoYmlydGhZZWFyUHJvcGVydHkpfTogJHtodW1hbltiaXJ0aFllYXJQcm9wZXJ0eV19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPSdodW1hbl9fZ2VuZGVyJz4ke2Zvcm1hdFByb3BlcnR5KGdlbmRlclByb3BlcnR5KX06IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAke2dldEdlbmRlckljb24oaHVtYW5bZ2VuZGVyUHJvcGVydHldLCBmb3JtYXQpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYDtcclxuICAgICAgICBwZW9wbGVSb3cuaW5uZXJIVE1MICs9IGh1bWFuQ29sdW1uO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcGVvcGxlU2VjdGlvbklubmVyLmFwcGVuZChwZW9wbGVSb3cpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9ybWF0UHJvcGVydHkgPSAocHJvcGVydHkpID0+IHByb3BlcnR5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcGVydHkuc2xpY2UoMSkucmVwbGFjZUFsbCgnXycsIFwiIFwiKTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaG93UGxhbmV0cyA9IGFzeW5jIChwbGFuZXRzLCBpbWFnZXMsIGZvcm1hdCkgPT4ge1xyXG4gICAgY29uc3QgcGxhbmV0c0xpc3QgPSBwbGFuZXRzLnJlc3VsdHM7XHJcbiAgICBjb25zdCBwbGFuZXRzSW1hZ2VzID0gaW1hZ2VzLnBsYW5ldHM7XHJcbiAgICBjb25zdCBwcmV2VXJsID0gcGxhbmV0cy5wcmV2aW91cztcclxuICAgIGNvbnN0IG5leHRVcmwgPSBwbGFuZXRzLm5leHQ7XHJcbiAgICBjb25zdCBwbGFuZXRzTGlua3MgPSBwbGFuZXRzLnJlc3VsdHMubWFwKHBsYW5ldCA9PiBwbGFuZXQudXJsKTtcclxuXHJcbiAgICBjb25zdCBjb250ZW50TWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XHJcbiAgICBjb25zdCBwbGFuZXRzU2VjdGlvbiA9IGNvbnRlbnRNYWluLnF1ZXJ5U2VsZWN0b3IoJy5wbGFuZXRzLXNlY3Rpb24nKTtcclxuICAgIGNvbnN0IHBsYW5ldHNTZWN0aW9uSW5uZXIgPSBwbGFuZXRzU2VjdGlvbi5xdWVyeVNlbGVjdG9yKCcuc2VjdGlvbl9faW5uZXInKTtcclxuICAgIGNvbnN0IHBsYW5ldHNUaXRsZSA9IHBsYW5ldHNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5zZWN0aW9uX190aXRsZScpO1xyXG4gICAgY29uc3QgcGxhbmV0c1JvdyA9IHBsYW5ldHNTZWN0aW9uSW5uZXIucXVlcnlTZWxlY3RvcignLnJvdy5wbGFuZXRzLXJvdycpO1xyXG5cclxuICAgIHBsYW5ldHNUaXRsZS50ZXh0Q29udGVudCA9IGBQbGFuZXRzIGZyb20gXCJTdGFyIFdhcnNcImA7XHJcbiAgICBwbGFuZXRzUm93LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIGNvbnN0IG5hbWVQcm9wZXJ0eSA9IGZvcm1hdCA9PT0gJ3dvb2tpZWUnID8gJ3docmFzY3dvJyA6ICduYW1lJztcclxuXHJcbiAgICBwbGFuZXRzTGlzdC5mb3JFYWNoKGFzeW5jIChwbGFuZXQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgY29uc3QgcGxhbmV0SW5mbyA9IGF3YWl0IGxvYWRKU09OKHBsYW5ldC51cmwgKyAnP2Zvcm1hdD0nICsgZm9ybWF0KTtcclxuICAgICAgICBjb25zdCBwbGFuZXRJbWFnZVBhdGggPSBwbGFuZXRzSW1hZ2VzW3BsYW5ldHNMaW5rc1tpbmRleF1dO1xyXG4gICAgICAgIGNvbnN0IHBsYW5ldENvbHVtbiA9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPSdjb2wtbGctMyBjb2wtbWQtNiBwbGFuZXQtd3JhcHBlcic+XHJcbiAgICAgICAgPGRpdiBjbGFzcz0ncGxhbmV0Jz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncGxhbmV0X19oZWFkZXInPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzcz0ncGxhbmV0X19waG90bycgc3JjPScke3BsYW5ldEltYWdlUGF0aH0nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz0ncGxhbmV0X19ib2R5Jz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz0ncGxhbmV0X19uYW1lJz4ke3BsYW5ldEluZm9bbmFtZVByb3BlcnR5XX08L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgO1xyXG4gICAgICAgIHBsYW5ldHNSb3cuaW5uZXJIVE1MICs9IHBsYW5ldENvbHVtbjtcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYtYnRuJyk7XHJcbiAgICBjb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQtYnRuJyk7XHJcblxyXG4gICAgcHJldkJ1dHRvbi5kYXRhc2V0LnVybCA9IHByZXZVcmwgIT09IG51bGwgPyBwcmV2VXJsIDogJyc7XHJcbiAgICBuZXh0QnV0dG9uLmRhdGFzZXQudXJsID0gbmV4dFVybCAhPT0gbnVsbCA/IG5leHRVcmwgOiAnJztcclxufVxyXG5cclxuLy8gMTRcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiogY3JlYXRlSWRHZW5lcmF0b3IoKSB7XHJcbiAgICBsZXQgaSA9IDA7XHJcblxyXG4gICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICB5aWVsZCBpKys7XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2JhY2tncm91bmQuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhbm5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgLyBjb3ZlcjtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmJhbm5lcjo6YmVmb3JlIHtcXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxyXFxuICAgIHotaW5kZXg6IDA7XFxyXFxufVxcclxcblxcclxcbi5zb3VuZC1idXR0b24ge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBtYXJnaW46IDAgOHB4IDhweCA4cHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgOHB4IDMycHggMCByZ2JhKDMxLCAzOCwgMTM1LCAwLjM3KTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAzcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogMC4ycyBhbGwgZWFzZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdW5kLWJ1dHRvbl9fa2V5IHtcXHJcXG4gICAgZm9udC1zaXplOiAyZW07XFxyXFxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5zb3VuZC1idXR0b25fX3NvdW5kLW5hbWUge1xcclxcbiAgICBmb250LXNpemU6IDFlbTtcXHJcXG4gICAgY29sb3I6ICNmZmIyMzU7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdW5kLWJ1dHRvbl9fcGxheWluZyB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZiMjM1O1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZHJ1bXBhZC9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGFBQWE7SUFDYixtRkFBMEU7SUFDMUUsVUFBVTtJQUNWLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGVBQWU7SUFDZixVQUFVO0lBQ1YscUJBQXFCO0lBQ3JCLHFDQUFxQztJQUNyQyxnREFBZ0Q7SUFDaEQsMkJBQTJCO0lBQzNCLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsMkNBQTJDO0lBQzNDLHlCQUF5Qjs7SUFFekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7QUFDekJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmJhbm5lciB7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHVybChcXFwiLi9pbWFnZXMvYmFja2dyb3VuZC5qcGdcXFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAvIGNvdmVyO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4uYmFubmVyOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHJpZ2h0OiAwO1xcclxcbiAgICBib3R0b206IDA7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG4gICAgei1pbmRleDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdW5kLWJ1dHRvbiB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBwYWRkaW5nOiAyMHB4IDA7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIG1hcmdpbjogMCA4cHggOHB4IDhweDtcXHJcXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCA4cHggMzJweCAwIHJnYmEoMzEsIDM4LCAxMzUsIDAuMzcpO1xcclxcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XFxyXFxuICAgIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGFsbCBlYXNlO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc291bmQtYnV0dG9uX19rZXkge1xcclxcbiAgICBmb250LXNpemU6IDJlbTtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNvdW5kLWJ1dHRvbl9fc291bmQtbmFtZSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcclxcbiAgICBjb2xvcjogI2ZmYjIzNTtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc291bmQtYnV0dG9uX19wbGF5aW5nIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBib3JkZXItY29sb3I6ICNmZmIyMzU7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImI4OTAyOWI3N2FiNmVhZDY0NWQyMDhiY2Y4ZTVmMGRhLndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI1NGQ4NzYxZDU4NTNhZmY3NTcxZDg0OGUyNWI4NDIwYy53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMmM2NWMwMjA1YjZhZmI5YjUxYmQyMWQ1NTExNDM0NzYud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFjZTMzZGFkZWU2NGZkZTM2NjUwZTc0YWFjMDYzYmU5LndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIwYzk4OGIxY2MwZWQxNjZhM2IzOWQyMjk0MGNlNjFhZi53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiMjU3YjU2NjVkNDU4NDkwMmVhMDdlNzZmY2QyNWZmMmEud2F2XCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIjZkMDIyYWZmOGNkZjAxODQyMTA5MzI5YTBjOGJmNTNmLndhdlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCI3NjI4YzFlNWY4NjdhMDljOTMyMGU1N2E2Yjk0NzBkZS53YXZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiZDllODEyNmY5NWRlODcyNjY4ZmYwNGQ4NTMxNzk4OGQud2F2XCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImRydW1wYWRcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCB7IHBsYXlBdWRpbyB9IGZyb20gJy4uL2V4cG9ydHMnO1xyXG5cclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgYm91bmNlIGZyb20gJy4vYXVkaW8vOGJpdGtpdC1ib3VuY2UtMi53YXYnO1xyXG5pbXBvcnQgY29pbiBmcm9tICcuL2F1ZGlvLzhiaXRraXQtY29pbi0xMC53YXYnO1xyXG5pbXBvcnQgZXhwbG9zaW9uIGZyb20gJy4vYXVkaW8vOGJpdGtpdC1leHBsb3Npb24tMi53YXYnO1xyXG5pbXBvcnQgZmFsbCBmcm9tICcuL2F1ZGlvLzhiaXRraXQtZmFsbC53YXYnO1xyXG5pbXBvcnQgaGl0IGZyb20gJy4vYXVkaW8vOGJpdGtpdC1oaXQtNC53YXYnO1xyXG5pbXBvcnQganVtcCBmcm9tICcuL2F1ZGlvLzhiaXRraXQtanVtcC02Lndhdic7XHJcbmltcG9ydCBsYXNlciBmcm9tICcuL2F1ZGlvLzhiaXRraXQtbGFzZXItNC53YXYnO1xyXG5pbXBvcnQgcG93ZXJ1cCBmcm9tICcuL2F1ZGlvLzhiaXRraXQtcG93ZXJ1cC0yLndhdic7XHJcbmltcG9ydCBzZWxlY3QgZnJvbSAnLi9hdWRpby84Yml0a2l0LXNlbGVjdC04Lndhdic7XHJcblxyXG5cclxuY29uc3QgYXVkaW9MaW5rcyA9IFtib3VuY2UsIGNvaW4sIGV4cGxvc2lvbiwgZmFsbCwgaGl0LCBqdW1wLCBsYXNlciwgcG93ZXJ1cCwgc2VsZWN0XTtcclxuY29uc3QgYXVkaW9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYXVkaW8uc291bmQnKTtcclxuXHJcbmF1ZGlvcy5mb3JFYWNoKChhdWRpbywgaW5kZXgpID0+IHtcclxuICAgIGF1ZGlvLnNyYyA9IGF1ZGlvTGlua3NbaW5kZXhdO1xyXG59KTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgIGNvbnN0IGNvZGUgPSBlLmtleUNvZGU7XHJcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYGF1ZGlvW2RhdGEta2V5PScke2NvZGV9J11gKTtcclxuICAgIGNvbnN0IHNvdW5kQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnNvdW5kLWJ1dHRvbltkYXRhLWtleT0nJHtjb2RlfSddYCk7XHJcbiAgICBwbGF5QXVkaW8oYXVkaW8pO1xyXG4gICAgc291bmRCdXR0b24uY2xhc3NMaXN0LmFkZCgnc291bmQtYnV0dG9uX19wbGF5aW5nJyk7XHJcbn0pO1xyXG5cclxuY29uc3Qgc291bmRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNvdW5kLWJ1dHRvbicpO1xyXG5cclxuc291bmRCdXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBjb25zdCBjb2RlID0gZS50YXJnZXQuZGF0YXNldC5rZXk7XHJcbiAgICAgICAgY29uc3QgYXVkaW8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBhdWRpb1tkYXRhLWtleT0nJHtjb2RlfSddYCk7XHJcbiAgICAgICAgcGxheUF1ZGlvKGF1ZGlvKTtcclxuICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnc291bmQtYnV0dG9uX19wbGF5aW5nJyk7XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG5zb3VuZEJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcCA9IGUucHJvcGVydHlOYW1lO1xyXG4gICAgICAgIGlmIChwcm9wID09ICd0cmFuc2Zvcm0nKSBidXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnc291bmQtYnV0dG9uX19wbGF5aW5nJyk7XHJcbiAgICB9KTtcclxufSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=