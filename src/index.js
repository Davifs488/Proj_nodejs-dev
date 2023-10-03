//Servidor espress
//Importando
const express = require("express");
const path = require("path");

//Trabalhando com express
const app = express();
const router = express.Router();

//
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/home.html"));
});

//
//
router.get("/contato", (req, res) => {
  res.sendFile(path.join(__dirname + "/pages/contato.html"));
});

//
app.use(router);

//
app.listen(3333, () => {
  console.log("Servidor rodando");
});

//
//
//

/*

//Construindo um Criente/servidor http
const http = require("http");
//

//porta e mascar do ip
const hostname = "localhost";
const port = 3333;
//

//Requizições e respostas
//
const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  res.end("Deus e Maravilhoso");
});

//
//Escutador
server.listen(port, hostname, () => {
  console.log("SEVIDOR RODANDO");
});
       */
