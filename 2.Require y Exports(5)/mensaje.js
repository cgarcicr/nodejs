/*
// 1ro Exportar atributos
let fecha='2018/01/08';
module.exports.fecha=fecha;

// 2do Exportar una función
function saludar(){
    console.log("Hola ... me estan llamando desde otro archivo.");
}
module.exports.saludar=saludar();

// 3ro Otra manera de exportar una función
module.exports.saludar2=function saludar2(){
    console.log('Segundo saludo.');    
};*/

//4to Exportar un formato JSON
let nombreConsola='Play station 4';
module.exports={
    consola:nombreConsola,
    saludo3: function(){
        console.log("La otra consola de última generación es una XBOX ONE");
    }


}