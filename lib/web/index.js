var Hapi = require("hapi");
var Nunjucks = require('hapi-nunjucks');
var Config = require('config');

var RoutesStatic = require("./routes-static");
var RoutesBase = require("./routes-base");
var RoutesCartografia = require("./routes-cartografia");
var RoutesTilestream = require("./routes-tilestream");

var internals = {};

exports.register = function(server, options, next){

	server.views(Config.get("hapi.views"));

	// static files (css, js, etc)
	server.route(RoutesStatic.endpoints);

	// base routes (any .html file in lib/wev/views gives rise to a route)
	server.route(RoutesBase.endpoints);

	// cartografia route (/cartografia)
	server.route(RoutesCartografia.endpoints);

	// tilestream routes (/tiles/<map-id>/<z>/<x>/<y>.png)
	server.route(RoutesTilestream.endpoints);
	
	return next();
};

exports.register.attributes = {
    name: "cirac-web",
    version: "0.0.1"
};