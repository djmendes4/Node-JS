//Guilegames - Dillon Mendes - 2015
/*jslint devel:true plusplus:true */
/*jslint node: true */

var http = require('http');
var url = require('url');
var fs = require('fs');

var homeHTML = fs.readFileSync('home.html');
var fontCSS = fs.readFileSync('fonts/sinkinSans/stylesheet.css');
var newGameHTML = fs.readFileSync('newGame.html');

// FUNCTIONS
var renderMain = function (request, response) {
	'use strict';
	response.writeHead(200, {
		'Content-type': 'text/html; charset=utf-8'
	});
	response.end(homeHTML);
};

//var renderFont = function (request, response) {
//	'use strict';
//	response.writeHead(200, {
//		'Content-type': 'text/css; charset=utf-8'
//	});
//	response.end(fontCSS);
//};

var renderNewGame = function (request, response) {
	'use strict';
	response.writeHead(200, {
		'Content-type': 'text/html; charset=utf-8'
	});
	response.end(newGameHTML);
};

var render404 = function (request, response) {
	'use strict';
	response.writeHead(404);
	response.end('404 File not found');
};

// ROUTES
var home = new RegExp('^/?$');
var newGame = new RegExp('^/new/?$');

// SERVER
var server = http.createServer(function (request, response) {
	'use strict';
	
	var pathname = url.parse(request.url).pathname;
	if (home.test(pathname)) {
		renderMain(request, response);
	} else if (newGame.test(pathname)) {
		renderNewGame(request, response);
	} else {
		render404(request, response);
	}
});

server.listen(8000);

console.log('Server listening on http://127.0.0.1:8000');