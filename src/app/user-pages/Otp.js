import React, { useEffect, useRef, useState } from 'react'
import { api } from '../../common/service-config.js'
import Notifications, { notify } from 'react-notify-toast';
import { useHistory } from 'react-router-dom';
import Spinner from '../shared/Spinner';
import './style.css';
import axios from 'axios';

const Otp = () => {
  
  let incomingOTP = localStorage.getItem('otp')
  useEffect(() => {
    setTimeout(function(){
      notify.show(`Your OTP is ${incomingOTP}`, 'warning');
   }, 300);
  }, [incomingOTP])
 

  const history = useHistory();
  // state
  // phone State
  // alert(`Your OTP is ${incomingOTP}`)

  const [Otp, setOtp] = useState('')

  const inputEl = useRef(null);

  const verifyOTP = async (e) => {

    e.preventDefault();

    if (Otp === "" || null) {
      notify.show("Please type your otp to verify", 'error');
    }
    else if (Otp !== incomingOTP) {
      notify.show("Please check you OTP again", 'error')
    } else {
      console.log(Otp);
      let phoneNumberfromStorage = localStorage.getItem('phone_number')
      console.log(phoneNumberfromStorage, 'storage phone');
      const payload = {
        phone_number: phoneNumberfromStorage,
        otp: Otp
      }
      console.log(payload);

      // axios.post('http://103.160.107.131/api/users/verifyOtp', JSON.stringify(payload))
      // .then(function (response) {
      //   console.log(response);
      //   notify.show("Verified Successfully ", 'success');
      //   history.push("/user-pages/login-1")
      // })
      // .catch(function (error) {
      //   console.log("verify failed");
      //   notify.show("Wrong Otp", 'error');
      // });
      let res = await api().post('/api/users/verifyOtp', JSON.stringify(payload))

      console.log('resdata', res.data)
      if (res.data.success === true) {
        notify.show("Verified Successfully ", 'success');
       setTimeout(() => {
        history.push("/user-pages/login-1")
       }, 300)

      } else {
        console.log("verify failed");
        notify.show("Wrong Otp", 'error');
      }
      console.log('res.data.token: ', res.data.token);

    }

  }
  return (
    <div className="container container-fluid shadow-lg" ref={inputEl}>
      <Notifications />      
      <div className="forms-container">
        <div className="signin-signup ">
          <form action="#" className="sign-in-form" onSubmit={() => false}>
            <h2 className="font-weight-medium brand-logo text-muted text-center">Verify your OTP</h2>

            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="Otp" value={Otp} onChange={(e) => setOtp(e.target.value)}
                placeholder="Otp" />
            </div>

            <button type="submit" onClick={(e) => verifyOTP(e)} className="btn-custom solid">
              Verify OTP
            </button>
            {/* </CircularProgress> */}

          </form>
        </div>
      </div>
    </div >


  )
}

export default Otp;