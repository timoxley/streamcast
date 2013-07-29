"use strict"

var test = require('tape')
var type = require('../../types/float')

test('allows valid values', function(t) {
  var input = [
    -1.0,
    1.0,
    Math.PI,
    '1.0',
    '1',
    '00',
    9999
  ]
  var expected = [
    -1,
    1,
    Math.PI,
    1,
    1,
    0,
    9999
  ]
  t.plan(1)
  t.deepEqual(input.map(type()), expected)
})


test('coerces not a number values to 0', function(t) {
  var input = [
    [],
    'help',
    '',
    null,
    undefined,
    {},
    NaN,
    function() {}
  ]
  var expected = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ]
  t.plan(1)
  t.deepEqual(input.map(type()), expected)
})

test('coerces +- infinity to MAX/MIN values', function(t) {
  var input = [
    Infinity,
    -Infinity
  ]
  var expected = [
    Number.MAX_VALUE,
    Number.MIN_VALUE,
  ]

  t.plan(1)
  t.deepEqual(input.map(type()), expected)
})
