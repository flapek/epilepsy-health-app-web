import React from 'react';
import { Link } from 'react-router-dom';
import '../style/CommonStyle.css'
import '../style/LoginStyle.css'

export default function Login() {
    let email = React.createRef<HTMLInputElement>();
    let password = React.createRef<HTMLInputElement>();

    function Login() {
        console.log(email.current?.value)
        if (email.current?.value === 'email@email.com' && password.current?.value === 'password') {
            console.log("is logged")
        }
        else {
            console.log("bad password")
        }
    }

    return (
    <div className="form-container">
        <form>
            <h1>Sing in</h1>
            <input ref={email} type="text" placeholder="E-mail"/>
            <input ref={password} type="password" placeholder="Password"/>
            <Link to="/forgetPassword">Forgot your password?</Link>
            <button onClick={Login}>Sign in</button>
        </form>
    </div>
    );
}