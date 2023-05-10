//--------------------------------------------------------
//-------Data-Do-sistema-Guardada-Em-váriáveis------------

let novaData = new Date;

let diaSistema = novaData.getDate();
let mesSistema = novaData.getMonth() + 1;
let anoSistema = novaData.getFullYear();

//--------------------------------------------------------
//--Pega-Os-Valores-Inputados-E-Armazena------------------

let inputDia = document.querySelector('#dia');
let inputMes = document.querySelector('#mes');
let inputAno = document.querySelector('#ano');

//--------------------------------------------------------
//-----Armazena-O-Icone-Do-Botao-Para-Ser-Utilizado-------

let botaoStart = document.querySelector('#botao');

let inputDay = document.querySelector('.day');
let inputMonth = document.querySelector('.month');
let inputYear = document.querySelector('.year');

//--------------------------------------------------------
//----------Pega-Os-Valores-Da-Tela-E-Armazena------------

let exibirAno = document.querySelector('#resultyears');
let exibirMes = document.querySelector('#resultmonths');
let exibirDia = document.querySelector('#resultdays');

//--------------------------------------------------------
//-----Salva-Os-Campos-de-Input-Para-Aletrar-O-Estilo-----

let alertaErroDia = document.querySelector(".day");
let alertaErroMes = document.querySelector(".month");
let alertaErroAno = document.querySelector(".year");

let incondizenteDia = document.querySelector(".day");
let incondizenteMes = document.querySelector(".month");
let incondizenteAno = document.querySelector(".year");

let diasAmais = document.querySelector(".day");
let mensagemDiasAmais = document.querySelector(".mensagemDiasAmais");

let mensagemDiaErro = document.querySelector(".mensagemDiaErro");
let mensagemMesErro = document.querySelector(".mensagemMesErro");
let mensagemAnoErro = document.querySelector(".mensagemAnoErro");

//------- REMOVE O ERRO CASO A OPERAÇÃO SEJA BEM SUCEDIDA -------

inputDay.addEventListener('mouseout', () => {
    alertaErroDia.classList.remove("alertError");
    diasAmais.classList.remove("diasAmais");
})
inputMonth.addEventListener('mouseout', () => {
    alertaErroMes.classList.remove("alertError");
})
inputYear.addEventListener('mouseout', () => {
    alertaErroAno.classList.remove("alertError");
})

//--------------------------------------------------------
//---Evento-De-Clique-Aciona-E-Guarda-Valores-Inputados---

