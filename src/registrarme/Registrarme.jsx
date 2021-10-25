import React, { Fragment, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Redirect } from 'react-router';

function Registrarme() {

    const {isAuthenticated } = useAuth0();

    if (localStorage.getItem("state") == "user" && isAuthenticated) {
        return (
            <Fragment>
                <h1>Pagina de registro</h1>
            </Fragment>
        )
    }
    else{
        return <Redirect to="/"></Redirect>
    }
}

export default Registrarme;