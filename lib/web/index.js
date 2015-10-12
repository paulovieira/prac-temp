var Path = require("path");
var Config = require("config");
var Hoek = require("hoek");
var Utils = require("../common/utils");

var internals = {};

exports.register = function(server, options, next){

	server.views(Config.get("hapi.views"));

    // route for the homepage
    server.route({
        path: "/",
        method: "GET",
        config: {
            handler: function(request, reply) {

                Utils.logCallsite(Hoek.callStack()[0]);
                return reply.view("home.html");
            }
        }
    });

    // route for the client app (static files: js, css, etc)
    server.route({
        path: "/cartografia-app/{anyPath*}",
        method: "GET",
        config: {
            handler: {
                directory: { 
                    path: Path.join(Config.get("rootDir"), "lib/web/client/cartografia-app") 
                }
            },
        }
    });

	// route for the client libraries (static files: css, js, etc)
    server.route({
        path: "/static/{anyPath*}",
        method: "GET",
        config: {
            handler: {
                directory: { 
                    path: Path.join(Config.get("rootDir"), "lib/web/client/static"),
                    index: false,
                    listing: false,
                    showHidden: false
                }
            }
        }
    });


	return next();
};

exports.register.attributes = {
    name: "cirac-web",
    version: "0.0.1"
};