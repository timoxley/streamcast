"use strict"

var test = require('tape')
var streamcast = require('../')
var pull = require('pull-stream')

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
  t.plan(2)
  pull(
    pull.values(input),
    streamcast('float'),
    pull.collect(function(err, array) {
      t.ifError(err)
      t.deepEqual(array, expected)
    })
  )
})

test('it ignores invalid types', function(t) {
  var input = [1,2,3,4,5]
  t.plan(2)
  pull(
    pull.values(input),
    streamcast('garbage-sdflhbsdlfh'),
    pull.collect(function(err, array) {
      t.ifError(err)
      t.deepEqual(array, input)
    })
  )
})
