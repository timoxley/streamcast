"use strict"

module.exports = function() {
  return function(data) {
    var num = Number(data)
    if (Number.isNaN(num)) return 0

    if (!Number.isFinite(num)) {
      if (num < 0) return Number.MIN_VALUE
      else return Number.MAX_VALUE
    }

    return num || 0
  }
}
