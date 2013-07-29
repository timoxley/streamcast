var toFloat = require('./float')()

module.exports = function() {
  return function(data) {
    return toFloat(data) % 360
  }
}
