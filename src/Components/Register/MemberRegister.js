import React, { Component } from 'react'
import axios from "axios";
import { fabitcoinsign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MemberRegister extends Component {
  constructor() {
    super();
    this.state = {

      "memail": '',
      "mname": '',
      "maddress": '',
      "mphone": '',
      "mpartm": '',
      "mealservice": '',
      "mpassword": '',
    }
  }

  memailChange = (event) => {
    //alert(event.target.value);
    this.setState({
      memail: event.target.value
    })
  }

  mnameChange = (event) => {
    //alert(event.target.value);
    this.setState({
      mname: event.target.value
    })
  }
  maddressChange = (event) => {
    //alert(event.target.value);
    this.setState({
      maddress: event.target.value
    })
  }
  mphoneChange = (event) => {
    //alert(event.target.value);
    this.setState({
      mphone: event.target.value
    })
  }
  mpartmChange = (event) => {
    //alert(event.target.value);
    this.setState({
      mpartm: event.target.value
    })
  }
  mealserviceChange = (event) => {
    //alert(event.target.value);
    this.setState({
      mealservice: event.target.value
    })
  }
  mpasswordChange = (event) => {
    this.setState({
      mpassword: event.target.value
    })
  }

  addMember = (event) => {

    axios.post('mregister', this.state)
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

        <div class="mregistration">
          <center> <h1>
            <span3><span>Member</span><span2>Login/Registration </span2></span3>
          </h1>
          </center>
          <div class="container">
            <input type="checkbox" id="flip" />
            <div class="cover">
              <div class="front">
                <img src="https://thebigmansworld.com/wp-content/uploads/2022/01/healthy-smoothie-recipes3.jpeg" alt="" />
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
                  <form action="/mreg">
                    <div class="input-boxes">
                      <div class="input-box">
                        <FontAwesomeIcon icon="fa-solid fa-bitcoin-sign" />
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
                          value={this.state.mname} onChange={this.mnameChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-user"></i>
                        <input type="email" className="form-control" placeholder="Email"
                          value={this.state.memail} onChange={this.memailChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Address"
                          value={this.state.maddress} onChange={this.maddressChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Mobile Number"
                          value={this.state.mphone} onChange={this.mphoneChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Part of Mumbai"
                          value={this.state.mpartm} onChange={this.mpartmChange} />
                      </div>

                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="" className="form-control" placeholder="Meal Service Duration"
                          value={this.state.mealservice} onChange={this.mealserviceChange} />
                      </div>
                      <div class="input-box">
                        <i class="fas fa-lock"></i>
                        <input type="text" className="form-control" placeholder="Password"
                          value={this.state.mpassword} onChange={this.mpasswordChange} />
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

export default MemberRegister;
