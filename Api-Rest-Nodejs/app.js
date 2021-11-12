const { request } = require('express');
const cors=require('cors')
const express=require('express'); //no se cual es la diferencia con el de arriba
const app=express(); /// crea la app
const mysql = require('mysql2/promise');
const bluebird=require("bluebird");
const port=3001; //define el puerto
let connection //define una variable para la conexión

//configura el servidor para recibir daros en formato json
app.use(express.json());// en link que mando el tutor esta como body.parte no se que es eso
app.use(cors({origin:true}))
app.set('port', process.env.PORT||port)

app.get("/", (req,res)=>{
    res.json("Backend MisionTic Shop")
})

app.get("/get-lista",  async(request, response)=>{
    const usuario=request.body
    const [rows,filds]=await connection.execute (`select * from usuarios`)
    response.json({data:rows});
})

app.post("/add-usuario", async(request,response)=>{
  const usuario=request.body
  const nombre=usuario.nombre
  const rol=usuario.rol
  const estado=usuario.estado
  const mail=usuario.mail
  await connection.execute(`insert into usuarios (nombre,rol,estado,mail) 
  value('${nombre}','${rol}','${estado}','${mail}')`)
  console.log(usuario)
  response.json(usuario)
})

app.get("/get-usuario",  async(request, response)=>{
    const usuario=request.query
    const identificador=usuario.identificador
    const[rows, field]=await connection.execute (`select * from usuarios WHERE identificador=${identificador}`)
console.log(identificador)
    response.json({data:rows});
})

app.put("/edit-rol",async(request,response)=>{
    const usuario=request.body;
    const rol =usuario.rol;
    const identificador =usuario.identificador;
    await connection.execute(`update usuarios set rol='${rol}' WHERE identificador=${identificador}`)
response.json(usuario);
})
app.put("/edit-estado",async(request,response)=>{
    const usuario=request.body;
    const estado=usuario.estado;
    const identificador =usuario.identificador;
    await connection.execute(`update usuarios set estado= '${estado}' WHERE Identificador= ${identificador}`)
response.json(usuario);
})


app.listen(app.get('port'), async()=>{
    connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'MYSQL',
        database : 'misticbd',
        promise : bluebird,
      });
    console.log("servir running on port "+port)


});