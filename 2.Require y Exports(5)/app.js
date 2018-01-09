/*
1. Importar nuestros propios archivos al principal con "./mensaje"
2. Exponer los atributos de un archivo para poder utilizarlo desde otros ámbitos con "module.exports.fecha=fecha;".
3. Exponer las funciones de un archivo para poder utilizarlo desde otros ámbitos.
4. Exponer un formato JSON para poder utilizarlo desde otro ámbito.
NOTA: Si se utiliza un export con formato JSON no se pueden utilizar los demas exports independientes.
*/ 

const miMensaje=require('./mensaje');

//miMensaje.saludar;
//miMensaje.saludar2();
//let fechaPrueba=miMensaje.fecha;
//console.log(`La fecha es :${fechaPrueba}`);
console.log(`Una consola de última generación es ${miMensaje.consola}`);
miMensaje.saludo3();
