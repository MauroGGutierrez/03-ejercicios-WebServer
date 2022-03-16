var http = require("http");
var fs = require("fs");
const beatles = require("./beatles");

http
  .createServer(function (req, res) {
    if (req.url === "/") {
      //Si la URL es / devolvemos el HTML
      res.writeHead(200, { "Content-Type": "text/html" });
      var html = fs.readFileSync(__dirname + "/index.html");
      res.end(html);
    } else if (req.url === "/api") {
      //Si la URL es /arcoiris_doge devolvemos la imagen
      res.writeHead(200, { "Content-Type": "text/json" });
      var api = fs.readFileSync(__dirname + "/beatles.js");
      res.end(api);
    } else if (req.url === "/api/JohnLennon") {
      //Si la URL es /arcoiris_doge devolvemos la imagen
      res.writeHead(200, { "Content-Type": "text/json" });
      var btl1 = fs.readFileSync(__dirname + beatles[1]);
      res.end(btl1);
    } else {
      res.writeHead(404); //Ponemos el status del response a 404: Not Found
      res.end(); //No devolvemos nada más que el estado.
    }
  })
  .listen(1337, "127.0.0.1");
