"use strict"

var test = require('tape')
var type = require('../../types/buffer')

test('allows valid values', function(t) {
  t.plan(1)
  var buffer = new Buffer(1)
  var input = [
    buffer,
    'test',
    [1,2,3,4]
  ]
  var expected = [buffer, new Buffer('test'), new Buffer([1,2,3,4])]
  t.deepEqual(JSON.stringify(expected), JSON.stringify(input.map(type())))
})
