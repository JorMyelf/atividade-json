const response = await fetch("../data/dados.json");
const data = await response.json();

let troca = 1;

const titulo = document.querySelector("#titulo");
const subtitulo = document.querySelector("#subtitulo");
const logo = document.querySelector("#logo");
const tituloPrincipal = document.querySelector("#titulo-principal");

function trocaPagina(view) {
	titulo.innerText = data.titulo[view];
	subtitulo.innerText = data.subtitulo[view];
	logo.innerText = data.logo[view];
	tituloPrincipal.innerText = data.tituloPrincipal[view];
}
trocaPagina(troca);
