import React from 'react';
import '../style/CommonStyle.css'

export default function ForgetPassword() {
    return (
    <div className="form-container">
        <form>
            <h1>Forget password</h1>
            <input type="password" placeholder="Old password"/>
            <input type="password" placeholder="New password"/>
            <input type="password" placeholder="Repeat password"/>
            <button>Change password</button>
        </form>
    </div>
    );
}