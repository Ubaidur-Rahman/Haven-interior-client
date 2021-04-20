import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from 'react';
import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";
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
        <div>
            <button onClick={handleSignIn} className="btn btn-primary">Sign in with Google</button>
        </div>
    );
};

export default Login;