botaoStart.addEventListener('click', () => {

    //-- VARIAVEL PRA RESOLVER BUG DE CALCULAR SEM DADOS --

    let controleDia = false;
    let controleMes = false;
    let controleAno = false;

    //--- FILTRA SOMENTE O VALOR DO INPUT E DEIXA PRONTO PARA USO ---

    let valorDiaFiltrado = inputDia.value;
    let valorMesFiltrado = inputMes.value;
    let valorAnoFiltrado = inputAno.value;

    //---------- VÁLIDA CAMPO DO DIA ----------

    if (valorMesFiltrado == mesSistema) {

        if (inputDia.value != "" && valorDiaFiltrado <= diaSistema) {

            if (inputDia.value > 31) {
                incondizenteDia.classList.add("incondizenteDia");
            } else {
                incondizenteDia.classList.remove("incondizenteDia");
                controleDia = true;
            }
    
        } else {
            alertaErroDia.classList.add("alertError");
            mensagemDiaErro.textContent = "Must be a valid day";
            controleDia = false;
        };

    } else if (inputDia.value != "") {

        if (inputDia.value > 31 || inputDia.value < 1) {
            incondizenteDia.classList.add("incondizenteDia");
            mensagemDiaErro.textContent = "Must be a valid day";
        } else {
            incondizenteDia.classList.remove("incondizenteDia");
            controleDia = true;
        }

    } else {
        alertaErroDia.classList.add("alertError");
    };

    //---------- VÁLIDA CAMPO DO MES ----------

    if (valorAnoFiltrado == anoSistema) {
        if (inputMes.value != "" && valorMesFiltrado <= mesSistema) {

            if (inputMes.value < 1 || inputMes.value > 12) {
                incondizenteMes.classList.add("incondizenteMes");
                mensagemMesErro.textContent = "Must be a valid month";
            } else {
                incondizenteMes.classList.remove("incondizenteMes");
                controleMes = true;
            }
    
        } else {
            alertaErroMes.classList.add("alertError");
            mensagemMesErro.textContent = "Must be a valid month";
        };

    } else if (inputMes.value != "") {

        if (inputMes.value < 1 || inputMes.value > 12) {
            incondizenteMes.classList.add("incondizenteMes");
            mensagemMesErro.textContent = "Must be a valid month";
        } else {
            incondizenteMes.classList.remove("incondizenteMes");
            controleMes = true;
        }

    } else {
        alertaErroMes.classList.add("alertError");
    };

    //---------- VÁLIDA CAMPO DO ANO ----------

    if (inputAno.value != "" ) {

        if (inputAno.value > anoSistema) {
            incondizenteAno.classList.add("incondizenteAno");
            mensagemAnoErro.textContent = "Must be in the past";
        } else {
            incondizenteAno.classList.remove("incondizenteAno");
            controleAno = true;
        }

    } else {
        alertaErroAno.classList.add("alertError");
    };

    //--- SCRIPT PARA VERIFICAR QUANTOS DIAS TEM CADA MÊS ---

    let maxDay;

    function determinarMaxDay() {

        if (valorMesFiltrado == 1) {maxDay = 31;}
    
        // Calcula o ano bissexto junto com a verificação de fevereiro
    
        if (valorMesFiltrado == 2) {
            if (valorAnoFiltrado % 4 == 0 && valorAnoFiltrado % 100 != 0 || 
                valorAnoFiltrado % 4 == 0 && valorAnoFiltrado % 100 == 0 && valorAnoFiltrado % 400 == 0) {
                    maxDay = 29;
            } else {
                maxDay = 28;
            }
        }
    
        if (valorMesFiltrado == 3) {maxDay = 31;}
        if (valorMesFiltrado == 4) {maxDay = 30;}
        if (valorMesFiltrado == 5) {maxDay = 31;}
        if (valorMesFiltrado == 6) {maxDay = 30;}
        if (valorMesFiltrado == 7) {maxDay = 31;}
        if (valorMesFiltrado == 8) {maxDay = 31;}
        if (valorMesFiltrado == 9) {maxDay = 30;}
        if (valorMesFiltrado == 10) {maxDay = 31;}
        if (valorMesFiltrado == 11) {maxDay = 30;}
        if (valorMesFiltrado == 12) {maxDay = 31;}
    
        if (valorDiaFiltrado > maxDay) {
            diasAmais.classList.add("diasAmais");
            mensagemDiasAmais.textContent = "Must be a valid date";
        }
    }

    determinarMaxDay();
    
    //--------------------------------------------------------
    //-------------------Cálculo------------------------------

    let ano = parseInt(valorAnoFiltrado); 
    let idadeAno = 0;

    let mes = parseInt(valorMesFiltrado);
    let idadeMes = 0;

    let dia = parseInt(valorDiaFiltrado);
    let idadeDia = 0;

    // == FUNÇÃO PRA VERIFICAÇÃO 3 ==

    function verificacaoTres() {
        if (dia > diaSistema) {
            valorMesFiltrado = mesSistema;
            determinarMaxDay();
            idadeMes = idadeMes - 1;
            idadeDia = maxDay - (dia - diaSistema);
        } else if (dia < diaSistema) {
            idadeDia = diaSistema - dia;
        }
    }

    // == VERIFICAÇÃO 1 ==

    while (ano < anoSistema) {
        ano = ano + 1;
        idadeAno = idadeAno + 1;
    }

    // == VERIFICAÇÃO 2 ==

    if (mes < mesSistema) {

        while (mes < mesSistema) {
            mes = mes + 1;
            idadeMes = idadeMes + 1;
        }

        verificacaoTres();

    } else if (mes == mesSistema) {

        if (dia > diaSistema) {
            idadeAno = idadeAno - 1;
            idadeMes = 11;
            idadeDia = maxDay - (dia - diaSistema);
        } else if (dia < diaSistema) {
            idadeDia = diaSistema - dia;
        }

    } else {

        idadeAno = idadeAno - 1;
        idadeMes = 12 - (mes - mesSistema);

        verificacaoTres();

    }

    //----------------------------------------------
    //---------Escrita-Do-Resultado-Na-Tela---------    

    if (controleDia == true && controleMes == true && controleAno == true) {
        exibirAno.textContent = idadeAno; 
        exibirMes.textContent = idadeMes; 
        exibirDia.textContent = idadeDia; 
    }

} );
