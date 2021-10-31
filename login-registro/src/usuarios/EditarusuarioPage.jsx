import React, { Fragment, useState } from 'react';
import './registerStyles.css';
import logo from '../assets/img/logo.png';
import apiBseUrl from '../shared/utils/Api';

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [Lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [IDnumber, setIDnumber] = useState(0);
    const [password, setPassword] = useState("");
    const [rol, setRol] = useState("");
    const [state, setState] = useState("");

    const enviardatos = async () => {
        const elementos = {
            "nombre": name,
            "apellido": Lastname,
            "email": email,
            "cedula": IDnumber,
            "contraseña": password,
            "rol": rol,
            "estado": state
        };
        const response = await fetch(`${apiBseUrl}/update-editarusuario`, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(elementos),
        });
        const jsonResponse = await response.json();


        document.getElementById("newForm").reset();
        alert("Edicion realizada con exito")
    }

    return (
        <Fragment >
            <section className="form-registro">

                <img src={logo} alt="" />

                <h5>Edicion de Registo</h5>
                <form id="newForm">
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="Id usuario"
                            disabled="disabled" /* onChange={(dataname) => setName(dataname.target.value)} */ />
                        <label for="floatingFName">Id ususario</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName"                             placeholder="First name"
                            onChange={(dataname) => setName(dataname.target.value)} />
                        <label for="floatingFName">First name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingName" placeholder="Last name"
                            onChange={(dataLastname) => setLastname(dataLastname.target.value)} />
                        <label for="floatingLName">Last name</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                            onChange={(dataemail) => setEmail(dataemail.target.value)} />
                        <label for="floatingInput">Email address</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingIDnumber" placeholder="ID"
                            onChange={(dataIDnumber) => setIDnumber(dataIDnumber.target.value)} />
                        <label for="floatingID">ID number</label>
                    </div>

                    {/* <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(datapassword) => setPassword(datapassword.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div> */}

                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingRol" placeholder="Rol"
                            onChange={(datarol) => setRol(datarol.target.value)} />
                        <label for="floatingPassword">Rol</label>
                    </div>
                    
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="floatingState" placeholder="Estado"
                            onChange={(datastate) => setState(datastate.target.value)} />
                        <label for="floatingState">Estado</label>
                    </div>




                    <div>

                        <button type="button" class="btn btn-primary" onClick={enviardatos} >GUARDAR CAMBIOS</button>
                    </div>

                </form>

            </section>
        </Fragment >
    )
}
export default RegisterPage;