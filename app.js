// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nuevoAmigo = input.value.trim();
  const listaElement = document.getElementById('listaAmigos');

  if (!nuevoAmigo) {
    alert("Por favor ingresa un nombre válido");
    return;
  }

  // Agregar al array
  listaAmigos.push(nuevoAmigo);

  // Crear <li> y agregar al <ul>
  const li = document.createElement("li");
  li.textContent = nuevoAmigo;
  listaElement.appendChild(li);

  // Limpiar input
  input.value = '';

  console.log(listaAmigos);
}

function sortearAmigo() {
  const resultadoElement = document.getElementById('resultado');

  if (listaAmigos.length === 0) {
    alert("No hay nombres para sortear");
    return;
  }

  // Limpiar resultados anteriores
  resultadoElement.innerHTML = "";

  // Sorteo aleatorio
  const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[indiceAleatorio];

  // Mostrar resultado en la lista
  const li = document.createElement("li");
  li.textContent = "El amigo secreto es: " + amigoSorteado;
  resultadoElement.appendChild(li);

  console.log("Amigo sorteado: " + amigoSorteado);
}
