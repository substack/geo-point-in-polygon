var nested = require('./nested.js')
var flat = require('./flat.js')

module.exports = function geoPointInPolygon(point, P, start, end, far) {
  if (P.length > 0 && Array.isArray(P[0])) {
    return nested(point, P, start, end, far)
  } else {
    return flat(point, P, start, end, far)
  }
}
