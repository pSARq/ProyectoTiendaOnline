const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001
const bluebierd = require('bluebird');
let connection; //variable para almacenar la conexion a la DB
// api creado por andersso hernandez//
//configura el servisor para recivir formato json//
app.use(express.json());
app.use(cors({ origin: true }));
/*rama main*/
app.set('port', process.env.PORT || port)

// inicio usuario

app.get("/get-buscarusuario", async (request, response) => {
    const email = request.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM registro where email='${email}'`);
    console.log(rows)
    response.json(rows[0])
})

app.get("/get-listadeusuario", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM registro");
    response.json({ data: rows });
})


/*http://localhost:3001/get-registrodeusuario?email=hernader@gmail.com*/

app.post("/add-registrodeusuario", async (req, res) => {

    try {
        const { nombre, apellido, email, cedula, contraseña, rol, estado } = req.body;
        await connection.execute(`INSERT INTO registro (nombre,apellido,email,cedula,contraseña,rol,estado) VALUES('${nombre}','${apellido}', '${email}','${cedula}','${contraseña}','${rol}','${estado}')`);
        res.json({ status: "ok" })
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
});

/* app.put("/update-editarusuario", (req, res) => {
    try {
        const idProducto = req.body.idProducto;
        const { nombre,apellido,email,cedula,contraseña,rol,estado } = req.body;
        await connection.execute(`UPDATE productos SET nombre='${nombre}', apellido='${apellido}', email='${email}', cedula='${cedula}',contraseña='${contraseña}',rol='${rol}',estado='${estado}' WHERE idProducto = ${idProducto}`);
        //await connection.execute(`INSERT INTO registro (nombre,apellido,email,cedula,contraseña,rol,estado) VALUES('${nombre}','${apellido}', '${email}','${cedula}','${contraseña}','${rol}','${estado}')`);
        
        res.json({ status: "ok" })
    } 
    catch (error) {
        console.log(error);
        res.json(error)
    }
}); */

app.delete("/delete-eliminarusuario", (req, res) => {
    const product = req.body;
    console.log(product.nombre)

    res.json(product);
})



// fin de usuario


// --- inicio productos---//

app.get("/get-listadeproductos", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM productos");
    console.log({ data: rows })
    response.json({ data: rows });
})
app.post("/add-listadeproductos", async (req, res) => {
    try {
        const { nombre, preciounitario, stock, estado, descripcion } = req.body;
        await connection.execute(`INSERT INTO productos (nombre, preciounitario, stock, estado,descripcion) VALUES('${nombre}',${preciounitario}, ${stock},'${estado}','${descripcion}')`);
        res.json({ status: "ok" })
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})
//inicio santiago  esto no se esta usando

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
//fin santiago


// --- fin productos---//


app.listen(app.get('port'), async () => {
    connection = await mysql.createConnection({

        host: 'localhost',
        user: 'root',
        password: 'Password',
        database: 'shop',

        /* host:'sql10.freesqldatabase.com',
        user: 'sql10446300',
        password:'yjDX4GnX4T',
        database:'sql10446300',
        port: 3306, */

        Promise: bluebierd,

    });
    console.log("Server running on port " + app.get('port'));
});
