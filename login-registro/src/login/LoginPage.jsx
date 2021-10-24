import React, { Fragment, useState } from 'react';
import './loginStyles.css';
import logo from '../assets/img/logo.png';

function LoginPage() {

    const [counter, setCounter] = useState(0);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <Fragment >
            <section className="form-login">
                <img src={logo} alt="" />


                <h5>INICIAR SESIÓN</h5>

                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"
                        onChange={(dataemail) => setEmail(dataemail.target.value)} />
                    <label for="floatingInput">Email address</label>
                </div>

                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"
                        onChange={(datapassword) => setPassword(datapassword.target.value)} />
                    <label for="floatingPassword">Password</label>
                </div>
                <br />
                <div>
                    <button type="button" class="btn btn-primary" onClick={() => setCounter(counter + 1)}>Iniciar sesión</button>
                </div>


                <div>
                    <button id="img" type="button" class="btn btn-primary" >Iniciar con google</button>
                </div>


                <p> <a href="#">¿Olvidastes tu Contraseña?</a></p>

            </section>
        </Fragment>
    )
}
export default LoginPage;