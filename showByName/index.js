var http = require("http");
var fs = require("fs");
const url = require("url");

// // Escribí acá tu servidor
http
  .createServer(function (req, res) {
    if (req.url === "/") {
      //Si la URL es / devolvemos el HTML
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/html/index.html");
      res.end(html);
    } else if (req.url === "/arcoiris_doge") {
      //Si la URL es /arcoiris_doge devolvemos la imagen
      res.writeHead(200, { "Content-Type": "image/jpg" });
      var img1 = fs.readFileSync(__dirname + "/images/arcoiris_doge.jpg");
      res.end(img1);
    } else if (req.url === "/badboy_doge") {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      var img2 = fs.readFileSync(__dirname + "/images/badboy_doge.jpg");
      res.end(img2);
    } else if (req.url === "/code_doge") {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      var img3 = fs.readFileSync(__dirname + "/images/code_doge.jpg");
      res.end(img3);
    } else if (req.url === "/resaca_doge") {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      var img4 = fs.readFileSync(__dirname + "/images/resaca_doge.jpg");
      res.end(img4);
    } else if (req.url === "/retrato_doge") {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      var img5 = fs.readFileSync(__dirname + "/images/retrato_doge.jpg");
      res.end(img5);
    } else if (req.url === "/sexy_doge") {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      var img6 = fs.readFileSync(__dirname + "/images/sexy_doge.jpg");
      res.end(img6);
    } else {
      res.writeHead(404); //Ponemos el status del response a 404: Not Found
      res.end(); //No devolvemos nada más que el estado.
    }
  })
  .listen(1337, "127.0.0.1");

//------------PRACTICA
// http
//   .createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "image/jpg" });
//     var html = fs.readFileSync(__dirname + "/images/sexy_doge.jpg");
//     res.end(html);
//   })
//   .listen(1337, "127.0.0.1");
