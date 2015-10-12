// the NODE_ENV env variables should be defined before 
// the node process is started; if not defined we use the following defaults;
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// the above env variables must be defined before the config module is first required
var Config = require("config");
var Hapi = require("hapi");
var Hoek = require("hoek");


var Plugins = require("./common/external-plugins");
var WebPlugin = require("./web");
var Utils = require("./common/utils");


var internals = {
	externalPlugins: [],
	webPlugin: WebPlugin,

};

internals.externalPlugins.push(Plugins.good);
internals.externalPlugins.push(Plugins.tilelive);

internals.init = function(){

    // add custom filters and globals to the nunjucks template engine
    Utils.configureNunjucks();
    var defaultServerOptions = JSON.parse(JSON.stringify(Config.get("hapi.server")));

    var server = new Hapi.Server(defaultServerOptions);
	server.connection({
    	port: Config.get("port")
	});

    // 1) register the external plugins

	server.register(internals.externalPlugins, function(err) {

	    Hoek.assert(!err, 'Failed registration of external plugins: ' + err.message);

        // 2) register the web plugin (routes, etc)
		server.register([internals.webPlugin], function(err){

	    	Hoek.assert(!err, 'Failed registration of internal plugins: ' + err.message);

            // 3) start the server and finish the initialization process
	    	server.start(function(err) {

		    	Hoek.assert(!err, 'Failed start server: ' + err);

		    	console.log('Server started at: ' + server.info.uri);
		    	Utils.registerServer(server);
		    });
		});    
	});
};

internals.init();