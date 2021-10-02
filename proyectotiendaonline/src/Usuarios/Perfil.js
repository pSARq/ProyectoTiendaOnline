import React, { Fragment, useState } from 'react';
import MensajeEditadoExito from './MensajeEditadoExito';

function Perfil() {

    return (

        <Fragment>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Rol</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">0001</th>
                        <td>Juan Perez</td>
                        <td>Administrador</td>
                        <td>Autorizado</td>
                    </tr>

                </tbody>
            </table>


        </Fragment>


    )
}
export default Perfil;