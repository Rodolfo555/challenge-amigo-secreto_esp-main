// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Agregar Nombres A La Lista Usando Boton.
let amigos = [];

// Validar Entrada
function agregarAmigo() {
  let inputAmigo = document.getElementById("amigo");
  let nombreAmigo = inputAmigo.value;

  if (!nombreAmigo) {
    alert("Debes ingresar un nombre");
    return;
  }
  // // Validar duplicados
  // if (amigos.includes(nombreAmigo)) {
  //   alert(`El nombre ${nombreAmigo} ya esta en la lista!`);
  //   return;
  // }

  // Si hay un resultado previo limpiar lista
  let resultado = document.getElementById("resultado");
  if (resultado.innerHTML !== "") {
    resultado.innerHTML = "";
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    amigos = [];
  }

  amigos.push(nombreAmigo);
  inputAmigo.value = "";
  inputAmigo.focus();
  crearListaAmigos();
}

// Funcion para eliminar amigo
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  crearListaAmigos();
}

// Visualizar Lista
function crearListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  // Loop para crear la lista con los nombres a ser sorteados
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    // Crear contenedor para nombre y botón
    let contenedor = document.createElement("div");
    let nombreSpan = document.createElement("span");
    nombreSpan.textContent = amigos[i];

    // Boton eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "X";
    botonEliminar.onclick = () => eliminarAmigo(i);

    // Añadir elementos
    contenedor.appendChild(nombreSpan);
    contenedor.appendChild(botonEliminar);
    item.appendChild(contenedor);
    listaAmigos.appendChild(item);
  }
}

// Sorteo Aleatorio
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  }
  let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

  let limpiarLista = document.getElementById("listaAmigos");
  limpiarLista.innerHTML = "";
}
