import React, { Fragment, useState } from 'react';
import MensajeEditadoExito from './MensajeEditadoExito';

function UsuariosPage() {
    const usuarios = [{ nombre: "Juan Perez", id:1 }, { nombre: "María ", id:2 }]
    const [showMsg, setShowMsg] = useState(false);
    function updateData() {
        //    setShowMsg(true)
        alert("Edición Exitosa");
    }
    return (
        <div>
            <Fragment>
                <h1>Usuarios</h1>
                <div class="accordion accordion-flush" id="accordionFlushExample">
                    <div class="accordion-item">

                        {usuarios.map((usuario) => {
                            return (
                                <div>
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#flush-collapseOne"+usuario.id} aria-expanded="false" aria-controls="flush-collapseOne">
                                        {usuario.nombre}
                                    </button>
                                </h2>
                                <div id={"flush-collapseOne"+usuario.id} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Identificador</th>
                                                <th scope="col">Rol</th>
                                                <th scope="col">Estado</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>0001</td>
                                                <td><select class="form-select" aria-label="Default select example">
                                                    <option selected>Administrador</option>
                                                    <option value="1">Vendedor</option>
                                                </select></td>
                                                <td>
                                                    <select class="form-select" aria-label="Default select example">
                                                        <option selected>Pendiente</option>
                                                        <option value="1">Autorizado</option>
                                                        <option value="2">No Autorizado</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <code><button type="button" class="btn btn-outline-primary" onClick={updateData}>Guardar</button></code>
                                </div>
                            </div>
                            </div>
                            )
                        })}







                </div>
                </div>
                



            </Fragment>
            {(showMsg) && <MensajeEditadoExito />}
        </div>

    )
}
export default UsuariosPage;