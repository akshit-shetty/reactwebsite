import React, { Component } from 'react'
import axios from "axios";

class RiderRegister extends Component {
  constructor() {
    super();
    this.state = {

      "remail": '',
      "rname": '',
      "raddress": '',
      "rphone": '',
      "rpartm": '',
      "rservice": '',
      "vehiclenum": '',
      "rpassword": '',
    }
  }

  remailChange = (event) => {
    //alert(event.target.value);
    this.setState({
      remail: event.target.value
    })
  }

  rnameChange = (event) => {
    //alert(event.target.value);
    this.setState({
      rname: event.target.value
    })
  }
  raddressChange = (event) => {
    //alert(event.target.value);
    this.setState({
      raddress: event.target.value
    })
  }
  rphoneChange = (event) => {
    //alert(event.target.value);
    this.setState({
      rphone: event.target.value
    })
  }
  rpartmChange = (event) => {
    //alert(event.target.value);
    this.setState({
      rpartm: event.target.value
    })
  }
  rserviceChange = (event) => {
    //alert(event.target.value);
    this.setState({
      rservice: event.target.value
    })
  }
  vehiclenumChange = (event) => {
    //alert(event.target.value);
    this.setState({
      vehiclenum: event.target.value
    })
  }
  rpasswordChange = (event) => {
    this.setState({
      rpassword: event.target.value
    })
  }

  addPartner = (event) => {

    axios.post('rregister', this.state)
      .then((res) => {
        this.callMain()
      })
      .catch(err => console.log(err))
    event.preventDefault();
  }

  render() {
    return (

      <div>
         <div>
          <nav>
            <a href="home.html">
              <img src="./images/logo.png" class="logo" />
            </a>
            <label for="btn" class="icon">
              <span class="fa fa-bars"></span>
            </label>

            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/campaigns">Campaigns</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="/contactus">Contact</a></li>
              <li>

                <a href="#">Register/login</a>

                <ul >
                  <li><a href="/mregister">Member</a></li>
                  <li><a href="cregister">Caregiver</a></li>
                  <li><a href="pregister">Partner</a></li>
                  <li><a href="rregister">Rider</a></li>
                  <li><a href="#">Admin</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div class="rregistration">
          <center> <h1>
            <span3><span>Rider</span><span2>Login/Registration </span2></span3>
          </h1>

          </center>
          <div class="container">
            <input type="checkbox" id="flip" />
            <div class="cover">
              <div class="front">
                <img src="./images/frontImg.jpg" alt="" />
                <div class="text">
                  <span class="text-1">Every new friend is a <br /> new adventure</span>
                  <span class="text-2">Let's get connected</span>
                </div>
              </div>

            </div>

            <div class="forms">
              <div class="form-content">
                <div class="login-form">
                  <div class="title">Login</div>
                  <form action="#">
                    <div class="input-boxes">
                      <div class="input-box">

                        <input type="text" className="form-control" placeholder="User Name"
                          value={this.state.memail} onChange={this.memailChange} />
                      </div>
                      <br />
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="User Name"
                          value={this.state.memail} onChange={this.memailChange} />
                      </div>

                      <div class="text"><a href="#">Forgot password?</a></div>
                      <div class="button input-box">
                        <button className="btn btn-warning btn-block">Sign in</button>
                      </div>
                      <div class="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>

                    </div>
                  </form>
                </div>
                <div class="signup-form">
                  <div class="title">Sign up</div>
                  <form class="reg" onSubmit={this.addMember}>
                    <div class="input-boxes">
                      <div class="input-box">
                        <i class="fas fa-envelope"></i>
                        <input type="text" className="form-control" placeholder="Name"
                          value={this.state.rname} onChange={this.rnameChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-user"></i>
                        <input type="email" className="form-control" placeholder="Email"
                          value={this.state.remail} onChange={this.remailChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Address"
                          value={this.state.maddress} onChange={this.raddressChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Mobile Number"
                          value={this.state.rphone} onChange={this.rphoneChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Part of Mumbai"
                          value={this.state.rpartm} onChange={this.rpartmChange} />
                      </div>

                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="" className="form-control" placeholder="Rider Service Duration"
                          value={this.state.rservice} onChange={this.rserviceChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="" className="form-control" placeholder="Vehicle Number"
                          value={this.state.vehiclenum} onChange={this.vehiclenumChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Password"
                          value={this.state.rpassword} onChange={this.rpasswordChange} />
                      </div>
                      <div class="button input-box">
                        <button className="btn btn-warning btn-block">Sign up</button>
                      </div>
                      <div class="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
export default RiderRegister
