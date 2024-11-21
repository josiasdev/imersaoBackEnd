import express from "express"
import { listarPosts, postarNovoPost } from "../controllers/postsController.js";

const routes = (app) => {
    // criar(post), ler(get), atualizar(put), deletar(delete);
    app.use(express.json());

    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
}

export default routes;