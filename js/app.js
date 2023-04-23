import express from "express";
import cors from "cors";
import routes from "./rotas/index.js";

const app = express();

app.use(express.json());
app.use(cors()); // Adiciona cabeçalhos CORS a todas as respostas
routes(app);

export default app;
