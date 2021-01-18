$(function () {
    var input = $('#id_telefone');
    input.on('focusin', function () {
        input.maxLength = "11";
        input.mask('00000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "14";
        input.mask('(00)00000-0000', { reverse: true });
    });
});
$(function () {
    var input = $('#id_telefone2');
    input.on('focusin', function () {
        input.maxLength = "11";
        input.mask('00000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "14";
        input.mask('(00)00000-0000', { reverse: true });
    });
});
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



$(function () {
    var numPessoas = $('#numPessoas');
    numPessoas.on('focusout', function () {
        numPessoas = $('#numPessoas');
        numPessoas = parseInt(numPessoas.val());
        if (numPessoas < (parseInt(localStorage.getItem('numPessoas'))) ){
            deleteAllRows( parseInt(localStorage.getItem('numPessoas')) );
        }
        else {
            deleteAllRows(0);
        }
        if (numPessoas > 0) {
            for (i = 1; i <= numPessoas; i++) {
                addNovaPessoa((numPessoas - i) + 1);
            }
        }
        localStorage.setItem(
            "numPessoas", $('#numPessoas').val()
        );
    });
});

function deleteAllRows(numPessoas) {
    if (numPessoas == 0) {
        numPessoas = parseInt(document.getElementById('numPessoas').value);
    }
    else if (numPessoas == 'x') {
        numPessoas = parseInt(document.getElementById('numPessoas').value);
        localStorage.removeItem('numPessoas');
        document.getElementById('numPessoas').value = 0;
    }
    for (i = 1; i <= numPessoas; i++) {
        let id = '#nome_residente_' + i;
        $(id).closest("tr").remove();
    }
}

/*function addRowPessoa() {
    //var numPessoas = parseInt(document.getElementById('numPessoas').value)
    var table = document.getElementById('tabelaPessoas');
    var row = table.insertRow(2);
    
    for (i = 0; i < numPessoas; i++) {
        row.insertCell(0).innerHTML = "<strong> Membro" + i + "</strong>";
        row.insertCell(1).innerHTML =
            '<div class="form-group" style="margin-bottom: 0px;">\n' +
                '<div class="form-line">\n' +
                    '<input type="text" class="form-control bg-col-t" placeholder="Inserir Nome Completo" required id="nome_residente_' + i + '" /> \n' +
                '</div>\n' +
            '</div>\n';
        row.insertCell(2).innerHTML =
            '<button type="button" class="btn bg-red waves-effect" onclick="deleteCell(this);">\n' +
               '<i class="material-icons"> delete</i>\n' +
            '</button>\n';
    }
} */

function addNovaPessoa(i) {
    var table = document.getElementById('tabelaPessoas');
    var row = table.insertRow(2);
    var i = i;

    row.insertCell(0).innerHTML = "<strong>Membro "+ i +"<strong>";
    row.insertCell(1).innerHTML = 
        '<div class="form-group" style="margin-bottom: 0px;">\n' +
        '<div class="form-line">\n' +
        '<input type="text" class="form-control bg-col-t" placeholder="Inserir Nome Completo" required id="nome_residente_' + i + '" /> \n' +
        '</div>\n' +
        '</div>';
    row.insertCell(2).innerHTML = 
        '<button type="button" class="btn bg-red waves-effect" onclick="deleteCell(this);">\n' +
        '<i class="material-icons"> delete</i>\n' +
        '</button >';
    
}

function deleteCell(btndel) {
    if (typeof (btndel) == "object") {
        $(btndel).closest("tr").remove();
    } else {
        return false;
    }
    localStorage.setItem(
        'numPessoas', (localStorage.getItem('numPessoas') - 1)
    );
    
    var numPessoas = document.getElementById('numPessoas');
    numPessoas.value = (parseInt(numPessoas.value)) - 1;

    //corrigeIDsNumPessoas(numPessoas.value);
}
function corrigeIDsNumPessoas(numPessoas) {
    if(numPessoas != '0') {
        
    }
}
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

function assintomatico() {
    var inputAssintomatico = document.getElementById('id_sintomas_0');
    var outrosInputs = [
        document.getElementById('id_sintomas_1'),
        document.getElementById('id_sintomas_2'),
        document.getElementById('id_sintomas_3'),
        document.getElementById('id_sintomas_4'),
        document.getElementById('id_sintomas_5'),
        document.getElementById('id_sintomas_6'),
        document.getElementById('id_sintomas_7'),
        document.getElementById('id_sintomas_8'),
        document.getElementById('id_sintomas_9'),
        document.getElementById('id_sintomas_10'),
        document.getElementById('id_sintomas_11'),
        document.getElementById('id_sintomas_12'),
        document.getElementById('id_sintomas_13'),
    ];
    if (inputAssintomatico.checked == true) {
        for(i = 0; i < outrosInputs.length; i++ ) {
            outrosInputs[i].disabled = true;
            outrosInputs[i].checked = false;
        }
        outrosSintomas();
    }
    else {
        for (i = 0; i < outrosInputs.length; i++) {
            outrosInputs[i].disabled = false;
        } 
    }
}

function outrosSintomas() {
    var outrosSintomas = document.getElementById('id_sintomas_13');
    var divOutrosSintomas = document.getElementById('divOutrosSintomas');
    var inputOutrosSintomas = document.getElementById('id_outros_sintomas');
    var iconOutrosSintomas = document.getElementById('iconOutrosSintomas');
    var labelOutrosSintomas = document.getElementById('labelOutrosSintomas');

    if(outrosSintomas.checked == true) {
        divOutrosSintomas.classList.add('validate-input');

        inputOutrosSintomas.required = true;
        inputOutrosSintomas.disabled = false;
        inputOutrosSintomas.classList.remove('not-allowed');

        iconOutrosSintomas.classList.remove('not-allowed');
        iconOutrosSintomas.classList.remove('col-grey');
        iconOutrosSintomas.classList.add('col-red'); 
    }

    else {
        divOutrosSintomas.classList.remove('validate-input');

        inputOutrosSintomas.classList.add('not-allowed');
        inputOutrosSintomas.required = false;
        inputOutrosSintomas.disabled = true;    
        inputOutrosSintomas.value = '';

        iconOutrosSintomas.classList.remove('col-red');
        iconOutrosSintomas.classList.add('col-grey');
        iconOutrosSintomas.classList.add('not-allowed');
    }
}

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
        var dataIni = new Date(dataInicio.val());
        var data1Sintomas = new Date(dataSintomas.val());
        var dataTermino = document.getElementById('id_dt_fim_isolamento');
        
        var diffDatas = DiffDates(dataIni, data1Sintomas);

        if (dataIni < data1Sintomas) {
            let oldDataInicio = document.getElementById('id_dt_ini_isolamento').value;
            
            document.getElementById('id_dt_ini_isolamento').value = document.getElementById('id_dt_1_sintomas').value;
            document.getElementById('id_dt_1_sintomas').value = oldDataInicio;

            var dataIni = new Date(dataInicio.val());
        }

        var novaData = new Date(dataIni.setDate(dataIni.getDate() + (14 - (diffDatas - 1))));
        console.log(novaData.getDate() + "/0" + (novaData.getMonth() + 1) + "/" + novaData.getFullYear());
        dataTermino.value = novaData.getDate() + "/" + (novaData.getMonth() + 1) + "/" + novaData.getFullYear();

        if (diffDatas > 14) {
            document.getElementById('infoDataIsolamento').innerHTML =
                '&rarr; Paciente com <strong class="col-indigo">' + diffDatas + '</strong> dias da <strong>Data de 1º Sintomas</strong>. <strong class="col-indigo">+ 0</strong> dias de Isolamento';
        }
        else {
            document.getElementById('infoDataIsolamento').innerHTML =
                '&rarr; Paciente com <strong class="col-indigo">' + diffDatas + '</strong> dias da <strong>Data de 1º Sintomas</strong>. 14 - ' + diffDatas + ' = <strong class="col-indigo"> + ' + (14 - diffDatas) + '</strong> dia(s) de Isolamento';
        }
    });
});
