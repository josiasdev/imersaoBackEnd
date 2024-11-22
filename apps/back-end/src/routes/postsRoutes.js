import express from "express"
import multer from "multer";
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}


// Windows
// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'uploads/');
//     },
//     filename: function (req, file, cb) {
//         cb(null, file.originalname);
//     }
// })
// const upload = multer({ dest: "./uploads", storage});

// Linux
const upload = multer({ dest: "./uploads" });


const routes = (app) => {
    // criar(post), ler(get), atualizar(put), deletar(delete);
    app.use(express.json());
    app.use(cors(corsOptions));

    // Rota para buscar todos os posts
    app.get("/posts", listarPosts);
    // Rota para criar um post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
    
    app.put("/upload/:id", atualizarNovoPost);
}

export default routes;