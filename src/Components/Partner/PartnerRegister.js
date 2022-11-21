import React, { Component } from 'react'
import axios from "axios";

class PartnerRegister extends Component {
  constructor() {
    super();
    this.state = {

      "pemail": '',
      "pname": '',
      "paddress": '',
      "pphone": '',
      "ppartm": '',
      "pservice": '',
      "ppassword": '',
    }
  }

  pemailChange = (event) => {
    //alert(event.target.value);
    this.setState({
      pemail: event.target.value
    })
  }

  pnameChange = (event) => {
    //alert(event.target.value);
    this.setState({
      pname: event.target.value
    })
  }
  paddressChange = (event) => {
    //alert(event.target.value);
    this.setState({
      paddress: event.target.value
    })
  }
  pphoneChange = (event) => {
    //alert(event.target.value);
    this.setState({
      pphone: event.target.value
    })
  }
  ppartmChange = (event) => {
    //alert(event.target.value);
    this.setState({
      ppartm: event.target.value
    })
  }
  pserviceChange = (event) => {
    //alert(event.target.value);
    this.setState({
      pservice: event.target.value
    })
  }
  ppasswordChange = (event) => {
    this.setState({
      ppassword: event.target.value
    })
  }

  addPartner = (event) => {

    axios.post('pregister', this.state)
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
                  <li><a href="mregister">Member</a></li>
                  <li><a href="cregister">Caregiver</a></li>
                  <li><a href="pregister">Partner</a></li>
                  <li><a href="rregister">Rider</a></li>
                  <li><a href="#">Admin</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div class="pregistration">
       
          <center>
            <h1>
              <span3><span>Partner</span><span2>Login/Registration </span2></span3>
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
                          value={this.state.pname} onChange={this.pnameChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-user"></i>
                        <input type="email" className="form-control" placeholder="Email"
                          value={this.state.pemail} onChange={this.pemailChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Address"
                          value={this.state.paddress} onChange={this.paddressChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Mobile Number"
                          value={this.state.pphone} onChange={this.pphoneChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Part of Mumbai"
                          value={this.state.ppartm} onChange={this.ppartmChange} />
                      </div>
                      
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Partner Service Duration"
                          value={this.state.pservice} onChange={this.pserviceChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Password"
                          value={this.state.ppassword} onChange={this.ppasswordChange} />
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

export default PartnerRegister