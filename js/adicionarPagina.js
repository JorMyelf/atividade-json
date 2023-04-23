const botao = document.querySelector("#botao");
const form = document.querySelector("#registroPagina");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const tituloPrincipal = document.querySelector("#tituloprincipal").value;
	const titulo = document.querySelector("#titulo").value;
	const logo = document.querySelector("#logo").value;
	const subtitulo = document.querySelector("#subtitulo").value;

	const dados = {
		tituloPrincipal: tituloPrincipal,
		titulo: titulo,
		logo: logo,
		subtitulo: subtitulo,
	};
	const jsonDados = JSON.stringify(dados);
	fetch("http://localhost:3000/", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: jsonDados,
	})
		.then((response) => {
			console.log("Dados enviados com sucesso!");
		})
		.catch((error) => {
			console.error("Erro ao enviar dados:", error);
		});
});
