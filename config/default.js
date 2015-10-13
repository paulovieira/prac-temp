
var Path = require("path");
var Fs = require("fs");
var Nunjucks = require('hapi-nunjucks');

// absolute paths
var internals = {
    rootDir:      Path.resolve(__dirname, ".."),
    viewsDir:     Path.resolve(__dirname, "..", "lib/web/views"),
    tilesDir:     Path.resolve(__dirname, "..", "tiles"),
    // tilesDir:  "/home/pvieira/tilemill-files/export",
    //tilesExamplesDir:     Path.resolve(__dirname, "..", "tiles-examples"),
    env:process.env.NODE_ENV 
};

internals.bundles = JSON.parse(Fs.readFileSync(Path.join(internals.rootDir, "bundles.json"), "utf8"));

module.exports = {

    host: "localhost",
    port: 5000,
    publicUri: "localhost",  // host
    publicPort: 5000,  // probably 80

    rootDir: internals.rootDir,
    viewsDir: internals.viewsDir,
    tilesDir: internals.tilesDir,
    tilesExamplesDir: internals.tilesExamplesDir,
    
    bundles: internals.bundles,
    
    hapi: {

        // options for the Hapi.Server object (to be used in the main index.js)
        server: {
            connections: {
                router: {
                    isCaseSensitive: false,
                    stripTrailingSlash: true
                }            
            }
        },

        // options for the views (to be used in the main index.js)
        views: {
            path: internals.viewsDir,
            allowAbsolutePaths: true,
            engines: {
                "html": Nunjucks
            },
        },
    },

};

