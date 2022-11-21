import React, { Component } from 'react'
import axios from "axios";

class AdminLogin extends Component {
    constructor() {
        super();
        this.state = {
    
          "email": '',
          "password": '',
          
        }
      }

      emailChange = (event) => {
        //alert(event.target.value);
        this.setState({
          email: event.target.value
        })
      }

      passwordChange = (event) => {
        this.setState({
          password: event.target.value
        })
      }

      authAdmin = (event) => {
        axios.post('authenticate', this.state)
          .then((res) => {
            localStorage.setItem('login', res.data);
            this.callForAdminDashboard()
          })
          .catch((err) => console.log(err))
    
        event.preventDefault();
    
      }
    
      callForAdminDashboard() {
    
        this.props.history.push({
          pathname: '/admindashboard',
          state: { detail: this.state.email }
        })
    
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
                                    <li><a href="adminlogin">Admin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="adminlog">
                    <center> <h1>
                        <span3><span1>Admin</span1><span2>Login </span2></span3>
                    </h1>
                    </center>
                    <div class="adminlogin">
                        <div class="login-box">
                            <h2>Login</h2>
                            <form onSubmit={this.authAdmin}>
                                <div class="user-box">
                                    <input type="text" name=""
                                     value={this.state.email} onChange={this.emailChange} required/>
                                    <label>Username</label>
                                </div>
                                <div class="user-box">
                                    <input type="password" name=""  
                                    value={this.state.password} onChange={this.passwordChange} required/>
                                    <label>Password</label>
                                </div>
                                <button type="submit">
                                
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    Submit
                                
                                </button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
export default AdminLogin