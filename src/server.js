require("dotenv").config();
const express=require("express");
const {version} = require("./service/version");
const cors = require("cors"); 
const {json, urlencoded} = require("body-parser");

const app = express();
//config de nuestro servicio

const port = process.env.API_PORT || 3000;
app.use(cors());
app.use(urlencoded({extended:false}));
app.use(json());

/*
Tipos de peticiones del protocolo http
PUT actualizaciones
POST inserciones
DELETE eliminacion
GET enlistar  obtener
OPTION configurar

*/

app.get("/",version);
console.log("{port}:",port);
app.listen(port); 
