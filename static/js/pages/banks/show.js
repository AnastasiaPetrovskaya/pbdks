$(document).ready(function() {
    $('#submit').click(function(e) {
        var that = this,
            options = {
                bank_id: window.bank_id ? window.bank_id : null
            };

        $.ajax({
            type: 'POST',
            url: '/banks/' + bank_id + '/add_atm',
            data: $('#add_atm_form').serialize()
        }).done(function() {
            getTable('/banks/' + bank_id + '/atms', options, '#atms', function() {});
        }).fail(function() {
            console.log('err');
        });
    });

});
