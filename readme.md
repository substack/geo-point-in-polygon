# geo-point-in-polygon

determine if a lon,lat point is inside a polygon using great circle calculations

# example

The benefits of great circle calculations are very apparent at high latitudes.

The triangle described here covers the pole even though the latitudes of each point in the triangle
is further south.

``` js
var geoPointInPolygon = require('geo-point-in-polygon')
console.log(geoPointInPolygon(
  [0,90], // north pole
  [
    [-156.78872,+71.29058], // utqiagvik
    [- 51.72157,+64.18347], // nuuk
    [+ 88.20270,+69.35350], // norilsk
  ]
)) // true
```

also gracefully handles the anti-meridian without special cases:

``` js
var geoPointInPolygon = require('geo-point-in-polygon')
console.log(geoPointInPolygon(
  [+178.44149,-18.14161], // suva
  [
    [+139.69171,+35.68950], // tokyo
    [+174.76667,-36.86667], // auckland
    [-155.09000,+19.72972], // hilo
  ]
)) // true
```

# api

``` js
var geoPointInPolygon = require('geo-point-in-polygon')
var geoPointInPolygonNested = require('geo-point-in-polygon/nested')
var geoPointInPolygonFlat = require('geo-point-in-polygon/flat')
```

## geoPointInPolygon(point, polygon, start=0, end=polygon.length, outside=ANTIPODE)

Return whether `point` is inside `polygon`.

* `polygon` is an array of `[lon,lat]` points or a flat array of `[lon0,lat0,lon1,lat1,...]`
* `point` is a 2-item array `[lon,lat]` of decimal degrees
* `start` is an inclusive offset into `polygon`. default `0`
* `end` is an exclusive offset into `polygon`. default `polygon.length`
* `outside` is a `[lon,lat]` coordinate that is known to be outside the polygon

By default, `outside` is set to the antipode of the first point in `polygon` which should work for
all polygons that span less than 180 degrees of longitude. If your polygon spans >=180 degrees, you
will need to use other domain information to find a point known to be outside the polygon.

# install

npm install geo-point-in-polygon

# license

bsd

