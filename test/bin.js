"use strict"

var spawn = require('child_process').spawn
var test = require('tape')
var concat = require('concat-stream')

var info =  require('../package.json')
var BIN = __dirname + '/../' + info.bin[info.name]

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

test('can stream through streamcast executable', function(t) {
  t.plan(1)
  var child = spawn(BIN, ['integer'], {stdio: 'pipe'})
  child.once('error', function() {
    t.fail('should not error')
  })
  var stdout = child.stdout
  stdout.setEncoding('utf8')
  stdout.pipe(concat(function(data) {
    t.deepEqual(data, expected.join('\n'))
  }))

  input.forEach(function(data) {
    child.stdin.write(data + '\n')
  })
})
