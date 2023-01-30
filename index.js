// variables

// PRIMITIVOS

    // numeros

    const a = 1;
    var b = 2;
    let c = 5.2312312;

    console.log(a,b,c);


    // TEXTO O STRING

    const texto1 = "HOLA MUNDO";
    var texto2 = 'HOLA MUNDO';
    let texto3 = `HOLA MUNDO`;   

    console.warn(texto1);
    console.error(texto2);

    // BOOLEANOS

    const bol1 = true;
    var bol2 = false;
    let bol3 = true;


    // UNDEFINED

    const und1 = undefined;
    var und2 = undefined;
    let und3 = undefined;

    // const
    // var
    // let 

// ARREGLOS, ARRAYS, LISTADOS

const miArreglo = [1, 1231231212.12312312312, 'hola mundo', false, undefined];

console.log(miArreglo);

console.log(miArreglo[1]);

console.log(miArreglo[2]);

miArreglo.forEach( elemento => {
    console.log(elemento);
});


const miArreglo2 = [ 21312312, 'asdasdas', [ false, true, undefined ] ];
console.log(miArreglo2);


// OBJETOS LITERALES

const miObjeto = {
    nombre: 'Juan Camilo Clavijo',
    edad: 24,
    titulo: 'Ingeniero',
    soltero: true,
    salario: undefined,
    cursos: [ 'Leaflet', 'PostgreSQL', 'JavaScript' ]
};

console.log(miObjeto);

console.table(miObjeto);


// OBJETOS GLOBALES


console.log(console);


console.log(window)


const variableConstante = 10;


let variableLet = 'hola';

variableLet = 'Chao';

console.log(variableLet);


var variableVar = true;

var variableVar = false;

variableVar = true;

console.log(variableVar);



console.log(window);


// FUNCIONES 

function myFuncion1(){
    return 'hola'
}

const myFuncion2 = () => {
    return 'chao'
}

const myFuncion3 = function(){
    return 'Buenos días'
}


const saludo = myFuncion1();
console.log('saludo: ', saludo);


const despedida = myFuncion2();
console.log('despedida: ', despedida)

const despedida2 = myFuncion2();
console.log('despedida2', despedida2)

const saludo2 = myFuncion3();
console.log('saludo de buen día: ', saludo2)



// ARGUMENTOS DE FUNCIÓN

const sumar = (a, b) => {
    return a+b
}

const mySuma = sumar(1, 9);
console.log('suma 1: ', mySuma);


const mySuma2 = sumar(-5, 100);
console.log('suma 2: ', mySuma2);


const mySuma3 = sumar('hola', ' mundo');
console.log('suma 3: ', mySuma3);

const mySuma4 = sumar([], true);
console.log('suma 4', mySuma4);



// ITERACIONES O CICLOS

const arr = [ 1, 2, 3, 4 ];

const valor1 = sumar(arr[0], 5);
console.log(valor1);

const valor2 = sumar(arr[1], 5);
console.log(valor2);

const valor3 = sumar(arr[2], 5);
console.log(valor3);

const valor4 = sumar(arr[3], 5);
console.log(valor4);

for( let elemento of arr ) {
    const resultado = sumar(elemento, 5);
    console.log(resultado)
}


let contador = 0;

while( contador < 10 ){
    console.log(contador);
    contador = contador + 1;
}



// ESTRUCTURAS DE CONTROL

    // CONDICIONAL IF

const miResultado = sumar(-8, 10);

if( miResultado > 10 ){
    console.log('Mi resultado es mayor a 10');
}
else if( miResultado === 10 ){
    console.log('Mi resultado es igual a 10')
}
else {
    console.log('Mi resultado es menor a 10')
}


    // SWITCH

switch( miResultado ){

    case 10:
        console.log('El resultado es 10');
        break;

    case 3:
        console.log('El resultado es 3');
        break;

    default:
        console.log('No se cumplió ninguna condición');
        break;
}












