
var internals = {};

exports.abortIfInvalidLang = function(request, reply) {

	console.log("    request.params.lang: ", request.params.lang);
	console.log("    TODO: if lang is undefined, the 404 page should be sent in the default lang");

	if(!request.params.lang){
		return reply.view('404').code(404).takeover();
	}

	return reply();
};

