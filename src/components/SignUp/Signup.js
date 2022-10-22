import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
    return (
        <div className='form-container'>
            <h1 className='form-title'>Sign Up</h1>
            <form>
                <div className="form-control">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" id="" placeholder='Your email' required />
                </div>
                <div className="form-control mar-t">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" id="" placeholder='Your password' required />
                </div>
                <div className="form-control mar-t">
                    <label htmlFor="confirm">Confirm Password:</label>
                    <input type="password" name="confirm" id="" placeholder='Confirm password' required />
                </div>
                <input className='btn-submit mar-t2' type="submit" value="Sign Up" />
            </form>
            <p className='new-account-text'>Already have an account? <Link className="link-text" to='/login'>Login</Link></p>
        </div>
    );
};

export default Signup;