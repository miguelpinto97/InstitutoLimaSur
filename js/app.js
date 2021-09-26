
ko.applyBindings(Horarios);

var Dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];


function filtroTotal() {

    var comboDia = document.getElementById("selector");
    var valorDia = comboDia.value;
    var nombreDia = comboDia.options[comboDia.selectedIndex].text;

    var comboCurso = document.getElementById("selectorCurso");
    var valorCurso = comboCurso.value;
    var nombreCurso = comboCurso.value;


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