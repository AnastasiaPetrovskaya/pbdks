var get = {
    '/': function(req, res, next) {
        res.send('partners /');
    },

    '/:id': function(req, res, next) {
        res.send('partner /id' + req.params.id);
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
