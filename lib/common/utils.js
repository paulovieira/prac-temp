var Path = require("path");
var Config = require("config");
var Glob = require("glob");
var _ = require("underscore");
var Nunjucks = require("hapi-nunjucks");

//var changeCase = require("change-case-keys");
//var Joi = require('joi');

var internals = {

    sgrColors: {
        "reset": "\x1b[0m",
        "black": "\x1b[30m",
        "red": "\x1b[31m",
        "green": "\x1b[32m",
        "yellow": "\x1b[33m",
        "blue": "\x1b[34m",
        "magenta": "\x1b[35m",
        "cyan": "\x1b[36m",
        "white": "\x1b[37m",

        bold: {
            "black": "\x1b[30;1m",
            "red": "\x1b[31;1m",
            "green": "\x1b[32;1m",
            "yellow": "\x1b[33;1m",
            "blue": "\x1b[34;1m",
            "magenta": "\x1b[35;1m",
            "cyan": "\x1b[36;1m",
            "white": "\x1b[37;1m",
        }
    }

};

// to be called in lib/index.js (as soon as the server is created)
exports.registerServer = function(server) {

    internals.server = server;
};


exports.logCallsite = function(callsiteObj) {

    var colors = internals.sgrColors;

    // callsiteObj is an array of strings, prepared by Hoek (not the origin callsite obj, which has methods like .getLineNumber())
    var funcName = callsiteObj[3];
    var lineNumber = callsiteObj[1];
    var dirName = Path.dirname(callsiteObj[0]);
    var baseName = Path.basename(callsiteObj[0]);

    var output = colors.bold.cyan + (funcName || "anonymous") + "()" + colors.reset +
        " (" + dirName + "/" + colors.bold.cyan + baseName + colors.reset +
        ":" + colors.bold.green + lineNumber + colors.reset + ")";

    internals.server.log(["stack"], output);

    return output;
};

exports.serverLog = function(tags, data) {

    internals.server.log(tags, data);
};


exports.getViewsList = function() {

    var viewsList = Glob.sync(Config.get("viewsDir") + "/**/*.html");

    viewsList.forEach(function(filename, i) {

        // remove the extension
        var dirname = Path.dirname(filename),
            basename = Path.basename(filename, ".html");

        viewsList[i] = Path.join(dirname, basename);
    });

    return viewsList;
};

exports.getView = function(request) {


    request.params.level1 = request.params.level1 || "";
    request.params.level2 = request.params.level2 || "";
    request.params.level3 = request.params.level3 || "";
    request.params.level4 = request.params.level4 || "";
    request.params.level5 = request.params.level5 || "";

    var notFoundTemplate = "404",
        homeTemplate = "home",
        viewsDir = Config.get("viewsDir");

    var fullPath = Path.join(viewsDir,
        request.params.level1,
        request.params.level2,
        request.params.level3,
        request.params.level4,
        request.params.level5);

    // if all levelN properties are empty the request url was something like "/pt/"
    if (fullPath === viewsDir) {
        return homeTemplate;
    }

    // is there a template file associated to the request?
    var index = _.indexOf(request.server.settings.app.viewsList, fullPath);

    return index !== -1 ? fullPath : notFoundTemplate;
};

exports.getUrlWithoutLang = function(params) {
    var urlWithoutLang = "/";

    for (var i = 1; i <= 5; i++) {
        if (params["level" + i] !== "") {
            urlWithoutLang = urlWithoutLang + params["level" + i] + "/";
        }
    }


    // remove the "/" in the end
    return urlWithoutLang.slice(0, -1);
};

exports.configureNunjucks = function(){

    Nunjucks.configure(Config.get("viewsDir"), {
        watch: false
        //    autoescape: true 
    });

    Nunjucks.addFilter('stringify', function(str) {
        return JSON.stringify(str);
    });

    // default lang
    Nunjucks.addGlobal("lang", "pt");
    Nunjucks.addGlobal("NODE_ENV", process.env.NODE_ENV);
    Nunjucks.addGlobal("bundles", Config.get("bundles"));
    Nunjucks.addGlobal("publicUri", Config.get("publicUri"));
    Nunjucks.addGlobal("publicPort", Config.get("publicPort"));

};
