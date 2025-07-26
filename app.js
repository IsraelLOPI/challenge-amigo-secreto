//lista de amigos arreglo
let amigos = [];

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
//agregar amigo y valida si el campo no esta vacio
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombreAmigo = input.value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    // Verifica si el amigo ya está en la lista
    if (amigos.includes(nombreAmigo)) {
        alert("Este amigo ya está en la lista.");
        return;
    }

    amigos.push(nombreAmigo);
    input.value = ""; // Limpia el campo de entrada
    actualizarLista();
}

//sortear amigos 
function sortearAmigo() {
    const lista = document.getElementById("listaAmigos");
    const amigos = Array.from(lista.getElementsByTagName("li"));

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const ganador = amigos[Math.floor(Math.random() * amigos.length)];
    asignarTextoElemento('p', `El amigo seleccionado es: ${ganador.textContent}`);
}

//actualiza la lista de amigos
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpia la lista actual

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}


