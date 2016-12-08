var get = {
    '/': function(req, res, next) {
        console.log('here');
        res.render('main/index', { current_page: 'main' });
    }
};


module.exports = {
    resource: '',
    methods: {
        get: get
    }
};
