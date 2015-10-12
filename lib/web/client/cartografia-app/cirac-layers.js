// tileJson definition for the cirac maps (vulnerability, etc)

Cirac.layers = [

{
    "id": "seq-a",
    "bounds":[-17.5479,32.3683,-16.0016,33.2364],
    "center":[-16.8393,32.7203,9],
    "minzoom": 8,
    "maxzoom": 16,
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
  "id": "cirac_vul_bgri_fvi_n",
  "bounds": [
    -9.5691,
    36.8928,
    -6.1194,
    42.2244
  ],
  "center": [
    -8.2068,
    39.5676,
    10
  ],
  "tiles":["/tiles/cirac_vul_bgri_fvi_n/{z}/{x}/{y}.png"],
  "grids":["/tiles/cirac_vul_bgri_fvi_n/{z}/{x}/{y}.grid.json"],
  "format": "png8",
  "interactivity": {
    "layer": "cirac_vul_bgri_fvi_n",
    "template_teaser": "Flood Vulnerability Index: {{{value}}}"
  },
  "minzoom": 8,
  "maxzoom": 11,
  "name": "cirac_vul_bgri_fvi_n",
  "description": "cirac_vul_bgri_fvi_n",
  "attribution": "",
  "legend": "<div class='my-legend'>\n<div class='legend-title'>Flood Vulnerability Index by BGRI (mode)</div>\n<div class='legend-scale'>\n\n  <!--   BEGIN COLORS   |   BEGIN COLORS   |   BEGIN COLORS   -->\n  <ul class='legend-labels'>\n    <li><span style='background:#38A800;'></span>\n            Low: 3 – 5\n    </li>\n    <li><span style='background:#FFFF00;'></span>\n            Moderate: 6 – 8\n    </li>\n    <li><span style='background:#FF9500;'></span>\n            High: 9 – 10\n    </li>\n    <li><span style='background:#FF0000;'></span>\n            Very high: 11 – 12\n    </li>\n  </ul>\n  <!--   END COLORS   |   END COLORS   |   END COLORS   -->\n\n</div>\n\n<!--   BEGIN SOURCE   |   BEGIN SOURCE   |   BEGIN SOURCE   -->\n<div class='legend-source'>\n  Source: <a href='https://www.apseguradores.pt/site/cirac.aspx'>APS/CIRAC</a>\n</div>\n<!--   END SOURCE   |   END SOURCE   |   END SOURCE   -->\n\n</div>\n\n\n<style type='text/css'>\n  .my-legend .legend-title {\n    text-align: left;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 90%;\n    }\n  .my-legend .legend-scale ul {\n    margin: 0;\n    margin-bottom: 5px;\n    padding: 0;\n    float: left;\n    list-style: none;\n    }\n  .my-legend .legend-scale ul li {\n    font-size: 80%;\n    list-style: none;\n    margin-left: 0;\n    line-height: 18px;\n    margin-bottom: 2px;\n    }\n  .my-legend ul.legend-labels li span {\n    display: block;\n    float: left;\n    height: 16px;\n    width: 30px;\n    margin-right: 5px;\n    margin-left: 0;\n    border: 1px solid #999;\n    }\n  .my-legend .legend-source {\n    font-size: 70%;\n    color: #999;\n    clear: both;\n    }\n  .my-legend a {\n    color: #777;\n    }\n</style>"
}


];