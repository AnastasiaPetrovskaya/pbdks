var Bank = app.Bank;


var get = {
    '/': function(req, res, next) {
        res.send('Тут будет список банков');
        console.log('Bank', Bank);
    },

    '/:id': function(req, res, next) {
        res.send('Тут будет информация о банке с id:' + req.params.id);
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
    resource: 'Banks',
    methods: {
        get: get,
        post: post
    }
};
