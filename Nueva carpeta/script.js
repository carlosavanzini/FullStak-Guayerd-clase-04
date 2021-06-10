// Ejercicios con condicionales (parte 1):

// 1) Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 

// let medidaMetro = parseFloat(prompt("Ingrese una medida en metros."));
// let medidaPies = medidaMetro * 3.28084;
// let medidaCentimetro = medidaMetro * 100;
// let medidaPulgadas = medidaMetro * 39.3701;

// if (!isNaN(medidaMetro)) {
//     alert(`${medidaPies} pies son ${medidaMetro} metros, ${medidaCentimetro} centimetros son ${medidaMetro} metros y ${medidaPulgadas} pulgadas son ${medidaMetro} metros`);
// } else {
//     alert(`Dato incorrecto, recuerde que solo puede agregar datos numericos`)
// }



// 2)Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor .
    // let edad = parseInt(prompt("Ingrese su edad para saber si es mayor edad"));
    // if (edad>=18) {
    //     alert("Es mayor de edad");
    // } else {
    //     alert("Es menor de edad");
    // }

// 3)Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.

    // let sabores = prompt("¿Que sabores de  helado quiere?");
    // let cobertura= prompt("Quiere cobertura conteste, si/no");

    // if (cobertura ==="si") {
    //     alert(`Su helado con sabor ${sabores} con cobertura de chocolate cuesta $180`);
    // } else {
    //     alert(`Su helado con sabor ${sabores} sin cobertura de chocolate cuesta $150`);
    // }



// 4) Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.
    // let numero1 = parseInt(prompt("ingrese el primer numero"));
    // let numero2 = parseInt(prompt("ingrese el segundo numero"));

    // resultado = numero1 + numero2;
    // alert(`El resultado de la suma es igual a: ${resultado}`)

    // if (resultado % 2===0) {
    //     alert("Es par")
    // } else {
    //     alert("Es impar")
    // }


// 5) Solicitar al usuario un número e indicar si es positivo, negativo o cero.

    // let number = parseFloat(prompt("Ingrese un numero para saber si positivo negativo o cero"));

    // if (number>0) {
    //     alert("El numero es positivo")
    // } else if(number===0) {
    //     alert("el numero es cero");
    // } else{
    //     alert("el numero es negativo")
    // }
// 6) Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.

    // let monto = parseFloat(prompt("ingrese el monto a pagar, si es mayor a 2000 tiene un 10%"));
    // let descuento = monto*10/100
    // if (monto>2000) {
    //     alert(`El monto a pagar sumado el descuento es de ${monto-descuento}`)
    // } else {
    //     alert(`Lo sentimos el monto no alcanza para realizar el descuento, su pago total es de ${monto}`)
    // }


// 7) Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)

// let text =prompt("ingrese una cadena de texto");
// let ingrese = parseInt(prompt("Ingrese una posicion para saber si es vocal o no"));
// let vocal=text.charAt(ingrese);
// if (vocal==="a"|| vocal==="e" || vocal==="i" || vocal==="o" || vocal==="u") {
//     alert("Es una vocal")
// } else {
//     alert("No es una vocal")
// }

// 8) Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 

    // let notas = parseFloat(prompt("Ingrese una nota del 1 al 10;"));

    // switch (notas) {
    //     case 1:
    //     case 2:
    //     case 3:
    //         alert("Usted esta aplazado")
    //         break;
    //     case 4:
    //     case 5:
    //     case 6:
    //         alert("Usted esta reprovado")
    //         break;
    //     case 6:
    //     case 7:
    //     case 8:
    //     case 9:
    //     case 10:    
    //     alert("Usted esta aprovado")
    //         break;
    //     default:
    //         alert("La nota ingresa no corresponde, recuerde que solo es del 1 a 10")
        
    // }

