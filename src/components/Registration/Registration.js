import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import app from '../../Hooks/firbase.init';

const Registration = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isDisabled, setDisabled] = useState(true);
    const auth = getAuth(app);

    const handleName = (e) => {
        console.log(e.target.value)
        setName(e.target.value)
    }

    const handleEmail = (e) => {
        const test = /\S+@\S+\.\S+/.test(e.target.value)
        if (!test) {
            setError('Please give a valid email')
            return;
        }
        setEmail(e.target.value)
        setError('')
    }

    const handlePassword = (e) => {
        if (!/(?=.{8,})/.test(e.target.value)) {
            setError('Your password must be at least 8 characters')
            return;
        }
        if (!/(?=.*[a-zA-Z])/.test(e.target.value)) {
            setError('Your password must contain at least one letter (a-z,A-Z).')
            return;
        }
        if (!/(?=.*[0-9])/.test(e.target.value)) {
            setError('Your password must contain at least one digit.')
            return;
        }
        if (!/(?=.*[!#$%&?@"])/.test(e.target.value)) {
            setError('password should have special character(!@#$%&"?)!!')
            return;
        }
        console.log(e.target.value);
        setPassword(e.target.value)
        setError('')
    }

    const handleRegister = (e) => {
        e.preventDefault();
        if ((email, password, name)) {
            createUserWithEmailAndPassword(auth, email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user)
                    upDateName();
                    varify();

                    setError('')

                })
                .catch(error => {
                    console.error('error'.error)
                })
        } else {
            setError("please fil out all the input");
            return;
        }
        
    }

    const upDateName =()=>{
        updateProfile(auth.currentUser, {
            displayName: name
          }).then(() => {
            // Profile updated!
            // ...
          }).catch((error) => {
            // An error occurred
            // ...
          });
    }

    const varify =()=>{
        sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });
    }

    return (
        <div className="mt-5">
            <div className="main-container d-md-flex container justify-content-between align-items-center">
                <div className="register-image image-fluid w-100  ">
                    <img
                        className="w-100 img-fluid image-fluid"
                        src="https://i.ibb.co/hYJTmVX/undraw-Mobile-login-re-9ntv-1.png"
                        alt=""
                    />
                </div>
                <div className="register-form  w-100">
                    <div className="input-box">
                        <p className="text-danger">{error}</p>
                        <form action="">
                            <input
                                onBlur={handleName}
                                className="form-control p-3 m-2"
                                type="text"
                                placeholder="Enter your name"
                                required
                            />
                            <input
                                onBlur={handleEmail}
                                className="form-control p-3 m-2"
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <input
                                onBlur={handlePassword}
                                className="form-control p-3 m-2"
                                type="password"
                                placeholder="password"
                                required
                            />
                            <p className="link ">
                                <Link to="/login" className="text-decoration-none">
                                    <small className="text-danger link">
                                        already have an account? please login
                                    </small>
                                </Link>
                            </p>
                            <input onClick={()=>setDisabled(!isDisabled)} className="p-2" type="checkbox" />{" "}
                            <span  className="mb-3">accept term & condition</span>
                            <br />
                            <button
                                onClick={handleRegister}
                                disabled={isDisabled}
                                type="submit"
                                className="btn btn-info p-3 w-50 mt-3 fw-bold text-white"
                            >
                                Register
                            </button>
                        </form>
                    </div>
                    <button className="btn mt-3 border d-flex align-items-center justify-content-evenly p-2 m-auto">
                        <img
                            className="w-25 image-fluid btn-image"
                            src="https://img.icons8.com/color/344/google-logo.png"
                            alt=""
                        />
                        <p className="fw-bold">Google SignIn</p>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Registration;