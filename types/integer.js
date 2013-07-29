var toFloat = require('./float')()

module.exports = function() {
  return function(data) {
    return Math.round(toFloat(data))
  }
}
