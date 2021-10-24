import React, { Fragment, useState } from 'react'
import './loginPageStyle.css'

export default function LoginPage() {

    
    const[email,setEmail]=useState("");
    const[clave,setClave]=useState("");
    return (
        <Fragment>
            <div className="contaner">
                <h1 className="login-title">loginPage</h1>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(datamail)=>setEmail(datamail.target.value)}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(dataclave)=>setClave(dataclave.target.value)}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-primary">Iniciar sección</button>
                
            </div>
        </Fragment>




    )
}

