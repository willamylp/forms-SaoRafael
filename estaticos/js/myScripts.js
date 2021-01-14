

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
    var input = $('#id_cpf');
    input.on('focusin', function () {
        input.maxLength = "11";
        input.mask('00000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "14";
        input.mask('000.000.000-00', { reverse: true });
    });
});
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


function noCPF() {
    var checkCPF = document.getElementById('semCPF');

    var divCPF = document.getElementById('divCPF');
    var inputCPF = document.getElementById('id_cpf');
    var iconInputCPF = document.getElementById("iconInputCPF");

    var divCNS = document.getElementById('divCNS');
    var inputCNS = document.getElementById('id_cns');
    var iconInputCNS = document.getElementById("iconInputCNS");
    
    if (checkCPF.checked == true) {
        divCPF.classList.remove("validate-input");
        divCPF.classList.add("not-allowed");

        iconInputCPF.classList.remove("col-indigo");
        iconInputCPF.classList.add("not-allowed");
        
        inputCPF.classList.add("not-allowed");
        inputCPF.required = false;
        inputCPF.disabled = true;
        inputCPF.value = '';

        divCNS.classList.add("validate-input");
        iconInputCNS.classList.add("col-indigo");

        return true;
    }
    else {
        //divCPF.classList.add("validate-input");
        iconInputCPF.classList.add("col-indigo");
        inputCPF.classList.remove("not-allowed");
        inputCPF.required = true;
        inputCPF.disabled = false;

        divCNS.classList.remove("validate-input");
        iconInputCNS.classList.remove("col-indigo");

        return false;
    }
}
/*
$(function () {
    var responsavel = $('#id_responsavel_pct').val();
    var divGrauParentesco = $('#divGrauParentesco');
    var inputGrauParentesco = $('#id_grau_parentesco');
    var iconGrauParentesco = $('#iconGrauParentesco');

    //Se o Responsável for o prórprio paciente
    if (responsavel == 'Paciente') {
        inputGrauParentesco.addClass('not-allowed');
        inputGrauParentesco.disabled = true;
        inputGrauParentesco.required = false;
        inputGrauParentesco.value = '';

        divGrauParentesco.removeClass('validate-input');
        divGrauParentesco.addClass('not-allowed');

        iconGrauParentesco.addClass('not-allowed col-grey');
    }
    //Se for um parente/responsável
    else {
        inputGrauParentesco.removeClass('not-allowed');
        inputGrauParentesco.disabled = false;
        inputGrauParentesco.required = true;

        divGrauParentesco.addClass('validate-input');
        divGrauParentesco.removeClass('not-allowed');

        iconGrauParentesco.removeClass('not-allowed col-grey');
        iconGrauParentesco.addClass('col-indigo');
    }
});*/
function grauParentesco() {
    var responsavel = document.getElementById('id_responsavel_pct').value;
    var divGrauParentesco = document.getElementById('divGrauParentesco');
    var inputGrauParentesco = document.getElementById('id_grau_parentesco');
    var iconGrauParentesco = document.getElementById('iconGrauParentesco');
    var labelGrauParentesco = document.getElementById('labelGrauParentesco');
    //Se for um parente/responsável
    if (responsavel == 'Responsável') {
        inputGrauParentesco.classList.remove('not-allowed');
        inputGrauParentesco.disabled = false;
        inputGrauParentesco.required = true;

        divGrauParentesco.classList.add('validate-input');
        divGrauParentesco.classList.remove('not-allowed');

        iconGrauParentesco.classList.remove('not-allowed');
        iconGrauParentesco.classList.remove('col-grey');
        iconGrauParentesco.classList.add('col-indigo');
        inputGrauParentesco.placeholder = 'Ex.: Mãe/Pai/Tio/Amigo...';

        labelGrauParentesco.classList.remove('col-grey');
        labelGrauParentesco.classList.add('col-indigo');
    }

    //Se o Responsável for o prórprio paciente
    else {
        inputGrauParentesco.classList.add('not-allowed');
        inputGrauParentesco.disabled = true;
        inputGrauParentesco.required = false;
        inputGrauParentesco.value = '';
        inputGrauParentesco.placeholder = 'O Próprio Paciente';

        divGrauParentesco.classList.remove('validate-input');
        divGrauParentesco.classList.add('not-allowed');

        iconGrauParentesco.classList.add('not-allowed');
        iconGrauParentesco.classList.remove('col-indigo');
        iconGrauParentesco.classList.add('col-grey');

        labelGrauParentesco.classList.add('col-grey');
        labelGrauParentesco.classList.remove('col-indigo');
        //iconGrauParentesco.classList.add('col-grey');
    }
}
// $(function () {
//     hoje = new Date;
//     var dataAtual = hoje.getFullYear() + "-" + (hoje.getMonth() + 1) + "-" + hoje.getDate();
//     var dataInicio = $('#id_dt_ini_isolamento');
//     dataInicio.value = dataAtual;
// });

function DiffDates(dateIni, dateFim) {
    // Subtrai uma data pela outra
    const diff = Math.abs(dateIni.getTime() - dateFim.getTime());

    // Divide o total pelo total de milisegundos correspondentes a 1 dia. (1000 milisegundos = 1 segundo).
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}

// CALCULA DATA TÉRMINO
$(function () {
    var dataInicio = $('#id_dt_ini_isolamento');
    var dataSintomas = $('#id_dt_1_sintomas');
    dataInicio.on('focusout', function () {
        dataInicio = new Date(document.getElementById('id_dt_ini_isolamento').value);
        var dataTermino = document.getElementById("id_dt_fim_isolamento");
        dataSintomas = new Date(document.getElementById('id_dt_1_sintomas').value);

        var diffDatas = DiffDates(dataInicio, dataSintomas);

        var novaData = new Date(dataInicio.setDate(dataInicio.getDate() + (14 - diffDatas)));
        dataTermino.value = novaData.getDate() + "/" + (novaData.getMonth() + 1) + "/" + novaData.getFullYear();

        document.getElementById('infoDataIsolamento').innerHTML =
            'Paciente com <strong class="col-indigo">' + diffDatas + '</strong> dias de Sintomas. 14 - ' + diffDatas + ' = <strong class="col-indigo"> +' + (14 - diffDatas) + '</strong> dias de Isolamento';
    });
});
