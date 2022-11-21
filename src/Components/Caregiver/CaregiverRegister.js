import React, { Component } from 'react'
import axios from "axios";

class CaregiverRegister extends Component {

  constructor() {
    super();
    this.state = {

      "cemail": '',
      "cname": '',
      "crelation": '',
      "cphone": '',
      "cpassword": '',
      "memail": '',
      "mname": '',
      "maddress": '',
      "mphone": '',
      "mpartm": '',
      "mealservice": '',
      "mpassword": '',

    }
  }
  cemailChange = (event) => {
    //alert(event.target.value);
    this.setState({
      cemail: event.target.value
    })
  }

  cnameChange = (event) => {
    //alert(event.target.value);
    this.setState({
      cname: event.target.value
    })
  }
  crelationChange = (event) => {
    //alert(event.target.value);
    this.setState({
      crelation: event.target.value
    })
  }
  cpasswordChange = (event) => {
    this.setState({
      cpassword: event.target.value
    })
  }
  cphoneChange = (event) => {
    //alert(event.target.value);
    this.setState({
      cphone: event.target.value
    })
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

  addCaregiver = (event) => {

    axios.post('cregister', this.state)
      .then((res) => {
        this.callMain()
      })
      .catch(err => console.log(err))
    event.preventDefault();

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

        <div class="cregistration">
          <center>
            <h1>
              <span3><span>Caregiver</span><span2>Login/Registration </span2></span3>
            </h1>
          </center>

          <div class="bod">

            <div class="login-wrap">
              <div class="login-html">
                <input id="tab-1" type="radio" name="tab" class="sign-in" checked /><label for="tab-1" class="tab">Sign In</label>
                <input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
                <div class="login-form">

                  <div class="sign-in-htm">
                    <br />
                    <br />

                    <div class="group">
                      <label for="user" class="label">Email</label>
                      <input id="user" type="text" class="input" />
                    </div>
                    <br />
                    <br />
                    <div class="group">
                      <label for="pass" class="label">Password</label>
                      <input id="pass" type="password" class="input" data-type="password" />
                    </div>
                    <div class="group">
                      <input id="check" type="checkbox" class="check" checked />
                      <label for="check"><span class="icon"></span> Keep me Signed in</label>
                    </div>
                    <div class="group">
                      <input type="submit" class="button" value="Sign In" />
                    </div>
                    <div class="hr"></div>
                    <div class="foot-lnk">
                      <a href="#forgot">Forgot Password?</a>
                    </div>
                    <div class="eatfood">
                      <img src="./images/eatfood.png" alt="amazing caves coverimage" class="img-fluid" />
                    </div>
                  </div>
                  <div class="sign-up-htm">
                    <div class="b">
                      <div class="form-container">

                        <form class="reg" onSubmit={this.addCaregiver} role="form">
                          <input id='step2' type='checkbox' />
                          <input id='step3' type='checkbox' />

                          <div id="part1" class="form-group">
                            <div class="panel panel-primary">
                              <div class="panel-heading">

                                <br />
                                <br />
                                <h2>CAREGIVER INFORMATION</h2>
                              </div>
                              <br />

                              <div className="group">
                                <label for="pass" class="label">Name</label>
                                <input id="pass" type="text" class="input" placeholder="Salman Khan" aria-describedby="sizing-addon1"
                                  value={this.state.cname} onChange={this.cnameChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Email</label>
                                <input id="pass" type="email" class="input" placeholder="salmankhan@gmail.com"
                                  value={this.state.cemail} onChange={this.cemailChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Mobile Number</label>
                                <input id="pass" type="Mobile Number" class="input" placeholder="6789192837"
                                  value={this.state.cphone} onChange={this.cphoneChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Caregiver Realtion with Member</label>
                                <input id="pass" type="text" class="input" placeholder="Relative,Neighbor,etc."
                                  value={this.state.crelation} onChange={this.crelationChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Password</label>
                                <input id="pass" type="password" class="input" placeholder="Password"
                                  value={this.state.cpassword} onChange={this.cpasswordChange} />
                              </div>
                              <div class="mem">
                                <div class="hr"></div>
                              </div>
                              <div class="btn-group btn-group-lg" role="group" aria-label="...">
                                <label for='step2' id="continue-step2" class="continue">
                                  <div class="btn btn-default btn-lg">Continue</div>
                                </label>
                              </div>
                            </div>
                          </div>

                          <div id="part2" class="form-group">
                            <div class="panel panel-primary">
                              <div class="panel-heading">
                                <br />
                                <br />
                                <h2>MEMBER INFORMATION</h2>
                              </div>
                              <br />
                              <div class="group">
                                <label for="pass" class="label">Name</label>
                                <input id="pass" type="text" class="input" placeholder="Aamir Khan"
                                  value={this.state.mname} onChange={this.mnameChange} />
                              </div>
                              <div class="group">
                                <label for="user" class="label">Email</label>
                                <input id="user" type="email" class="input" placeholder="aamirkhan@gmail.com"
                                  value={this.state.memail} onChange={this.memailChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Address</label>
                                <input id="pass" type="text" class="input" placeholder="Bankuti House, Koliwada, Versova, Andheri (west)"
                                  value={this.state.maddress} onChange={this.maddressChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Mobile Number</label>
                                <input id="pass" type="text" class="input" placeholder="9987654321"
                                  value={this.state.mphone} onChange={this.mphoneChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Part of Mumbai</label>
                                <input id="pass" type="text" class="input" placeholder="Central Mumbai"
                                  value={this.state.mpartm} onChange={this.mpartmChange} />
                              </div>
                              <div class="group">
                                <label for="pass" class="label">Meal Service Duration</label>
                                <input id="pass" type="text" class="input" placeholder="1 week"
                                  value={this.state.mealservice} onChange={this.mealserviceChange} />
                              </div>
                              <br />
                              <div class="btn-group" role="group" aria-label="...">


                                <label for='step2' id="back-step2" class="back">
                                  <div class="back2" ><img src="./images/back.png" alt="amazing caves coverimage" class="img-fluid" />Back</div>
                                </label>
                              </div>
                              <div class="group">
                                <input type="submit" class="button" value="Sign Up" />
                              </div>


                              <div class="hr"></div>
                              <div class="foot-lnk">
                                <a><label for="tab-1">Already Member?</label></a>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>



    )
  }
}

export default CaregiverRegister;


