var igc = require('intersect-great-circle')
var v0 = [0,0], v1 = [0,0], v2 = [0,0], v3 = [0,0], v4 = [0,0]

module.exports = function geoPointInPolygon(point, P, start, end, outside) {
  if (Array.isArray(start)) {
    outside = start
    start = 0
  } else if (Array.isArray(end)) {
    outside = end
    end = P.length
  }
  var inside = false
  if (start === undefined) start = 0
  if (end === undefined) end = P.length
  if (outside === undefined) {
    v4[0] = (((P[start][0]+360)%360)+360)%360-180
    v4[1] = -P[start][1]
    outside = v4
  }
  v2[0] = point[0]
  v2[1] = point[1]
  var len = end - start
  for (var i = 0, j = len - 1; i < len; j = i++) {
    v0[0] = P[i+start][0]
    v0[1] = P[i+start][1]
    v1[0] = P[j+start][0]
    v1[1] = P[j+start][1]
    if (igc(v3,v0,v1,v2,outside)) {
      inside = !inside
    }
  }
  return inside
}
