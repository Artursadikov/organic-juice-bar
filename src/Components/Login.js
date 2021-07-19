import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import firebase from '../Firebase';
import "../Css/Login.css";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    let history = useHistory();

    const onEmailHandler = (e) => {
        setEmail(e.target.value);
    }

    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                setEmail('');
                setPassword('');
                history.push('/order-main');
            })
            .catch(() => {
                setError(true);
                setErrorMsg('Password or email is incorrect');
               
            });
    }

    const goToMainPage = () => {
        history.push("/");
    }


    return (
        <form onSubmit={onSubmit} className="login-modal">
            <h1 className="h1-login">Login</h1>
            <input value={email} onChange={onEmailHandler} placeholder="Email" type="email" className="email-input" />
            <input value={password} onChange={onPasswordHandler} placeholder="Password" type="password" className="password-input" />
            {error ?
                <div className="error-div">
                    {errorMsg}
                </div>
                :
                <div style={{ opacity: "0" }} className="error-div">
                    {errorMsg}
                </div>
            }
            <input type="submit" className="btn-submit" />
            <button onClick={goToMainPage} className="back-btn-login">{'<= Back'}</button>
        </form>
    )
}
