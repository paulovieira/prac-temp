var Hoek = require("hoek");
var Config = require("config");
var Boom = require("boom");
var Utils = require("../common/utils");


var internals = {};

internals.apiPrefix = Config.get("apiPrefix.v1");
internals.config = {};

internals.config.tileStream = {
    handler: {
        proxy: {
            mapUri: function(request, cb){
                return cb(null, "http://localhost:8001/v2/" + request.params.anyPath);
            },

            // based on the code from h2o2
            onResponse: function(err, res, request, reply, settings, ttl){

                if (err) {
                    return reply(err);
                }

                // the 404 message from tilestream displays stuff we don't want to expose
                if(res.statusCode===404){
                    return reply(Boom.notFound("Tile not found"));
                        //.ttl(ttl)
                        //.passThrough(false);   // Default to false                    
                }

                return reply(res)
                    .ttl(ttl)
                    .code(res.statusCode)
                    .passThrough(false);   // Default to false
            }
        }
    },
    auth: false
};

exports.endpoints = [
    {
        //  will forward tiles requests to tilestream. Example:
        //  clima.dev/api/v1/tiles/<map-id>/4/11/7.png  ->  localhost:8001/v2/<map-id>/4/11/7.png
        path: internals.apiPrefix + "/tiles/{anyPath*}",
        method: "GET",
        config: internals.config.tileStream
    }
];