/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/process/browser.js":
/*!******************************************!*\
  !*** ../node_modules/process/browser.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// shim for using process in browser\nvar process = module.exports = {};\n\n// cached from whatever global is present so that test runners that stub it\n// don't break things.  But we need to wrap it in a try catch in case it is\n// wrapped in strict mode code which doesn't define any globals.  It's inside a\n// function because try/catches deoptimize in certain engines.\n\nvar cachedSetTimeout;\nvar cachedClearTimeout;\n\nfunction defaultSetTimout() {\n    throw new Error('setTimeout has not been defined');\n}\nfunction defaultClearTimeout () {\n    throw new Error('clearTimeout has not been defined');\n}\n(function () {\n    try {\n        if (typeof setTimeout === 'function') {\n            cachedSetTimeout = setTimeout;\n        } else {\n            cachedSetTimeout = defaultSetTimout;\n        }\n    } catch (e) {\n        cachedSetTimeout = defaultSetTimout;\n    }\n    try {\n        if (typeof clearTimeout === 'function') {\n            cachedClearTimeout = clearTimeout;\n        } else {\n            cachedClearTimeout = defaultClearTimeout;\n        }\n    } catch (e) {\n        cachedClearTimeout = defaultClearTimeout;\n    }\n} ())\nfunction runTimeout(fun) {\n    if (cachedSetTimeout === setTimeout) {\n        //normal enviroments in sane situations\n        return setTimeout(fun, 0);\n    }\n    // if setTimeout wasn't available but was latter defined\n    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {\n        cachedSetTimeout = setTimeout;\n        return setTimeout(fun, 0);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedSetTimeout(fun, 0);\n    } catch(e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally\n            return cachedSetTimeout.call(null, fun, 0);\n        } catch(e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error\n            return cachedSetTimeout.call(this, fun, 0);\n        }\n    }\n\n\n}\nfunction runClearTimeout(marker) {\n    if (cachedClearTimeout === clearTimeout) {\n        //normal enviroments in sane situations\n        return clearTimeout(marker);\n    }\n    // if clearTimeout wasn't available but was latter defined\n    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {\n        cachedClearTimeout = clearTimeout;\n        return clearTimeout(marker);\n    }\n    try {\n        // when when somebody has screwed with setTimeout but no I.E. maddness\n        return cachedClearTimeout(marker);\n    } catch (e){\n        try {\n            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally\n            return cachedClearTimeout.call(null, marker);\n        } catch (e){\n            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.\n            // Some versions of I.E. have different rules for clearTimeout vs setTimeout\n            return cachedClearTimeout.call(this, marker);\n        }\n    }\n\n\n\n}\nvar queue = [];\nvar draining = false;\nvar currentQueue;\nvar queueIndex = -1;\n\nfunction cleanUpNextTick() {\n    if (!draining || !currentQueue) {\n        return;\n    }\n    draining = false;\n    if (currentQueue.length) {\n        queue = currentQueue.concat(queue);\n    } else {\n        queueIndex = -1;\n    }\n    if (queue.length) {\n        drainQueue();\n    }\n}\n\nfunction drainQueue() {\n    if (draining) {\n        return;\n    }\n    var timeout = runTimeout(cleanUpNextTick);\n    draining = true;\n\n    var len = queue.length;\n    while(len) {\n        currentQueue = queue;\n        queue = [];\n        while (++queueIndex < len) {\n            if (currentQueue) {\n                currentQueue[queueIndex].run();\n            }\n        }\n        queueIndex = -1;\n        len = queue.length;\n    }\n    currentQueue = null;\n    draining = false;\n    runClearTimeout(timeout);\n}\n\nprocess.nextTick = function (fun) {\n    var args = new Array(arguments.length - 1);\n    if (arguments.length > 1) {\n        for (var i = 1; i < arguments.length; i++) {\n            args[i - 1] = arguments[i];\n        }\n    }\n    queue.push(new Item(fun, args));\n    if (queue.length === 1 && !draining) {\n        runTimeout(drainQueue);\n    }\n};\n\n// v8 likes predictible objects\nfunction Item(fun, array) {\n    this.fun = fun;\n    this.array = array;\n}\nItem.prototype.run = function () {\n    this.fun.apply(null, this.array);\n};\nprocess.title = 'browser';\nprocess.browser = true;\nprocess.env = {};\nprocess.argv = [];\nprocess.version = ''; // empty string to avoid regexp issues\nprocess.versions = {};\n\nfunction noop() {}\n\nprocess.on = noop;\nprocess.addListener = noop;\nprocess.once = noop;\nprocess.off = noop;\nprocess.removeListener = noop;\nprocess.removeAllListeners = noop;\nprocess.emit = noop;\nprocess.prependListener = noop;\nprocess.prependOnceListener = noop;\n\nprocess.listeners = function (name) { return [] }\n\nprocess.binding = function (name) {\n    throw new Error('process.binding is not supported');\n};\n\nprocess.cwd = function () { return '/' };\nprocess.chdir = function (dir) {\n    throw new Error('process.chdir is not supported');\n};\nprocess.umask = function() { return 0; };\n\n\n//# sourceURL=webpack:///../node_modules/process/browser.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(process) {// console.log('test');\r\nconsole.log(process.env.CHRIS);\r\n// (function ($) {\r\n//     \"use strict\";\r\n\r\n// new WOW().init();\r\n\r\n\r\n//     /*---background image---*/\r\n$('[data-bgimg]').each(function () {\r\n    var bgImgUrl = $(this).data('bgimg');\r\n    $(this).css({\r\n        'background-image': 'url(' + bgImgUrl + ')', // + meaning concat\r\n    });\r\n});\r\n\r\n//     /*---stickey menu---*/\r\n$(window).on('scroll', function () {\r\n    var scroll = $(window).scrollTop(),\r\n        screensize = $(window).width();\r\n    if (screensize >= 319) {\r\n        if (scroll < 100) {\r\n            $(\".sticky-header\").removeClass(\"sticky\");\r\n        } else {\r\n            $(\".sticky-header\").addClass(\"sticky\");\r\n        }\r\n    }\r\n});\r\n\r\n\r\n//     /*---------------------\r\n//         Hero Slider\r\n//      ---------------------- */\r\n\r\nvar workSliderWrapper = new Swiper('.works_slide_wrapper.swiper-container', {\r\n    loop: true,\r\n    speed: 750,\r\n    slidesPerView: 3,\r\n    spaceBetween: 10,\r\n    autoplay: {\r\n        delay: 7000,\r\n        disableOnInteraction: false,\r\n    },\r\n    scrollbar: {\r\n        el: '.swiper-scrollbar',\r\n    },\r\n\r\n    breakpoints: {\r\n        0: {\r\n            slidesPerView: 1,\r\n        },\r\n        478: {\r\n            slidesPerView: 1,\r\n            scrollbar: false,\r\n        },\r\n        576: {\r\n            slidesPerView: 2,\r\n        },\r\n        768: {\r\n            slidesPerView: 2,\r\n        },\r\n        992: {\r\n            slidesPerView: 3,\r\n        },\r\n        1200: {\r\n            slidesPerView: 3,\r\n        },\r\n    },\r\n});\r\n\r\n//     /*---------------------\r\n//         Testimonial Slider\r\n//      ---------------------- */\r\n\r\nvar testiSliderWrapper = new Swiper('.testimonial_slick.swiper-container', {\r\n    loop: true,\r\n    speed: 750,\r\n    slidesPerView: 1,\r\n    spaceBetween: 10,\r\n    autoplay: {\r\n        delay: 7000,\r\n        disableOnInteraction: false,\r\n    },\r\n    navigation: {\r\n        nextEl: \".swiper-button-next\",\r\n        prevEl: \".swiper-button-prev\",\r\n    },\r\n});\r\n\r\n\r\n/*---------------------\r\n    Blog Slider\r\n ---------------------- */\r\n\r\nvar blogSliderWrapper = new Swiper('.blog_container.swiper-container', {\r\n    loop: true,\r\n    speed: 750,\r\n    slidesPerView: 3,\r\n    spaceBetween: 30,\r\n    autoplay: {\r\n        delay: 7000,\r\n        disableOnInteraction: false,\r\n    },\r\n\r\n    breakpoints: {\r\n        0: {\r\n            slidesPerView: 1,\r\n        },\r\n        478: {\r\n            slidesPerView: 1,\r\n        },\r\n        576: {\r\n            slidesPerView: 2,\r\n        },\r\n        768: {\r\n            slidesPerView: 2,\r\n        },\r\n        992: {\r\n            slidesPerView: 3,\r\n        },\r\n        1200: {\r\n            slidesPerView: 3,\r\n        },\r\n    },\r\n});\r\n\r\n/*---------------------\r\n    Blog Slider\r\n ---------------------- */\r\n\r\nvar projectSliderWrapper = new Swiper('.project_desc_slick.swiper-container', {\r\n    loop: true,\r\n    speed: 750,\r\n    slidesPerView: 1,\r\n    spaceBetween: 0,\r\n    pagination: {\r\n        el: '.swiper-pagination',\r\n        clickable: true,\r\n    },\r\n    autoplay: {\r\n        delay: 7000,\r\n        disableOnInteraction: false,\r\n    },\r\n});\r\n\r\n\r\n/*---------------------\r\n    Blog Slider\r\n ---------------------- */\r\n\r\nvar relatedSliderWrapper = new Swiper('.blog_container-2.swiper-container', {\r\n    loop: true,\r\n    speed: 750,\r\n    slidesPerView: 1,\r\n    spaceBetween: 0,\r\n    autoplay: {\r\n        delay: 7000,\r\n        disableOnInteraction: false,\r\n    },\r\n\r\n    breakpoints: {\r\n        0: {\r\n            slidesPerView: 1,\r\n        },\r\n        478: {\r\n            slidesPerView: 1,\r\n        },\r\n        576: {\r\n            slidesPerView: 2,\r\n        },\r\n        768: {\r\n            slidesPerView: 2,\r\n        },\r\n        992: {\r\n            slidesPerView: 3,\r\n        },\r\n        1200: {\r\n            slidesPerView: 3,\r\n        },\r\n    },\r\n});\r\n\r\n\r\n/*---canvas menu activation---*/\r\n$('.canvas_open').on('click', function () {\r\n    $('.offcanvas_menu_wrapper,.body_overlay').addClass('active')\r\n});\r\n\r\n$('.canvas_close,.body_overlay').on('click', function () {\r\n    $('.offcanvas_menu_wrapper,.body_overlay').removeClass('active')\r\n});\r\n\r\n//Search Box addClass removeClass\r\n$('.header_search > a').on('click', function () {\r\n    $('.page_search_box').addClass('active')\r\n});\r\n$('.search_close > i').on('click', function () {\r\n    $('.page_search_box').removeClass('active')\r\n});\r\n\r\n\r\n/*--- Magnific Popup Video---*/\r\n$('.port_popup').magnificPopup({\r\n    type: 'image',\r\n    gallery: {\r\n        enabled: true\r\n    }\r\n});\r\n\r\n/*--- counterup activation ---*/\r\n$('.counterup').counterUp({\r\n    delay: 20,\r\n    time: 2000\r\n});\r\n\r\n\r\n/*---  ScrollUp Active ---*/\r\n// $.scrollUp({\r\n//     scrollText: '<i class=\"ion-android-arrow-up\"></i>',\r\n//     easingType: 'linear',\r\n//     scrollSpeed: 900,\r\n//     animation: 'fade'\r\n// });\r\n\r\n\r\n/*---Off Canvas Menu---*/\r\nvar $offcanvasNav = $('.offcanvas_main_menu'),\r\n    $offcanvasNavSubMenu = $offcanvasNav.find('.sub-menu');\r\n$offcanvasNavSubMenu.parent().prepend('<span class=\"menu-expand\"><i class=\"ion-chevron-down\"></i></span>');\r\n\r\n$offcanvasNavSubMenu.slideUp();\r\n\r\n$offcanvasNav.on('click', 'li a, li .menu-expand', function (e) {\r\n    var $this = $(this);\r\n    if (($this.parent().attr('class').match(/\\b(menu-item-has-children|has-children|has-sub-menu)\\b/)) && ($this.attr('href') === '#' || $this.hasClass('menu-expand'))) {\r\n        e.preventDefault();\r\n        if ($this.siblings('ul:visible').length) {\r\n            $this.siblings('ul').slideUp('slow');\r\n        } else {\r\n            $this.closest('li').siblings('li').find('ul:visible').slideUp('slow');\r\n            $this.siblings('ul').slideDown('slow');\r\n        }\r\n    }\r\n    if ($this.is('a') || $this.is('span') || $this.attr('clas').match(/\\b(menu-expand)\\b/)) {\r\n        $this.parent().toggleClass('menu-open');\r\n    } else if ($this.is('li') && $this.attr('class').match(/\\b('menu-item-has-children')\\b/)) {\r\n        $this.toggleClass('menu-open');\r\n    }\r\n});\r\n\r\n\r\n/*blog Isotope activation*/\r\n$('.blog_page_gallery,.portfolio_page_gallery').imagesLoaded(function () {\r\n    // init Isotope\r\n    var $grid = $('.blog_page_gallery,.portfolio_page_gallery').isotope({\r\n        itemSelector: '.gird_item',\r\n        percentPosition: true,\r\n        masonry: {\r\n            columnWidth: '.gird_item'\r\n        }\r\n    });\r\n\r\n    // filter items on button click\r\n    $('.blog_messonry_button,.portfolio_messonry_button').on('click', 'button', function () {\r\n        var filterValue = $(this).attr('data-filter');\r\n        $grid.isotope({\r\n            filter: filterValue\r\n        });\r\n\r\n        $(this).siblings('.active').removeClass('active');\r\n        $(this).addClass('active');\r\n    });\r\n\r\n});\r\n\r\n\r\n\r\n//     //Tooltip\r\ntippy(\"[data-tippy-content]\")\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// })(jQuery);\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ \"../node_modules/process/browser.js\")))\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });