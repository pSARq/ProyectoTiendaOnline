const { request } = require('express');
const express=require('express'); //no se cual es la diferencia con el de arriba
const app=express(); /// crea la app
const mysql = require('mysql2/promise');
const bluebird=require("bluebird");
const port=3001; //define el puerto
let connection //define una variable para la conexión

//configura el servidor para recibir daros en formato json
app.use(express.json());// en link que mando el tutor esta como body.parte no se que es eso

app.get("/get-product", function getProducto(request, response){
response.send("Todo ok");
})

app.post("/add-product",(request, response)=>{
    const product=request.body;
    console.log(product.nombre)
    response.json(product)
})

app.put("/update-product",(request, response)=>{
    const product=request.body;
    console.log(product.nombre)
    response.json(product)
})
app.delete("/delete-product",(request, response)=>{
    const product=request.body;
    console.log(product.nombre)
    response.json(product)
})


app.put("/edit-valor",async(request,response)=>{
    const producto=request.body;
    const valor =producto.valor;
    const identificador =producto.identificador;
    await connection.execute(`update  productos set valor=${valor} WHERE Identificador =${identificador}`;
    response.json(producto);
})
app.put("/edit-estado",async(request,response)=>{
    const producto=request.body;
    const estado =producto.estado;
    const identificador =producto.identificador;
    await connection.execute(`update  productos set estado=${estado} WHERE Identificador =${identificador}`)
    response.json(producto);
})
app.put("/edit-descripcion",async(request,response)=>{
    const producto=request.body;
    const descripcion =producto.descripcion;
    const identificador =producto.identificador;
    await connection.execute(`update  productos set valor=${descripcion} WHERE Identificador =${identificador}`);
    console.log(producto.descripcion);
    response.json(producto);
})



app.listen(port, async()=>{
    connection = await mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'MYSQL',
        database : 'misticbd',
        promise : bluebird,
      });
    console.log("servir running on port "+port)


});



