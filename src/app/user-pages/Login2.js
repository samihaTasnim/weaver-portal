import React, { useRef, useState } from 'react'
import { api } from '../../common/service-config.js'
import { Link, useHistory } from 'react-router-dom';
import Notifications, { notify } from 'react-notify-toast';
import { Switch, Route, Redirect } from 'react-router-dom';
import Spinner from '../shared/Spinner';
import './style.css';
import axios from "axios";

import validator from 'validator'

const Login2 = () => {


    const history = useHistory();
    // state
    // login State
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    // signup State
    const [susername, setSusername] = useState('')
    const [email, setEmail] = useState('')
    const [spassword, setSpassword] = useState('')
    const [company, setCompany] = useState('')
    const [mobile, setMobile] = useState('')
    const [address, setAddress] = useState('')
    const [manufact, setManufac] = useState('')

    const inputEl = useRef(null);

    const login = async (e) => {
        if (username === "" || null
        ) {
            notify.show("Fill all the fields", 'error');
        } else {
            e.preventDefault();
            console.log(username, password);
            const payload = {
                email: username,
                password: password,
            }
            let res = await api().post('/api/users/login', payload)

            console.log('resdata', res.data)
            if (res.data.success === true) {
                localStorage.setItem('userId', res.data.data.id)
                console.log(localStorage.getItem('userId'));
                notify.show("Login Success ", 'success');
                window.setTimeout(localStorage.setItem("user-token", res.data.token),
                    history.push("/weaver-dashboard"), 3000);
                // setTimeout(localStorage.setItem("user-token", res.data.token),
                // history.push("/dashboard"), 3000);

            } else {
                console.log("failed login");
                notify.show("Wrong Username or Password", 'error');
            }
            console.log('res.data.token: ', res.data.token);
        }

    }
    const signup = async (e) => {
        e.preventDefault();

        if (susername === "" || null ||
            company === "" || null ||
            address === "" || null ||
            email === "" || null ||
            mobile === "" || null ||
            spassword === "" || null ||
            manufact === "" || null
        ) {
            notify.show("Fill all the fields", 'error');
        } else {
            let position;
            if (manufact === 'Viewer') {
                position = 1
            }
            if (manufact === 'Trader') {
                position = 0
            }

            if (validator.isEmail(email)) {
                const payload = {
                    name: susername,
                    company_name: company,
                    address: address,
                    email: email,
                    phone_number: mobile,
                    password: spassword,
                    type: position
                }
                console.log('payload: ', payload);

                const res = await api().post('/api/users', JSON.stringify(payload))
                console.log('resdata', res.data)
                if (res.data.status === true) {
                    notify.show("Success", 'success');

                    localStorage.setItem("phone_number", mobile)
                    console.log(localStorage.getItem('phone_number'));
                    localStorage.setItem("otp", res.data.otp)
                    history.push("/user-pages/otp")

                } else {
                    console.log("failed login");
                    notify.show("Failed ", 'error');
                }
            } else {
                notify.show("Check Your Email...!", 'error');
                console.log("Email not okay");
            }
            // localStorage.setItem("user-token", JSON.stringify(res.data.token))
            // console.log('res.data.token: ', res.data.token);
        }
    }


    const signUpHandler = () => {
        inputEl.current.classList.add("sign-up-mode");
    }

    const signInHandler = () => {
        inputEl.current.classList.remove("sign-up-mode");
    }
    return (
        <div className="container container-fluid shadow-lg" ref={inputEl}> 
            <Notifications />
            <div className="forms-container">
                <div className="signin-signup ">
                    <form action="#" className="sign-in-form">
                        <h2 className="font-weight-small brand-logo text-muted text-center">Welcome to</h2>
                        <h2 className="font-weight-medium brand-logo text-muted text-center">Wild Musing Innovations LLP.</h2>
                        <div className="input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" value={username} onChange={(e) => setUserName(e.target.value)}
                                placeholder="Email" />
                        </div>
                        <div className="input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                placeholder="Password" />
                        </div>
                        {/* <CircularProgress> */}
                        <button type="submit" value="Login" onClick={(e) => login(e)} className="btn-custom btn solid">
                            Login
                        </button>
                        {/* </CircularProgress> */}

                    </form>

                    <form action="#" className="sign-up-form">
                        <div className='row'>
                            <div className='col-12'>
                                <h2 className="font-weight-small brand-logo text-muted text-center">Welcome to</h2>
                            </div>
                            <div className='col-12'>
                                <h2 className="font-weight-medium brand-logo text-muted text-center">Wild Musing Innovations LLP.</h2>
                            </div>
                        </div>
                        <div className='row'>

                            <div className='col-6'>
                                <div className="input-field">
                                    <i className="fas fa-user"></i>
                                    <input type="text" placeholder="Username" value={susername} onChange={e => setSusername(e.target.value)} />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="text" placeholder="Company" value={company} onChange={e => setCompany(e.target.value)} />
                                </div>
                                {/* <input type="submit" className="btn right" value="next" /> */}
                                {/* <button className='btn right'>next</button> */}

                            </div>

                            <div className='col-6'>

                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="password" placeholder="Password" value={spassword} onChange={e => setSpassword(e.target.value)} />
                                </div>

                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="text" placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-envelope"></i>
                                    <input type="phone" placeholder="Mobile" value={mobile} onChange={e => setMobile(e.target.value)} />
                                </div>
                            </div>
                        </div>
                        <div className="input-field dropdown">
                            <i className="fas fa-envelope"></i>
                            <select className="select" onChange={e => setManufac(e.target.value)} placeholder="Select" id="exampleFormControlSelect2">
                                <option value="" >Select</option>
                                <option value="Viewer">Weaver</option>
                                <option value="Trader" >Trader</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-custom" onClick={signup} value="Sign up">
                            Sign Up
                        </button>



                    </form>
                </div>
            </div>

            <div className="panels-container">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                            ex ratione. Aliquid!
                        </p>
                        <button className="btn transparent btn-custom" onClick={signUpHandler} id="sign-up-btn">
                            Sign up
                        </button>
                    </div>
                    <img src="img/log.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                            laboriosam ad deleniti.
                        </p>
                        <button className="btn transparent" id="sign-in-btn" onClick={signInHandler}>
                            Sign in
                        </button>
                    </div>
                    <img src="img/register.svg" className="image" alt="" />
                </div>
            </div>
        </div >


    )
}

export default Login2;