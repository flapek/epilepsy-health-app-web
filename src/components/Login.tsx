import { Link } from 'react-router-dom';
import React from "react";
import '../style/CommonStyle.css'

function Login() {
    let email = React.createRef<HTMLInputElement>();
    let password = React.createRef<HTMLInputElement>();

    function Login() {
        // loginAction(email.current?.value ?? "", password.current?.value ?? "")
    }

    return (
    <div className="form-container">
        <form>
            <h1>Sing In</h1>
            <input ref={email} type="text" placeholder="E-mail"/>
            <input ref={password} type="password" placeholder="Password"/>
            <Link to="/forgetPassword">Forgot your password?</Link>
            <button onClick={Login}>Sign in</button>
        </form>
    </div>
    );
};

export default Login;