const fs = require("fs");

// parte 1
const arg = process.argv.slice(2);
let nombre = String(arg[0]);
let ext = String(arg[1]);
let tipo = String(arg[2]);
let monto = Number(arg[3]);
let resultado = 0;
// node index.js cambio txt dolar 25000

// process.on("message", (message) => {
//   resultado = calcular(message.number);
//   console.log(resultado);
//   process.send(resultado);
//   process.exit();
// });

// function calcular(number) {
//   resultado = monto / number;
//   return resultado;
// }

resultado = monto / dolar;

let template = `
A la fecha: por aca
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${monto} pesos
Convertido a ${tipo} da un total de:
${resultado}
`;

fs.writeFile(`${nombre}.${ext}`, template, "utf-8", () => {
  console.log("Archivo creado con éxito");
});
