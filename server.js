import express from "express";
import conectarAoBanco from "./src/config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONEXAO)

// mock - se refere a objetos que simulam dados vindos da API.
// const posts = [
//     {
//         id: 1,
//         descricao: "Primeiro post",
//         imagem: "https://placecats.com/millie/300/150",
//     },
//     {
//         id: 2,
//         descricao: "Segundo post",
//         imagem: "https://placecats.com/2/300/150",
//     },
//     {
//         id: 3,
//         descricao: "Terceiro post",
//         imagem: "https://placecats.com/3/300/150",
//     },
//     {
//         id: 4,
//         descricao: "Quarto post",
//         imagem: "https://placecats.com/4/300/150",
//     },
//     {
//         id: 5,
//         descricao: "Quinto post",
//         imagem: "https://placecats.com/5/300/150",
//     },
//     {
//         id: 6,
//         descricao: "Sexto post",
//         imagem: "https://placecats.com/6/300/150",
//     }
// ];

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

async function getTodosPosts(){
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.find().toArray();
}

app.get("/posts", async(request, response) => {
    const resultadoPosts = await getTodosPosts();
    response.status(200).json(resultadoPosts);
});

// const buscarPostPorID = (id) => {
//     return posts.findIndex((post) => {
//         return post.id === Number(id);
//     });
// }

// app.get("/posts/:id", (request, response) => {
//     const index = buscarPostPorID(request.params.id);
//     response.status(200).json(posts[index]);
// });