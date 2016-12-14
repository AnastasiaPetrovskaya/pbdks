var mongoose = require('mongoose'),
ObjectId = require('mongodb').ObjectID;

var Bank = require('../models/bank.js');


var get = {
    '/': function(req, res, next) {

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

    '/atms': function(req, res, next) {
        var options = {};

        if (req.body.bank_id) {
            options._id = ObjectId(req.body.bank_id);
        }

        Bank.find(options).exec()
            .then(function(bank) {
                res.render('banks/atms_table', {atms: bank.atm});
            }).catch(function(err) {
                res.error(err);
            });
    },
    '/:id': function(req, res, next) {
        Bank.findById(req.params.id).exec()
            .then(function(bank) {
                res.render('banks/show', {bank: bank});
            }).catch(function(err) {
                res.error(err);
            });
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
