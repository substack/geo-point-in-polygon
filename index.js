var igc = require('intersect-great-circle')
var v0 = [0,0], v1 = [0,0], v2 = [0,0], v3 = [0,0], v4 = [0,0]
var npole = [0,90], spole = [0,-90]

module.exports = function geoPointInPolygon(point, P, start, end, far) {
  if (Array.isArray(start)) {
    far = start
    start = 0
  } else if (Array.isArray(end)) {
    far = end
    end = P.length
  }
  if (far === undefined) {
    v4[0] = -P[0][0]
    v4[1] = -P[0][1]
    far = v4
  }
  var inside = false
  if (start === undefined) start = 0
  if (end === undefined) end = P.length
  v2[0] = point[0]
  v2[1] = point[1]
  var len = end - start
  for (var i = 0, j = len - 1; i < len; j = i++) {
    var xi = P[i+start][0], yi = P[i+start][1]
    var xj = P[j+start][0], yj = P[j+start][1]
    v0[0] = xi
    v0[1] = yi
    v1[0] = xj
    v1[1] = yj
    if (igc(v3,v0,v1,v2,far)) {
      inside = !inside
    }
  }
  return inside
}
