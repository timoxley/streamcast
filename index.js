var pull = require('pull-stream')

var types = require('./types')

module.exports = function(type, options) {
  var cast = types[type]
  if (!cast) return through()
  return through(cast(options))
}

var through = pull.Through(function (read, map) {
  return function(end, cb) {
    read(end, function (end, data) {
      cb(end, map(data))
    })
  }
})
