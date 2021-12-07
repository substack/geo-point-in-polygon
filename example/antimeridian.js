var geoPointInPolygon = require('../')
console.log(geoPointInPolygon(
  [+178.44149,-18.14161], // suva
  [
    [+139.69171,+35.68950], // tokyo
    [+174.76667,-36.86667], // auckland
    [-155.09000,+19.72972], // hilo
  ]
))
