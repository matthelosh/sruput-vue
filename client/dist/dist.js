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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/client/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(9);
var isBuffer = __webpack_require__(31);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(22)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.2
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Vue = factory());
}(this, (function () { 'use strict';

/*  */

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.functionalOptions = undefined;
  this.functionalScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode, deep) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.isCloned = true;
  if (deep && vnode.children) {
    cloned.children = cloneVNodes(vnode.children);
  }
  return cloned
}

function cloneVNodes (vnodes, deep) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i], deep);
  }
  return res
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this) : parentVal
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn.call(this, parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if ("development" !== 'production' && inject) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if (inBrowser && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both micro and macro tasks.
// In < 2.4 we used micro tasks everywhere, but there are some scenarios where
// micro tasks have too high a priority and fires in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using macro tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use micro task by default, but expose a way to force macro task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) Task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine MicroTask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a Task instead of a MicroTask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
      data && data.slot != null
    ) {
      var name = child.data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = (parentVnode.data && parentVnode.data.attrs) || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  keyOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(keyOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    observerState.shouldConvert = false;
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    observerState.shouldConvert = true;
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
        ? Reflect.ownKeys(inject).filter(function (key) {
          /* istanbul ignore next */
          return Object.getOwnPropertyDescriptor(inject, key).enumerable
        })
        : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && "development" !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias,
  eventKeyName
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (keyCodes) {
    if (Array.isArray(keyCodes)) {
      return keyCodes.indexOf(eventKeyCode) === -1
    } else {
      return keyCodes !== eventKeyCode
    }
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  // static trees can be rendered once and cached on the contructor options
  // so every instance shares the same cached trees
  var renderFns = this.$options.staticRenderFns;
  var cached = renderFns.cached || (renderFns.cached = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = renderFns[index].call(this._renderProxy, null, this);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm = Object.create(parent);
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode) {
        vnode.functionalScopeId = options._scopeId;
        vnode.functionalContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    vnode.functionalContext = contextVm;
    vnode.functionalOptions = options;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }

  return vnode
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    warn(
      'Avoid using non-primitive value as key, ' +
      'use string/number value instead.',
      context
    );
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (isDef(vnode)) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force))) {
        applyNS(child, ns, force);
      }
    }
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // if the parent didn't update, the slot nodes will be the ones from
      // last render. They need to be cloned to ensure "freshness" for this render.
      for (var key in vm.$slots) {
        var slot = vm.$slots[key];
        if (slot._rendered) {
          vm.$slots[key] = cloneVNodes(slot, true /* deep */);
        }
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$1 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$1++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$3 (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue$3)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$3);
stateMixin(Vue$3);
eventsMixin(Vue$3);
lifecycleMixin(Vue$3);
renderMixin(Vue$3);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && cached$$1 !== current) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }

      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$3);

Object.defineProperty(Vue$3.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue$3.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

Vue$3.version = '2.5.2';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(
            config.ignoredElements.length &&
            config.ignoredElements.some(function (ignore) {
              return isRegExp(ignore)
                ? ignore.test(tag)
                : ignore === tag
            })
          ) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.functionalScopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setAttribute(vnode.elm, i, '');
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.functionalContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
        } else {
          vnodeToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if ("development" !== 'production' && !vnodeToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.elm = elm;
      vnode.isAsyncPlaceholder = true;
      return true
    }
    {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed
              ) {
                bailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE9 || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

function baseWarn (msg) {
  console.error(("[Vue compiler]: " + msg));
}

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value) {
  (el.props || (el.props = [])).push({ name: name, value: value });
}

function addAttr (el, name, value) {
  (el.attrs || (el.attrs = [])).push({ name: name, value: value });
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  modifiers
) {
  (el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn
) {
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    "development" !== 'production' && warn &&
    modifiers && modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.'
    );
  }
  // check capture modifier
  if (modifiers && modifiers.capture) {
    delete modifiers.capture;
    name = '!' + name; // mark the event as captured
  }
  if (modifiers && modifiers.once) {
    delete modifiers.once;
    name = '~' + name; // mark the event as once
  }
  /* istanbul ignore if */
  if (modifiers && modifiers.passive) {
    delete modifiers.passive;
    name = '&' + name; // mark the event as passive
  }
  var events;
  if (modifiers && modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }
  var newHandler = { value: value, modifiers: modifiers };
  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
        "? " + baseValueExpression + ".trim()" +
        ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: ("\"" + value + "\""),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len;
var str;
var chr;
var index$1;
var expressionPos;
var expressionEndPos;



function parseModel (val) {
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead."
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.'
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
      "?_i(" + value + "," + valueBinding + ")>-1" + (
        trueValueBinding === 'true'
          ? (":(" + value + ")")
          : (":_q(" + value + "," + trueValueBinding + ")")
      )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + value + "=$$a.concat([$$v]))}" +
      "else{$$i>-1&&(" + value + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
    el,
    value,
    modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;
  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers) && modifiers.number) {
    return toNumber(value) !== toNumber(newVal)
  }
  if (isDef(modifiers) && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$options._renderChildren;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$3.config.mustUseProp = mustUseProp;
Vue$3.config.isReservedTag = isReservedTag;
Vue$3.config.isReservedAttr = isReservedAttr;
Vue$3.config.getTagNamespace = getTagNamespace;
Vue$3.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$3.options.directives, platformDirectives);
extend(Vue$3.options.components, platformComponents);

// install platform patch function
Vue$3.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
Vue$3.nextTick(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$3);
    } else if ("development" !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if ("development" !== 'production' &&
    config.productionTip !== false &&
    inBrowser && typeof console !== 'undefined'
  ) {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/*  */

// check whether current browser encodes a char inside attribute values
function shouldDecode (content, encoded) {
  var div = document.createElement('div');
  div.innerHTML = "<div a=\"" + content + "\"/>";
  return div.innerHTML.indexOf(encoded) > 0
}

// #3663
// IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? shouldDecode('\n', '&#10;') : false;

/*  */

var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});

