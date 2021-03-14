import React from 'react';
import { Link } from 'react-router-dom';
import '../style/CommonStyle.css'

export default function ForgetPassword() {
    return (
        <form>
            <h1>Sing in</h1>
            <input type="password" placeholder="Old password"/>
            <input type="password" placeholder="New password"/>
            <input type="password" placeholder="Repeat password"/>
            <button>Change password</button>
        </form>
    );
}