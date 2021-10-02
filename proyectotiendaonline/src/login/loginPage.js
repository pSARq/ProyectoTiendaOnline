import React, { Fragment, useState} from 'react';
import './loginStyles.css';

function LoginPage() {
    const[counter, setCounter]=useState(0);
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    

    return (
        <Fragment>
            <div className="container">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(data)=>setEmail(data.target.value)}/>
                    <label for="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"onChange={(data)=>setPassword(data.target.value)}/>
                    <label for="floatingPassword">Password</label>
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>setCounter(counter+1)}>Iniciar sesióny</button>
                <h1>{email}</h1>
                <h1>{password}</h1>
            </div>


        </Fragment>
    )
}
export default LoginPage;