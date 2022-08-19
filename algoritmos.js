//primera funcion 
var a = 4;
var b = 1;
var operacion = a + b;
if(operacion < 2){
    console.log("numero chico");
} else {
    console.log("munero grande");
}

//segunda funcion
var edad = 17;

if(edad === 18){
    console.log("podes votar");
} else if(edad > 18){
    console.log("podes votar");
} else {
    console.log("no podes votar");
}

//tercera funcion

function resta(año, edad){ 
    var edad = edad;
    var año = año;
    return año - edad
}
console.log(resta(2022, 20));

//cuarta funcion
funcion
var Ropa = {
    pantalon: "adidas",
    remera: "puma",
    campera: "nike",
    marcaDeVestimenta: function(){
        console.log(`marca ${this.pantalon} ${this.remera} ${this.campera}`)
    }
};
Ropa.marcaDeVestimenta();

//quinta funcion
var alumnos = ["Rodrigo", "Gonzalo", "Franco"];
function saludar(alumnos){
    console.log(`Hola ${alumnos}`);
}
for( var i = 0; i < alumnos.length; i++ ) {
    saludar(alumnos[i]);
}

//sexta funcion 
/*Funcion saludar alumnos de a uno*/
var alumnos = ["Rodrigo", "Gonzalo", "Franco"];
function saludar(alumnos){
    console.log(`Hola ${alumnos}`);
}
for(var alumno of alumnos){
    saludar(alumno);
}

//septima funcion
var marcaDeAuto = ["Fiat", "Peugeot", "Ford","Audi"];
function mercado(marcaDeAuto){
    console.log(`LaMejorMarcaDeAutoEs ${marcaDeAuto}`);
}
for(var i = 0; i < marcaDeAuto.length; i++){
    mercado(marcaDeAuto[i]);
}
