import {getTodosPosts, criarPost} from "../models/postsModel.js";

export async function listarPosts(request, response) {
    const resultadoPosts = await getTodosPosts();
    response.status(200).json(resultadoPosts);
}

export async function postarNovoPost(request, response) {
    const novoPost = request.body;
    // tentar
    try {
        const postCriado = await criarPost(novoPost);
        response.status(200).json(postCriado);
    }
    // pegar erro
    catch (erro) {
        console.error("Erro:" + erro.message);
        response.status(500).json({ "Erro": "Falha na requisição" });
    }
}