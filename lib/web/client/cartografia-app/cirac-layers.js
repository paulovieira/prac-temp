// tileJson definition for the cirac maps (vulnerability, etc)

Cirac.layers = [

{
    "id": "seq-a",
    "bounds":[-17.5479,32.3683,-16.0016,33.2364],
    "center":[-16.8393,32.7203,9],
    "minzoom": 7,
    "maxzoom": 13,
    "tiles":["/tiles/seq-a/{z}/{x}/{y}.png"],
    "grids":["/tiles/seq-a/{z}/{x}/{y}.grid.json"],
    "name": "teste 1",
    "description": "teste 1 desc"
},
{
    "id": "seq-b",
    "bounds":[-17.5479,32.3683,-16.0016,33.2364],
    "center":[-16.8393,32.7203,9],
    "minzoom": 7,
    "maxzoom": 13,
    "tiles":["/tiles/seq-b/{z}/{x}/{y}.png"],
    "grids":["/tiles/seq-b/{z}/{x}/{y}.grid.json"],
    "name": "teste 2",
    "description": "teste 2 desc"
},

{
    "bounds": [-17.5479, 32.3683, -16.0016, 33.2364],
    "center": [-16.8393, 32.7203, 9],
    "format": "png8",
    "interactivity": {
        "fields": ["freguesia", "gid"],
        "layer": "paf_pop_percent",
        "template_teaser": "f {{{freguesia}}}"
    },
    "minzoom": 7,
    "maxzoom": 13,
    "srs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over",
    "Stylesheet": ["main-style.mss"],
    "Layer": [{
        "id": "countries",
        "name": "countries",
        "srs": "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0.0 +k=1.0 +units=m +nadgrids=@null +wktext +no_defs +over",
        "geometry": "polygon",
        "Datasource": {
            "file": "http://mapbox-geodata.s3.amazonaws.com/natural-earth-1.4.0/cultural/10m-admin-0-countries.zip",
            "type": "shape"
        }
    }, {
        "geometry": "polygon",
        "extent": [-17.2659413165065, 32.6328687614652, -16.2772969417936, 33.1281495222423],
        "Datasource": {
            "type": "postgis",
            "table": "geo.paf_pop_percent",
            "key_field": "gid",
            "geometry_field": "geom",
            "extent_cache": "auto",
            "extent": "-17.2659413165065,32.6328687614652,-16.2772969417936,33.1281495222423",
            "id": "paf_pop_percent",
            "project": "advanced-techniques-3-patterns-in-polygons",
            "srs": "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs"
        },
        "shape-radio": "tribunais",
        "id": "paf_pop_percent",
        "class": "",
        "srs-name": "WGS84",
        "srs": "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs",
        "advanced": {},
        "name": "paf_pop_percent"
    }],
    "scale": 1,
    "metatile": 1,
    "name": "advanced techniques 3 - patterns in polygons",
    "description": " ",
    "attribution": "",
    "legend": "<div class='my-legend'>\n<div class='legend-title'>População Agrícola Familiar por população total da freguesia</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#eff3ff;'></span>\n            0 – 16\n    </li>\n    <li><span style='background:#bdd7e7;'></span>\n            16 – 33\n    </li>\n    <li><span style='background:#6baed6;'></span>\n            33 – 50\n    </li>\n    <li><span style='background:#3182bd;'></span>\n            50 – 66\n    </li>\n    <li><span style='background:#08519c;'></span>\n            66 – 84\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>Fonte: DROTA\n  / <a href='#'>CLIMA-Madeira</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\nNote: we can add the pattern to the legend we well\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>",
    "id": "advanced-techniques-3-patterns-in-polygons",
    "createdAt": 1437561634597,
    "_updated": 1437561634597,
    "ownerName": "paulo vieira",
    "tilejson": "2.0.0",
    "tiles": ["/tiles/advanced-techniques-3-patterns-in-polygons_e9ad9f/{z}/{x}/{y}.png"],
    "grids": ["/tiles/advanced-techniques-3-patterns-in-polygons_e9ad9f/{z}/{x}/{y}.grid.json"],
    "template": "{{#__location__}}{{/__location__}}{{#__teaser__}}f {{{freguesia}}}{{/__teaser__}}{{#__full__}}{{/__full__}}"
}


];