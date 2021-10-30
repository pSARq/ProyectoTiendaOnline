import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router';
import ForbidenComponent from '../shared/components/forbiden/ForbidenComponent';


function ListaProductos() {
    const [elemento, setElementos] = useState([]);
    const getElementos = async () => {
        try {
            const respnse = await fetch("http://localhost:3001/get-listadeproductos");
            const JsonRespnse = await respnse.json();
            const responseElementos = JsonRespnse.data;
            const listElementos = responseElementos.map((elemento) =>
                <tr>
                    <th scope="row">{elemento.id}</th>
                    <td>{elemento.nombre}</td>
                    <td>{elemento.preciounitario}</td>
                    <td>{elemento.stock}</td>
                    <td>{elemento.estado}</td>
                    <td>{elemento.descripcion}</td>
                    
                </tr>
            );
            setElementos(listElementos)
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getElementos();

    }, []); 

    return (
        <div className="container">
            <table class="table">
                <thead>
                   
                    <tr>
                        
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">PRECIO UNITARIO</th>
                        <th scope="col">STOCK</th>
                        <th scope="col">ESTADO</th>
                        <th scope="col">DESCRIPCION</th>
                    </tr>
                </thead>
                <tbody>
                    {elemento}
                </tbody>
            </table>
        </div>
    )
}

export default ListaProductos;
