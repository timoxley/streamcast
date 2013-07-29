"use strict"

var pull = require('pull-stream')

var types = require('./types')

var through = pull.Through(function(read, map) {
  var count = 0
  return function(end, cb) {
    read(end, function(end, data) {
      if (data === '') return cb(end, null)
      cb(end, !end ? map(data) : null)
    })
  }
})

module.exports = function(type, options) {
  var cast = types[type]
  if (!cast) return pull.through()
  return through(cast(options))
}


