var igc = require('intersect-great-circle')
var v0 = [0,0], v1 = [0,0], v2 = [0,0], v3 = [0,0], v4 = [0,0]

module.exports = function geoPointInPolygon(point, P, start, end, far) {
  if (Array.isArray(start)) {
    far = start
    start = 0
  } else if (Array.isArray(end)) {
    far = end
    end = P.length
  }
  var inside = false
  if (start === undefined) start = 0
  if (end === undefined) end = P.length
  if (far === undefined) {
    v4[0] = (((P[start+0]+360)%360)+360)%360-180
    v4[1] = -P[start+1]
    far = v4
  }
  v2[0] = point[0]
  v2[1] = point[1]
  var len = (end - start)/2
  for (var i = 0, j = len - 1; i < len; j = i++) {
    v0[0] = P[start+i*2+0]
    v0[1] = P[start+i*2+1]
    v1[0] = P[start+j*2+0]
    v1[1] = P[start+j*2+1]
    if (igc(v3,v0,v1,v2,far)) {
      inside = !inside
    }
  }
  return inside
}
