import fs from "fs";
import path from "path";

const __dirname = path.resolve(path.dirname(""));
const caminhoArquivo = path.join(__dirname, "data", "dados.json");

class pagina {
	static getPage = (req, res) => {
		res.send("renato te amo");
	};
	static postPage = (req, res) => {
		const db = JSON.parse(fs.readFileSync(caminhoArquivo, "utf-8"));
		const { tituloPrincipal, titulo, subtitulo, logo } = req.body;

		db.tituloPrincipal = db.tituloPrincipal.concat(tituloPrincipal);
		db.titulo = db.titulo.concat(titulo);
		db.subtitulo = db.subtitulo.concat(subtitulo);
		db.logo = db.logo.concat(logo);

		fs.writeFileSync(caminhoArquivo, JSON.stringify(db, null, 2));

		res.status(200).send("Dados adicionados com sucesso!");
	};
}

export default pagina;
