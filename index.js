const https = require("https");
const { spawn } = require("child_process");

const API_URL = "https://mindicador.cl/api";

// parte 1
const arg = process.argv.slice(2);
let nombre = String(arg[0]);
let ext = String(arg[1]);
let tipo = String(arg[2]);
let monto = Number(arg[3]);
// node index.js cambio txt dolar 25000

// parte 2

let uf,
  ivp,
  dolar,
  dolar_intercambio,
  euro,
  ipc,
  imacec,
  tpm,
  libra_cobre,
  tasa_desempleo,
  bitcoin = 0;

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
      uf = respuesta.uf.valor;
      ivp = respuesta.ivp.valor;
      dolar = respuesta.dolar.valor;
      dolar_intercambio = respuesta.dolar_intercambio.valor;
      euro = respuesta.euro.valor;
      imacec = respuesta.imacec.valor;
      ipc = respuesta.ipc.valor;
      tpm = respuesta.tpm.valor;
      libra_cobre = respuesta.libra_cobre.valor;
      tasa_desempleo = respuesta.tasa_desempleo.valor;
      bitcoin = respuesta.bitcoin.valor;
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

// Parte 3

// const childProcess = fork("./crear.js");
// childProcess.send({ number: dolar });

const child = spawn("node", ["crear.js", nombre, ext, tipo, monto, dolar]);

child.stdout.on("data", (data) => {
  console.log(`El contenido del archivo es:\n\n${data}`);
});

child.stderr.on("data", (data) => {
  console.error(`Error: ${data}`);
});
