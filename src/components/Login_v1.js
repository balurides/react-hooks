import React,{useReducer} from 'react';
import loginReducer from './../actions/login';
import checkUser1 from './checkUser';
import './../App.css';


const initialState = {
    username:'',
    password:'',
    loggedIn:false,
    errorMessage:'',
    isLoading:false
};

function LoginV1() {
    const [state,dispatch] = useReducer(loginReducer,initialState);
    const {username,password,loggedIn,errorMessage,isLoading} = state;

    const LoginSubmitv1 = async e => {
        e.preventDefault();
        dispatch( {type: 'login'});
        try {
            await checkUser1({ username , password });
            console.log('test');
            dispatch( { type: 'success' });
        } catch (error) {
            dispatch( { type: 'error' });
        }
    }

    return(
    <div className="App">
        <div className="login-container">
        { loggedIn ? (
                <>
                    <h1> user logged in with {username}</h1>
                    <button type="submit" onClick = {()=> dispatch({ type :'logout'}) }>
                        Logout 
                    </button>
                </>
            ) : (
                    <form className="form" onSubmit={LoginSubmitv1}>
                    {errorMessage && <p className="error">{errorMessage}</p>}
                        <p> Login form here</p>
                        <input type="text" placeholder="enter username"
                            value={username} onChange={e => 
                             dispatch({ type: 'field',
                                        fieldName:'username',
                                        payload:e.currentTarget.value
                            })
                            }
                        />
                        <br />
                        <input type="password" placeholder="enter password"
                            value={password}  onChange={e => 
                             dispatch({ type: 'field',
                                        fieldName:'password',
                                        payload:e.currentTarget.value
                                    })
                            }
                        />
                        <button type="submit" disabled={isLoading}> Login </button>
                    </form>
            )
        }
        </div>
        
    </div>
    );
}

export default LoginV1;