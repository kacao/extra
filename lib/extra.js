const util = require('util');
const format = require('sprintf-js').sprintf;

exports.isFunction = function(func) {
  return (typeof func === 'function');
}

var logger = undefined;

exports.setLogger = function(l) {
  logger = l;
}

function _log(msg) {
  if (logger != undefined) {
    logger.info(msg);
  } else {
    console.log(msg)
  };
}

exports.log = function() {
  let msg = util.format.apply(null, arguments);
  _log(msg);
}

exports.error = function() {
  let msg = util.format.apply(null, arguments);
  logger.error(msg);
}

exports.formatMoney = function(n) {
  return format('$%.2f', n/100);
}

exports.mode = function() {
  return process.env.NODE_ENV;
}

var defaultOption = exports.defaultOption = function(defaultOption, option) {
  if (typeof defaultOption != typeof option) { return defaultOption; }
}

var validateOptions = exports.validateOptions = function(defaultOptions, options) {
  if (typeof options == 'undefined') { return defaultOptions; }
  if (typeof defaultOptions == 'object') {
    for (let key in options) {
      defaultOptions[key] = validateOptions(defaultOptions[key], options[key]);
    }
    return defaultOptions;
  } else {
    return options;
  }
}

module.exports = exports;
