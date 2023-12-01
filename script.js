//Bienvenida a Javascript básico, para comentar una linea de código puedes usar las dos barras // y para comentar un bloque de varias líneas puedes usar barra y asterisco para abrir /*  asterisco y barra para cerrar */

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//Ejercicio 1: Imprime en la consola "Bienvenida al bootcamp de Sequoia de Factoría F5" y mira en tu navegador si sale el resultado.

//Escribe tu código aquí

console.log('Bienvenida al bootcamp de Sequoia de Factoría F5')

//VARIABLES Y TIPOS DE DATOS
//Ejercicio 2: Crea una variable por los siguientes tipos de dato: string, number, boolean, null, undefined, object, array e imprímelos en la consola.

//Escribe tu código aquí

let texto = "hola";
let numero = 3;
let verdadero = true;
let nulo = null;
let indefinido;
let arreglo = [ 1, 2, 3];
let objetoGato = {
    nombre: "nit",
    color: "negro",
    edad: "2 años", 
}

console.log (texto);
console.log (numero);
console.log (verdadero);
console.log (nulo);
console.log (indefinido);
console.log (arreglo);

//Ejercicio 3: Crea una constante llamada postres con un tipo de dato array que contiene los siguientes elementos: helado, tarta, pastel e imprímelo en la consola. 

//Escribe tu código aquí

const postres = ["helado", "tarta", "pastel"];

console.log(postres);

//Ejercicio 4: Crea una constante con un tipo de dato objeto llamado coder que contengan dos propiedades, nombre y edad e imprímelo en la consola.

//Escribe tu código aquí

const coder = {
    nombre: "Cris",
    edad: "33",
}

console.log(coder);

//Ejercicio 5: Busca como imprimir en consola el tipo de dato de cada variable que hemos creado.

//Escribe tu código aquí

console.log("-texto:", typeof texto, "-numero:", typeof numero, "-verdadero:", typeof verdadero, "-nulo:", typeof nulo, "-indefinido:", typeof indefinido, "-arreglo:", typeof arreglo, "-objetoGato:", typeof objetoGato, "-postres:", typeof postres, "-coder:", typeof coder);

//OPERADORES ARITMÉTICOS
//Ejercicio 6: Crea una varible que sume 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let suma = 3+7;

console.log("Ejercicio 6:", suma);

//Ejercicio 7: Crea una varible que reste 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let resta = 7-3;

console.log("Ejercicio 7", resta);

//Ejercicio 8: Crea una varible que multiplique 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let multi = 7*3;

console.log("Ejercicio 8:", multi);


//Ejercicio 9: Crea una varible que divida 2 números e imprime el resultado en consola.

//Escribe tu código aquí

let divi = 10/2;

console.log("Ejercicio 9:", divi);

//OPERADORES DE COMPARACIÓN
// Ejercicio 10: Crea dos variables, la primera con valor 1 y la segunda con valor 2, compara ambas variables dentro de otra variable e imprime en la consola para ver el resultado.

//Escribe tu código aquí

let valor1 = 1;
let valor2 = 2;

let compara = 1 == 2;

console.log("Ejercicio 10:", compara);

// Ejercicio 10: Crea otra variable que compare las dos primeras variables creadas en el ejercicio anterior, para que el resultado impreso en la consola sea true.

//Escribe tu código aquí

let comparaTrue = 1 != 3;

console.log("Ejercicio 10:", comparaTrue);

//Ejercicio 11: completa el ejercicio

let num1 = 15
let num2 = 20

//Realiza la operación de comparación que consideres para que el resultado en consola sea true

let comparacion = 15 != 20;
console.log("Ejercicio 11:", comparacion)

//Ejercicio 12: completa el ejercicio

let num3 = 1
let num3AsString = "1"

//Realiza la operación de comparación que consideres entre las dos variables dadas, para que el resultado en consola sea false sin usar el comparador de desigualdad
let result = num3 === num3AsString;
console.log("Ejercicio 12:", result) 


//Ejercicio 13: completa el ejercicio

//Realiza la operación de comparación que consideres con las dos variables del ejercicio anterior para que el resultado en consola sea true.
let result2 = num3 == num3AsString;
console.log("Ejercicio 13:", result2)

//OPERADORES DE CADENAS
//Ejercicio 14: Crea una variable con tu nombre y otra variable con tu apellido y crea otra nueva variable con tu nombre completo concatenando las dos variables anteriores e imprime en consola. Debe haber un espacio entre tu nombre y apellido.

//Escribe tu código aquí

let nombre = "Cris";
let apellido = "Casas";
let nombreApellido = nombre+" "+apellido;

console.log("Ejercicio 14:", nombreApellido);

//OPERADORES DE LÓGICA
//Ejercicio 15: Descomenta todo el bloque desde la variable 'a' hasta el 'console.log(res6)' y completa el ejercicio. (Saldrá un error y no podrás visualizar el resultado hasta que termines este ejercicio)

let a = 6;
let b = 3;

let res =  a < 10 && b > 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res)

let res2 = a < 10 && b < 1 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res2)

let res3 = a == 5 && b == 5 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea false
console.log(res3)

let res4 = a == 6 || b == 0 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res4)

let res5 = a == 0 || b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res5)

let res6 = a == 6 && b == 3 //Eliminar el espacio "__" y coloca el comparador lógico que consideres para que el resultado sea true
console.log(res6)