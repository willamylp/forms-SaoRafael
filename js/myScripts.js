

// $(document).ready(function () {
//     $("#id_CEP").mask("00000-000");
// });
// $(function () {
//     var input = $('#id_telefone');
//     input.on('focusin', function () {
//         input.maxLength = "11";
//         input.mask('00000000000')
//     });
//     input.on('focusout', function () {
//         input.maxLength = "15";
//         input.mask('(00)0 0000.0000')
//     });
// })
$(function () {
    var input = $('#cpf');
    input.on('focusin', function () {
        input.maxLength = "11";
        input.mask('000000000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "14";
        input.mask('000.000.000-00', { reverse: true });
    });
});
$(function () {
    var input = $('#cns');
    input.on('focusin', function () {
        input.maxLength = "15";
        input.mask('000000000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "18";
        input.mask('000 0000 0000 0000', { reverse: true });
    });
});


function noCPF() {
    var checkCPF = document.getElementById('semCPF');

    var divCPF = document.getElementById('divCPF');
    var inputCPF = document.getElementById('cpf');
    var iconInputCPF = document.getElementById("iconInputCPF")

    var divCNS = document.getElementById('divCNS');
    var inputCNS = document.getElementById('cns');
    var iconInputCNS = document.getElementById("iconInputCNS")
    
    if (checkCPF.checked == true) {
        divCPF.classList.remove("validate-input");
        iconInputCPF.classList.remove("col-indigo");
        inputCPF.classList.add("not-allowed");
        inputCPF.required = false;
        inputCPF.disabled = true;

        divCNS.classList.add("validate-input");
        iconInputCNS.classList.add("col-indigo");
        inputCNS.required = true;
        return true;
    }
    else {
        divCPF.classList.add("validate-input");
        iconInputCPF.classList.add("col-indigo");
        inputCPF.required = true;
        inputCPF.disabled = false;

        divCNS.classList.remove("validate-input");
        iconInputCNS.classList.remove("col-indigo");
        inputCNS.required = false;

        return false;
    }

}
// $(function () {
//     var checkCPF = $('#semCPF');

//     var inputCPF = $('#cpf');
//     var divCPF = $('#divCPF');
//     var iconInputCPF = $("#iconInputCPF")
    
//     var divCNS = $('#divCNS');
//     var inputCNS = $('#cns');
//     var iconInputCNS = $("#iconInputCNS")

//     for (var i = 0; i < checkCPF.length;i++){ 
//         if (checkCPF[i].checked == true) {
//             divCPF.even().removeClass("validate-input");
//             iconInputCPF.even().removeClass("col-indigo");

//             divCNS.las().addClass("validate-input");
//             iconInputCNS.last().addClass("col-indigo");
//         }
//     }

//     // if (checkCPF.checked) {
//     //     divCPF.even().removeClass("validate-input");
//     //     iconInputCPF.even().removeClass("col-indigo");

//     //     divCNS.las().addClass("validate-input");
//     //     iconInputCNS.last().addClass("col-indigo");
//     // }
//     // else {}
// });