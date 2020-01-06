//Declaración de variables
var nombreUsuario= "Virginia Avila";
var saldoCuenta= 8000;
var limiteExtraccion= 5000;
var monto= 0;

//Variables de pagos de servicios
var agua= 350;
var telefono= 425;
var luz= 210;
var internet= 570;

//Variables de transferencia
var cuentaAmiga1= 1234567;
var cuentaAmiga2= 7654321;


//Ejecución para sumar
function sumarDinero(monto){
    saldoCuenta= saldoCuenta + monto;
}

//Ejecución para restar
function restarDinero(monto){
    saldoCuenta= saldoCuenta - monto;
}


//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function() {
    iniciarSesion();
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();

}

//Funcion para valores numericos
function valorNumerico(monto){
    if(monto/1==monto && monto > 0 && Number(monto)){
            return true;
    }
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    monto = prompt("Nuevo limite de extraccion: ");
        if(valorNumerico(monto)){
            limiteExtraccion = monto;
            alert("Nuevo limite de extracción: "+limiteExtraccion);
            actualizarLimiteEnPantalla();
        }else{
            alert("Por favor, ingrese un valor numerico.");
        }
}

function extraerDinero() {
    monto = prompt("Ingrese monto deseado a retirar: ");
    if(valorNumerico(monto)){
        var saldoAnterior=saldoCuenta;
        if (monto > saldoCuenta){
            alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero");
        }else if(monto > limiteExtraccion){
            alert("La cantidad de dinero que deseas extraer es mayor a tú limite de extraccion.");
        }else if(monto % 100 == 0){ 
            restarDinero(monto);
            alert("Has retirado: " + monto + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("Solo puede extraer billetes de 100.");
        }
    }else{
        alert("Por favor, ingrese un valor numerico.");
    }
}


function depositarDinero() {
    let aux= prompt("Ingrese monto deseado a depositar: ")
    monto = parseInt(aux);
    if(monto == aux){
        var saldoAnterior=saldoCuenta;
        if(valorNumerico(monto)){
            sumarDinero(monto);
            actualizarSaldoEnPantalla();
            alert("Has depositado: " + monto + "\n Saldo anterior: " + saldoAnterior + "\n Saldo actual: " + saldoCuenta);
        }else{
            alert("Por favor, ingrese un valor numerico.");
        }
    }else{
        alert("valor invalido.")
    }
    
    
}

//Funcion de pago de servicios
function pagarServicio() {
    var saldoAnterior= saldoCuenta;
    var servicio = parseInt(prompt("Ingrese el numero que corresponda con el servicio que quiera pagar: \n 1-Agua \n 2-Telefono \n 3-Luz \n 4-Internet"));
    switch(servicio){
        case(1):
        if(saldoCuenta>=agua){
            restarDinero(agua);
            alert("Has pagado el servicio de Agua. \n Saldo anterior:" + saldoAnterior + "\n Dinero descontado:" + agua + "\n Saldo actual:" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        }
        break;

        case(2):
        if(saldoCuenta>=telefono){
            restarDinero(telefono);
            alert("Has pagado el servicio de Telefono. \n Saldo anterior:" + saldoAnterior + "\n Dinero descontado:" + telefono + "\n Saldo actual:" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        }
        break;
        
        case(3):
        if(saldoCuenta>= luz){
            restarDinero(luz);
            alert("Has pagado el servicio de Luz. \n Saldo anterior:" + saldoAnterior + "\n Dinero descontado:" + luz + "\n Saldo actual:" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        }
        break;

        case(4):
        if(saldoCuenta>= internet){
            restarDinero(internet);
            alert("Has pagado el servicio de Internet. \n Saldo anterior:" + saldoAnterior + "\n Dinero descontado:" + internet + "\n Saldo actual:" + saldoCuenta);
            actualizarSaldoEnPantalla();
        }else{
            alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        }
        break;
        default:
        alert("No existe el servicio seleccionado.");      
    }
}

function transferirDinero() 
{
    var saldoAnterior=saldoCuenta;
        monto = prompt("Ingrese el monto que desea transferir:");
    if(valorNumerico(monto)){
        if(monto<=saldoCuenta && monto!=0)
        {   var cuentaDeTransferencia=parseInt(prompt("Ingrese el número de cuenta al que desea transferir el dinero:"));    
            if(cuentaDeTransferencia==cuentaAmiga1 || cuentaDeTransferencia==cuentaAmiga2)
            {   restarDinero(monto);
                actualizarSaldoEnPantalla();
                alert("Se han transferido: $" + monto + "\nCuenta destino: " + cuentaDeTransferencia);
            }
            else
            {   alert("Solo puede transferirse dinero a una cuenta amiga.");  
            }
        }
        else
        {   alert("No hay saldo disponible en tu cuenta para transferir esa cantidad de dinero.");
        }
    }else{
        alert("Por favor, ingrese un valor numerico");
    }
}


function iniciarSesion() {
    var codIngresado = prompt("Ingrese el código de su cuenta:");
    var codForzado = parseInt(codIngresado);
    if(codIngresado == 2019){
    alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
    }else{
        saldoCuenta=0;
        limiteExtraccion=" ";
        nombreUsuario=" ";
        alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
    }
}



//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}