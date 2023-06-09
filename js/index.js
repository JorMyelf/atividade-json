const titulo = document.querySelector("#titulo");
const subtitulo = document.querySelector("#subtitulo");
const logo = document.querySelector("#logo");
const tituloPrincipal = document.querySelector("#titulo-principal");

logo.addEventListener("click", () => {
	fetch("../data/dados.json")
		.then((response) => response.json())
		.then((data) => {
			const view = data.logo.length - 1;
			trocaPagina(view, data);
		})
		.catch((error) => {
			console.error("Erro ao buscar dados do arquivo JSON", error);
		});
});

function trocaPagina(view, data) {
	titulo.innerText = data.titulo[view];
	subtitulo.innerText = data.subtitulo[view];
	logo.innerText = data.logo[view];
	tituloPrincipal.innerText = data.tituloPrincipal[view];
}
