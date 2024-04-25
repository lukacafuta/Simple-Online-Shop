import { useState } from "react";
import { api } from "../common/api";
import { useDispatch } from "react-redux";
import { login, loadUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoginError(''); 

        // TODO: send the username and the password to the API to log in
        try{
            const res = await api.post('/auth/token/', {
                email: email, 
                password: password,
            });
            console.log(res)
            // store token locally
            localStorage.setItem('accessToken', res.data.access);

            //dispatch access token and user detail to redux store
            dispatch(login(res.data.access));
            dispatch(loadUser(res.data.user));

            // if successful, redirect user to their profile page
            navigate('/profile');
        } catch(error) {
            // if unsuccessful, show error
            if (error.response?.data?.detail) {
                setLoginError(error.response.data.detail);
            } else {
                setLoginError('Login was not successful')
            }
            console.error(error);
        }
    };

    return(
        <div className='page-centered'>
            <h1>Log In</h1>
            <form onSubmit={(e) => handleLoginSubmit(e)} id='loginForm'>
                <input 
                    type='email' 
                    placeholder='Email' 
                    required 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type='password' 
                    placeholder='Password' 
                    required 
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}  
                />
                <p className='errorMessage'>{loginError}</p>
                <button type='submit'>Log In</button>
            </form>
        </div>
    );
};