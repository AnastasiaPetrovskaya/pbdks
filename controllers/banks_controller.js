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

    '/:id/atms': function(req, res, next) {
        var options = {};

        if (req.params.id) {
            options._id = ObjectId(req.params.id);
        }
        console.log('req.params.id', req.params.id);

        Bank.findOne(options).exec()
            .then(function(bank) {
                console.log('bank.atms', bank);
                res.render('banks/atms_table', {atms: bank.atms});
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
    '/:id/add_atm': function(req, res, next) {
        console.log(':id/add_atm');
        Bank.findById(req.params.id).exec()
            .then(function(bank) {
                bank.atms.push(req.body);
                return bank.save();
            }).then(function(res) {
                console.log('res', res);
                res.succes();
            }).catch(function(err) {
                res.error(err);
            });
    },

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
