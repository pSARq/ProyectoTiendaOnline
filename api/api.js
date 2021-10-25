const express = require('express');
const cors = require('cors')
const api = express();
const mysql = require('mysql2/promise');
const port = 5000;
const bluebird = require('bluebird');

let connection; // variable para almacenar la conexión a la DB


// configura el servidor para recibir datos en formato json

api.use(express.json());
api.use(cors({origin: true}));

api.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM products");
    response.json({data: rows});
})

api.get("/get-user", async (req,res) =>{
    const email = req.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM user where email='${email}'`);
    res.json(rows[0])
})

api.post("/hacer-pedido", async (req, res) => {
    const pedidos = req.body;
    const fecha = pedidos.fecha;
    const pedido = pedidos.pedido;
    const n_vendedor = pedidos.n_vendedor;
    const n_comprador = pedidos.n_comprador;
    const a_comprador = pedidos.a_comprador;
    const d_comprador = pedidos.d_comprador;

    await connection.execute(`INSERT INTO pedidos(fecha, pedido, n_vendedor, n_comprador, a_comprador, d_comprador) VALUES('${fecha}','${pedido}', '${n_vendedor}', '${n_comprador}', '${a_comprador}', '${d_comprador}' )`);

    res.json(pedidos);

})

api.post("/agregar-producto", async (req, res) => {
    
    const producto = req.body;
    const nombre = producto.nombre;
    const precio = producto.precio;
    const stock = producto.stock;
    const descripcion = producto.descripcion;

    
    await connection.execute(`INSERT INTO productos (nombre, precio, stock, descripcion) VALUES('${nombre}',${precio}, ${stock}, '${descripcion}')`);
    
    res.json(producto)
})
api.post("/agregar-pedido", async(req, res)=>{
    const pedido = req.body;
    const fecha = pedido.fecha;
    const productos = pedido.productos;
    const total = pedido.total;
    const nombre = pedido.nombre;
    const apellido = pedido.apellido;
    const documento = pedido.documento;

    await connection.execute(`INSERT INTO pedido (fecha, productos, total,nombre,apellido,documento) VALUES('${fecha}','${productos}',${total}, '${nombre}','${apellido}','${documento}')`);
    
    res.json(pedido)
})





api.listen(port, async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'shop',
        Promise: bluebird
    });
    console.log("servidor corriendo en puerto: " + port);
});