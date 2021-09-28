

ko.applyBindings(Horarios, document.getElementById('ListaHorarios'));
ko.applyBindings(CursosDisponibles, document.getElementById('ListaCursos'));
ko.applyBindings(DiasSemana, document.getElementById('selector'));



var valorDia = '0';
var valorCurso = '0';


function filtrarDias(vDia){
    valorDia = vDia;
    actualizarSeleccionMenuDias();

    if(valorDia != '0'){
        valorCurso ='0';
    }



}

function filtroTotal(vDia, vCurso) {

    if (vDia != '-1') {
        valorDia = vDia;
        valorCurso ='0';
        limpiarSeleccionCurso();
        actualizarSeleccionMenuDias();
    }

    if (vCurso != '-1') {
        valorCurso = vCurso;
        actualizarSeleccionCurso();
        window.location.href = "index.html#ListaHorarios";
    }

    if (valorDia == '0' & valorCurso == '0') {
        OcultarMostrarTransicion('#ListaCursos', '0');

        OcultarMostrarTransicion('#ListaCursos', '1');

        OcultarMostrarTransicion('.clase', '1');

        OcultarMostrar('.cursoDisponible', 'block');
    }
    else if (valorDia == '0' & valorCurso != '0') {

        OcultarMostrarTransicion('.clase', '0');

        OcultarMostrarTransicion('.' + valorCurso, '1');

        OcultarMostrar('.cursoDisponible', 'block');

    } else if (valorDia != '0' & valorCurso == '0') {

        OcultarMostrarTransicion('#ListaCursos', '0');

        OcultarMostrarTransicion('#ListaCursos', '1');

        OcultarMostrar('.cursoDisponible', 'none');

        OcultarMostrar('.cursoDisponible' + '.' + valorDia, 'block');

        OcultarMostrarTransicion('.clase', '0');

        OcultarMostrarTransicion('.clase' + '.' + valorDia, '1');

    } else {

        if (valorDia != '-1') {

            OcultarMostrarTransicion('#ListaCursos', '0');

            OcultarMostrarTransicion('#ListaCursos', '1');

            OcultarMostrar('.cursoDisponible', 'none');

            OcultarMostrar('.cursoDisponible' + '.' + valorDia, 'block');
        }


        OcultarMostrarTransicion('.clase', '0');

        OcultarMostrarTransicion('.' + valorDia + '.' + valorCurso, '1');

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

function limpiarSeleccionCurso(){
    var coleccion = document.getElementsByClassName('cursoDisponible');

    for (var i = 0; i < coleccion.length; i++) {

        coleccion[i].style.borderColor = 'rgba(0,0,0,.125)';
    }
}