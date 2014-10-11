"use strict"

var toString = require('./string')()

module.exports = function() {
  return function(data) {
    if (data instanceof Buffer) return data
    if (Array.isArray(data)) return new Buffer(data)
    return new Buffer(toString(data))
  }
}

