import React from "react"

class Login extends React.Component{
    render(){
        return(
            <div className="m-5">
                <h1>Inicio de sesión</h1>
                <div className="col-lg-3 col-sm-12">
                    <input type="text" placeholder="Usuario" className="form-control my-3"/>
                    <input type="password" placeholder="Contraseña" className="form-control my-3"/>
                    <a href="/"><button className="btn btn-success">Iniciar sesion</button></a>
                </div>
            </div>
        );
    }
}

export default Login;