"use strict"

var test = require('tape')
var type = require('../../types/string')

test('allows simple primitive types', function(t) {
  var input = [
    'hello',
    'world',
    '',
    1,
    true,
    false
  ]
  var expected = [
    'hello',
    'world',
    '',
    '1',
    'true',
    'false'
  ]
  t.plan(1)
  t.deepEqual(input.map(type()), expected)
})


test('coerces complex values', function(t) {
  var input = [
    [],
    [1,2,3,4],
    {yes: true},
    [1,2,3,4, {yes: true}],
    '',
    null,
    undefined,
    {},
    NaN,
    Infinity,
    -Infinity,
    function() {}
  ]
  var expected = [
    '[]',
    '[ 1, 2, 3, 4 ]',
    '{ yes: true }',
    '[ 1, 2, 3, 4, { yes: true } ]',
    '',
    '',
    '',
    '{}',
    '0',
    String(Number.MAX_VALUE),
    String(Number.MIN_VALUE),
    ''
  ]
  t.plan(1)
  t.deepEqual(input.map(type()), expected)
})
