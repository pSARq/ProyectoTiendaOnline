import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Forbiden from "../shared/forbiden/forbiden";

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [validUsuario, setValidUsuario] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const validatedUsuario = async () => {
    const response = await fetch(`http://localhost:3001/get-userio?mail=${user.email}`);
    const jsonResponse = await response.json();
    return jsonResponse;
  };
  const grantAccess = async () => {
    let usuarioData;
    if (isAuthenticated) {
      usuarioData = await validatedUsuario();
    } else {
      setValidUsuario(false);
      return;
    }

    if (usuarioData) {
      if (usuarioData.rol != "Pendiente") {
        setValidUsuario(true)
        
      } else {
        setValidUsuario(false);
      }
    } else {
      setValidUsuario(false);
    }
  };

  useEffect(() => {
    grantAccess()
  axios.get(`http://localhost:3001/get-usuarios`).then((res) => {
      const usuarios = res.data.data;
      console.log(usuarios);

      const listausuarios = usuarios.map((usuario) => (
        <tr>
          <td>{usuario.identificador}</td>
          <td>{usuario.nombre}</td>
          <td>{usuario.rol}</td>
          <td>{usuario.estado}</td>
        </tr>
      ));

      setUsuarios(listausuarios);
    });
  }, [setUsuarios]);
  return (
    <Fragment>
      <div>
        <h1>Usuario</h1>
        <p className="texto"> Búsqueda de usuario:</p>
        <input
          type="search"
          name="busquedausuario"
          placeholder="identificación"
        ></input>
        <input type="submit" value="Buscar"></input>
      </div>

      <div>
        {validUsuario ? (
          <table border class="tabla">
            <tr>
              <th>Identificador</th>
              <th>Nombre</th>
              <th>Rol</th>
              <th>Estado</th>
            </tr>
            <tr>{usuarios}</tr>
          </table>
        ) : (
          <Forbiden></Forbiden>
        )}
      </div>

      <div>
        <h2>Editar Usuario</h2>
        <div>
          <p class="texto">
            Identificación:{" "}
            <input
              type="text"
              name="identificación"
              placeholder="Identificación"
            />
          </p>
          <p class="texto">
            Estado:{" "}
            <input type="text" name="nombre" placeholder="Estado"></input>
          </p>
          <p class="texto">
            Rol: <input type="text" name="rol" placeholder="Rol" />
          </p>
        </div>

        <input type="submit" value="Enviar" />
      </div>
    </Fragment>
  );
}