function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      tokens.push(JSON.stringify(text.slice(lastIndex, index)));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    tokens.push(JSON.stringify(text.slice(lastIndex)));
  }
  return tokens.join('+')
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if ("development" !== 'production' && staticClass) {
    var expression = parseText(staticClass, options.delimiters);
    if (expression) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.'
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var expression = parseText(staticStyle, options.delimiters);
      if (expression) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.'
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
var ncname = '[a-zA-Z_][\\w\\-\\.]*';
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
var comment = /^<!--/;
var conditionalComment = /^<!\[/;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function (m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n'
};
var encodedAttr = /&(?:lt|gt|quot|amp);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd));
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(lastTag, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
        advance(textEnd);
      }

      if (textEnd < 0) {
        text = html;
        html = '';
      }

      if (options.chars && text) {
        options.chars(text);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if ("development" !== 'production' && !stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
        advance(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }
      var value = args[3] || args[4] || args[5] || '';
      attrs[i] = {
        name: args[1],
        value: decodeAttr(
          value,
          options.shouldDecodeNewlines
        )
      };
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
    }

    // Find the closest opened tag of the same type
    if (tagName) {
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if ("development" !== 'production' &&
          (i > pos || !tagName) &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag.")
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /(.*?)\s+(?:in|of)\s+(.*)/;
var forIteratorRE = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/;

var argRE = /:(.*)$/;
var bindRE = /^:|^v-bind:/;
var modifierRE = /\.[^.]+/g;

var decodeHTMLCached = cached(he.decode);

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;



function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg) {
    if (!warned) {
      warned = true;
      warn$2(msg);
    }
  }

  function endPre (element) {
    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldKeepComment: options.comments,
    start: function start (tag, attrs, unary) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        "development" !== 'production' && warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.'
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
        // element-scope stuff
        processElement(element, options);
      }

      function checkRootConstraints (el) {
        {
          if (el.tag === 'slot' || el.tag === 'template') {
            warnOnce(
              "Cannot use <" + (el.tag) + "> as component root element because it may " +
              'contain multiple nodes.'
            );
          }
          if (el.attrsMap.hasOwnProperty('v-for')) {
            warnOnce(
              'Cannot use v-for on stateful component root element because ' +
              'it renders multiple elements.'
            );
          }
        }
      }

      // tree management
      if (!root) {
        root = element;
        checkRootConstraints(root);
      } else if (!stack.length) {
        // allow root elements with v-if, v-else-if and v-else
        if (root.if && (element.elseif || element.else)) {
          checkRootConstraints(element);
          addIfCondition(root, {
            exp: element.elseif,
            block: element
          });
        } else {
          warnOnce(
            "Component template should contain exactly one root element. " +
            "If you are using v-if on multiple elements, " +
            "use v-else-if to chain them instead."
          );
        }
      }
      if (currentParent && !element.forbidden) {
        if (element.elseif || element.else) {
          processIfConditions(element, currentParent);
        } else if (element.slotScope) { // scoped slot
          currentParent.plain = false;
          var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        } else {
          currentParent.children.push(element);
          element.parent = currentParent;
        }
      }
      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        endPre(element);
      }
      // apply post-transforms
      for (var i$1 = 0; i$1 < postTransforms.length; i$1++) {
        postTransforms[i$1](element, options);
      }
    },

    end: function end () {
      // remove trailing whitespace
      var element = stack[stack.length - 1];
      var lastNode = element.children[element.children.length - 1];
      if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
        element.children.pop();
      }
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      endPre(element);
    },

    chars: function chars (text) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.'
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored.")
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      text = inPre || text.trim()
        ? isTextTag(currentParent) ? text : decodeHTMLCached(text)
        // only preserve whitespace if its not right after a starting tag
        : preserveWhitespace && children.length ? ' ' : '';
      if (text) {
        var expression;
        if (!inVPre && text !== ' ' && (expression = parseText(text, delimiters))) {
          children.push({
            type: 2,
            expression: expression,
            text: text
          });
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          children.push({
            type: 3,
            text: text
          });
        }
      }
    },
    comment: function comment (text) {
      currentParent.children.push({
        type: 3,
        text: text,
        isComment: true
      });
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var l = el.attrsList.length;
  if (l) {
    var attrs = el.attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      attrs[i] = {
        name: el.attrsList[i].name,
        value: JSON.stringify(el.attrsList[i].value)
      };
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (element, options) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = !element.key && !element.attrsList.length;

  processRef(element);
  processSlot(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    if ("development" !== 'production' && el.tag === 'template') {
      warn$2("<template> cannot be keyed. Place the key on real elements instead.");
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var inMatch = exp.match(forAliasRE);
    if (!inMatch) {
      "development" !== 'production' && warn$2(
        ("Invalid v-for expression: " + exp)
      );
      return
    }
    el.for = inMatch[2].trim();
    var alias = inMatch[1].trim();
    var iteratorMatch = alias.match(forIteratorRE);
    if (iteratorMatch) {
      el.alias = iteratorMatch[1].trim();
      el.iterator1 = iteratorMatch[2].trim();
      if (iteratorMatch[3]) {
        el.iterator2 = iteratorMatch[3].trim();
      }
    } else {
      el.alias = alias;
    }
  }
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if."
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if ("development" !== 'production' && children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored."
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

function processSlot (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if ("development" !== 'production' && el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead."
      );
    }
  } else {
    var slotScope;
    if (el.tag === 'template') {
      slotScope = getAndRemoveAttr(el, 'scope');
      /* istanbul ignore if */
      if ("development" !== 'production' && slotScope) {
        warn$2(
          "the \"scope\" attribute for scoped slots have been deprecated and " +
          "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
          "can also be used on plain elements in addition to <template> to " +
          "denote scoped slots.",
          true
        );
      }
      el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
    } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
      el.slotScope = slotScope;
    }
    var slotTarget = getBindingAttr(el, 'slot');
    if (slotTarget) {
      el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
      // preserve slot as an attribute for native shadow DOM compat
      // only for non-scoped slots.
      if (!el.slotScope) {
        addAttr(el, 'slot', slotTarget);
      }
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, isProp;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name);
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isProp = false;
        if (modifiers) {
          if (modifiers.prop) {
            isProp = true;
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            addHandler(
              el,
              ("update:" + (camelize(name))),
              genAssignmentCode(value, "$event")
            );
          }
        }
        if (isProp || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value);
        } else {
          addAttr(el, name, value);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        addHandler(el, name, value, modifiers, false, warn$2);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
        }
        addDirective(el, name, rawName, value, arg, modifiers);
        if ("development" !== 'production' && name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var expression = parseText(value, delimiters);
        if (expression) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.'
          );
        }
      }
      addAttr(el, name, JSON.stringify(value));
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      "development" !== 'production' &&
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead."
      );
    }
    _el = _el.parent;
  }
}

/*  */

/**
 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
 * Turn this:
 *   <input v-model="data[type]" :type="type">
 * into this:
 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
 *   <input v-else :type="type" v-model="data[type]">
 */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (map['v-model'] && (map['v-bind:type'] || map[':type'])) {
      var typeBinding = getBindingAttr(el, 'type');
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });
      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

function addRawAttr (el, name, value) {
  el.attrsMap[name] = value;
  el.attrsList.push({ name: name, value: value });
}

var model$2 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$2
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
var simplePathRE = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/;

// keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative,
  warn
) {
  var res = isNative ? 'nativeOn:{' : 'on:{';
  for (var name in events) {
    var handler = events[name];
    // #5330: warn click.right, since right clicks do not actually fire click events.
    if ("development" !== 'production' &&
      name === 'click' &&
      handler && handler.modifiers && handler.modifiers.right
    ) {
      warn(
        "Use \"contextmenu\" instead of \"click.right\" since right clicks " +
        "do not actually fire \"click\" events."
      );
    }
    res += "\"" + name + "\":" + (genHandler(name, handler)) + ",";
  }
  return res.slice(0, -1) + '}'
}

function genHandler (
  name,
  handler
) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);

  if (!handler.modifiers) {
    return isMethodPath || isFunctionExpression
      ? handler.value
      : ("function($event){" + (handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? handler.value + '($event)'
      : isFunctionExpression
        ? ("(" + (handler.value) + ")($event)")
        : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var code = keyCodes[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(code)) + "," +
    "$event.key)"
  )
}

/*  */

function on (el, dir) {
  if ("development" !== 'production' && dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */

var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data = el.plain ? undefined : genData$2(el, state);

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      "development" !== 'production' && state.warn(
        "v-once can only be used inside v-for that is keyed. "
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if ("development" !== 'production' &&
    state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:{" + (genProps(el.attrs)) + "},";
  }
  // DOM props
  if (el.props) {
    data += "domProps:{" + (genProps(el.props)) + "},";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false, state.warn)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if ("development" !== 'production' && (
    el.children.length !== 1 || ast.type !== 1
  )) {
    state.warn('Inline-template components must have exactly one child element.');
  }
  if (ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  slots,
  state
) {
  return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
      return genScopedSlot(key, slots[key], state)
    }).join(',')) + "])")
}

function genScopedSlot (
  key,
  el,
  state
) {
  if (el.for && !el.forProcessed) {
    return genForScopedSlot(key, el, state)
  }
  var fn = "function(" + (String(el.slotScope)) + "){" +
    "return " + (el.tag === 'template'
      ? el.if
        ? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  return ("{key:" + key + ",fn:" + fn + "}")
}

function genForScopedSlot (
  key,
  el,
  state
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
  el.forProcessed = true; // avoid recursion
  return "_l((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + (genScopedSlot(key, el, state)) +
    '})'
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      return (altGenElement || genElement)(el$1, state)
    }
    var normalizationType = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var res = '';
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
  }
  return res.slice(0, -1)
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */

// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// check valid identifier for v-for
var identRE = /[A-Za-z_$][\w$]*/;

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast) {
  var errors = [];
  if (ast) {
    checkNode(ast, errors);
  }
  return errors
}

function checkNode (node, errors) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), errors);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), errors);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), errors);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], errors);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, errors);
  }
}

function checkEvent (exp, text, errors) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    errors.push(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
    );
  }
  checkExpression(exp, text, errors);
}

function checkFor (node, text, errors) {
  checkExpression(node.for || '', text, errors);
  checkIdentifier(node.alias, 'v-for alias', text, errors);
  checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
  checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
}

function checkIdentifier (ident, type, text, errors) {
  if (typeof ident === 'string' && !identRE.test(ident)) {
    errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
  }
}

function checkExpression (exp, text, errors) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      errors.push(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
      );
    } else {
      errors.push(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n"
      );
    }
  }
}

/*  */

function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        warn$$1(
          "Error compiling template:\n\n" + template + "\n\n" +
          compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
          vm
        );
      }
      if (compiled.tips && compiled.tips.length) {
        compiled.tips.forEach(function (msg) { return tip(msg, vm); });
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];
      finalOptions.warn = function (msg, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      var compiled = baseCompile(template, finalOptions);
      {
        errors.push.apply(errors, detectErrors(compiled.ast));
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  optimize(ast, options);
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compileToFunctions = ref$1.compileToFunctions;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue$3.prototype.$mount;
Vue$3.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    "development" !== 'production' && warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if ("development" !== 'production' && !template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        shouldDecodeNewlines: shouldDecodeNewlines,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if ("development" !== 'production' && config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue$3.compile = compileToFunctions;

return Vue$3;

})));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(16).setImmediate))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var normalizeHeaderName = __webpack_require__(33);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(10);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(10);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(0);
var settle = __webpack_require__(34);
var buildURL = __webpack_require__(36);
var parseHeaders = __webpack_require__(37);
var isURLSameOrigin = __webpack_require__(38);
var createError = __webpack_require__(11);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(39);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(40);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(35);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(48);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
    isLoggedIn: !!localStorage.getItem('token')
};

var mutations = {
    LOGIN_USER: function LOGIN_USER(state) {
        state.isLoggedIn = true;
    },
    LOGOUT_USER: function LOGOUT_USER(state) {
        state.isLoggedIn = false;
    }
};

exports.default = new _vuex2.default.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: state,
    mutations: mutations
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(18);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _app = __webpack_require__(19);

var _app2 = _interopRequireDefault(_app);

var _home = __webpack_require__(25);

var _home2 = _interopRequireDefault(_home);

var _about = __webpack_require__(50);

var _about2 = _interopRequireDefault(_about);

var _index = __webpack_require__(53);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import BootstrapVue from 'bootstrap-vue'

_vue2.default.use(_vueRouter2.default);
// Vue.use(BootstrapVue)

// import Login from './pages/login.vue'


var router = new _vueRouter2.default({
    mode: 'history',
    base: __dirname,
    routes: [{
        path: '/',
        component: _home2.default
    }, {
        path: '/about',
        component: _about2.default
    }, {
        path: '/dashboard',
        component: _index2.default
    }]
});

_vue2.default.component('app', _app2.default);
new _vue2.default({
    router: router,
    template: '<app></app>'

}).$mount('#app');
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(17);
exports.setImmediate = setImmediate;
exports.clearImmediate = clearImmediate;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(1)))

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/**
  * vue-router v2.8.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (process.env.NODE_ENV !== 'production' && !condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

function isError (err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots
    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent && parent._routerRoot !== parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks
    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];
      if (
        (val && current !== vm) ||
        (!val && current === vm)
      ) {
        matched.instances[name] = val;
      }
    }

    // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;(data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    };

    // resolve props
    var propsToPass = data.props = resolveProps(route, matched.props && matched.props[name]);
    if (propsToPass) {
      // clone to prevent mutation
      propsToPass = data.props = extend({}, propsToPass);
      // pass non-declared props as attrs
      var attrs = data.attrs = data.attrs || {};
      for (var key in propsToPass) {
        if (!component.props || !(key in component.props)) {
          attrs[key] = propsToPass[key];
          delete propsToPass[key];
        }
      }
    }

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false,
          "props in \"" + (route.path) + "\" is a " + (typeof config) + ", " +
          "expecting an object, function or boolean."
        );
      }
  }
}

function extend (to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
  return to
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery,
  _parseQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  var parse = _parseQuery || parseQuery;
  var parsedQuery;
  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    process.env.NODE_ENV !== 'production' && warn(false, e.message);
    parsedQuery = {};
  }
  for (var key in extraQuery) {
    parsedQuery[key] = extraQuery[key];
  }
  return parsedQuery
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */


