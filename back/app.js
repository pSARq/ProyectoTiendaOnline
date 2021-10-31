const { response } = require("express");
const cors = require("cors");
const express = require("express");
const app = express();
const mysql = require("mysql2/promise");
const port = 3001;
const bluebird = require("bluebird");

let connection;

app.use(express.json());
app.use(cors({ origin: true }));

//PRODUCTOS

app.get("/get-productos", async (request, response) => {
  const [rows, fields] = await connection.execute("SELECT * FROM productos");
  console.log({ data: rows });
  response.json({ data: rows });
});

app.post("/add-producto", async (req, res) => {
  try {
    const { nombre, valorUnitario, estado, descripcion } = req.body;
    await connection.execute(
      `INSERT INTO productos (nombre, valorUnitario, estado, descripcion) VALUES ('${nombre}', ${valorUnitario}, '${estado}', '${descripcion}')`
    );
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.put("/update-producto", async (req, res) => {
  try {
    const idProducto = req.body.idProducto;
    const { nombre, valorUnitario, estado, descripcion } = req.body;
    await connection.execute(
      `UPDATE productos SET nombre='${nombre}', valorUnitario=${valorUnitario}, estado='${estado}', descripcion='${descripcion}' WHERE idProducto = ${idProducto}`
    );
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.delete("/delete-producto", async (req, res) => {
  try {
    const idProducto = req.body.idProducto;
    await connection.execute(`DELETE FROM productos WHERE idProducto=${idProducto}`);
    res.json({ status: "ok" });
  } catch (error) {
      console.log(error);
    res.json(error);
  }
});

//VENTAS

app.get("/get-ventas", async (request, response) => {
  const [rows, fields] = await connection.execute("SELECT * FROM ventas");
  console.log({ data: rows });
  response.json({ data: rows });
});

app.post("/hacer-pedido", async (req, res) => {
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

app.put("/update-venta", async (req, res) => {
  try {
    const id = req.body.id;
    const { fecha, id_producto, n_producto, precio_unitario, cantidad, total, n_comprador, a_comprador, n_vendedor, a_vendedor, id_comprador, id_vendedor} = req.body;
    await connection.execute(
      `UPDATE ventas SET fecha='${fecha}', id_producto=${id_producto}, n_producto='${n_producto}', precio_unitario=${precio_unitario}, cantidad=${cantidad}, total=${total}, n_comprador='${n_comprador}', a_comprador='${a_comprador}', n_vendedor='${n_vendedor}', a_vendedor='${a_vendedor}', id_comprador=${id_comprador}, id_vendedor=${id_vendedor}, id_producto=${id_producto} WHERE id=${id}`
    );
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
});

app.delete("/delete-venta", async (req, res) => {
  try {
    const id = req.body.id;
    await connection.execute(`DELETE FROM ventas WHERE id=${id}`);
    res.json({ status: "ok" });
  } catch (error) {
      console.log(error);
    res.json(error);
  }
});

//USUARIOS

app.get("/get-user", async (req,res) =>{
  const email = req.query.email;
  const [rows, fields] = await connection.execute(`SELECT * FROM user where email='${email}'`);
  res.json(rows[0])
})

app.listen(port, async () => {
  connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "shop",
    Promise: bluebird,
  });
  console.log("Server running on port: " + port);
});
