/*
1. Instalar nodejs desde la página.
2. Instalar el visual studio code y agregar las extensiones "Auto import / Auto Import ES6 & TS".
3. Importador módulos de nodejs con la notación "require".
4. Uso de tipo de dato "let" para variables globales y las utilizadas dentro de una función.
5. Uso de tipo de dato "const" para constantes que nunca van a cambiar en la ejecución de un programa.
6. Concatenación con "String template".
7. Imprimir de forma practica un resultado JSON con "JSON.stringify()" .

*/

const os=require('os');
const fs=require('fs');

let cpu=os.cpus();
let sysOperativo=os.platform();

let os_string=JSON.stringify(cpu);

fs.appendFile('primer_archivo.txt',`Los requerimientos de este equipo son: ${os_string}`,function(error){
    if(error){
        console.log('Error al generar el archivo.');
    }
});

