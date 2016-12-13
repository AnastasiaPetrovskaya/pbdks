var mongoose = require('mongoose'),
ObjectId = require('mongodb').ObjectID;

var Bank = require('../models/bank.js');


var get = {
    '/': function(req, res, next) {

        var bank = new Bank({
            name: 'Тест1',
            phone: '84953432022',
            address: 'Тест тест тест'
        });

        var query = Bank.find().skip(0);
        query.exec()
            .then(function(banks) {
                res.render('banks/index', { banks: banks });
            }).catch(function(err) {
                console.log('err', err);
                res.error('Error');
            });

    },

    '/add': function(req, res, next) {
        res.render('banks/add');
    },

    '/:id': function(req, res, next) {
        Bank.findById(ObjectId(req.params.id)).exec()
            .then(function(bank) {
                console.log('bank', bank);
            }).catch(function(err) {
                console.log('err', err);
            });

        res.send('Тут будет информация о банке с id:' + req.params.id);
    }
};

var post = {
    '/add': function(req, res, next) {
        console.log('req', req.body);
        var bank = new Bank(req.body);

        bank.save()
            .then(function(bank) {
                console.log('bank', bank);
                res.success({'id': bank.id});
            }).catch(function(err) {
                console.log('err', err);
                res.error(err);
            });
    },

    '/:id/update': function(req, res, next) {
        res.send('partner /id' + req.params.id);
    }
};

module.exports = {
    resource: 'Banks',
    methods: {
        get: get,
        post: post
    }
};
