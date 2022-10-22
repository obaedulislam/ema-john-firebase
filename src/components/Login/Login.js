import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
const Login = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Login</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="" placeholder='Your email' required />
                </div>
                <div className="form-control mar-t">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="" placeholder='Your password' required />
                </div>
                <input className='btn-submit mar-t2' type="submit" value="Login" />
            </form>
            <p className='new-account-text'>New to Ema John? <Link className="link-text" to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;