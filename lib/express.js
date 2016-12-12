'use strict'

var express = require('express');
var path = require('path');
var body_parser = require('body-parser');

var http = express();

module.exports = function (app) {
    console.log('http', http);

    if(!app.config.express || !app.config.express[process.env.NODE_ENV]) {
        console.log('Not found express config ENV: ' + process.env.NODE_ENV);
        process.exit(1);
    }
    var config = app.config.express[process.env.NODE_ENV];

    var port = config.port,
        host = config.host || '0.0.0.0';


     // parse application/x-www-form-urlencoded
     http.use(body_parser.urlencoded({ extended: false }))
     
     // parse httplication/json
     http.use(body_parser.json())

    http.server = http.listen(port, host);
    console.log('Express server has been started! Port:' + port);

    console.log('http', http);
    /*Подключение статических файлов*/
    /*http.use(express.static(path.join(app.root_dir, 'static')));

    http.set('views', path.join(app.root_dir, 'views'));
    http.set('view engine', 'jade');
*/
    http.init_controller = function(urn, routes) {
        if (urn == '/'){
            urn = '';
        }

        for (var method in routes.methods) {
            Object.keys(routes.methods[method]).forEach(function(path) {
                http[method](urn + path, routes.methods[method][path]);
            });
        }
    }

    http.require_controller = function(name, options) {
        var options = options || {};
        var urn = options.urn || '/' + name;

        if (options.is_root) {
            urn = '/';
        }

        var routes = require(path.join(app.root_dir, 'controllers', name + '_controller'));
        this.init_controller(urn, routes);
    }

    http.set_static = function(path, route) {
        if (!route) {
            http.use(express.static(path));
        } else {
            http.use(route, express.static(path));
        }
    };

    if (app) {
        app.http = http;
    } else {
        return http;
    }
}
