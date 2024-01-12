import { React, useState } from 'react'
import './login.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import auth from './FirebaseAuth.js';
import limg from '../login.png'
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
const provider = new GoogleAuthProvider();
export const Login = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/main');
        } catch (error) {
            console.error('Error signing in:', error.message);

        }
    }

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            console.log(user);

            // Check if the user already exists in your authentication system
            // You can customize this check based on your system's logic
            if (user) {
                console.log('Successfully signed in with Google user:', user);
                // Redirect or perform other actions after successful sign-in
                if (user) {
                    navigate('/main');
                }
            } else {
                console.log('Google user does not have an account:', user);
                // You can handle this case as needed, e.g., show an error message
            }

            console.log('Google sign-in successful:', user);
        } catch (error) {
            console.error('Error signing in with Google:', error.message);
        }
    };


    return (
        <div className="login-page">
            {/* Header with logo and title */}
            <header>
                <img src={limg} alt='login img' />
                <h1>Decision Hub</h1>
            </header>

            {/* Main content */}
            <main>
                <h2>LOGIN</h2>
                <p>How to i get started lorem ipsum dolor at?</p>

                <form onSubmit={handleSignIn}>
                    <div>
                        <label htmlFor="username">Email</label>
                        <input
                            type="text"
                            id="username"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit">Login Now</button>
                </form>
                <div className='google'>
                    <button onClick={signInWithGoogle}>Sign in with Google</button>
                </div>


            </main>
        </div>
    );
};

export default Login;
