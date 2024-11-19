import express from "express";

// mock - se refere a objetos que simulam dados vindos da API.
const posts = [
    {
        id: 1,
        descricao: "Primeiro post",
        imagem: "https://placecats.com/millie/300/150",
    },
    {
        id: 2,
        descricao: "Segundo post",
        imagem: "https://placecats.com/2/300/150",
    },
    {
        id: 3,
        descricao: "Terceiro post",
        imagem: "https://placecats.com/3/300/150",
    },
    {
        id: 4,
        descricao: "Quarto post",
        imagem: "https://placecats.com/4/300/150",
    },
    {
        id: 5,
        descricao: "Quinto post",
        imagem: "https://placecats.com/5/300/150",
    },
    {
        id: 6,
        descricao: "Sexto post",
        imagem: "https://placecats.com/6/300/150",
    }
];

const app = express();

app.use(express.json());

app.listen(3001, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (request, response) => {
    response.status(200).json(posts);
});

const buscarPostPorID = (id) => {
    return posts.findIndex((post) => {
        return post.id === Number(id);
    });
}

app.get("/posts/:id", (request, response) => {
    const index = buscarPostPorID(request.params.id);
    response.status(200).json(posts[index]);
});