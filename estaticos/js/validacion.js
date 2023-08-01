/* validacion en el front para no utilizar recursos del servidor  */

/*
    Validacion no especificada, da mensaje de error si se deja algun campo null,
    o si el mail no contiene @ ni .

*/
    var mensaje = "";
    var nombre = document.getElementById("idnombre").value;
    var alias = idalias.value;
    var rut = idrut.value;
    var email = idemail.value;
    var region = idregion.value;
    var comuna = idcomuna.value;
    var candidato = idcandidato.value;
    var como = "";


    /* Eventos al completar un input */
    //nombre
    $("#idnombre").blur(function () {
        //Condiciones para la validacion sin especificar:
        if (this.value == "") {
            $("#idnombre").css("border", "1px solid rgb(196, 26, 60)");
            $("#errorNombre").css('display', 'block');
        }
    });
    $("#idnombre").focus(function () {
        $("#errorNombre").css('display', 'none');
        $("#idnombre").css("border", "2px solid green");
    });



    //alias
    $("#idalias").blur(function () {
        //Condiciones para la validacion sin especificar: solo filtra para null
        if (this.value == "") {
            $("#idalias").css("border", "1px solid rgb(196, 26, 60)");
            $("#errorAlias").css('display', 'block');
        }
    });
    $("#idalias").focus(function () {
        $("#errorAlias").css('display', 'none');
        $("#idalias").css("border", "2px solid green");
    });



    //rut
    $("#idrut").blur(function () {
        if (this.value == "") {
            $("#idrut").css("border", "1px solid rgb(196, 26, 60)");
            $("#errorRut").css('display', 'block');
        }
    });
    $("#idrut").focus(function () {
        $("#errorRut").css('display', 'none');
        $("#idrut").css("border", "2px solid green");
    });


    //email
    $("#idemail").blur(function () {
        if (this.value == "") {
            $("#idemail").css("border", "1px solid rgb(196, 26, 60)");
            $("#errorEmail").css('display', 'block');
        }
        if ($("#idemail").val().indexOf('@', 0) == -1 || $("#idemail").val().indexOf('.', 0) == -1) {
            $("#idemail").css("border", "1px solid rgb(196, 26, 60)");
            $("#errorEmail").css('display', 'block');
            return false;
        }
    });
    $("#idemail").focus(function () {
        $("#errorEmail").css('display', 'none');
        $("#idemail").css("border", "2px solid green");
    });


    /* Para checkbox unica seleccion:   */
    $("#check input").click(function () {
        if ($("#check input").is(":checked")) {
            $("#check input").prop('checked', false);   //borra todos los input que esten 'checked'
            $("#" + this.value).prop('checked', true);     //asigna 'checked' al que tiene evento 'click'
            como = this.value;
        }
    });

    /* funciones de validacion */
    function validacion() {
        var validacionNombre = false;
        var validacionAlias = false;
        var validacionRut = false;
        var validacionEmail = false;

        if (nombre != "") {
            //condiciones de validacion para el nombre
            validacionNombre = true;
        } else {
            mensaje = mensaje + " * el nombre es obligatorio";
        }

        if (alias != "") {
            //condiciones de validacion para el alias
            validacionAlias = true;
        } else {
            mensaje = mensaje + " * el alias es obligatorio";
        }

        if (rut != "") {
            //condiciones de validacion para rut
            validacionRut = true;
        } else {
            mensaje = mensaje + " * el rut es obligatorio";
        }

        if ($("#idemail").val().indexOf('@', 0) != -1 || $("#idemail").val().indexOf('.', 0) != -1) {
            validacionEmail = true;
        } else {
            mensaje = mensaje + " * el email es obligatorio";
        }

        if (validacionNombre == true && validacionAlias == true && validacionRut == true && validacionEmail == true) {
            return true;
        } else {
            return mensaje;
        }
        //fin de funcion validacion()
    }
    /* votar */
    $("#btn").click(function () {
        if (validacion() == true) {
            console.log("votado correctamente: " + nombre + alias + rut + email + region + comuna + candidato + como);
            //hacia el servidor->
            $.post("server.php",
            {
              nombre,
              alias,
              rut,
              email,
              region,
              comuna,
              candidato,
              como
            },
            function(data,status){
                console.log("Enviado: " + data + "\nStatus: " + status);
                alert(data);    //devolucion del servidor
            });
        } else {
            alert(mensaje);
            mensaje = "";
        }
    });




