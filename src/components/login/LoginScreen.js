import React from 'react'

export const LoginScreen = ({ history }) => {

    const handleLogin = () => {
        // history.push('/');
        history.replace('/'); //es para no regresar al login cuando regreses, igual hay que checar bien como funciona
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>

        </div>
    )
}
