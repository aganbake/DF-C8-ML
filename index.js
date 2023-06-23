const { spawn } = require("child_process");
const https = require("https");

const API_URL = "https://mindicador.cl/api";

// parte 1
const arg = process.argv.slice(2);
let nombre = String(arg[0]);
let ext = String(arg[1]);
let tipo = String(arg[2]);
let monto = Number(arg[3]);
// node index.js cambio txt dolar 25000

// parte 2
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
      //   console.log(respuesta.uf.valor);
      let resultado = monto / respuesta[tipo].valor;
      let fecha = respuesta[tipo].fecha;
      //parte 4
      const child = spawn("node", [
        "crear.js",
        nombre,
        ext,
        tipo,
        monto,
        resultado,
        fecha,
      ]);
      child.stdout.on("data", (data) => {
        console.log(`${data}`);
      });

      child.stderr.on("data", (data) => {
        console.error(`Error: ${data}`);
      });
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
