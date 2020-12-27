

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
        divCPF.classList.add("not-allowed");
        inputCPF.classList.add("not-allowed");
        iconInputCPF.classList.add("not-allowed");
        // inputCPF.required = false;
        inputCPF.disabled = true;
        inputCPF.value = '';

        divCNS.classList.add("validate-input");
        iconInputCNS.classList.add("col-indigo");


        return true;
    }
    else {
        divCPF.classList.add("validate-input");
        iconInputCPF.classList.add("col-indigo");
        // inputCPF.required = true;
        inputCPF.disabled = false;

        divCNS.classList.remove("validate-input");
        iconInputCNS.classList.remove("col-indigo");

        return false;
    }
}

function getDataAtual() {
    hoje = new Date;
    var dataAtual = hoje.getFullYear() + "-" + (hoje.getMonth() + 1) + "-" + hoje.getDate();
    var dataInicio = $('#dataInicio');
    dataInicio.value = dataAtual;

    console.log(dataAtual);
}
$(function () {
    hoje = new Date;
    var dataAtual = hoje.getFullYear() + "-" + (hoje.getMonth() + 1) + "-" + hoje.getDate();
    var dataInicio = $('#dataInicio');
    dataInicio.value = dataAtual;
});

function DiffDates(dateIni, dateFim) {
    // Subtrai uma data pela outra
    const diff = Math.abs(dateIni.getTime() - dateFim.getTime()); 

    // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24)); 

    // Mostra a diferença em dias
    return days;
}

// CALCULA DATA TÉRMINO
$(function () {
    var dataInicio = $('#dataInicio');
    var dataSintomas = $('#dataSintomas');
    dataInicio.on('focusout', function () {
        dataInicio = new Date(document.getElementById('dataInicio').value);
        var dataTermino = document.getElementById("dataTermino");
        dataSintomas = new Date(document.getElementById('dataSintomas').value);

        var diffDatas = DiffDates(dataInicio, dataSintomas);

        var novaData = new Date(dataInicio.setDate(dataInicio.getDate() + (14 - diffDatas)));
        dataTermino.value = novaData.getDate() + "/" + (novaData.getMonth() + 1) + "/" + novaData.getFullYear();

         document.getElementById('infoDataIsolamento').innerHTML = 
            'Paciente com <strong class="col-indigo">' + diffDatas + '</strong> de Sintomas. 14 - '+ diffDatas + ' = <strong class="col-indigo">' + (14 - diffDatas) + '</strong> dias de Isolamento';
    });
});

// jQuery(document).ready(function () {
//     hoje = new Date;
//     var dataAtual = hoje.getFullYear()+ "-" + (hoje.getMonth() + 1) + "-" + hoje.getDate();
//     var dataInicio = $('#dataInicio');
//     dataInicio.innerHTML = dataAtual;

//     console.log(dataAtual);
// });

