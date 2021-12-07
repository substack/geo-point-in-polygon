var test = require('tape')
var inside = require('../')

// these two are pretty much from point-in-polygon
test('nested box', function (t) {
  var polygon = [ [ 1, 1 ], [ 1, 2 ], [ 2, 2 ], [ 2, 1 ] ]
  t.ok(inside([ 1.5, 1.5 ], polygon))
  t.ok(inside([ 1.2, 1.9 ], polygon))
  t.ok(!inside([ 0, 1.9 ], polygon))
  t.ok(!inside([ 1.5, 2.1 ], polygon))
  t.ok(inside([ 1.5, 1.9 ], polygon))
  t.ok(!inside([ 1.5, 2.2 ], polygon))
  t.ok(!inside([ 3, 5 ], polygon))
  t.end()
})

/**
 * Flag shape:
   *************
   *          *
   *       *
   *    *
   *       *
   *          * 
   *************
 */
test('nested flag', function (t) {
  var polygon = [ [ 1, 1 ], [ 10, 1 ], [ 5, 5 ], [ 10, 10 ], [ 1, 10 ] ]
  t.ok(inside([ 2, 5 ], polygon))
  t.ok(inside([ 3, 5 ], polygon))
  t.ok(inside([ 4, 5 ], polygon))
  t.ok(!inside([ 10, 5 ], polygon))
  t.ok(!inside([ 11, 5 ], polygon))
  t.ok(!inside([ 9, 5 ], polygon))
  t.end()
})

test('nested flag offset', function (t) {
  var polygon = [
    [ 100, 101 ], [ 102, 103 ], [ 104, 105 ],
    [ 1, 1 ], [ 10, 1 ], [ 5, 5 ], [ 10, 10 ], [ 1, 10 ],
    [ 106, 107 ], [ 108, 109 ]
  ]
  t.ok(inside([ 2, 5 ], polygon, 3, 8))
  t.ok(inside([ 3, 5 ], polygon, 3, 8))
  t.ok(inside([ 4, 5 ], polygon, 3, 8))
  t.ok(!inside([ 10, 5 ], polygon, 3, 8))
  t.ok(!inside([ 11, 5 ], polygon, 3, 8))
  t.ok(!inside([ 9, 5 ], polygon, 3, 8))
  t.end()
})


// now for some shapes where the arcs are more pronounced
test('nested north', function (t) {
  var anchorage = [-149.90028,61.21806]
  var fairbanks = [-147.71639,64.83778]
  var utqiagvik = [-156.78872,71.29058]
  var vladivostok = [131.87353,43.10562]
  var magadan = [150.80347,59.5638]
  var nuuk = [-51.72157,64.18347]
  var trondheim = [10.39506,63.43049]
  var bergen = [5.32415,60.39299]
  var reykjavik = [-21.89541,64.13548]
  var helsinki = [24.93545,60.16952]
  var sisimiut = [-53.6735,66.93946]
  var iqaluit = [-68.51449,63.75059]
  var stpetersburg = [30.31413,59.93863]
  var oulu = [25.46816,65.01236]
  var longyearbyen = [15.64007,78.2186]
  var polygon = [fairbanks,magadan,stpetersburg,trondheim,reykjavik,nuuk,iqaluit]
  t.ok(!inside(vladivostok, polygon), 'vladivostok')
  t.ok(inside(sisimiut, polygon), 'sisimiut')
  t.ok(inside(utqiagvik, polygon), 'utqiagvik')
  t.ok(!inside(anchorage, polygon), 'anchorage')
  t.ok(!inside(bergen, polygon), 'bergen')
  t.ok(!inside(helsinki, polygon), 'helsinki')
  t.ok(inside(longyearbyen, polygon), 'longyearbyen')
  t.ok(inside([0,90], polygon), 'north pole lon=0')
  t.ok(inside([180,90], polygon), 'north pole lon=180')
  t.ok(inside([-180,90], polygon), 'north pole lon=-180')
  t.ok(inside([90,90], polygon), 'north pole lon=90')
  t.ok(!inside([0,-90], polygon), 'south pole lon=0')
  t.end()
})

test('nested south', function (t) {
  var polygon = [[-50,-70],[-170,-65],[140,-72],[40,-68]]
  t.ok(inside([0,-90], polygon), 'south pole')
  t.ok(!inside([0,90], polygon), 'north pole')
  t.ok(!inside([178,-67], polygon))
  t.ok(inside([180,-71], polygon))
  t.ok(inside([-180,-71], polygon))
  t.ok(inside([-180,-71], polygon))
  t.ok(!inside([-55,-69], polygon))
  t.ok(inside([-55,-73], polygon))
  t.end()
})
