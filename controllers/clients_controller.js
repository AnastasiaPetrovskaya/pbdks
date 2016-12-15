var mongoose = require('mongoose'),
ObjectId = require('mongodb').ObjectID;

var Client = require('../models/client.js');

var get = {
    '/': function(req, res, next) {
        var query = Client.find().skip(0);
        query.exec()
            .then(function(clients) {
                res.render('clients/index', { clients: clients });
            }).catch(function(err) {
                console.log('err', err);
                res.error('Error');
            });


    },

    '/:id': function(req, res, next) {
        res.send('Тут будет информация о клиенте с id:' + req.params.id);
    }
};

var post = {
    '/add': function(req, res, next) {
        res.send('partners /');
    },

    '/:id/update': function(req, res, next) {
        res.send('partner /id' + req.params.id);
    }
};

module.exports = {
    resource: 'Clients',
    methods: {
        get: get,
        post: post
    }
};
