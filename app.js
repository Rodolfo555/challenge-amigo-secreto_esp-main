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

  amigos.push(nombreAmigo);

  inputAmigo.value = "";
  inputAmigo.focus();
  crearListaAmigos();
  console.log(amigos);
}

// Visualizar Lista
function crearListaAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  // loop para crear la lista con los nombre a ser sorteados
  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
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
