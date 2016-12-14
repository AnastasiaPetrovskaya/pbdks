$(document).ready(function() {

    var options = {
        bank_id: window.partner_id ? window.partner_id : null
    };

    getTable('banks/atms', options, '#atms', function() {});
});
