const https = require("https");
const fs = require("fs");
const express = require("express");

const app = express();
app.use(express.static(__dirname + "/public"));

const PORT = 3000;
const API_URL = "https://mindicador.cl/api";

// localhost:3000

https
  .get(API_URL, (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
      //   console.log("Chunk: " + chunk);
    });
    resp.on("end", () => {
      //   console.log("data: ", JSON.parse(data));
      respuesta = JSON.parse(data);
      console.log(respuesta.uf.valor);
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

app.get("/", (req, res) => {
  res.send("index.html");
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto: ${PORT}`);
});
