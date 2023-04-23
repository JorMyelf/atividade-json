import express from "express";
import router from "./rotas.js";
const routes = (app) => {
	app.route("/").get((req, res) => {
		res.send("Olá, mundo!");
	});
	app.use(express.json());
	app.use(router);
};

export default routes;
