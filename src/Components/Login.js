import React from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Firebase';
import "../Css/Login.css";

export default function Login() {



    const ref = React.useRef();

    let history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();
     
        firebase.auth().signInWithEmailAndPassword(ref.current.value, ref.current.value);
    }

    const goToMainPage = () => {
        history.push("/");
    }


    return (
        <form onSubmit={onSubmit} className="login-modal">
            <h1 className="h1-login">Login</h1>
            <input ref={ref} placeholder="Email" type="email" className="email-input" />
            <input ref={ref} placeholder="Password" type="password" className="password-input" />
            <div className="error-div">
                errors
            </div>
            <input type="submit" className="btn-submit" />
            <button onClick={goToMainPage} className="back-btn-login">{'<= Back'}</button>
        </form>
    )
}
