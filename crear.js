const fs = require("fs");

// parte 1
const arg = process.argv.slice(2);
let nombre = String(arg[0]);
let ext = String(arg[1]);
let tipo = String(arg[2]);
let monto = Number(arg[3]);
let resultado = Number(arg[4]);
let fecha = Date(arg[5]);

let template = `
A la fecha: ${fecha}
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${monto} pesos
Convertido a ${tipo} da un total de:
${resultado}
`;

fs.writeFile(`${nombre}.${ext}`, template, "utf-8", () => {
  console.log("Archivo creado con éxito: ", template);
});
