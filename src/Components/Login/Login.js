import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
import logo from '../../images/logo green.jpg';
import firebaseConfig from './firebase.config';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }


    const handleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photoURL }
                setLoggedInUser(signedInUser);
                history.replace(from)

            })
            .catch(error => {
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }
    return (
        <div className="sign-in-style">
            <img src={logo} style={{ height: '80px' }} className="img-fluid mb-5" alt="logo" />
            <br/>
            <h4>Sign In</h4>
            <button onClick={handleSignIn} className="btn custom-btn-bg"><FontAwesomeIcon icon={faGoogle} /> Sign in with Google</button>
        </div>
    );
};

export default Login;