var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom,
  router
) {
  var stringifyQuery$$1 = router && router.options.stringifyQuery;

  var query = location.query || {};
  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery$$1),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery$$1);
  }
  return Object.freeze(route)
}

function clone (value) {
  if (Array.isArray(value)) {
    return value.map(clone)
  } else if (value && typeof value === 'object') {
    var res = {};
    for (var key in value) {
      res[key] = clone(value[key]);
    }
    return res
  } else {
    return value
  }
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (
  ref,
  _stringifyQuery
) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  // handle null value #1566
  if (!a || !b) { return a === b }
  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) {
    var aVal = a[key];
    var bVal = b[key];
    // check nested equality
    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal)
    }
    return String(aVal) === String(bVal)
  })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;

    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass;
    // Support global empty active class
    var activeClassFallback = globalActiveClass == null
            ? 'router-link-active'
            : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null
            ? 'router-link-exact-active'
            : globalExactActiveClass;
    var activeClass = this.activeClass == null
            ? activeClassFallback
            : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null
            ? exactActiveClassFallback
            : this.exactActiveClass;
    var compareTarget = location.path
      ? createRoute(null, location, null, router)
      : route;

    classes[exactActiveClass] = isSameRoute(current, compareTarget);
    classes[activeClass] = this.exact
      ? classes[exactActiveClass]
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed && _Vue === Vue) { return }
  install.installed = true;

  _Vue = Vue;

  var isDef = function (v) { return v !== undefined; };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this;
      }
      registerInstance(this, this);
    },
    destroyed: function destroyed () {
      registerInstance(this);
    }
  });

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this._routerRoot._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this._routerRoot._route }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  var firstChar = relative.charAt(0);
  if (firstChar === '/') {
    return relative
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

/*  */

// $flow-disable-line
var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = pathToRegexp_1.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function createRouteMap (
  routes,
  oldPathList,
  oldPathMap,
  oldNameMap
) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || [];
  // $flow-disable-line
  var pathMap = oldPathMap || Object.create(null);
  // $flow-disable-line
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route);
  });

  // ensure wildcard routes are always at the end
  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathList,
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(
    path,
    parent,
    pathToRegexpOptions.strict
  );

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named, does not redirect and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && !route.redirect && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias)
      ? route.alias
      : [route.alias];

    aliases.forEach(function (alias) {
      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(
        pathList,
        pathMap,
        nameMap,
        aliasRoute,
        parent,
        record.path || '/' // matchAs
      );
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function compileRouteRegex (path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);
  if (process.env.NODE_ENV !== 'production') {
    var keys = Object.create(null);
    regex.keys.forEach(function (key) {
      warn(!keys[key.name], ("Duplicate param keys in route with path: \"" + path + "\""));
      keys[key.name] = true;
    });
  }
  return regex
}

function normalizePath (path, parent, strict) {
  if (!strict) { path = path.replace(/\/$/, ''); }
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

/*  */


function normalizeLocation (
  raw,
  current,
  append,
  router
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : basePath;

  var query = resolveQuery(
    parsedPath.query,
    next.query,
    router && router.options.parseQuery
  );

  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */


function createMatcher (
  routes,
  router
) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      if (!record) { return _createRoute(null, location) }
      var paramNames = record.regex.keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];
        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location, null, router))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      if (process.env.NODE_ENV !== 'production') {
        warn(
          false, ("invalid redirect option: " + (JSON.stringify(redirect)))
        );
      }
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      if (process.env.NODE_ENV !== 'production') {
        warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      }
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom, router)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  regex,
  path,
  params
) {
  var m = path.match(regex);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) {
      params[key.name] = val;
    }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  // Fix for #1585 for Firefox
  window.history.replaceState({ key: getStateKey() }, '');
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);

    if (!shouldScroll) {
      return
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition((shouldScroll), position);
      }).catch(function (err) {
        if (process.env.NODE_ENV !== 'production') {
          assert(false, err.toString());
        }
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function normalizeOffset (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

function scrollToPosition (shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';
  if (isObject && typeof shouldScroll.selector === 'string') {
    var el = document.querySelector(shouldScroll.selector);
    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    window.scrollTo(position.x, position.y);
  }
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */

function resolveAsyncComponents (matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;

    flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;

        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          }
          // save resolved on async factory in case it's used elsewhere
          def.resolved = typeof resolvedDef === 'function'
            ? resolvedDef
            : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;
          if (pending <= 0) {
            next();
          }
        });

        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;
          process.env.NODE_ENV !== 'production' && warn(false, msg);
          if (!error) {
            error = isError(reason)
              ? reason
              : new Error(msg);
            next(error);
          }
        });

        var res;
        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }
        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;
            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) { next(); }
  }
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

var hasSymbol =
  typeof Symbol === 'function' &&
  typeof Symbol.toStringTag === 'symbol';

function isESModule (obj) {
  return obj.__esModule || (hasSymbol && obj[Symbol.toStringTag] === 'Module')
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    if (called) { return }
    called = true;
    return fn.apply(this, args)
  }
}

/*  */

