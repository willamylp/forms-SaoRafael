$(function () {
    var input = $('#id_telefone');
    input.on('focusin', function () {
        input.maxLength = "11";
        input.mask('00000000000', { reverse: true });
    });
    input.on('focusout', function () {
        input.maxLength = "15";
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
        input.maxLength = "15";
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

function addFields() {
    // Number of inputs to create
    var num_pessoas = parseInt(document.getElementById("id_num_pessoas").value);
    
    if ((num_pessoas != '') || (num_pessoas > 0 )) {
        // Container <div> where dynamic content will be placed
        var container = document.getElementById("containerPessoas");

        // Clear previous contents of the container
        while (container.hasChildNodes()) {
            container.removeChild(container.lastChild);
        }
        for (i = 0; i < num_pessoas; i++) {
            var div = document.createElement('div');
            div.classList  = "wrap-input100 col-md-10 col-indigo divPessoa";
            div.id         = "div_" + i;
            div.style      = "margin-bottom: 10px";
            container.appendChild(div);
            div = document.getElementById('div_'+i);

            // Append a node with a random text
            //container.appendChild(document.createTextNode("id_num_pessoas " + (i + 1)));
            // Create an <input> element, set its type and name attributes
            var input = document.createElement("input");
            //input = "{{ formResidente.nome_residente }}";
            input.type          = "text";
            input.name          = "id_nome_residente_" + i;
            input.id            = "id_nome_residente_" + i;
            input.classList     = "input100 inputPessoa m-l-10";
            input.placeholder   = "Inserir Nome Completo";
            input.required      = 'true';
            input.style         = 'height: 40px;';
            div.appendChild(input);

            /* Criando Elemento <span> */
            var span = document.createElement('span');
            span.classList = "focus-input100";
            div.appendChild(span);

            /* Criando Elemento <label> */
            var label = document.createElement('label');
            label.classList = "label-input100";
            label.for = "id_nome_residente_" + i;
            label.id = "label_" + i;
            div.appendChild(label);

            label = document.getElementById("label_" + i);
            label.innerHTML = '<i class="material-icons col-indigo">person</i>';
            
            /* Criando Elemento Div Button */
            var divButton = document.createElement("div");
            divButton.classList = "col-md-2 divButton";
            divButton.style = "margin-bottom: 0;"
            divButton.id = "divButton_" + i;
            container.appendChild(divButton);
            divButton = document.getElementById('divButton_' + i);

            var button = document.createElement("button");
            button.type = "button";
            button.classList = "btn btn-block bg-red waves-effect btnDelete";
            button.id = "id_btn_" + i;
            divButton.appendChild(button);
            document.getElementById('id_btn_'+i).setAttribute('onclick', 'removeField('+i+')');

            button = document.getElementById("id_btn_" + i);
            button.innerHTML = '<i class="material-icons col-indigo">delete</i>'
            
            // Append a line break 
            //container.appendChild(document.createElement("br"));
        }
        
    }
    else {
        return;
    }
}
function removeAllFields() {
    var numPessoas = document.getElementsByClassName('divPessoa').length;
    if ((numPessoas != '') || (numPessoas > 0)) {
        for(i = 0; i < numPessoas; i++) {
            removeField(i);
        }
        localStorage.removeItem('id_num_pessoas');
        document.getElementById('id_num_pessoas').value = 0;
    }
}
function removeField(num) {
    var div = document.getElementById("div_" + num);
    var divBtn = document.getElementById("divButton_" + num);
    var btn = document.getElementById("id_btn_" + num);

    btn.parentNode.removeChild(btn);
    divBtn.parentNode.removeChild(divBtn);
    div.parentNode.removeChild(div);
    
    var numPessoas = document.getElementById('id_num_pessoas');

    localStorage.setItem(
        'id_num_pessoas', (localStorage.getItem('id_num_pessoas') - 1)
    );

    numPessoas.value = (parseInt(numPessoas.value)) - 1;
    if(numPessoas.value > 0) {
        corrigeIDsInputsPessoas();
    }
}
function corrigeIDsInputsPessoas() {
    var numPessoas = parseInt(document.getElementById('id_num_pessoas').value);
    var divsPessoas = document.getElementsByClassName('divPessoa');
    var divsButtons = document.getElementsByClassName('divButton');
    var buttonsDelete = document.getElementsByClassName('btnDelete');
    var inputsPessoas = document.getElementsByClassName('inputPessoa');

    for (i = 0; i < numPessoas; i++) {
        divsPessoas[i].id = "div_" + i;
        divsButtons[i].id = "divButton_" + i;
        inputsPessoas[i].id = "id_nome_residente_" + i;
        inputsPessoas[i].name = "id_nome_residente_" + i;
        buttonsDelete[i].id = "id_btn_" + i;
        document.getElementById('id_btn_' + i).setAttribute('onclick', 'removeField(' + i + ')');
    }
    return;
}

function noCPF() {
    var checkCPF = document.getElementById('id_semCPF');

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
    return;
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
    return;
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
    return;
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
    var dataSintomas = $('#id_dt_1_sintomas');
    var dataInicio = $('#id_dt_ini_isolamento');
    if (dataSintomas.val().match('/')) {
        let dtSintomas = dataSintomas.val().split('/');
        let dtInicio = dataInicio.val().split('/');
        
        dataSintomas = dtSintomas[2] + '-' + dtSintomas[1] + '-' + dtSintomas[0];
        dataInicio = dtInicio[2] + '-' + dtInicio[1] + '-' + dtInicio[0];
    }

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