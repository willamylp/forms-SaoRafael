

$(document).ready(function () {
    $("#id_CEP").mask("00000-000");
});
$(function () {
    var input = $('#id_telefone');
    input.on('focusin', function () {
        input.maxLength = "11";
        input.mask('00000000000')
    });
    input.on('focusout', function () {
        input.maxLength = "15";
        input.mask('(00)0 0000.0000')
    });
})
$(function () {
    var input = $('#id_cns');
    input.on('focusin', function () {
        input.maxLength = "15";
        input.mask('000000000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "18";
        input.mask('000 0000 0000 0000', { reverse: true });
    });
});

$(function () {
    var input = $('#id_cartaoSUS');
    input.on('focusin', function () {
        input.maxLength = "15";
        input.mask('000000000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "18";
        input.mask('000 0000 0000 0000', { reverse: true });
    });
});