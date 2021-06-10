//Ejercicios con cadenas de textos:

//1)Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.

// let text= prompt("Ingrese un texto y validaremos si contiene la a");
// console.log(`El texto contiene la letra a ${text.includes("a")}`);

//2)Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.

// let parrafo = prompt("Ingrese un texto y lo mostraremos en mayusculas y minusculas");

// alert(`El texto en mayusculas ${parrafo.toUpperCase()}`);
// alert(`El texto en minusculas ${parrafo.toLowerCase()}`);

//3)Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza

// let text = prompt("Ingrese una palabra y te mostraremos con que letra empieza");
// alert(`La primera letra de tu parrafo es ${text.charAt(0)}`)

//4) Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene

// let text = prompt("ingrese un frase y te diremos cuantos caracteres tiene");
// alert(`Tiene un total de ${text.length}`);

//5) Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.

// let numero = (prompt("Ingrese un numero y te diremos cuantos dijitos tiene:"));

// alert(`El ${numero} tiene un total de ${numero.length}`)

//6)Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.

// let text = prompt("Ingrese un palabra y te mostraeremos con que letra termina");
// alert(`La palabra termina con la letra ${text.charAt(text.length-1)}`)

//7) Ingresar una cadena de texto y reemplazar los espacios por asteriscos.

// let text = prompt("Ingrese una cadena de texto");
// alert(`Vamos a remplazar los espacios por asteriscos ${text.replaceAll(" ","*")}`);

//8) Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.

// let text = prompt("ingrese una letra");
// let text2 = prompt("ingrese una cadena de texto")

// alert(`Si es True contiene la letra si es False no contiene la letra: ${text2.includes(text)}`)

//9)Solicitar un texto y mostrarlo todo menos la primera letra.

// let text =prompt("Ingrese un texto y mostraremos todo menosla primera palabra");
// alert(`${text.slice(1,)}`)

//10)Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.

let nombre = prompt("Ingrese su nombre en minusculas y le mostraremos su nombre con la primera letra en mayusculas");

alert(`Su nombre es ${nombre.charAt(0).toUpperCase()}${nombre.slice(1)}`)





