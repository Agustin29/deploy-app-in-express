const express = require("express");
const history = require("connect-history-api-fallback");
const path = require("path");
const app = express();

app.use(history());

/* HACEMOS REFERENCIA A LA CARPETA CREADA Y COPIARA EN EL ROOT DE ESTE SERVIDOR */
app.use(express.static(path.join(__dirname, "./dist")));

const hostname = process.env.HOST || ""; //AQUI COLOCA EL IP DEL SERVIDOR AL CUAL QUIERE QUE ACCEDAN LOS USUARIOS A LA APP.

/* AQUI COLOQUE EL PUERTO EL CUAL DESEA QUE LA APLICACION UTILICE, 
  RECUERDE CAMBIAR O AUMENTAR EL NÚMERO A MEDIDA QUE CREA APLICACIONES.
*/
const port = process.env.PORT || 5000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
