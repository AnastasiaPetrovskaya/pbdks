var get = {
    '/': function(req, res, next) {
        res.send('Тут будет список клиентов');
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
