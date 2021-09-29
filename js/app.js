

ko.applyBindings(Horarios, document.getElementById('ListaHorarios'));
ko.applyBindings(CursosDisponibles, document.getElementById('ListaCursos'));
ko.applyBindings(DiasSemana, document.getElementById('selector'));



var valorDia = '0';
var valorCurso = '0';
var valorSwitch = false;

function filtroTotal(vDia, vCurso, vSwitch) {

    var claseDia = '';
    var claseTipo = '';
    var claseDiaTipo = '';
    var claseCurso = '';

    if (vDia != '-1') {
        valorDia = vDia;
        valorCurso = '0';
        limpiarSeleccionCurso();
        actualizarSeleccionMenuDias();
    } else if (vCurso != '-1') {
        valorCurso = vCurso;
        actualizarSeleccionCurso();
    } else if (vSwitch != '-1') {
        valorSwitch = !valorSwitch;

        document.getElementById('textoFiltro').innerHTML = valorSwitch == true ? 'Filtro Activado':'Filtro Desactivado';

    }

    claseDia = valorDia == '0' ? '' : '.' + valorDia;
    claseTipo = valorSwitch == false ? '' : '.Presencial';

    if (valorDia != 0 && valorSwitch == true) {
        claseDiaTipo = '.' + valorDia + 'Presencial';
    }

    if (vCurso == '-1') {
        OcultarMostrarTransicion('#ListaCursos', '0');

        OcultarMostrarTransicion('#ListaCursos', '1');

        OcultarMostrar('.cursoDisponible', 'none');

        OcultarMostrar('.cursoDisponible' + claseDia + claseTipo + claseDiaTipo, 'block');
    }

    claseCurso = valorCurso == '0' ? '' : '.' + valorCurso;
    claseTipo = valorSwitch == false ? '' : '.Presencialx';


    OcultarMostrarTransicion('.clase', '0');
    OcultarMostrarTransicion('.clase' + claseDia + claseCurso + claseTipo, '1');

    if (vCurso != '-1') {
        window.location.href = "index.html#ListaHorarios";
    }
}



function OcultarMostrarTransicion(selector, tipoDisplay) {

    if (tipoDisplay == '0') {
        $(selector).fadeOut();

    } else {
        $(selector).fadeIn();
    }
}

function OcultarMostrar(selector, tipoDisplay) {

    if (tipoDisplay == 'none') {
        $(selector).hide();

    } else {
        $(selector).show();
    }
}


function asignarClass(id, value) {
    document.getElementById(id).className = value;

}



function cambiarGrisesMultiple(coleccion, value) {


    for (var i = 0; i < coleccion.length; i++) {

        coleccion[i].style.filter = 'grayscale(' + value + ')';
    }
}

function actualizarSeleccionMenuDias() {
    for (x = 0; x < DiasSemana.length; x++) {
        asignarClass(DiasSemana[x].Valor, "MenuLateral text-center");
    }
    asignarClass(valorDia, "MenuLateralSeleccionado text-center");
}


function actualizarSeleccionCurso() {
    var coleccion = document.getElementsByClassName('cursoDisponible');

    for (var i = 0; i < coleccion.length; i++) {

        coleccion[i].style.borderColor = 'rgba(0,0,0,.125)';
    }
    document.getElementById(valorCurso).style.borderColor = '#0366d6';
}

function limpiarSeleccionCurso() {
    var coleccion = document.getElementsByClassName('cursoDisponible');

    for (var i = 0; i < coleccion.length; i++) {

        coleccion[i].style.borderColor = 'rgba(0,0,0,.125)';
    }
}