function validacion() {
    let nombre = document.getElementById('nombre').value;
    let edad= document.getElementById('edad').value;
    let email = document.getElementById('email').value;
    let fecha= document.getElementById('fecha').value;

    if(nombre == '' || nombre.length == 0 || /^\s+$/.test(nombre)){
        alert("llene porfavor el espacion en blanco");
        return false;
    }

    if(isNaN(edad)){
        alert("falta edad");
        return false;
    }
}