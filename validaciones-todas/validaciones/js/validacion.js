function validacion() {
    let name = document.getElementById('name').value;
    let email= document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let date= document.getElementById('date').value;

    if(name == '' || name.length == 0 || /^\s+$/.test(name)){
        Swal.fire({
            icon: 'BOBO',
            title: 'enserio no tenes nombre',
            text: 'tu cabeza esta mal ',
            footer: '<a href="">vuelva a escribir burro</a>'
          })  
        return false;
    }

   
    if(email == '' || email.length == 0 ||!(/\S+@\S+\.\S+/.test(email))){
        alert("llene porfavor el email");
        return false;
    }

    if(date == '' || date.length == 0 || /^\s+$/.test(date)){
        alert("llene porfavor la fecha");
        return false;
    }

    if (password.length == 0 || password.length == 0) {
        alert("Los campos de la password no pueden quedar vacios");
        return false;
      }
}