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

    const enviardatos = async () => {
        const elementos = {
            "nombre": name,
            "apellido": Lastname,
            "email": email,
            "cedula": IDnumber,
            "contraseña": password,
            "rol": "",
            "estado": "pendiente"
        };
        const response = await fetch(`${apiBseUrl}/add-registrodeusuario`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(elementos),
        });
        const jsonResponse = await response.json();


        document.getElementById("newForm").reset();
    }

    /* const cancelCourse = () => { 
        document.getElementById("create-course-form").reset();
      }

 */



    return (
        <Fragment >
            <section className="form-registro">

                <img src={logo} alt="" />

                <h5>Formulario Registo</h5>
                <form id="newForm">
                    <div class="form-floating mb-3">
                        <input type="text"
                            class="form-control"
                            id="floatingName"
                            placeholder="First name"
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
                        <input type="number" class="form-control" id="floatingID" placeholder="ID"
                            onChange={(dataIDnumber) => setIDnumber(dataIDnumber.target.value)} />
                        <label for="floatingID">ID number</label>
                    </div>

                    <div class="form-floating mb-3">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                            onChange={(datapassword) => setPassword(datapassword.target.value)} />
                        <label for="floatingPassword">Password</label>
                    </div>

                    <p> <a href="#">De acuerdo con terminos y condiciones</a></p>
                    <div>
                        <button type="button" class="btn btn-primary" onClick={enviardatos} >Registrarse</button>
                    </div>
                    {/* <div>
                    <button id="img" type="button" class="btn btn-primary" >Registrarse con google</button>
                </div> */}

                    <p><a href="#">¿Ya tengo una cuenta?</a></p>
                </form>

            </section>
        </Fragment>
    )
}
export default RegisterPage;