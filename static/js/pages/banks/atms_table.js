$(document).ready(function() {

    var options = {
        bank_id: window.bank_id ? window.bank_id : null
    };

    getTable('/banks/' + bank_id + '/atms', options, '#atms', function() {
    
        $('.atm_info').click(function() {
            console.log($(this)[0].dataset.id);
        });
    
    
    });

});
