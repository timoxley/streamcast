"use strict"

var toFloat = require('./float')()
var inspect = require('util').inspect

module.exports = function() {
  return function(data) {
    if (typeof data === 'string') return data
    if (typeof data === 'function') return ''
    if (data == null) return ''
    if (typeof data === 'number') return String(toFloat(data))
    return inspect(data)
  }
}
