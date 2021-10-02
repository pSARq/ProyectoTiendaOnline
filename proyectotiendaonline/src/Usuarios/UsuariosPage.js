import React, { Fragment, useState } from 'react';
import MensajeEditadoExito from './MensajeEditadoExito';

function UsuariosPage() {
    const[showMsg,setShowMsg]=useState(false);
    function updateData(){
    //    setShowMsg(true)
        alert("Edición Exitosa");
    }
    return ( 
        <div>
        <Fragment>
            <h1>Usuarios</h1>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Juan Perez
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
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
                            <code><button type="button" class="btn btn-outline-primary"onClick={updateData}>Guardar</button></code></div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            María Cano
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
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
                                        <td>0002</td>
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
                            <code><button type="button" class="btn btn-outline-primary" onClick={updateData}>Guardar</button></code></div>

                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            Luis Jaramillo
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
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
                                        <td>0003</td>
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
                            <code><button type="button" class="btn btn-outline-primary"onClick={updateData}>Guardar</button></code></div>


                    </div>
                </div>

            </div>



        </Fragment>
        {(showMsg) && <MensajeEditadoExito/>}
                    </div>
    
    )
}
export default UsuariosPage;