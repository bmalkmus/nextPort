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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3Byb2plY3RzLmpzIl0sIm5hbWVzIjpbInByb2plY3RzIiwibmFtZSIsImRlcGxveWVkIiwicmVwbyIsImltZ1BhdGgiLCJ0ZWNobm9sb2dpZXMiLCJkZXNjcmlwdGlvbiIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQSxNQUFNQSxRQUFRLEdBQUcsQ0FDYjtBQUNJQyxNQUFJLEVBQUUsa0JBRFY7QUFFSUMsVUFBUSxFQUFDLDZDQUZiO0FBR0lDLE1BQUksRUFBRSx3Q0FIVjtBQUlJQyxTQUFPLEVBQUcsd0JBSmQ7QUFLSUMsY0FBWSxFQUFFLDREQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FEYSxFQVNiO0FBQ0lMLE1BQUksRUFBRSxpQkFEVjtBQUVJQyxVQUFRLEVBQUMsd0NBRmI7QUFHSUMsTUFBSSxFQUFFLHdDQUhWO0FBSUlDLFNBQU8sRUFBRyxrQkFKZDtBQUtJQyxjQUFZLEVBQUUsaUZBTGxCO0FBTUlDLGFBQVcsRUFBRTtBQU5qQixDQVRhLEVBaUJiO0FBQ0lMLE1BQUksRUFBRSxXQURWO0FBRUlDLFVBQVEsRUFBQyxvQ0FGYjtBQUdJQyxNQUFJLEVBQUUsc0NBSFY7QUFJSUMsU0FBTyxFQUFHLG9CQUpkO0FBS0lDLGNBQVksRUFBRSxzQ0FMbEI7QUFNSUMsYUFBVyxFQUFFO0FBTmpCLENBakJhLEVBeUJiO0FBQ0lMLE1BQUksRUFBRSxlQURWO0FBRUlDLFVBQVEsRUFBQywyQ0FGYjtBQUdJQyxNQUFJLEVBQUUsMkNBSFY7QUFJSUMsU0FBTyxFQUFHLHFCQUpkO0FBS0lDLGNBQVksRUFBRSx5Q0FMbEI7QUFNSUMsYUFBVyxFQUFFO0FBTmpCLENBekJhLEVBaUNiO0FBQ0lMLE1BQUksRUFBRSxpQkFEVjtBQUVJQyxVQUFRLEVBQUMsMENBRmI7QUFHSUMsTUFBSSxFQUFFLDBDQUhWO0FBSUlDLFNBQU8sRUFBRyx5QkFKZDtBQUtJQyxjQUFZLEVBQUUsb0RBTGxCO0FBTUlDLGFBQVcsRUFBRTtBQU5qQixDQWpDYSxFQXlDYjtBQUNJTCxNQUFJLEVBQUUsMkJBRFY7QUFFSUMsVUFBUSxFQUFDLDBDQUZiO0FBR0lDLE1BQUksRUFBRSw4Q0FIVjtBQUlJQyxTQUFPLEVBQUcsd0JBSmQ7QUFLSUMsY0FBWSxFQUFFLHdDQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0F6Q2EsRUFpRGI7QUFDSUwsTUFBSSxFQUFFLGFBRFY7QUFFSUMsVUFBUSxFQUFDLHdDQUZiO0FBR0lDLE1BQUksRUFBRSx3Q0FIVjtBQUlJQyxTQUFPLEVBQUcsd0JBSmQ7QUFLSUMsY0FBWSxFQUFFLCtDQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FqRGEsRUF5RGI7QUFDSUwsTUFBSSxFQUFFLGVBRFY7QUFFSUMsVUFBUSxFQUFDLHNDQUZiO0FBR0lDLE1BQUksRUFBRSxvQ0FIVjtBQUlJQyxTQUFPLEVBQUcsd0JBSmQ7QUFLSUMsY0FBWSxFQUFFLG9FQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0F6RGEsRUFpRWI7QUFDSUwsTUFBSSxFQUFFLGFBRFY7QUFFSUMsVUFBUSxFQUFDLHdDQUZiO0FBR0lDLE1BQUksRUFBRSx3Q0FIVjtBQUlJQyxTQUFPLEVBQUcsa0JBSmQ7QUFLSUMsY0FBWSxFQUFFLHVCQUxsQjtBQU1JQyxhQUFXLEVBQUU7QUFOakIsQ0FqRWEsQ0FBakI7QUEyRWUsU0FBU0MsT0FBVCxDQUFpQkMsR0FBakIsRUFBc0JDLEdBQXRCLEVBQTJCO0FBQ3RDQSxLQUFHLENBQUNDLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlgsUUFBckI7QUFDRCxDIiwiZmlsZSI6InBhZ2VzL2FwaS9wcm9qZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL3Byb2plY3RzLmpzXCIpO1xuIiwiY29uc3QgcHJvamVjdHMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJpRHJpdmVXYXNoaW5ndG9uXCIsXHJcbiAgICAgICAgZGVwbG95ZWQ6XCJodHRwczovL2lkcml2ZXdhc2hpbmd0b24uYXp1cmV3ZWJzaXRlcy5uZXQvXCIsXHJcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vYm1hbGttdXMvaURyaXZlV2FzaFwiLFxyXG4gICAgICAgIGltZ1BhdGg6IGAvc3RhdGljL2lEcml2ZVdhc2gucG5nYCxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiTUVSTiBTdGFjaywgR29vZ2xlIE1hcHMgQVBJLCBXU0RPVCBBUEksIEF6dXJlIFdlYiBTZXJ2aWNlc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgYXBwIGlzIGEgcmUtZGVzaWduIG9mIFdhc2hpbmd0b24gRGVwYXJ0bWVudCBvZiBUcmFuc3BvcnRhdGlvbidzIHdlYnNpdGUgdG8gZ2l2ZSBhIG1vcmUgdXNlciBmcmllbmRseSBhcHByb2FjaCB0byBuZWVkIHRvIGtub3cgaW5mb3JtYXRpb24uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJCb290bGVnIENvb2tpbmdcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYm9vdGxlZy1jb29raW5nLmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vcm55YW5nLTE2L1Byb2plY3RfMlwiLFxyXG4gICAgICAgIGltZ1BhdGg6IGAvc3RhdGljL21haW4ucG5nYCxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwialF1ZXJ5LCBTZXF1ZWxpemUsIFNRTCBkYXRhYmFzZSwgamF2YXNjcmlwdCwgTm9kZS5qcywgVHJhdmlzIENMLCBIYW5kbGViYXJzIG5wbVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk91ciBhcHAsIEJvb3RsZWcgQ29va2luZywgaXMgZGVzaWduZWQgdG8gaGVscCBvdXIgdXNlcnMgZmluZCBhIG5ldyByZWNpcGUgdG8gdHJ5IGZvciBhIG1lYWwgdXNpbmcgaW5ncmVkaWVudHMgdGhlIHVzZXIgYWxyZWFkeSBoYXMgaW4gdGhlaXIgaG91c2Vob2xkLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUmVhbERlYWxzXCIsXHJcbiAgICAgICAgZGVwbG95ZWQ6XCJodHRwczovL3JlYWwtLWRlYWxzLmhlcm9rdWFwcC5jb20vXCIsXHJcbiAgICAgICAgcmVwbzogXCJodHRwczovL2dpdGh1Yi5jb20vYm1hbGttdXMvcHJvamVjdDNcIixcclxuICAgICAgICBpbWdQYXRoOiBgL3N0YXRpYy9TZWFyY2gucG5nYCxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiTXlTUUwsIEV4cHJlc3MuanMsIFJlYWN0LmpzLCBOb2RlLmpzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiT3VyIGFwcCwgUmVhbCBEZWFscywgaXMgZGVzaWduZWQgdG8gaGVscCBvdXIgdXNlcnMgdG8gc2VhcmNoIG11bHRpcGxlIHdlYnNpdGUgcGxhdGZvcm1zIHRvIGZpbmQgdGhlIGNoZWFwZXN0IHByaWNlLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUGFyayAmIERpbm5lclwiLFxyXG4gICAgICAgIGRlcGxveWVkOlwiaHR0cHM6Ly9naXRodWIuY29tL2JtYWxrbXVzL2dldE91dHNpZGVBcHBcIixcclxuICAgICAgICByZXBvOiBcImh0dHBzOi8vYm1hbGttdXMuZ2l0aHViLmlvL2dldE91dHNpZGVBcHAvXCIsXHJcbiAgICAgICAgaW1nUGF0aDogYC9zdGF0aWMvUGFya0FwcC5wbmdgLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJKYXZhc2NyaXB0LCBIVE1MNSwgTWF0ZXJpYWxpemUgQ1NTLCBDU1NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2luZyB0aGlyZCBwYXJ0eSBBUEkncywgdGhpcyB3ZWJzaXRlIGFsbG93cyB5b3UgdG8gc2VhcmNoIGZvciBwYXJrcyBhcm91bmQgeW91IGluIFNlYXR0bGUgYWxvbmcgd2l0aCA1IGNsb3Nlc3QgcmVzdGF1cmFudHMgdG8gdGhhdCBwYXJrJ3MgbG9jYXRpb24uXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJXb3JrZGF5IFBsYW5uZXJcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYm1hbGttdXMuZ2l0aHViLmlvL2RhaWx5UGxhbm5lci9cIixcclxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ibWFsa211cy9kYWlseVBsYW5uZXJcIixcclxuICAgICAgICBpbWdQYXRoOiBgL3N0YXRpYy9Xb3JrZGF5UGxhbi5wbmdgLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJqUXVlcnksIEhUTUwsIENTUywgbG9jYWxTdG9yYWdlLCBNb21lbnQuanMgbGlicmFyeVwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkhlcmUgaXMgYSBkYWlseSBwbGFubmVyIHRoYXQgYXNzaXN0cyB5b3UgaW4geW91ciBkYXkgd2l0aCBjb2xvciBjaGFuZ2luZyBpbnB1dCBib3hlcyBmb3IgZnV0dXJlLCBwcmVzZW50LCBhbmQgcGFzdCB0aW1lYmxvY2tzLlwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6IFwiUmVhY3QgR29vZ2xlIEJvb2tzIFNlYXJjaFwiLFxyXG4gICAgICAgIGRlcGxveWVkOlwiaHR0cHM6Ly9ib29rLXJlYWN0LWdvb2dsZS5oZXJva3VhcHAuY29tL1wiLFxyXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2JtYWxrbXVzL0dvb2dsZUJvb2tTZWFyY2hcIixcclxuICAgICAgICBpbWdQYXRoOiBgL3N0YXRpYy9Hb29nbGVCb29rLnBuZ2AsXHJcbiAgICAgICAgdGVjaG5vbG9naWVzOiBcIk1vbmdvREIsIEV4cHJlc3MuanMsIFJlYWN0LmpzLCBOb2RlLmpzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiR29vZ2xlIEJvb2tzIEFQSSBzZWFyY2ggdXNpbmcgTUVSTiB0ZWNobmlxdWVzXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJXZWF0aGVyIEFwcFwiLFxyXG4gICAgICAgIGRlcGxveWVkOlwiaHR0cHM6Ly9ibWFsa211cy5naXRodWIuaW8vV2VhdGhlckFwcC9cIixcclxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ibWFsa211cy9XZWF0aGVyQXBwXCIsXHJcbiAgICAgICAgaW1nUGF0aDogYC9zdGF0aWMvV2VhdGhlckFwcC5wbmdgLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJqUXVlcnksIEhUTUwsIE9wZW5XZWF0aGVyIEFQSSwgQ1NTLCBCb290c3RyYXBcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJTZWFyY2hhYmxlIGNpdHkgd2VhdGhlciBmb3JlY2FzdC5cIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiBcIkVhdCBEYSBCdXJnZXJcIixcclxuICAgICAgICBkZXBsb3llZDpcImh0dHBzOi8vYnVyZ2VyMjNlYXRlci5oZXJva3VhcHAuY29tL1wiLFxyXG4gICAgICAgIHJlcG86IFwiaHR0cHM6Ly9naXRodWIuY29tL2JtYWxrbXVzL2J1cmdlclwiLFxyXG4gICAgICAgIGltZ1BhdGg6IGAvc3RhdGljL0J1cmdlcl9BcHAucG5nYCxcclxuICAgICAgICB0ZWNobm9sb2dpZXM6IFwiSGVyb2t1LCBIYW5kbGViYXJzLCBNVkMgYXJjaGl0ZWN0dXJhbCBwYXR0ZXJuLCBOb2RlLmpzLCBKYXZhc2NyaXB0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IFwiSGVyZSBpcyBhIGNyZWF0aW9uIG9mIGFuIGludGVyYWN0aXZlIGJ1cmdlciBkZXZvdXJpbmcgYXBwbGljYXRpb24gdGhhdCBpcyBkZXBsb3llZCB0byBIZXJva3UuXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogXCJDb2RpbmcgUXVpelwiLFxyXG4gICAgICAgIGRlcGxveWVkOlwiaHR0cHM6Ly9ibWFsa211cy5naXRodWIuaW8vY29kaW5nUXVpei9cIixcclxuICAgICAgICByZXBvOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9ibWFsa211cy9jb2RpbmdRdWl6XCIsXHJcbiAgICAgICAgaW1nUGF0aDogYC9zdGF0aWMvUXVpei5wbmdgLFxyXG4gICAgICAgIHRlY2hub2xvZ2llczogXCJIVE1MLCBKYXZhc2NyaXB0LCBDU1NcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogXCJDbGFzcyBwcm9qZWN0IHRvIGNyZWF0ZSBhIHNtYWxsIGxpdHRsZSBxdWl6LlwiXHJcbiAgICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24ocHJvamVjdHMpXHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0=