require("source-map-support").install();
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = require("chalk");

/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = require("path");

/***/ },
/* 2 */
/***/ function(module, exports) {

module.exports = require("fs-extra");

/***/ },
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var fs_extra_1 = __webpack_require__(2);
var path_1 = __webpack_require__(1);
var chalk = __webpack_require__(0);
var path = path_1.resolve('package.json');
incrementMajorVersion(path)
    .then(function () {
    console.log(chalk.green('Successfully bumped patch version up!'));
    process.exit(0);
})
    .catch(function (err) {
    console.log(chalk.red(err));
    process.exit(1);
});
function incrementMajorVersion(path) {
    return new Promise(function (resolve, reject) {
        fs_extra_1.readJSON(path, function (err, data) {
            if (err)
                reject(err);
            var versionArray = data.version.split('.');
            var patch = versionArray.shift();
            var patchNumber = parseInt(patch);
            var newMajorNumber = patchNumber + 1;
            var newVersion = [("" + newMajorNumber)].concat(versionArray).join('.');
            var newPackage = Object.assign({}, data, { version: newVersion });
            fs_extra_1.outputJSON(path, newPackage, function (err) {
                if (err)
                    reject(err);
                resolve(true);
            });
        });
    });
}


/***/ }
/******/ ]);
//# sourceMappingURL=release-major.js.map