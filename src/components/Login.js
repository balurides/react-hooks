import React, {useState} from 'react';
import userCheck from './userCheck';
import './../App.css';

 function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isLoggedin,setIsLoggedin] = useState(false);
    const [errorMessage,setErrorMessage] = useState('');
    const [isLoading,setIsLoading] = useState(false);
    const [showLoader,setShowLoader] = useState(false);

    const LoginSubmit = async e => {
        e.preventDefault();
        setShowLoader(true);
        try {
            await userCheck({ username, password });   
            setIsLoggedin(true);
        } catch (error) {
            setErrorMessage(' incorrect user name or password');
            setUsername('');
            setPassword('');
            setShowLoader(false);
        }
    }
    return(
        <div className="App">
            <div className="login-container">
            { isLoggedin ? (
                <> 
                    <h1> welcome user {username} </h1>
                    <button onClick={() => {
                                            setIsLoggedin(false);
                                            setUsername('');
                                            setPassword('')
                    }}
                    >
                     Logout </button>
                </>
            ) : (
                <form onSubmit={LoginSubmit}>
                {errorMessage && <p className="error">{errorMessage}</p>}
                <p> Please login </p>
                <input placeholder="enter username" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input placeholder="enter password" 
                    type="password"
                    autoComplete="new-password"
                    value={password}
                    
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <br />
                <button type="submit" disabled={isLoading} >
                    {isLoading ? 'Logging in' : 'Login'}
                </button>
                </form>
                )}
            </div>
        </div>
    )
}

export default Login;