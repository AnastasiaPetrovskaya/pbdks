var express = require('express');

var http = express();
/*подключение контроллеров*/

module.exports = function (app, options) {
    var port = options.port,
        host = options.host || '0.0.0.0';

    http.server = http.listen(port, host);
    console.log('Express server has been started! Port:' + port);

    /*Подключение статических файлов*/
    http.use(express.static(path.join(app.root_dir, 'static')));

    http.init_controller = function(urn, routes) {
        if (urn == '/'){
            urn = '';
        }

        for (method in routes.methods) {
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

    if (app) {
        app.http = http;
    } else {
        return http;
    }
}