// 9) Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.

    // let number1 =parseFloat(prompt("ingrese el primer numero"));
    // let number2 =parseFloat(prompt("ingrese el segundo numero"));

    // if(number2===number1){
    //     alert(`los numeros ${number1} y ${number2} son iguales`);
    // } else if (number1>number2) {
    //     alert(`El numero ${number1} es mayor`)
    // } else {
    //     alert(`El numero ${number2} es mayor`)
    // } 

// 10) Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.

    // let mes =parseInt(prompt("Ingrese el mes del 1 al 12 para saber cuantos dias tiene"));

    // switch (mes) {
    //     case 1:
    //         alert("El mes de enero  tiene 31 dias")
    //         break;
    //     case 2:
    //         alert("El mes de febrero dependiendo el año puede tener 28 o 29 dias")
    //         break;
    //     case 3:
    //         alert("El mes de enero  tiene 31 dias");
    //         break;
    //     case 4:
    //         alert("El mes de abril tiene 30 dias");
    //         break;
    //     case 5:
    //         alert("El mes de mayo tiene 31 dias");
    //         break;
    //     case 6:
    //         alert("El mes de junio tiene 30 dias");
    //     case 7:
    //         alert("El mes de julio tiene 31 dias");
    //         break;
    //     case 8:
    //         alert("El mes de agosto tiene 31 dias")
    //         break;
    //     case 9:
    //         alert("El mes de septiembre tiene 30 dias");
    //         break;
    //     case 10:
    //         alert("El mes de octubre tiene 31 dias");
    //         break;
    //     case 11:
    //         alert("El mes de noviembre tiene 30 dias");
    //     case 12:
    //         alert("El mes de diciembre tiene 31 dias");
    //         break;
    //     default:
    //         alert("No ingreso un mes correcto.")
    //         break;
    // }

// 11) Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.

    // let number1 = parseFloat(prompt("Ingrese el primer numero"));
    // let number2 = parseFloat(prompt("Ingrese el segundo numero"));
    // let number3 = parseFloat(prompt("Ingrese el tercer numero"));

    // if (number1>number2 && number1>number3) {
    //     alert(`El numero mayor es el ${number1}`)
    // } else if(number2>number1 && number2>number3) {
    //     alert(`El mayor es el ${number2}`);
    //  } else{
    //      alert(`El mayor es el numero ${number3}`)
    //  }
//12) Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).

    const valorAgua= 20;
    const valorCerveza = 80;
    const valorJugo = 50;
    let edad = parseInt(prompt("Ingrese su edad"));
    let bebida = prompt("¿Què desea tomar,tenemos agua a 20$ Cerveza a 80$ y jugo a $50?");
    let monto = parseInt(prompt("con que billete(numero) desea pagar"))
    let vueltoCerveza = monto - valorCerveza;
    let vueltoAgua = monto - valorAgua;
    let vueltoJugo = monto - valorJugo;

    if (edad>=18 && monto>=valorCerveza && bebida ==="cerveza") {
        alert(`Gracias por su compra, su vuelto es ${vueltoCerveza} pesos`)
    } else if(edad<18 && monto>=valorCerveza && bebida ==="cerveza") {
        alert("es menor de edad no podemos venderle")
    }else if(monto<valorCerveza && bebida==="cerveza"){
        alert("no le alcanza el dinero, le recuerdo que sale $80")
    }else if(edad>=1 && edad<=99 && monto>=valorAgua && bebida==="agua"){
        alert(`Gracias por su compra, su vuelto es de ${vueltoAgua} pesos`)}
    else if(monto<valorAgua){
            alert("no le alcanza el dinero, le recuerdo que sale $20 pesos")} 
    else if(edad>=1 && edad<=99 && monto>=valorJugo && bebida ==="jugo"){
        alert(`Gracias por su compra, su vuelto es de ${vueltoJugo} pesos`)
    }else if(monto<valorJugo){
        alert("no le alcanza el dinero, le recuerdo que sale $50 pesos")} 


