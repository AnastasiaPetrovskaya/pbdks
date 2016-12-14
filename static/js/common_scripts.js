var getTable = function(url, options, selector, callback) {

    $.ajax({
        type: 'GET',
        url: url,
        data: data,
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
