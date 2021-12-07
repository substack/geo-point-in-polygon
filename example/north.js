var geoPointInPolygon = require('../')
console.log(geoPointInPolygon(
  [0,90], // north pole
  [
    [-156.78872,+71.29058], // utqiagvik
    [- 51.72157,+64.18347], // nuuk
    [+ 88.20270,+69.35350], // norilsk
  ]
))