// 13) Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).
// switch (mes) {
    //     case 1:
    //         alert("Enero")
    //         break;
    //     case 2:
    //         alert("Febrero")
    //         break;
    //     case 3:
    //         alert("Marzo");
    //         break;
    //     case 4:
    //         alert("Abril");
    //         break;
    //     case 5:
    //         alert("Mayo");
    //         break;
    //     case 6:
    //         alert("Junio");
    //     case 7:
    //         alert("Julio");
    //         break;
    //     case 8:
    //         alert("Agosto")
    //         break;
    //     case 9:
    //         alert("Septiembre");
    //         break;
    //     case 10:
    //         alert("Octubre");
    //         break;
    //     case 11:
    //         alert("Noviembre");
    //     case 12:
    //         alert("Diciembre");
    //         break;
    //     default:
    //         alert("No ingreso un digito correcto le recuerdo que es del 1 al 12.")
    //         break;
    // }



// BONUS:

// 1) Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.

    // const claveGuardada= 1234
    // const balance= 1200;
    // let clave = parseFloat(prompt("Ingrese su clave de 4 dijitos numericos"));
    // let montoARetirar =parseFloat(prompt("¿Que monto desea retirar?"))

    // if (clave===claveGuardada && montoARetirar<=1200) {
    //     alert(`Operacion aceptada,retire sus ${montoARetirar} pesos del cajero`)
    // } else if(claveGuardada != clave) {
    //     alert(`Error clave incorrecta`)
    // }else if(montoARetirar>1200){
    //     alert("Pedir mas del dinero disponible")
    // }

// 2) Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.

    // let dia = parseInt(prompt("Ingrese su dia de nacimiento"));
    // let mes = prompt("Ingrese su mes de nacimiento");
    //  if (dia>=21 &&  mes==="marzo" ||dia<=20 && mes ==="abril") {
    //      alert("Tu signo es aries")
    //  } else if (dia>=21 && mes==="abril" ||dia<=21 && mes ==="mayo") {
    //      alert("Tu signo es Tauro")
    //  }  else if (dia>=22&& mes==="mayo" ||dia<=21 && mes ==="junio") {
    //     alert("Tu signo es Geminis")
    //  }    else if (dia>=22 && mes==="junio" ||dia<=23 && mes ==="julio") {
    //     alert("Tu signo es Cancer")
    //  }    else if (dia>=24 && mes==="julio" ||dia<=23 && mes ==="agosto") {
    //     alert("Tu signo es Leo")
    //  }    else if (dia>=24 && mes==="agosto" ||dia<=23 && mes ==="septiembre") {
    //     alert("Tu signo es Virgo")
    //  }    else if (dia>=24 && mes==="septiembre" ||dia<=23 && mes ==="octubre") {
    //     alert("Tu signo es Libra")
    //  }    else if (dia>=24 && mes==="octubre" ||dia<=22 && mes ==="noviembre") {
    //     alert("Tu signo es Escorpio")
    //  }  else if (dia>=23 && mes==="noviembre" ||dia<=22 && mes ==="diciembre") {
    //     alert("Tu signo es Sagitario")
    //  }    else if (dia>=23 && mes==="diciembre" ||dia<=20 && mes ==="enero") {
    //     alert("Tu signo es Capricornio")
    //  }  else if (dia>=21 && mes==="enero" ||dia<=19 && mes ==="febrero") {
    //     alert("Tu signo es Acuario")
    //  }  else if (dia>=20 && mes==="febrero" ||dia<=20 && mes ==="marzo") {
    //     alert("Tu signo es Piscis")
    //  } 
     

//3) Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. 

    // let nombre= prompt("Ingrese su nombre");
    // let hora = parseFloat(prompt("Ingrese la hora"));

    // if (hora>=12 && hora<19) {
    //     alert(`Buenas tarde ${nombre}`)
        
    // } else if(hora>=19 && hora<24 || hora>=0  && hora<5) {
    //     alert(`Buenas noches ${nombre}`);
    // }else if(hora>=5 && hora<12){
    //     alert(`Buenoa dias ${nombre}`);
    // }


