"use strict"

var pull = require('pull-stream')
var toStream = require('pull-stream-to-stream')
var through  = require('through')

var types = require('./types')

var pullThrough = pull.Through(function(read, map) {
  return function(end, cb) {
    read(end, function(end, data) {
      if (data === '') return cb(end, null)
      cb(end, !end ? map(data) : null)
    })
  }
})


module.exports = function(type, options) {
  var cast = types[type]
  if (!cast) return through()
  return through(function(data) {
    this.push(cast(options)(data))
  })
}

module.exports.pull = function(type, options) {
  var cast = types[type]
  if (!cast) return pullThrough()
  return pullThrough(cast(options))
}
