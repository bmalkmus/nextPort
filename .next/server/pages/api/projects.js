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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/projects.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/projects.js":
/*!*******************************!*\
  !*** ./pages/api/projects.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return handler; });
const projects = [{
  name: "iDriveWashington",
  deployed: "https://idrivewashington.azurewebsites.net/",
  repo: "https://github.com/bmalkmus/iDriveWash",
  imgPath: `${process.env.PUBLIC_URL}/images/iDriveWash.png`,
  technologies: "MERN Stack, Google Maps API, WSDOT API, Azure Web Services",
  description: "This app is a re-design of Washington Department of Transportation's website to give a more user friendly approach to need to know information."
}, {
  name: "Bootleg Cooking",
  deployed: "https://bootleg-cooking.herokuapp.com/",
  repo: "https://github.com/rnyang-16/Project_2",
  imgPath: `${process.env.PUBLIC_URL}/images/main.png`,
  technologies: "jQuery, Sequelize, SQL database, javascript, Node.js, Travis CL, Handlebars npm",
  description: "Our app, Bootleg Cooking, is designed to help our users find a new recipe to try for a meal using ingredients the user already has in their household."
}, {
  name: "RealDeals",
  deployed: "https://real--deals.herokuapp.com/",
  repo: "https://github.com/bmalkmus/project3",
  imgPath: `${process.env.PUBLIC_URL}/images/Search.png`,
  technologies: "MySQL, Express.js, React.js, Node.js",
  description: "Our app, Real Deals, is designed to help our users to search multiple website platforms to find the cheapest price."
}, {
  name: "Park & Dinner",
  deployed: "https://github.com/bmalkmus/getOutsideApp",
  repo: "https://bmalkmus.github.io/getOutsideApp/",
  imgPath: `${process.env.PUBLIC_URL}/images/ParkApp.png`,
  technologies: "Javascript, HTML5, Materialize CSS, CSS",
  description: "Using third party API's, this website allows you to search for parks around you in Seattle along with 5 closest restaurants to that park's location."
}, {
  name: "Workday Planner",
  deployed: "https://bmalkmus.github.io/dailyPlanner/",
  repo: "https://github.com/bmalkmus/dailyPlanner",
  imgPath: `${process.env.PUBLIC_URL}/images/WorkdayPlan.png`,
  technologies: "jQuery, HTML, CSS, localStorage, Moment.js library",
  description: "Here is a daily planner that assists you in your day with color changing input boxes for future, present, and past timeblocks."
}, {
  name: "React Google Books Search",
  deployed: "https://book-react-google.herokuapp.com/",
  repo: "https://github.com/bmalkmus/GoogleBookSearch",
  imgPath: `${process.env.PUBLIC_URL}/images/GoogleBook.png`,
  technologies: "MongoDB, Express.js, React.js, Node.js",
  description: "Google Books API search using MERN techniques"
}, {
  name: "Weather App",
  deployed: "https://bmalkmus.github.io/WeatherApp/",
  repo: "https://github.com/bmalkmus/WeatherApp",
  imgPath: `${process.env.PUBLIC_URL}/images/WeatherApp.png`,
  technologies: "jQuery, HTML, OpenWeather API, CSS, Bootstrap",
  description: "Searchable city weather forecast."
}, {
  name: "Eat Da Burger",
  deployed: "https://burger23eater.herokuapp.com/",
  repo: "https://github.com/bmalkmus/burger",
  imgPath: `${process.env.PUBLIC_URL}/images/Burger_App.png`,
  technologies: "Heroku, Handlebars, MVC architectural pattern, Node.js, Javascript",
  description: "Here is a creation of an interactive burger devouring application that is deployed to Heroku."
}, {
  name: "Coding Quiz",
  deployed: "https://bmalkmus.github.io/codingQuiz/",
  repo: "https://github.com/bmalkmus/codingQuiz",
  imgPath: `${process.env.PUBLIC_URL}/images/Quiz.png`,
  technologies: "HTML, Javascript, CSS",
  description: "Class project to create a small little quiz."
}];
function handler(req, res) {
  res.status(200).json(projects);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbInByb2plY3RzIiwibmFtZSIsImRlcGxveWVkIiwicmVwbyIsImltZ1BhdGgiLCJwcm9jZXNzIiwiZW52IiwiUFVCTElDX1VSTCIsInRlY2hub2xvZ2llcyIsImRlc2NyaXB0aW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInN0YXR1cyIsImpzb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBLE1BQU1BLFFBQVEsR0FBRyxDQUNiO0FBQ0lDLE1BQUksRUFBRSxrQkFEVjtBQUVJQyxVQUFRLEVBQUMsNkNBRmI7QUFHSUMsTUFBSSxFQUFFLHdDQUhWO0FBSUlDLFNBQU8sRUFBRyxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBVyx3QkFKdkM7QUFLSUMsY0FBWSxFQUFFLDREQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FEYSxFQVNiO0FBQ0lSLE1BQUksRUFBRSxpQkFEVjtBQUVJQyxVQUFRLEVBQUMsd0NBRmI7QUFHSUMsTUFBSSxFQUFFLHdDQUhWO0FBSUlDLFNBQU8sRUFBRyxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBVyxrQkFKdkM7QUFLSUMsY0FBWSxFQUFFLGlGQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FUYSxFQWlCYjtBQUNJUixNQUFJLEVBQUUsV0FEVjtBQUVJQyxVQUFRLEVBQUMsb0NBRmI7QUFHSUMsTUFBSSxFQUFFLHNDQUhWO0FBSUlDLFNBQU8sRUFBRyxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBVyxvQkFKdkM7QUFLSUMsY0FBWSxFQUFFLHNDQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FqQmEsRUF5QmI7QUFDSVIsTUFBSSxFQUFFLGVBRFY7QUFFSUMsVUFBUSxFQUFDLDJDQUZiO0FBR0lDLE1BQUksRUFBRSwyQ0FIVjtBQUlJQyxTQUFPLEVBQUcsR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQVcscUJBSnZDO0FBS0lDLGNBQVksRUFBRSx5Q0FMbEI7QUFNSUMsYUFBVyxFQUFFO0FBTmpCLENBekJhLEVBaUNiO0FBQ0lSLE1BQUksRUFBRSxpQkFEVjtBQUVJQyxVQUFRLEVBQUMsMENBRmI7QUFHSUMsTUFBSSxFQUFFLDBDQUhWO0FBSUlDLFNBQU8sRUFBRyxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBVyx5QkFKdkM7QUFLSUMsY0FBWSxFQUFFLG9EQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FqQ2EsRUF5Q2I7QUFDSVIsTUFBSSxFQUFFLDJCQURWO0FBRUlDLFVBQVEsRUFBQywwQ0FGYjtBQUdJQyxNQUFJLEVBQUUsOENBSFY7QUFJSUMsU0FBTyxFQUFHLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFXLHdCQUp2QztBQUtJQyxjQUFZLEVBQUUsd0NBTGxCO0FBTUlDLGFBQVcsRUFBRTtBQU5qQixDQXpDYSxFQWlEYjtBQUNJUixNQUFJLEVBQUUsYUFEVjtBQUVJQyxVQUFRLEVBQUMsd0NBRmI7QUFHSUMsTUFBSSxFQUFFLHdDQUhWO0FBSUlDLFNBQU8sRUFBRyxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsVUFBVyx3QkFKdkM7QUFLSUMsY0FBWSxFQUFFLCtDQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FqRGEsRUF5RGI7QUFDSVIsTUFBSSxFQUFFLGVBRFY7QUFFSUMsVUFBUSxFQUFDLHNDQUZiO0FBR0lDLE1BQUksRUFBRSxvQ0FIVjtBQUlJQyxTQUFPLEVBQUcsR0FBRUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLFVBQVcsd0JBSnZDO0FBS0lDLGNBQVksRUFBRSxvRUFMbEI7QUFNSUMsYUFBVyxFQUFFO0FBTmpCLENBekRhLEVBaUViO0FBQ0lSLE1BQUksRUFBRSxhQURWO0FBRUlDLFVBQVEsRUFBQyx3Q0FGYjtBQUdJQyxNQUFJLEVBQUUsd0NBSFY7QUFJSUMsU0FBTyxFQUFHLEdBQUVDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxVQUFXLGtCQUp2QztBQUtJQyxjQUFZLEVBQUUsdUJBTGxCO0FBTUlDLGFBQVcsRUFBRTtBQU5qQixDQWpFYSxDQUFqQjtBQTJFZSxTQUFTQyxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsR0FBdEIsRUFBMkI7QUFDdENBLEtBQUcsQ0FBQ0MsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCZCxRQUFyQjtBQUNELEMiLCJmaWxlIjoicGFnZXMvYXBpL3Byb2plY3RzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvcHJvamVjdHMuanNcIik7XG4iLCJjb25zdCBwcm9qZWN0cyA9IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcImlEcml2ZVdhc2hpbmd0b25cIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vaWRyaXZld2FzaGluZ3Rvbi5henVyZXdlYnNpdGVzLm5ldC9cIixcclxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ibWFsa211cy9pRHJpdmVXYXNoXCIsXHJcbiAgICAgICAgaW1nUGF0aDogYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vaW1hZ2VzL2lEcml2ZVdhc2gucG5nYCxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiTUVSTiBTdGFjaywgR29vZ2xlIE1hcHMgQVBJLCBXU0RPVCBBUEksIEF6dXJlIFdlYiBTZXJ2aWNlc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIGlzIGEgcmUtZGVzaWduIG9mIFdhc2hpbmd0b24gRGVwYXJ0bWVudCBvZiBUcmFuc3BvcnRhdGlvbidzIHdlYnNpdGUgdG8gZ2l2ZSBhIG1vcmUgdXNlciBmcmllbmRseSBhcHByb2FjaCB0byBuZWVkIHRvIGtub3cgaW5mb3JtYXRpb24uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCb290bGVnIENvb2tpbmdcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYm9vdGxlZy1jb29raW5nLmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vcm55YW5nLTE2L1Byb2plY3RfMlwiLFxyXG4gICAgICAgIGltZ1BhdGg6IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2ltYWdlcy9tYWluLnBuZ2AsXHJcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcImpRdWVyeSwgU2VxdWVsaXplLCBTUUwgZGF0YWJhc2UsIGphdmFzY3JpcHQsIE5vZGUuanMsIFRyYXZpcyBDTCwgSGFuZGxlYmFycyBucG1cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPdXIgYXBwLCBCb290bGVnIENvb2tpbmcsIGlzIGRlc2lnbmVkIHRvIGhlbHAgb3VyIHVzZXJzIGZpbmQgYSBuZXcgcmVjaXBlIHRvIHRyeSBmb3IgYSBtZWFsIHVzaW5nIGluZ3JlZGllbnRzIHRoZSB1c2VyIGFscmVhZHkgaGFzIGluIHRoZWlyIGhvdXNlaG9sZC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlJlYWxEZWFsc1wiLFxyXG4gICAgICAgIGRlcGxveWVkOlwiaHR0cHM6Ly9yZWFsLS1kZWFscy5oZXJva3VhcHAuY29tL1wiLFxyXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2JtYWxrbXVzL3Byb2plY3QzXCIsXHJcbiAgICAgICAgaW1nUGF0aDogYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vaW1hZ2VzL1NlYXJjaC5wbmdgLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJNeVNRTCwgRXhwcmVzcy5qcywgUmVhY3QuanMsIE5vZGUuanNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPdXIgYXBwLCBSZWFsIERlYWxzLCBpcyBkZXNpZ25lZCB0byBoZWxwIG91ciB1c2VycyB0byBzZWFyY2ggbXVsdGlwbGUgd2Vic2l0ZSBwbGF0Zm9ybXMgdG8gZmluZCB0aGUgY2hlYXBlc3QgcHJpY2UuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJQYXJrICYgRGlubmVyXCIsXHJcbiAgICAgICAgZGVwbG95ZWQ6XCJodHRwczovL2dpdGh1Yi5jb20vYm1hbGttdXMvZ2V0T3V0c2lkZUFwcFwiLFxyXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9ibWFsa211cy5naXRodWIuaW8vZ2V0T3V0c2lkZUFwcC9cIixcclxuICAgICAgICBpbWdQYXRoOiBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9pbWFnZXMvUGFya0FwcC5wbmdgLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhc2NyaXB0LCBIVE1MNSwgTWF0ZXJpYWxpemUgQ1NTLCBDU1NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2luZyB0aGlyZCBwYXJ0eSBBUEkncywgdGhpcyB3ZWJzaXRlIGFsbG93cyB5b3UgdG8gc2VhcmNoIGZvciBwYXJrcyBhcm91bmQgeW91IGluIFNlYXR0bGUgYWxvbmcgd2l0aCA1IGNsb3Nlc3QgcmVzdGF1cmFudHMgdG8gdGhhdCBwYXJrJ3MgbG9jYXRpb24uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJXb3JrZGF5IFBsYW5uZXJcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYm1hbGttdXMuZ2l0aHViLmlvL2RhaWx5UGxhbm5lci9cIixcclxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ibWFsa211cy9kYWlseVBsYW5uZXJcIixcclxuICAgICAgICBpbWdQYXRoOiBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9pbWFnZXMvV29ya2RheVBsYW4ucG5nYCxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwialF1ZXJ5LCBIVE1MLCBDU1MsIGxvY2FsU3RvcmFnZSwgTW9tZW50LmpzIGxpYnJhcnlcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJIZXJlIGlzIGEgZGFpbHkgcGxhbm5lciB0aGF0IGFzc2lzdHMgeW91IGluIHlvdXIgZGF5IHdpdGggY29sb3IgY2hhbmdpbmcgaW5wdXQgYm94ZXMgZm9yIGZ1dHVyZSwgcHJlc2VudCwgYW5kIHBhc3QgdGltZWJsb2Nrcy5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIlJlYWN0IEdvb2dsZSBCb29rcyBTZWFyY2hcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYm9vay1yZWFjdC1nb29nbGUuaGVyb2t1YXBwLmNvbS9cIixcclxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ibWFsa211cy9Hb29nbGVCb29rU2VhcmNoXCIsXHJcbiAgICAgICAgaW1nUGF0aDogYCR7cHJvY2Vzcy5lbnYuUFVCTElDX1VSTH0vaW1hZ2VzL0dvb2dsZUJvb2sucG5nYCxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiTW9uZ29EQiwgRXhwcmVzcy5qcywgUmVhY3QuanMsIE5vZGUuanNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJHb29nbGUgQm9va3MgQVBJIHNlYXJjaCB1c2luZyBNRVJOIHRlY2huaXF1ZXNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsXHJcbiAgICAgICAgZGVwbG95ZWQ6XCJodHRwczovL2JtYWxrbXVzLmdpdGh1Yi5pby9XZWF0aGVyQXBwL1wiLFxyXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2JtYWxrbXVzL1dlYXRoZXJBcHBcIixcclxuICAgICAgICBpbWdQYXRoOiBgJHtwcm9jZXNzLmVudi5QVUJMSUNfVVJMfS9pbWFnZXMvV2VhdGhlckFwcC5wbmdgLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJqUXVlcnksIEhUTUwsIE9wZW5XZWF0aGVyIEFQSSwgQ1NTLCBCb290c3RyYXBcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2hhYmxlIGNpdHkgd2VhdGhlciBmb3JlY2FzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkVhdCBEYSBCdXJnZXJcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYnVyZ2VyMjNlYXRlci5oZXJva3VhcHAuY29tL1wiLFxyXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2JtYWxrbXVzL2J1cmdlclwiLFxyXG4gICAgICAgIGltZ1BhdGg6IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2ltYWdlcy9CdXJnZXJfQXBwLnBuZ2AsXHJcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIkhlcm9rdSwgSGFuZGxlYmFycywgTVZDIGFyY2hpdGVjdHVyYWwgcGF0dGVybiwgTm9kZS5qcywgSmF2YXNjcmlwdFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlcmUgaXMgYSBjcmVhdGlvbiBvZiBhbiBpbnRlcmFjdGl2ZSBidXJnZXIgZGV2b3VyaW5nIGFwcGxpY2F0aW9uIHRoYXQgaXMgZGVwbG95ZWQgdG8gSGVyb2t1LlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiQ29kaW5nIFF1aXpcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYm1hbGttdXMuZ2l0aHViLmlvL2NvZGluZ1F1aXovXCIsXHJcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vYm1hbGttdXMvY29kaW5nUXVpelwiLFxyXG4gICAgICAgIGltZ1BhdGg6IGAke3Byb2Nlc3MuZW52LlBVQkxJQ19VUkx9L2ltYWdlcy9RdWl6LnBuZ2AsXHJcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIkhUTUwsIEphdmFzY3JpcHQsIENTU1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNsYXNzIHByb2plY3QgdG8gY3JlYXRlIGEgc21hbGwgbGl0dGxlIHF1aXouXCJcclxuICAgIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihwcm9qZWN0cylcclxuICB9Il0sInNvdXJjZVJvb3QiOiIifQ==