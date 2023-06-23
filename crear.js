const fs = require("fs");

let data = `
A la fecha: ${fecha}
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${pesos} pesos
Convertido a ${moneda} da un total de:
${resultados}
`;

fs.writeFile("cambio.txt", data, "utf-8", () => {
  console.log("Archivo creado con éxito");
});
