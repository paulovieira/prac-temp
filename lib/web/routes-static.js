var Fs = require("fs");
var Path = require("path");
var Config = require("config");
//var Pre = require("../common/prerequisites");

exports.endpoints = [

    // STATIC ASSETS - the handler is given here directly (unlike the handlers for the base routes)

    // IMPORTANT: this path below is now being served directly by nginx
    {
        path: '/static/{anyPath*}',
        method: 'GET',
        config: {
            handler: {
                directory: { 
                    path: Path.join(Config.get("rootDir"), "lib/web/client/static"),
                    index: false,
                    listing: false,
                    showHidden: false
                }
            },
            auth: false

        }
    },


    // FAVICON

    // IMPORTANT: this path below is now being served directly by nginx
    {
        path: '/favicon.ico',
        method: 'GET',
        config: {
            handler: {
                file: Path.join(Config.get("rootDir"), 'lib/web/client/static/_images/favicon.ico')
            },

            auth: false
        }
    },

];

