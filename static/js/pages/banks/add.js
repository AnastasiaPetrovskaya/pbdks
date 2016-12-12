$(document).ready(function() {

    $("#add-bank").click(function(e) {
        var data = {};

        data.name = $('#name').val();
        data.phone = $('#phone').val();
        data.address = $('#address').val();

        var res = $.ajax({
            type: 'POST',
            url: '/banks/add',
            data: data,
            dataType: 'json',
            async: false
        }).responseText;
        res = JSON.parse(res);

        if (res.success) {
            bootbox.alert({
                className: 'success',
                message: '<a class="alert-link" href="' + res.id + '">Группа</a> успешно создана',
                buttons: { ok: { className: 'btn-success' }},
                callback: function() { window.location.reload(); }
            });
        } else {
            console.log(res);
            $successButton.html('Зарегистрировать').prop('disabled', false);
            bootboxError(res.error);
            return false;
        }
    });
});
