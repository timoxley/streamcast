"use strict"

var test = require('tape')
var type = require('../../types/integer')

test('allows simple primitive types', function(t) {
  var input = [
    10,
    0,
    360,
    Math.PI,
    10.4,
    10.6,
    10.5,
    -10.4,
    -10.6,
    -10.5,
    true,
    false,
    '10',
    '0',
    '999.9'
  ]
  var expected = [
    10,
    0,
    360,
    3,
    10,
    11,
    11,
    -10,
    -11,
    -10,
    1,
    0,
    10,
    0,
    1000
  ]
  t.plan(1)
  t.deepEqual(input.map(type()), expected)
})
