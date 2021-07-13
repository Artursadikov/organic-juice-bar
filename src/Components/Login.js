import React from 'react';
import { useHistory } from "react-router-dom";
import "../Css/Login.css";

export default function Login() {

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
       
    }

    const goToMainPage = () => {
        history.push("/");
    }


    return (
        <form onSubmit={onSubmit} className="login-modal">
            <h1 className="h1-login">Login</h1>
            <input placeholder="Email" type="email" className="email-input" />
            <input placeholder="Password" type="password" className="password-input" />
            <div className="error-div">
                errors
            </div>
            <input type="submit" className="btn-submit" />
            <button onClick={goToMainPage} className="back-btn-login">{'<= Back'}</button>
        </form>
    )
}
