import React, { useEffect, useState } from 'react';
import './login.css'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import auth from './FirebaseAuth.js';
import { GoogleAuthProvider } from "firebase/auth";
import { signInWithPopup } from 'firebase/auth';
// sunnysrivastava258@gmail.com

const provider = new GoogleAuthProvider();
// provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error('Error signing up:', error.message);
        }
    };
    
    useEffect(() => {
        onAuthStateChanged(auth, function (user) {
            if (user) {
                console.log("This is the user ", user);
            }
            else {
                console.log('There is no user logged in user');
            }
        });
    }, [])

    const signInWithGoogle = async (e) => {
        signInWithPopup(auth, provider)
            .then((result) => {

                const credential = GoogleAuthProvider.credentialFromResult(result);

                if (!credential) {
                    return;
                }
                const token = credential.accessToken;

                const user = result.user;
                // console.log(user);

            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;

                const email = error.customData.email;

                const credential = GoogleAuthProvider.credentialFromError(error);

            });
    }

    return (
        <div>
            <h2>Signup</h2>
            {/* <form>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type="button" onClick={handleSignUp}>Signup</button>
            </form> */}

            <div className='google'>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <button onClick={signInWithGoogle}>Sign up with Google</button>
            </div>
        </div>
    );
};

export default Signup;
