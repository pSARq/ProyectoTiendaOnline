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

app.get("/", (req,res)=>{
    res.json("prueba del backend remoto en heroku")
})

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

app.put("/update-editarusuario", async  (req, res) => {
    try {
        const id = req.body.id;
        const { nombre, apellido, email, cedula, contraseña, rol, estado } = req.body;
        await connection.execute(`UPDATE registro SET nombre='${nombre}', apellido='${apellido}', email='${email}', cedula='${cedula}',contraseña='${contraseña}',rol='${rol}',estado='${estado}' WHERE id = ${id}`);
        res.json({ status: "ok" })
    } 
    catch (error) {
        console.log(error);
        res.json(error)
    }
});


 
app.delete("/delete-eliminarusuario", async (req, res) => {
    try {
        const {id } = req.body;
        await connection.execute(`DELETE FROM registro WHERE id=${id}`);
        res.json({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.json(error);
    }
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
        await connection.execute(`INSERT INTO productos (nombre, preciounitario, estado,descripcion) VALUES('${nombre}',${preciounitario}, '${estado}','${descripcion}')`);
        res.json({ status: "ok" })
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})


app.put("/update-producto", async (req, res) => {
    try {
        const id = req.body.id;
        const { nombre, preciounitario, estado, descripcion } = req.body;
        await connection.execute(
            `UPDATE productos SET nombre='${nombre}', precioUnitario=${preciounitario}, estado='${estado}', descripcion='${descripcion}' WHERE id = ${id}`
        );
        res.json({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});

app.delete("/delete-producto", async (req, res) => {
    try {
        const id = req.body.id;
        await connection.execute(`DELETE FROM productos WHERE id=${id}`);
        res.json({ status: "ok" });
    } catch (error) {
        console.log(error);
        res.json(error);
    }
});



// --- fin productos---//

//---- VENTAS-----//
app.post("/add-venta", async (req, res) => {
    try {
        const { factura, cedula,  estado, descripcion } = req.body;
        await connection.execute(`INSERT INTO ventas (factura, cedula, estado,descripcion) VALUES('${factura}',${cedula}, '${estado}','${descripcion}')`);
        res.json({ status: "ok" })
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }
})

app.get("/get-listadeventas", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM ventas");
    console.log({ data: rows })
    response.json({ data: rows });
})

//--- fin Ventas----///


app.listen(app.get('port'), async () => {
    connection = await mysql.createConnection({

        // host: 'localhost',
        // user: 'root',
        // password: 'MYSQL',
        // database: 'misticbd',

        host:'sql10.freesqldatabase.com',
        user: 'sql10451143',
        password:'Y1Mkn4qTy6',
        database:'sql10451143',
        port: 3306, 
        Promise: bluebierd,

    });
    console.log("Server running on port " + app.get('port'));
});
