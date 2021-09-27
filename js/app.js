

ko.applyBindings(Horarios, document.getElementById('ListaHorarios'));
ko.applyBindings(DiasSemana, document.getElementById('selector'));



var valorDia = '0';
var nombreDia = '0';
var valorCurso = '0';
var nombreCurso = '0';

function filtroTotal(vDia, nDia, vCurso, nCurso) {

    if(vDia != 'F'){
        valorDia = vDia;
        nombreDia=nDia;

        for(x=0; x<DiasSemana.length;x++ ){
            asignarClass(DiasSemana[x].Valor,"MenuLateral text-center");
        }
        asignarClass(valorDia,"MenuLateralSeleccionado text-center");
    }

    if(vCurso != 'F'){
        valorCurso = vCurso;
        nombreCurso = nCurso;
    }

    if (valorDia == '0' & valorCurso == '0') {

        //Muestra Todas las Clases
        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'block');

    }
    else if (valorDia == '0' & valorCurso != '0') {

        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'none');

        var coleccionClases = document.getElementsByClassName(nombreCurso);

        cambiarDisplayMultiple(coleccionClases, 'block');

    } else if (valorDia != '0' & valorCurso == '0') {

        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'none');

        var coleccionClases = document.getElementsByClassName(nombreDia);

        cambiarDisplayMultiple(coleccionClases, 'block');

    } else {

        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'none');

        var coleccionClases = document.getElementsByClassName(nombreDia + ' ' + nombreCurso);

        cambiarDisplayMultiple(coleccionClases, 'block');

    }

}



function cambiarDisplayMultiple(coleccion, tipoDisplay) {

    for (var i = 0; i < coleccion.length; i++) {

        coleccion[i].style.display = tipoDisplay;
    }
}
function asignarClass(id,value){
	document.getElementById(id).className = value;

}