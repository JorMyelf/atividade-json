import express from "express";
import pagina from "../controller/controller.js";
const router = express.Router();

router.get("/", pagina.getPage).post("/", pagina.postPage);

export default router;
