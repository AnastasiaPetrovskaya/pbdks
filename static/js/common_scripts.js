var getTable = function(url, options, selector, callback) {
    console.log('url', url);

    $.ajax({
        type: 'GET',
        url: url,
        success: function(res) {
            $(selector).html(res);
            if (callback)
                callback(res);
        },
        fail: function(err) {
            console.log(err);
        }
    });
};
