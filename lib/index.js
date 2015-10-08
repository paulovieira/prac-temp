// the NODE_ENV env variables should be defined before 
// the node process is started; if not defined we use the following defaults;
process.env.NODE_ENV = process.env.NODE_ENV || "production";

// the above env variables must be defined before the config module is first required
var Config = require("config");
var Hapi = require("hapi");
var Hoek = require("hoek");


var Plugins = require("./common/external-plugins");
var Utils = require("./common/utils");


var internals = {
	externalPlugins: [],
	web: require("./web"),
};

internals.externalPlugins.push(Plugins.good);

internals.init = function(){

    var serverOptions = {
        app: {
            viewsList: Utils.getViewsList()
        }
    };
    var defaultServerOptions = JSON.parse(JSON.stringify(Config.get("hapi.server")));

    // add custom filters and globals to nunjucks
    Utils.configureNunjucks();

    var server = new Hapi.Server(Hoek.merge(serverOptions, defaultServerOptions));
	server.connection({
    	port: Config.get("port")
	});

    // 1) register the external plugins

	server.register(internals.externalPlugins, function(err) {

	    Hoek.assert(!err, 'Failed registration of external plugins: ' + err);

        // 2) register the internal plugins
		server.register([internals.web], function(err){

	    	Hoek.assert(!err, 'Failed registration of internal plugins: ' + err);

            // 3) start the server and finish the initialization process (load seneca actions, etc)
	    	server.start(function(err) {

		    	Hoek.assert(!err, 'Failed start server: ' + err);

                //Utils.registerActions(server.seneca, Config.get("actionsDir.db"));
		    	console.log('Server started at: ' + server.info.uri);
		    });
		});    
	});

	Utils.registerServer(server);

};

internals.init();
