"use strict"

var test = require('tape')
var type = require('../../types/degrees')

test('allows simple primitive types', function(t) {
  var input = [
    0,
    360,
    Math.PI,
    361,
    true,
    false,
    '10',
    '0',
  ]
  var expected = [
    0,
    0,
    Math.PI,
    1,
    1,
    0,
    10,
    0,
  ]
  t.plan(1)
  t.deepEqual(input.map(type()), expected)
})
