

ko.applyBindings(Horarios, document.getElementById('ListaHorarios'));
ko.applyBindings(CursosDisponibles, document.getElementById('ListaCursos'));
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

        cambiarBordesMultiple();
        cambiarBordeUnico(valorCurso);

    }

    if (valorDia == '0' & valorCurso == '0') {

        //Muestra Todas las Clases
        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'block');

        var coleccionCursosDisponibles = document.getElementsByClassName('cursoDisponible');

        cambiarGrisesMultiple(coleccionCursosDisponibles,0);
    }
    else if (valorDia == '0' & valorCurso != '0') {

        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'none');

        var coleccionClases = document.getElementsByClassName(nombreCurso);

        cambiarDisplayMultiple(coleccionClases, 'block');

        var coleccionCursosDisponibles = document.getElementsByClassName('cursoDisponible');

        cambiarGrisesMultiple(coleccionCursosDisponibles,0);

    } else if (valorDia != '0' & valorCurso == '0') {

        //Mostrar Unicamente las Clases del Dia Seleccionado
        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'none');

        var coleccionClases = document.getElementsByClassName(nombreDia);

        cambiarDisplayMultiple(coleccionClases, 'block');    

        //Cambiar Estilos de las Imagenes de los Cursos Disponibles

        var coleccionCursosDisponibles = document.getElementsByClassName('cursoDisponible');

        cambiarGrisesMultiple(coleccionCursosDisponibles,1);

        var coleccionCursosDisponibles = document.getElementsByClassName(nombreDia);

        cambiarGrisesMultiple(coleccionCursosDisponibles,0);

    } else {

        var coleccionClases = document.getElementsByClassName('clase');

        cambiarDisplayMultiple(coleccionClases, 'none');

        var coleccionClases = document.getElementsByClassName(nombreDia + ' ' + nombreCurso);

        cambiarDisplayMultiple(coleccionClases, 'block');

       
        var coleccionCursosDisponibles = document.getElementsByClassName('cursoDisponible');

        cambiarGrisesMultiple(coleccionCursosDisponibles,1);

        var coleccionCursosDisponibles = document.getElementsByClassName(nombreDia);

        cambiarGrisesMultiple(coleccionCursosDisponibles,0); 

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

function cambiarBordeUnico(id){

	document.getElementById(id).style.borderColor = '#0366d6';

}
function cambiarBordesMultiple() {

    var coleccion = document.getElementsByClassName('cursoDisponible');

    for (var i = 0; i < coleccion.length; i++) {

        coleccion[i].style.borderColor= 'rgba(0,0,0,.125)';
    }
}

function cambiarGrisesMultiple(coleccion, value) {

    for (var i = 0; i < coleccion.length; i++) {

        coleccion[i].style.filter= 'grayscale('+value+')';
    }
}

