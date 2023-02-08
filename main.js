//Plantillar literales: 
//hasta ahora para concatenar datos haciamos lo siguiente:

let cliente = "Ricky Fort";
let montoCompra = 10000000;
let mensaje = cliente + " realizó una compra por $ " + montoCompra;
console.log(mensaje);

//La plantilla nos permite concatenar datos y mostrar valores almacenados en diferentes variables de una forma más sencilla
//vamos a usar los backsticks `` (alt+96)

let mensajePlantillaLiteral = ` El cliente ${cliente} realizó una compra por $ ${montoCompra}`;
console.log(mensajePlantillaLiteral);

//¿Qué es el Dom? Document Object Model = Modelos de objetos del Documento.
//Es una estructura de objetos generada por navegador la cual representa el HTML actual. Lo que hace el Dom es transformarme el HTML en objetos. 
//Cada etiqueta HTML se transforma para el DOM en un NODO, que contiene las mismas propiedades que un objetos en JS. Esto nos permite trabajar desde el lado de la programación con la estructura HTML. 
//Con JS voy a poder acceder a esa estructura y modificarla de forma DINÁMICA. 

//¿Cómo funciona?
//En el modelo de DOM, cada etiqueta HTML representa un objeto llamado NODO. 
//Todos los nodos son accesiblespara JS a través del objeto global "document"

//1) Accedemos al DOM
    
// A) ID= getElementByID

const tituloPrincipal = document.getElementById("tituloPrincipal");
console.log(tituloPrincipal);

//B) CLASES: 

const nombre = document.getElementsByClassName ("nombre");
console.log (nombre);

//C) Nombre de etiqueta:

const meses = document.getElementsByTagName ("li");
console.log(meses);

//) querySelector: este método nos permite seleccionar nodos con la misma sintaxis que en css. Me trae solo la primera la clase que encuentre

const queryNombre = document.querySelector(".nombre");
console.log(queryNombre);

//querySelectorAll:

const queryNombreAll = document.querySelectorAll(".nombre");
console.log(queryNombreAll);


//*Modificar*/
//innerText : me permite acceder al contenido textual de algún elemento del DOM
// si quiero modificar el h1, puedo acceder a la variable vinculada al nodo.

tituloPrincipal.innerText = "Modificamos el titulo h1";

const divContenedor = document.getElementById("divContenedor");

//InnerHTML: para agregar nuevas etiquetas al html.
divContenedor.innerHTML = `<p> Esto es un párrafo </p>`;

divContenedor.innerHTML = `<div>
                                <p>Nombre</p>
                                <p>Precio</p>
                                <button>Aregar al carrito</button>
                            </div>`

//class name: me permite agregar un nombre de clase.

tituloPrincipal.className = "titulo";

//Agregar Nodos//

const contenedor = document.getElementById("contenedor");
const parrafo = document.createElement("p");
parrafo.innerText = "Este es un párrafo 222222";
parrafo.className = "titulo";
contenedor.appendChild(parrafo);

//Eliminar Nodos:
//remove(): eliminar un método seleccionado.

parrafo.remove();

//Ejemplo integración:

//Creamos objetos de forma dinámica:

class Producto {
    constructor (nombre,precio) {
        this.nombre= nombre;
        this.precio = precio;
    }
}

const yerba = new Producto ("Yerba", 250);
const harina = new Producto ("Harina", 300);
const gata = new Producto ("Gala", 151511515151511551);

const arrayProductos = [yerba, harina, gata];

const contenedorProductos = document.getElementById("contenedorProductos")

arrayProductos.forEach(producto => {
    const div = document.createElement("div");
    div.innerHTML= `<p> Nombre : ${producto.nombre} </p>
                    <p> Precio : ${producto.precio} </p>
                    <button> Agregar al carrito </button>`;
                    contenedorProductos.appendChild(div);
})