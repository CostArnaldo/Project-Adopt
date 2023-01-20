import express from 'express';
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from "../src/routes/routes";

dotenv.config();

const server= express();

server.set("views engine", "mustache");
server.engine("mustache", mustache());
server.set("views", path.join(__dirname, "views"));
server.use(express.static(path.join(__dirname, "../public")));
server.use(mainRoutes);
server.use((req, res)=>{
    res.send("Página não encontrada")
})

server.listen(process.env.PORT);

