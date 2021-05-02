import React from "react";
import '../style/CommonStyle.css'

export default function Register() {
    let email = React.createRef<HTMLInputElement>();
    let password = React.createRef<HTMLInputElement>();
    let repeatedPassword = React.createRef<HTMLInputElement>();

    function Registry() {
        console.log(email.current?.value)
    }

    return (
    <div className="form-container">
        <form>
            <h1>Sing Up</h1>
            <input ref={email} type="text" placeholder="E-mail"/>
            <input ref={password} type="password" placeholder="Password"/>
            <input ref={repeatedPassword} type="password" placeholder="Repeat password"/>
            <button onClick={Registry}>Sign in</button>
        </form>
    </div>
    );
}