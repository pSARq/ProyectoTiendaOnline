const { response } = require("express");
const cors =require('cors')
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql=require('mysql2/promise')
const port = 3001;
const bluebird = require('bluebird');

let connection;



app.use(express.urlencoded({extended: false})) // agregamos metodos para parsera url
app.use(express.json()) 
app.use(cors({origin:true}))

app.get("/get-usuarios", async(request, response) => {
  const[rows,fields]=await connection.execute("select*from usuarios")
  console.log(rows)
  //console.log(fields)
  response.send({data:rows});
});

app.get("/get-usuario", async(request, response) => {
  const usuario=request.query
  const mail=usuario.mail
  const[rows,fields]=await connection.execute(`select*from usuarios where mail="${mail}"`)
  response.json(rows[0])

});

app.post("/add-usuario", async(request, response) => {
  const usuario=request.body
  const identificador=usuario.identificador
  const nombre=usuario.nombre
  const rol=usuario.rol
  const estado=usuario.estado
  const mail=usuario.mail
  await connection.execute(`INSERT INTO usuarios(identificador,nombre,rol,estado,mail)values(${identificador},"${nombre}","${rol}","${estado}","${mail}")`)
  response.json(request.body);
});

app.put("/edit-rol", async(request,response)=>{
  const usuario=request.body
  const identificador=usuario.identificador
  const rol=usuario.rol
  await connection.execute(`update usuarios set rol='${rol}' WHERE identificador=${identificador}`)
  console.log(usuario.rol)
  //response.status(200).send("cualquier cosa")
  response.json(usuario.rol)
})

app.put("/edit-estado", async(request,response)=>{
  const usuario=request.body
  const identificador=usuario.identificador
  const estado=usuario.estado
  await connection.execute(`update usuarios set estado='${estado}' WHERE identificador=${identificador}`)
  console.log(usuario.estado)
  //response.status(200).send("cualquier cosa")
  response.json(usuario.estado)
})

app.listen(port, async()=> {
  connection=await mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"MYSQL",
    database:"misticbd",
    promise:"bluebird"
  });
  console.log("server running on port" + port);
});
