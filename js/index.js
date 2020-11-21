function enviar(e) {
    alert(e);
    swal("Informacion Enviada", "Datos almacenados con exito", "success")
}

function noEnviar() {
    swal("Envio cancelado", "Datos no enviados", "info")
}

$('#form').on('submit', (e) => {
    e.preventDefault();
    swal({
        title: "Datos Almacenados Correctamente",
        text: "Los datos Fueron enviados",
        icon: "success"
    }).then(function (value) {
        if (value) {
            form.submit();
        } else {
            form.submit();
        }
    });
});

$('#login').on('submit', (e) => {
    e.preventDefault();
    swal({
        title: "Ingreso Correctamente",
        text: "Datos Correctos",
        icon: "success"
    }).then(function (value) {
        if (value) {
            login.submit();
        } else {
            login.submit();
        }

    });
});

//window.botonLogin = 'Salir';















