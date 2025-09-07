 // El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.
//  Aquí deberás desarrollar la lógica para resolver el problema.


//Crear lista para contener los nombres

let listaAmigo = [];

//Agrega a un nuevo amigo secreto
function agregarAmigo() {
  let AgregarNombre = document.getElementById("amigo").value;

  if (AgregarNombre.trim() === "") {
    alert("Por favor, inserte un nombre");
  } else if (listaAmigo.includes(AgregarNombre)){
    alert("Este nombre ya ha sido ingresado")
  }
  else {
    listaAmigo.push(AgregarNombre);
    document.querySelector("#amigo").value = "";
    mostrarAmigo();
  }
}

// Actualiza la vista del listado de amigos.
 
function mostrarAmigo() {
  let listaDeAmigos = document.querySelector("#listaAmigos");
  listaDeAmigos.innerHTML = "";// Limpiar la lista antes de actualizarla

   listaAmigo.forEach(function(element) {

    let listaHTML = document.createElement("li");
    listaHTML.textContent = element;
    listaDeAmigos.appendChild(listaHTML);
  });
}

//Sortea y muestra un amigo de la lista de amigos de manera aleatoria.
 //Verifica que la lista no esté vacía antes de realizar el sorteo.
 
function sortearAmigo() {
  let cantidadAmigo = listaAmigo.length;
  if (cantidadAmigo < 2) {
    alert("Por favor, para iniciar el sorteo debe de haber al menos dos nombres en la lista.");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigo);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = listaAmigo[indiceAmigo];
  }
}