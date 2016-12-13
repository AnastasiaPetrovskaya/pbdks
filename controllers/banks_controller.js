var Bank = require('../models/bank.js');


var get = {
    '/': function(req, res, next) {
        //res.send('Тут будет список банков');
        console.log('Bank', Bank);

        var bank = new Bank({
            name: 'Тест1',
            phone: '84953432022',
            address: 'Тест тест тест'
        });
   /*     bank.save(function(err, res) {
            if (err) {
                console.log('Error: req: ', req, ' err: ', err);
                res.error('Error');
            } else {
                console.log('res 1', res);
                res.success({'id': bank.id});
            }
        });*/

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
        Bank.findById(req.params.id).exec()
            .then(function(bank) {
                res.render('banks/show', {bank: bank});
            }).catch(function(err) {
                res.error(err);
            });
        //res.send('Тут будет информация о банке с id:' + req.params.id);
    }
};

var post = {
    '/add': function(req, res, next) {
        console.log('req', req.body);
        res.success({id: 'test'});
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
