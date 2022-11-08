// USER ENTRY
let nombre = prompt("Cree su usuario. Ingresa tu nombre");
if (nombre == "") {
  alert("Por favor, ingresa tu nombre");
}
let apellido = prompt("Ahora tu apellido");
if (apellido == "") {
  alert("Por favor, ingresa tu apellido");
}

const saludar = [{ nombres: nombre }, { apellidos: apellido }];

console.log(saludar);
alert("Hola " + nombre + " " + apellido + ". Te damos la bienvenida al Store!");

// USER SING IN
let email = prompt("Ingresa tu email");
let password = prompt("Ingresa una contraseña");

function usuarioNuevo(email, password) {
  (this.email = email), (this.password = password);
}

let usuario1 = new usuarioNuevo(email, password);
console.log(usuario1);

// PRODUCTS
const producto = [
  { nombre: "BoosterBox", precio: 60000 },
  { nombre: "Deckbox", precio: 2500 },
  { nombre: "Playmats", precio: 5000 },
];

let chosenProduct = prompt(
  "Cual es tu busqueda el dia de hoy? BoosterBox, Deckbox, Playmats?"
);
alert(productos.filter((producto) => producto.nombre === chosenProduct));

//Intentando sumar IVA
function calculate() {
    var valorFinal;
    let total = parseInt(prompt("Total de tu Compra"))
    let sumaIva = parseFloat(prompt(" + IVA"))

    sumaIva(); {
        this.precio = this.precio * 1.21;
    }
    for (const producto of productos)
       producto.sumaIva();

    valorFinal = total + sumaIva;
    alert( nombre + "Tu precio con descuento es de :" + valorFinal);
}

if (nombre === "") {
} else {
  saludar();
  calculate();
}

let anuncio = prompt("Ingresaron novedades! Escribi 'VER' para acceder a todo lo nuevo!");

function Nuevo (titulo, precio){
    this.titulo = titulo;
    this.precio = precio;
}

const nuevosIngresos1 = new Nuevo("MTG Commander Legends", 85000);
const nuevosIngresos2 = new Nuevo("Deckbox Rigido Gold", 4000);
const nuevosIngresos3 = new Nuevo("Playmats GP Katowice", 8000);

if(anuncio == "VER" || anuncio == "ver"){
    console.log(nuevosIngresos1, nuevosIngresos2, nuevosIngresos3);
}