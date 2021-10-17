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
