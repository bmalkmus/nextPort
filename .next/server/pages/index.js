module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "4XpL":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"imgDesk": "AboutMe_imgDesk__spNxz",
	"imgContainer": "AboutMe_imgContainer__V4Mgg",
	"imgPhone": "AboutMe_imgPhone__2F4Jp",
	"partAboutMe": "AboutMe_partAboutMe__1U4gF",
	"abtContent": "AboutMe_abtContent__ZtU6U",
	"paragraphContainer": "AboutMe_paragraphContainer__pKk0u"
};


/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "KaAA":
/***/ (function(module, exports) {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return /* binding */ getStaticProps; });

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__("F5FC");

// EXTERNAL MODULE: ./CSS-page/Portfolio.module.css
var Portfolio_module = __webpack_require__("xX0t");
var Portfolio_module_default = /*#__PURE__*/__webpack_require__.n(Portfolio_module);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");

// EXTERNAL MODULE: ./components/AboutMe/AboutMe.module.css
var AboutMe_module = __webpack_require__("4XpL");
var AboutMe_module_default = /*#__PURE__*/__webpack_require__.n(AboutMe_module);

// CONCATENATED MODULE: ./components/AboutMe/index.js





function AboutMe() {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: AboutMe_module_default.a.partAboutMe,
    id: "aboutMe",
    children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      children: "About Me"
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      id: "abtContent",
      className: AboutMe_module_default.a.abtContent,
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        id: "imgContainer",
        className: AboutMe_module_default.a.imgContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: AboutMe_module_default.a.imgPhone,
          alt: "thumbnail image",
          src: "/static/ProfileThumb.png"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: AboutMe_module_default.a.imgDesk,
          alt: "desktop image",
          src: "/static/mainProfile.png"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: AboutMe_module_default.a.paragraphContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "My name is Benjamin Malkmus and I am a web developer. I\u2019m based out of Bellevue, WA and have lived in the surrounding Seattle area in 2016. From 2004-2019, I was in the hospitality industry. It has given me hands on experience on working with clients to make sure that my services are completed 100% to the client\u2019s expectations."
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
          children: "My friends would describe me as someone who always tries to find the positives of every problem given in life. They would also describe me as someone who doesn\u2019t stress out when under pressure and still knows how to find time to have fun with every situation. When not working, you can find me outside by a body of water or watching some type of sport live or on television."
        })]
      })]
    })]
  });
}

/* harmony default export */ var components_AboutMe = (AboutMe);
// EXTERNAL MODULE: external "react-bootstrap/Dropdown"
var Dropdown_ = __webpack_require__("SibU");
var Dropdown_default = /*#__PURE__*/__webpack_require__.n(Dropdown_);

// EXTERNAL MODULE: ./node_modules/react-responsive-carousel/lib/styles/carousel.min.css
var carousel_min = __webpack_require__("a6qw");

// EXTERNAL MODULE: external "react-responsive-carousel"
var external_react_responsive_carousel_ = __webpack_require__("KaAA");

// EXTERNAL MODULE: ./components/Projects/Projects.module.css
var Projects_module = __webpack_require__("bl8f");
var Projects_module_default = /*#__PURE__*/__webpack_require__.n(Projects_module);

// CONCATENATED MODULE: ./components/Projects/index.js







function Projects({
  projects
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Projects_module_default.a.cardsContainer,
    children: [[...projects].map(project => {
      const keyName = project.name + 1;
      return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Projects_module_default.a.mobileCards,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h3", {
          children: project.name
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          alt: "Project image",
          src: project.imgPath
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
          className: Projects_module_default.a.cardInfo,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
            children: project.description
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: ["Technologies: ", project.technologies]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: ["Deployed: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: Projects_module_default.a.externalLinks,
              target: "_blank",
              rel: "noopener noreferrer",
              href: project.deployed,
              children: project.deployed
            })]
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: ["Repo: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
              className: Projects_module_default.a.externalLinks,
              target: "_blank",
              rel: "noopener noreferrer",
              href: project.repo,
              children: project.repo
            })]
          })]
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
          className: Projects_module_default.a.backToTop,
          href: "#homePage",
          alt: "back to top",
          children: "Back to Homepage"
        })]
      }, keyName);
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
      className: Projects_module_default.a.slideContainer,
      children: /*#__PURE__*/Object(jsx_runtime_["jsx"])(external_react_responsive_carousel_["Carousel"], {
        children: [...projects].map(project => {
          const key = project.name + 2;
          return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
            className: Projects_module_default.a.slideContent,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
              children: project.name
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
              src: project.imgPath,
              className: Projects_module_default.a.slideImg,
              alt: "project image"
            }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
              className: Projects_module_default.a.contentContainer,
              children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("p", {
                children: project.description
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                children: ["Technologies: ", project.technologies]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                children: ["Deployed: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: Projects_module_default.a.externalLinks,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: project.deployed,
                  children: project.deployed
                })]
              }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
                children: ["Repo: ", /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
                  className: Projects_module_default.a.externalLinks,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  href: project.repo,
                  children: project.repo
                })]
              })]
            })]
          }, key);
        })
      })
    })]
  });
}

