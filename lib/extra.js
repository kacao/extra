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

export.mode = function() {
  return process.env.NODE_ENV;
}

module.exports = exports;
