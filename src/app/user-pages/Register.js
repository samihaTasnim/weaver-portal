import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Register extends Component {
  render() {
    return (
      <div>
        <div className="d-flex align-items-center auth px-0 ">
          {/* <div class="shadow p-3 mb-5 bg-white ">No shadow</div> */}
          <div className="w-100 mx-0 row">
            <div className="row col-lg-4 mx-auto">
              <div className="brand-logo">
                <img src={require("../../assets/images/logo.svg")} alt="logo" />
              </div>
            </div>
            <div className="row col-lg-4 mx-auto">
              {/* <div className="brand-logo">
                <img src={require("../../assets/images/logo.svg")} alt="logo" />
              </div> */}
              {/* <h6 className="font-weight-light">some text</h6> */}
              <div className="auth-form-light text-left py-5 px-4 px-sm-5 row shadow">
                <h4 className="col-lg-12 font-weight-medium brand-logo text-muted">REGISTRATION</h4>


                <form className="col-lg-6 pt-3">
                  <div className="form-group">
                    <input type="text" className="form-control form-control-lg" id="exampleInputUsername1" placeholder="Username" />
                  </div>
                  <div className="form-group">
                    <input type="Email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" />
                  </div>
                  <div className="form-group">
                    <input type="company" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Company" />
                  </div>
                  <div className="form-group">
                    <select className=" form-control form-control-lg" placeholder="Select" id="exampleFormControlSelect2">
                      <option value="">Select</option>
                      <option>Manufacturer</option>
                      <option>Trader</option>
                    </select>
                  </div>
                </form>
                <form className="col-lg-6 pt-3">


                  <div className="form-group">
                    <input type="password" className="form-control form-control-lg " id="password" placeholder="Password" />
                  </div>
                  <div className="form-group">
                    <input type="address" className="form-control form-control-lg " id="address" placeholder="Address" />
                  </div>
                  <div className="form-group">
                    <input type="mobile" className="form-control form-control-lg " id="mobile" placeholder="Mobile No." />
                  </div>

                  {/* <div className="mb-4">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        <input type="checkbox" className="form-check-input" />
                        <i className="input-helper"></i>
                        I agree to all Terms & Conditions
                      </label>
                    </div>
                  </div> */}
                  <div className="mt-3">
                    <Link className="btn-custom btn-block btn-primary btn-lg font-weight-medium auth-form-btn " to="/otp">SIGN UP</Link>
                  </div>


                </form>
                <div className="text-center mt-4 font-weight-light">
                  Already have an account? <Link to="/user-pages/login-1" className="text-primary">Login</Link>
                </div>

              </div>
            </div>

          </div>
        </div >
      </div >
    )
  }
}

export default Register