/* harmony default export */ var components_Projects = (Projects);
// CONCATENATED MODULE: ./pages/index.js







function Portfolio({
  data
}) {
  return /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
    className: Portfolio_module_default.a.global,
    children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("header", {
      children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("link", {
        href: "https://fonts.googleapis.com/css2?family=Lobster&display=swap",
        rel: "stylesheet"
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("title", {
        children: "Malkmus Solutions"
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
      className: Portfolio_module_default.a.landing,
      id: "homePage",
      children: [/*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Portfolio_module_default.a.logoContainer,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
          className: Portfolio_module_default.a.brand,
          src: "/static/MalkmusSolutionsOpacity0.png",
          alt: "logo"
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
          children: "Malkmus Solutions"
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])("div", {
        className: Portfolio_module_default.a.links,
        children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Portfolio_module_default.a.linkContainers,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#aboutMe",
            alt: "about me",
            children: "About Me"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Portfolio_module_default.a.linkContainers,
          children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("a", {
            href: "#projects",
            alt: "projects",
            children: "Projects"
          })
        }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dropdown_default.a, {
          className: Portfolio_module_default.a.linkContainers,
          children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown_default.a.Toggle, {
            className: Portfolio_module_default.a.contactToggle,
            children: "Contact"
          }), /*#__PURE__*/Object(jsx_runtime_["jsxs"])(Dropdown_default.a.Menu, {
            className: Portfolio_module_default.a.dropdownMenu,
            children: [/*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown_default.a.Item, {
              href: "https://www.github.com/bmalkmus",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: Portfolio_module_default.a.logoLinks,
                src: "/static/github-logo.svg"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown_default.a.Item, {
              href: "https://www.linkedin.com/in/bmalkmus23",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: Portfolio_module_default.a.logoLinks,
                src: "/static/linkedin-logo.svg"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown_default.a.Item, {
              href: "/static/BenjaminMalkmus.pdf",
              target: "_blank",
              rel: "noopener noreferrer",
              children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("img", {
                className: Portfolio_module_default.a.logoLinks,
                src: "/static/curriculum-vitae.svg"
              })
            }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(Dropdown_default.a.Item, {
              children: "Benjamin.Malkmus@outlook.com"
            })]
          })]
        })]
      }), /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
        className: Portfolio_module_default.a.sloganContainer,
        children: /*#__PURE__*/Object(jsx_runtime_["jsx"])("div", {
          className: Portfolio_module_default.a.transparentContainer,
          children: /*#__PURE__*/Object(jsx_runtime_["jsxs"])("p", {
            children: ["A", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: "M"
            }), "BITIOUS.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "ALTRUI", /*#__PURE__*/Object(jsx_runtime_["jsx"])("span", {
              children: "S"
            }), "TIC.", /*#__PURE__*/Object(jsx_runtime_["jsx"])("br", {}), "ADAPTIVE."]
          })
        })
      })]
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_AboutMe, {}), /*#__PURE__*/Object(jsx_runtime_["jsx"])("h2", {
      className: Portfolio_module_default.a.projects,
      children: "Projects"
    }), /*#__PURE__*/Object(jsx_runtime_["jsx"])(components_Projects, {
      projects: data
    })]
  });
}

async function getStaticProps(context) {
  const res = await fetch(`https://${process.env.PROJECT_KEY}`);
  const data = await res.json();
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ var pages = __webpack_exports__["default"] = (Portfolio);

/***/ }),

/***/ "SibU":
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/Dropdown");

/***/ }),

/***/ "a6qw":
/***/ (function(module, exports) {



/***/ }),

/***/ "bl8f":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"cardsContainer": "Projects_cardsContainer__1HQ5k",
	"externalLinks": "Projects_externalLinks__3Zpuv",
	"mobileCards": "Projects_mobileCards__1r4k2",
	"cardInfo": "Projects_cardInfo__3HXtU",
	"backToTop": "Projects_backToTop__2n7gD",
	"slideContainer": "Projects_slideContainer__2YWGT",
	"slideTitle": "Projects_slideTitle__1_o7n",
	"descriptionContainer": "Projects_descriptionContainer__2OG90",
	"slideContent": "Projects_slideContent__3y-c6",
	"slideImg": "Projects_slideImg__13mIz",
	"contentContainer": "Projects_contentContainer__3dnWx"
};


/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "xX0t":
/***/ (function(module, exports) {

// Exports
module.exports = {
	"landing": "Portfolio_landing__3WLtx",
	"logoContainer": "Portfolio_logoContainer__1sx6V",
	"brand": "Portfolio_brand__6fpSv",
	"links": "Portfolio_links__37V1T",
	"linkContainers": "Portfolio_linkContainers__2YdrM",
	"contactToggle": "Portfolio_contactToggle__1FXdD",
	"dropdownMenu": "Portfolio_dropdownMenu__axuw6",
	"logoLinks": "Portfolio_logoLinks__zr134",
	"sloganContainer": "Portfolio_sloganContainer__1YSbF",
	"projects": "Portfolio_projects__2Tvfb"
};


/***/ })

/******/ });