var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError (errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) { cb(route); });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }
    if (err && !this$1.ready) {
      this$1.ready = true;
      this$1.readyErrorCbs.forEach(function (cb) { cb(err); });
    }
  });
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function (err) {
    if (isError(err)) {
      if (this$1.errorCbs.length) {
        this$1.errorCbs.forEach(function (cb) { cb(err); });
      } else {
        warn(false, 'uncaught error during route navigation:');
        console.error(err);
      }
    }
    onAbort && onAbort(err);
  };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    try {
      hook(route, current, function (to) {
        if (to === false || isError(to)) {
          // next(false) -> abort navigation, ensure current URL
          this$1.ensureURL(true);
          abort(to);
        } else if (
          typeof to === 'string' ||
          (typeof to === 'object' && (
            typeof to.path === 'string' ||
            typeof to.name === 'string'
          ))
        ) {
          // next('/') or next({ path: '/' }) -> redirect
          abort();
          if (typeof to === 'object' && to.replace) {
            this$1.replace(to);
          } else {
            this$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    var queue = enterGuards.concat(this$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
      // strip full URL origin
      base = base.replace(/^https?:\/\/[^\/]+/, '');
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  if (instance) {
    return function boundRouteGuard () {
      return guard.apply(instance, arguments)
    }
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    var initLocation = getLocation(this.base);
    window.addEventListener('popstate', function (e) {
      var current = this$1.current;

      // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.
      var location = getLocation(this$1.base);
      if (this$1.current === START && location === initLocation) {
        return
      }

      this$1.transitionTo(location, function (route) {
        if (expectScroll) {
          handleScroll(router, route, current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    var router = this.router;
    var expectScroll = router.options.scrollBehavior;
    var supportsScroll = supportsPushState && expectScroll;

    if (supportsScroll) {
      setupScroll();
    }

    window.addEventListener(supportsPushState ? 'popstate' : 'hashchange', function () {
      var current = this$1.current;
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        if (supportsScroll) {
          handleScroll(this$1.router, route, current, true);
        }
        if (!supportsPushState) {
          replaceHash(route.fullPath);
        }
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function getUrl (path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return (base + "#" + path)
}

function pushHash (path) {
  if (supportsPushState) {
    pushState(getUrl(path));
  } else {
    window.location.hash = path;
  }
}

function replaceHash (path) {
  if (supportsPushState) {
    replaceState(getUrl(path));
  } else {
    window.location.replace(getUrl(path));
  }
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: { configurable: true } };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  return registerHook(this.beforeHooks, fn)
};

VueRouter.prototype.beforeResolve = function beforeResolve (fn) {
  return registerHook(this.resolveHooks, fn)
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  return registerHook(this.afterHooks, fn)
};

VueRouter.prototype.onReady = function onReady (cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError (errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? to.matched
      ? to
      : this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(
    to,
    current || this.history.current,
    append,
    this
  );
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function registerHook (list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);
    if (i > -1) { list.splice(i, 1); }
  }
}

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.8.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6762fec_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_app_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(20)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_app_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_c6762fec_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_app_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/src/app.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c6762fec", Component.options)
  } else {
    hotAPI.reload("data-v-c6762fec", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(21);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("26dcab2a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c6762fec\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./app.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c6762fec\",\"scoped\":false,\"hasInlineConfig\":false}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./app.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(5);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'App'

}; //
//
//
//
//
//
//
//

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [_c("router-view")], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c6762fec", esExports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_home_vue__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_home_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_501cc61e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_home_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(26)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_501cc61e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/src/pages/home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-501cc61e", Component.options)
  } else {
    hotAPI.reload("data-v-501cc61e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(27);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("faa5144e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-501cc61e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-501cc61e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/sass-loader/lib/loader.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.page {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: url(" + __webpack_require__(28) + ");\n  background-size: cover;\n}\n.jumbotron {\n  background: rgba(238, 238, 238, 0.9) !important;\n  height: 70vh;\n}\n.btn-flat {\n  border-radius: 0 !important;\n  border: 0 !important;\n}\n.login-box {\n  border-top: 5px solid #78caa8;\n  border-radius: 5px;\n  padding: 20px;\n  background: rgba(255, 255, 255, 0.7);\n  position: relative;\n  box-shadow: 3px 5px 15px 1px rgba(0, 0, 0, 0.5);\n}\n.btn-login {\n  margin-top: 10px;\n}\n.form-control, .input-group {\n  border-radius: 0;\n}\n.is-waiting {\n  position: relative;\n  transition-duration: 1s;\n}\n.is-waiting > * {\n    opacity: .25;\n}\n.is-waiting:before {\n    content: '';\n    height: 100%;\n    left: 0;\n    position: absolute;\n    top: 0;\n    width: 100%;\n    z-index: 9;\n}\n.is-waiting:after {\n    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA0cHgiIGhlaWdodD0iMTA0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIiBjbGFzcz0idWlsLWRlZmF1bHQiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBmaWxsPSJub25lIiBjbGFzcz0iYmsiPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjA4MzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDYwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuMjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC4zMzMzMzMzMzMzMzMzMzMzcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNDE2NjY2NjY2NjY2NjY2N3MiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgxODAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48cmVjdCB4PSI0Ni41IiB5PSI0MCIgd2lkdGg9IjciIGhlaWdodD0iMjAiIHJ4PSI1IiByeT0iNSIgZmlsbD0iIzJjM2U1MCIgdHJhbnNmb3JtPSJyb3RhdGUoMjEwIDUwIDUwKSB0cmFuc2xhdGUoMCAtMzApIj4gIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIGZyb209IjEiIHRvPSIwIiBkdXI9IjFzIiBiZWdpbj0iMC41ODMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT48L3JlY3Q+PHJlY3QgeD0iNDYuNSIgeT0iNDAiIHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiByeD0iNSIgcnk9IjUiIGZpbGw9IiMyYzNlNTAiIHRyYW5zZm9ybT0icm90YXRlKDMwMCA1MCA1MCkgdHJhbnNsYXRlKDAgLTMwKSI+ICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiBmcm9tPSIxIiB0bz0iMCIgZHVyPSIxcyIgYmVnaW49IjAuODMzMzMzMzMzMzMzMzMzNHMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+PC9yZWN0PjxyZWN0IHg9IjQ2LjUiIHk9IjQwIiB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgcng9IjUiIHJ5PSI1IiBmaWxsPSIjMmMzZTUwIiB0cmFuc2Zvcm09InJvdGF0ZSgzMzAgNTAgNTApIHRyYW5zbGF0ZSgwIC0zMCkiPiAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgZnJvbT0iMSIgdG89IjAiIGR1cj0iMXMiIGJlZ2luPSIwLjkxNjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPjwvcmVjdD48L3N2Zz4=);\n    background-position: center;\n    background-size: cover;\n    content: '';\n    height: 64px;\n    left: 50%;\n    position: absolute;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    width: 64px;\n}\n", ""]);

// exports


/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,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UUUUAFFFOoAbRTqKACkxS0UAFFFFABRRRTEGKKWigBKKWigBMUYpaKQBRilooATFFLRQAlFLRTATFGKWigBKKWjFACUYpaMUAJRS0UAJRS0UgEoxS0UwExRilopAJRS0UwExRS0YpAJijFLRTATFGKWigBMUUtFACUUtFIBKTFLRQAmKMUtFACUUtFACUUtJQAmKWiigYU2nUUANpDS0UANNLH940Glj+/8AhQA29OLOT3wKxq1tQOLQj1IrKoAKKKKACjFFLQAgqexXN7F7ZP6VDVrTFzd59ENAGrS0UUCCloooAKKKKACiiigAooopgJRS0UgEopaKYCYoxS0lIApMUtFACUYpaKAG0UuKKAG4oxTsUmKAEopcUlACUUtJQMSilooASiiigAptOooAbRRRQAlJTqSgBpppp5ppoAgkGasxNvjVu/Q/WoXFLbNhmX15FAFmiiigAqtqMnl2jercVZrM1Z8skfpyaAMwClp1NoAKKKKAG0U6igZNZJ5l2mei5Y1r1R0tMJJIe5wPpV6gBKKXFGKBCUUtJQAUlOpKAEopaKAEpKdSUAJRS0UAJiilooASiiigApMUtFADaKdRQA3FGKdTaAExS0UUAJiilooArUUtFWQFLRRQAUooopDFoopaACiiloAKKKKAFooooGFFFFABRRRQAUU6igAooooAKKKKACiiigAooooAozWMbyswJGTkj3pn2GP1NX2HNNIoEUvsUfqaPsUfqauYo20AU/sUfqacLGP1NW9tKBSGVBYxnua1kGEUdcADNVQKtr90fShghaSlpCQASeg5NIZUum3SKvYDJ+tNUUmS7Fj1JzT1FADgKcKQUooAcKWkFLQAtLSUtABS0UtABRRS0AFFFFAC0UUUAFFFFABRRTqAG06iigAooooAKKKKYgoopaQBRRRQAUUUtMBKKWigAooooAKKKWgBKKWigBKKWigBKWiigAoopaAEopaSgAopaKAEopaKAExRS0UAJRRS0AJRS0UAJRS0UAJRS0UAJRRRQAUUUUAJRS0UAJRS0UAJRS0UAJRRRQAUUUUAJRS0lIApKWimAlFFFIYU2nU2gApE++KWkH3hQAtxEssRVumcjFUzZR+/51fb7tRkUCKf2OP3/Oj7HH71cxSYoAqfZI/f86X7HH71axSgUAVBZR+9WrS2SFmZc5Ixz6U4LUi96AHilpKWgAooooAWkpaKYCUtFFABRRRQAlFLRQAlFLRQAlFFFABSUtFACUUtFACUUUUgEopaSgApKWigBKSlooASkpaKBiUlLRQAlFFFABTadTaACkpaSgBKQ0tJQAxhUYJRww7GpWFRsKALX0pajgbMeO44qSgAqld2scsu5s5x61dqKT734UAZ5so/f86T7HH71cIpCKAKn2OP3/Ok+yR+9W8UmKAKv2OP3pRZR+9WsUoFACxRiKJUT7op9A6CigApKWigBKKWkoAKKKKACkpaKAEopaKAEooooASilooASkpaKAEopaSgAooooAKKKKACm06igBtFFFAFelpKWrICloooAKWiikMKWiigApaKKACloooAKKKKACiiigY6iiigAooooAKKKKACiiigAooooAKKKKAGnrRilNLQA3FGKMUuKAExQBS4paACrK/dH0qtVlfuj6UmCFpr/wCrb6GnU1/uN9DSGU1FPApAKcBTAdS0lLSAUU4U0U4UAKKKKWgApaSloAKWiigApaKKACiiigAoop1MBtOoopAFFFFMAooooEFLRRSAKKKKYBRS0UAFFFFABRS0UAJS0UUAFFFFABRRS0AJS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUtJQAUUUtACUUtJQAUUtFACUUUUAFFFFABRRRQAlLRRQAlFLRQAlFFFABSUtFACUUtJQAUUUUAJRS0lIApKWigBKKKKBjaO4p1J3FAD26GmYp7dKbTENoxTsUmKAExSgUuKXFACAU9e9Npy9aAHUtJS0gClpKWgAooopgFFFFABRRRQAUUUUAFFFFACUUUtACUUUUAFFFFABSUtJSAKKKKAEooooAKSlpKAEopaSgApKWkoGJRRRQAU2nUUANpDS0UAJSUtJQA0imMKkIppFADoOA31FS1HF0b61JQAVHJ96pKjk+9QAzFNIp9JQA3FJinUYoAbijFOxRigBR0ooHSloASiiigAooooAKKKKACiiigBKKWkoAKKKKAEopaSgApKWigBKKWkoAKKKKAEooooAKKKKACiiigCtS0lLVkBRRS0AFFFLQAUUUtIYUUUtABRRRQAUUUUAFFFOoAKKKKBhRRRQAUUUUAFFFOoAbRRTqACm06igBveig0UAFFFFABRTqKACp1+6PpUFTL90UmCHU1/uN9DTqRvun6UhlYCnCkApRTELS0UtAwFLSUtIBaWkpaAFooooAWiiloAKKKKYBRRRSAdRRRTAKKKKACiiloEFFFFIAooopgLRRRQAUUUtACUtJS0AFFFFABRRS0AJS0UUAFFFFABRRRQAUUUtACUtFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUUtFACUUtJQAUUUUAFJS0UAJRS0UAJRRRQAlFLSUAFFFFACUUtJQAlFLSUDCjuKKB1FIBx6UlOPQ02mISloooAKWiigApy9abTl60AOooopAFLRRTAKKKKACiiigAooooAKKKKACiiigApKWigAooooASiiigAooopAJRRRQAUlLRQAlFFFMBKKKKQCUlOpKAEpKWigYlFFFADaKdTaACkpaKAGmkIpxpMUALH0NPpkfen0AFMf71Ppj9aAGUUtJQAlGKWigBKKKKAAdKWgUUAFFFFACUtFFACUUtFACUUUUAFFFFABSUtFACUUUUAFJS0UAJRRRQAlFLSUAFJS0lABRRRQAUUUUAVqWkFLVkBS0UUAFLRRQAUtFFIYUtFFABRRRQAU6m06gAooooAKKKKACiiigYUUUUAOooooAKKKKACiiigBpooPWigAp1Np1ABRRRQAVMv3R9KhqZfuj6UmCHUjfdP0oob7p+lIZBSigUopiFoopaAClpKWgYtFFFAC0UUtABS0UUAFFFFABRRTqACiiigAooooEFLRRQAUUUtACUtFFABRRS0AFFFFABRRRQAUtJS0AFFFFABRRRQAUUtFABRRRQAUUUUAFFFLQAlFFFABRRRQAUUUtACUUtFACUUUtACUUtJQAUUUtACUUtJQAUUUUAFFFFABRRRQAlFLRQAlFFFABRRRQAUUUUAJRRRQAlFLRQAlJS0UAJRS0lIBKUdaKO9Axx6UlLSUxBRRRQAUUtFABSr1pKVetADqKWikAUUUUwCiiigAooooAKKKKACilpKACiiigAooooAKKKKACkpaKAEooopAFJS0UAJRRRQAlFLSUABpKWigBKSlpKAEopaSgYlFFFABTadRQA2iiigBDRS0lACr3p1NXvTqACmP1p9MfrQA2iiimAlFLSUgCiiigAHSigdKKACiiigAopaSgAooooAKKKKAEopaKAEopaKAEooooASilpKACkpaKAEooooASiiigBKKWigBKKKKAK1LRS1ZAUtJS0AFFFFAxaKKKQC0UUUAFFFFABTqKKACiiigAooooAKKdRQMbTqKKACiiigAooooAKKKKAG0UUUCHUUUUDCiiigAqZfuioamX7o+lJghaG6H6UUH7p+lIZCKcKQUopiFooooAKWiigYtLSUUALS0lLQAtFFFABRRRQA6iiigAooooEFLSUtABRRRQAtFFFABRRS0AFFFFABRRRQAtFFFABRRRQAUUUUALRRRQAUUUUAFLSUtABSUtFACUtFFACUUtFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFJS0UAJRRS0AJRRRQAUUUUAJRS0lABRRRQAUlLRQAlFLSUAFJS0UAJRRRQAUd6KKAFoopKAFooooAKKKKAClXrSUq9aAH0UlLSAKKKKYBRRRQAUUUtACUUUtABSUtFACUUUUAFFFFABRRRQAUUUUgCkpaKAEooooAKSlpKACiiigBKKKKAEpKWigBKSlpKBiUUtJQAUUUUANooooAQ0tFFAAvenU1e9OoAKY3Wn0xutADaKKKYBSUtFACUUUUgAdKWkHSloAKKKKACkpaKACiiigApKWigBKKKKACiiigBKKWigBKKKKAEopaSgBKKWkoAKSlooASiiigBKKKKAK9LSUtWQFLSUtABRRS0DClpKWkAUUUUAFOptOoAKKKKACiiigAp1FFABRRRQMKKKKACiiigAooooAKKKWgBvelpD1paBBRRRQAUUUUDCpl6CoamX7opMELQfun6UUH7ppDIhSikFKKYhaKKKAFooooGLS0lLQAUtJS0ALRRRQAUUUUAFOoooAKKKKBC0UUUALRRRQAUUUtACUtFFABS0lLQAlLRRQAUUUUAFFFLQAUUUUAFFFFABS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFACUtFFABSUtFACUUUUAFFFFABSUtFACUUtJQAUUUUAJRRRQAlFLRQAUUUUABopTSUAFFFFABRRRQAUq9aSlXrQA+iiikAUUUUwCiiigApaKSgBaKKKACiiigApKWigApKWikAlFFFMAooopAFFFFACUUUUAFJS0lABRRRQAlFFFACUUUUAJRRSUDCkpaSgAooooAKbRRQAUUUUAC96dTV706gApjdafTG60AJSUtJTEFFF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"

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
    data: function data() {
        return {
            text: "Insya Allah Manjur!",
            login: {
                username: '',
                password: '',
                role: '0'
            },
            isAuth: false,
            loader: false,
            loginError: '',
            infoError: '',
            router: '',
            user: {}
        };
    },
    beforeCreate: function beforeCreate() {
        if (_index2.default.state.isLoggedIn) {
            router.push('/dashboard');
        }
    },

    methods: {
        onSubmit: function onSubmit(dataLogin) {
            var authUser = {};
            var app = this;
            app.loader = true;
            app.loginError = false;
            app.login = {
                username: dataLogin.username,
                password: dataLogin.password,
                role: dataLogin.role
            };
            if (app.login.username == '') {}
            _axios2.default.post('/user/authenticate', {
                username: this.login.username,
                password: this.login.password,
                _role: this.login.role
            }).then(function (res) {
                if (res.data.error == false) {

                    authUser.data = res.data;
                    authUser.token = res.data.token;
                    window.localStorage.setItem('token', authUser.token);
                    app.isAuth = true;
                    _index2.default.commit('LOGIN_USER');
                    if (authUser.data.role == "Admin") {
                        //    alert('Admin');
                        app.$router.push('/dashboard');
                    }
                } else if (res.data.error == true) {
                    if (res.data.kodeErr == '404') {
                        //    alert('User tidak ditemukan. Cek kembali username, password dan peran!');
                        app.login.username = '';
                        app.login.password = '';
                        //    app.login.role='0';
                        app.loader = false;
                        app.loginError = true;
                        app.infoError = 'Login Gagal. Cek Username atau Password Anda!';
                    } else if (res.data.kodeErr == '0') {
                        app.loginError = true;
                        app.infoError = 'Tentukan peran Anda Dahulu!';
                        app.loader = false;
                    }
                }
            });

            event.preventDefault();
        }
    }
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var bind = __webpack_require__(9);
var Axios = __webpack_require__(32);
var defaults = __webpack_require__(7);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(13);
axios.CancelToken = __webpack_require__(46);
axios.isCancel = __webpack_require__(12);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(47);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(7);
var utils = __webpack_require__(0);
var InterceptorManager = __webpack_require__(41);
var dispatchRequest = __webpack_require__(42);
var isAbsoluteURL = __webpack_require__(44);
var combineURLs = __webpack_require__(45);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(11);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);
var transformData = __webpack_require__(43);
var isCancel = __webpack_require__(12);
var defaults = __webpack_require__(7);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(0);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(13);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/**
 * vuex v3.0.0
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (path, targetModule, newModule) {
  if (process.env.NODE_ENV !== 'production') {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (process.env.NODE_ENV !== 'production') {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  var state = options.state; if ( state === void 0 ) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  if (process.env.NODE_ENV !== 'production') {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    process.env.NODE_ENV !== 'production' &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });

  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  return genericSubscribe(fn, this._subscribers)
};

Store.prototype.subscribeAction = function subscribeAction (fn) {
  return genericSubscribe(fn, this._actionSubscribers)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if (process.env.NODE_ENV !== 'production') {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function genericSubscribe (fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (process.env.NODE_ENV !== 'production' && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if (process.env.NODE_ENV !== 'production') {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (process.env.NODE_ENV !== 'production' && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (process.env.NODE_ENV !== 'production' && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};


/* harmony default export */ __webpack_exports__["default"] = (index_esm);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "page" }, [
    _c("div", { staticClass: "jumbotron" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "col-sm-8 text-center " }, [
          _vm._m(0),
          _vm._v(" "),
          _c("h1", { staticClass: "hidden-xs" }, [_vm._v("SRUPUT")]),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("p", { staticClass: "hidden-xs" }, [_vm._v(_vm._s(_vm.text))])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-4" }, [
          _c("div", { staticClass: "login-box" }, [
            _c(
              "form",
              {
                attrs: { action: "", role: "form" },
                on: {
                  submit: function($event) {
                    _vm.onSubmit(_vm.login)
                  }
                }
              },
              [
                _c("h4", [_vm._v("Masuk Sistem")]),
                _vm._v(" "),
                _vm.loginError
                  ? _c("div", { staticClass: "alert alert-danger infoError" }, [
                      _vm._v(_vm._s(_vm.infoError))
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "form-group",
                    class: { "is-waiting": _vm.loader }
                  },
                  [
                    _c("div", { staticClass: "input-group" }, [
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.login.role,
                              expression: "login.role"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { name: "role", id: "role" },
                          on: {
                            change: function($event) {
                              var $$selectedVal = Array.prototype.filter
                                .call($event.target.options, function(o) {
                                  return o.selected
                                })
                                .map(function(o) {
                                  var val = "_value" in o ? o._value : o.value
                                  return val
                                })
                              _vm.$set(
                                _vm.login,
                                "role",
                                $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              )
                            }
                          }
                        },
                        [
                          _c("option", { attrs: { value: "0" } }, [
                            _vm._v("Peran Pengguna")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1" } }, [
                            _vm._v(" Administrator ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "2" } }, [
                            _vm._v(" Pembimbing ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "3" } }, [
                            _vm._v(" Praktikan ")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "4" } }, [
                            _vm._v(" Tukang ")
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group has-addon" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.login.username,
                            expression: "login.username"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "text",
                          name: "username",
                          id: "username",
                          placeholder: "Username/ID"
                        },
                        domProps: { value: _vm.login.username },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.login, "username", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(2)
                    ]),
                    _vm._v(" "),
                    _c("br"),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-group has-addon" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.login.password,
                            expression: "login.password"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: {
                          type: "password",
                          name: "password",
                          id: "password",
                          placeholder: "Password"
                        },
                        domProps: { value: _vm.login.password },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.login, "password", $event.target.value)
                          }
                        }
                      }),
                      _vm._v(" "),
                      _vm._m(3)
                    ])
                  ]
                ),
                _vm._v(" "),
                _vm._m(4)
              ]
            )
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h1", [_c("i", { staticClass: "fa fa-coffee" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "hidden-xs" }, [
      _c("small", [_vm._v("Satu Ragam Usaha agar Prakerlap mUdah Terlaksana")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "fa fa-user" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "input-group-addon" }, [
      _c("i", { staticClass: "fa fa-lock" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary btn-flat", attrs: { type: "submit" } },
        [_vm._v("Masuk")]
      )
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-501cc61e", esExports)
  }
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_about_vue__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_about_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_about_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ac769eb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_about_vue__ = __webpack_require__(52);
var disposed = false
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_about_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_5ac769eb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_about_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/src/pages/about.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5ac769eb", Component.options)
  } else {
    hotAPI.reload("data-v-5ac769eb", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//

exports.default = {
    name: 'about'
};

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("h1", [_vm._v("Tentang Sruput")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5ac769eb", esExports)
  }
}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30672b75_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__ = __webpack_require__(67);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(54)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_index_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_30672b75_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/src/pages/dashboard/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-30672b75", Component.options)
  } else {
    hotAPI.reload("data-v-30672b75", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(55);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("d767c31e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30672b75\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-30672b75\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _header = __webpack_require__(57);

var _header2 = _interopRequireDefault(_header);

var _sidebar = __webpack_require__(62);

var _sidebar2 = _interopRequireDefault(_sidebar);

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      name: 'dashboard',
      greet: '',
      user: '',
      showUser: function showUser(user) {
        var token = localStorage.getItem('token');
        _axios2.default.get('/protected/me', { headers: { 'X-Access-Token': token } }).then(function (res) {
          // console.log(res);
          return user = 'bogel';
        });
      }

    };
  },
  beforeCreate: function beforeCreate() {
    var token = localStorage.getItem('token');
    _axios2.default.get('/protected', { headers: { 'X-Access-Token': token } }).then(function (res) {
      if (res.data.error == true) {
        console.log(res);
        this.$router.push('/');
      }
    });
    if (!_index2.default.state.isLoggedIn) {
      alert('Sruput kopi, login.. Baru boleh masuk. :)');
      this.$router.push('/');
    }
  },

  components: { DashHead: _header2.default, DashSide: _sidebar2.default },
  methods: {
    function: function _function() {
      return this.user.realname = 'Joko';
    }
  },
  afterCreate: function afterCreate() {
    alert('halo');
  }
};

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8160086e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_header_vue__ = __webpack_require__(61);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(58)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_8160086e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/src/pages/dashboard/components/header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8160086e", Component.options)
  } else {
    hotAPI.reload("data-v-8160086e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("416ecf4a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8160086e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./header.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8160086e\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\n.navbar-sruput{\n\tborder-radius: 0;\n\tbackground: #5689ff;\n}\n.navbar-sruput a{\n\tcolor: #efefef!important;\n}\n.nav > li >  a:hover {\n\tbackground: blue;\n}\n", ""]);

// exports


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = __webpack_require__(6);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  props: ['realname'],
  data: function data() {
    return {
      name: 'DashHead'

    };
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("nav", { staticClass: "navbar navbar-sruput" }, [
      _c("div", { staticClass: "container-fluid" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "navbar-collapse" }, [
          _c("ul", { staticClass: "nav navbar-nav navbar-right" }, [
            _vm._m(1),
            _vm._v(" "),
            _c("li", [
              _c("a", { attrs: { href: "#" } }, [
                _c("i", { staticClass: "fa fa-user" }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(_vm.realname))])
              ])
            ]),
            _vm._v(" "),
            _vm._m(2)
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "navbar-header" }, [
      _c("button", { staticClass: "navbar-toggle" }, [
        _c("i", { staticClass: "fa fa-bars" })
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "navbar-brand", attrs: { href: "/" } }, [
        _c("i", { staticClass: "fa fa-coffee" }),
        _vm._v(" SRUPUT")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "active" }, [
      _c("a", { attrs: { href: "/" } }, [
        _c("i", { staticClass: "fa fa-home" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("a", { attrs: { href: "#" } }, [
        _c("i", { staticClass: "fa fa-cogs" })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8160086e", esExports)
  }
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_sidebar_vue__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_sidebar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_sidebar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63804160_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_sidebar_vue__ = __webpack_require__(66);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(63)
}
var normalizeComponent = __webpack_require__(2)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-63804160"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_sidebar_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_63804160_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_template_compiler_preprocessor_engine_pug_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_sidebar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "client/src/pages/dashboard/components/sidebar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-63804160", Component.options)
  } else {
    hotAPI.reload("data-v-63804160", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(64);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("2bb7b0b4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63804160\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./sidebar.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-63804160\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./sidebar.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "\nh1[data-v-63804160] {\n  color: red;\n}\n", ""]);

// exports


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//

exports.default = {
	data: function data() {
		return {
			name: 'DashSide'
		};
	}
};

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [_c("h1", [_vm._v("Sidebar")])])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-63804160", esExports)
  }
}

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._b({}, "div", _vm.showUser(), false),
    [
      _c("dash-head", { attrs: { realname: _vm.user.realname } }),
      _vm._v(" "),
      _c("div", { staticClass: "row-fluid" }, [
        _c("div", { staticClass: "col-sm-2" }, [_c("dash-side")], 1),
        _vm._v(" "),
        _c("div", { staticClass: "col-sm-10" }, [
          _c("h1", [_vm._v("Main Content")]),
          _vm._v("\n        " + _vm._s(_vm.user) + "\n      ")
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-30672b75", esExports)
  }
}

/***/ })
/******/ ]);