module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dhFR");


/***/ }),

/***/ "dhFR":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
const projects = [{
  name: "iDriveWashington",
  deployed: "https://idrivewashington.azurewebsites.net/",
  repo: "https://github.com/bmalkmus/iDriveWash",
  imgPath: `/static/iDriveWash.png`,
  technologies: "MERN Stack, Google Maps API, WSDOT API, Azure Web Services",
  description: "This app is a re-design of Washington Department of Transportation's website to give a more user friendly approach to need to know information."
}, {
  name: "Bootleg Cooking",
  deployed: "https://bootleg-cooking.herokuapp.com/",
  repo: "https://github.com/rnyang-16/Project_2",
  imgPath: `/static/main.png`,
  technologies: "jQuery, Sequelize, SQL database, javascript, Node.js, Travis CL, Handlebars npm",
  description: "Our app, Bootleg Cooking, is designed to help our users find a new recipe to try for a meal using ingredients the user already has in their household."
}, {
  name: "RealDeals",
  deployed: "https://real--deals.herokuapp.com/",
  repo: "https://github.com/bmalkmus/project3",
  imgPath: `/static/Search.png`,
  technologies: "MySQL, Express.js, React.js, Node.js",
  description: "Our app, Real Deals, is designed to help our users to search multiple website platforms to find the cheapest price."
}, {
  name: "Park & Dinner",
  deployed: "https://github.com/bmalkmus/getOutsideApp",
  repo: "https://bmalkmus.github.io/getOutsideApp/",
  imgPath: `/static/ParkApp.png`,
  technologies: "Javascript, HTML5, Materialize CSS, CSS",
  description: "Using third party API's, this website allows you to search for parks around you in Seattle along with 5 closest restaurants to that park's location."
}, {
  name: "Workday Planner",
  deployed: "https://bmalkmus.github.io/dailyPlanner/",
  repo: "https://github.com/bmalkmus/dailyPlanner",
  imgPath: `/static/WorkdayPlan.png`,
  technologies: "jQuery, HTML, CSS, localStorage, Moment.js library",
  description: "Here is a daily planner that assists you in your day with color changing input boxes for future, present, and past timeblocks."
}, {
  name: "React Google Books Search",
  deployed: "https://book-react-google.herokuapp.com/",
  repo: "https://github.com/bmalkmus/GoogleBookSearch",
  imgPath: `/static/GoogleBook.png`,
  technologies: "MongoDB, Express.js, React.js, Node.js",
  description: "Google Books API search using MERN techniques"
}, {
  name: "Weather App",
  deployed: "https://bmalkmus.github.io/WeatherApp/",
  repo: "https://github.com/bmalkmus/WeatherApp",
  imgPath: `/static/WeatherApp.png`,
  technologies: "jQuery, HTML, OpenWeather API, CSS, Bootstrap",
  description: "Searchable city weather forecast."
}, {
  name: "Eat Da Burger",
  deployed: "https://burger23eater.herokuapp.com/",
  repo: "https://github.com/bmalkmus/burger",
  imgPath: `/static/Burger_App.png`,
  technologies: "Heroku, Handlebars, MVC architectural pattern, Node.js, Javascript",
  description: "Here is a creation of an interactive burger devouring application that is deployed to Heroku."
}, {
  name: "Coding Quiz",
  deployed: "https://bmalkmus.github.io/codingQuiz/",
  repo: "https://github.com/bmalkmus/codingQuiz",
  imgPath: `/static/Quiz.png`,
  technologies: "HTML, Javascript, CSS",
  description: "Class project to create a small little quiz."
}];
function handler(req, res) {
  res.status(200).json(projects);
}

/***/ })

/******/ });