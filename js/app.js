

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
        window.location.href = "index.html#ListaHorarios";
    }

    if (valorDia == '0' & valorCurso == '0') {

        cambiarDisplayMultiple('clase', 'block');

        cambiarDisplayMultiple('cursoDisponible','block');
    }
    else if (valorDia == '0' & valorCurso != '0') {

        cambiarDisplayMultiple('clase', 'none');

        cambiarDisplayMultiple(nombreCurso, 'block');

        cambiarDisplayMultiple('cursoDisponible','block');

    } else if (valorDia != '0' & valorCurso == '0') {

        cambiarDisplayMultiple('cursoDisponible','none');

        cambiarDisplayMultiple('clase', 'none');

        cambiarDisplayMultiple(nombreDia,'block');

    } else {

        if(vDia != 'F'){
            cambiarDisplayMultiple('cursoDisponible','none');

            cambiarDisplayMultiple(nombreDia,'block'); 
        }
    


        cambiarDisplayMultiple('clase', 'none');

        cambiarDisplayMultiple(nombreDia + '.' + nombreCurso, 'block');

    }

}



function cambiarDisplayMultiple(selector, tipoDisplay) {
    
    if(tipoDisplay=='none'){
        $("."+selector).fadeOut();

    }else{
        $("."+selector).fadeIn();
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

