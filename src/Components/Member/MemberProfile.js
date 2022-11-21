import React, { Component } from 'react'
import axios from "axios";


class MemberProfile extends Component {
  constructor() {
    super();
    this.state = {
      "email": '',
      "name": '',
      "address": '',
      "phone": '',
      "partm": '',
      "serviceduration": '',
      "password": '',
      memberdata: []
    }
  }
  emailChange = (event) => {
    //alert(event.target.value);
    this.setState({
      email: event.target.value
    })
  }
  nameChange = (event) => {
    //alert(event.target.value);
    this.setState({
      name: event.target.value
    })
  }
  addressChange = (event) => {
    //alert(event.target.value);
    this.setState({
      address: event.target.value
    })
  }
  phoneChange = (event) => {
    //alert(event.target.value);
    this.setState({
      phone: event.target.value
    })
  }
  partmChange = (event) => {
    //alert(event.target.value);
    this.setState({
      partm: event.target.value
    })
  }
  servicedurationChange = (event) => {
    //alert(event.target.value);
    this.setState({
      serviceduration: event.target.value
    })
  }
  passwordChange = (event) => {
    this.setState({
      password: event.target.value
    })
  }
  addMember = (event) => {

    axios.post('register', this.state)
      .then((res) => {
        this.callMain()
      })
      .catch(err => console.log(err))
    event.preventDefault();
  }
  componentDidMount() {

    var data = localStorage.getItem("myemail");
    let token = "Bearer " + localStorage.getItem('login');
    //var my = this.props.location.state.detail;
    console.log(token);
    axios.get('search/' + data, { headers: { Authorization: token } })
      .then(
        res => this.setState({
          memberdata: res.data
        }))
      .catch((err) => console.log(err))

  }



  render() {




    if (this.state.memberdata)
      return (

        <div>
          <div>
            <nav>
              <a href="/memberdashboard">
                <img src="./images/logo.png" class="logo" />
              </a>
              <label for="btn" class="icon">
                <span class="fa fa-bars"></span>
              </label>
              {
                this.state.memberdata.map(
                  memberdata =>
                    <ul>
                      <li><a href="/memberdashboard">Dashboard</a></li>
                      <li><a href="/feedback">Feedback</a></li>

                      <li class="u"><a href="#">{memberdata.name}</a>
                        <ul >
                          <li><a href="/memberprofile">Profile</a></li>
                          <li><a href="/logout">logout</a></li>
                        </ul>

                      </li>
                    </ul>
                )}
            </nav>
          </div>

          <div class="memberedit">
            <div class="edit">
            <h1>Edit Profile</h1>
            <div class="container rounded ">
              <form onSubmit={this.addMember}>
                
               
                  <h4>Member Profile Setting</h4>
                  <div class="d-flex justify-content-between align-items-center mb-3">

                  </div>
                  {
                    this.state.memberdata.map(

                      memberdata =>
                        <div class="row mt-2">
                          <div class="col-md-12">
                            <label class="labels">Email ID</label>
                            <input type="email" class="form-control" placeholder="Enter email id"
                              value={this.state.email = memberdata.email} onChange={this.emailChange} />
                          </div>
                          <div class="col-md-12">
                            <label class="labels">Name: {memberdata.name}</label>
                            <input type="text" class="form-control" placeholder="Enter mobile number"
                              value={this.state.name} onChange={this.nameChange} />
                          </div>
                          <div class="col-md-12">
                            <label class="labels">Address: {memberdata.address}</label>
                            <input type="text" class="form-control" placeholder="Enter address"
                              value={this.state.address} onChange={this.addressChange} />
                          </div>
                          <div class="col-md-12">
                            <label class="labels">Mobile Number: {memberdata.phone}</label>
                            <input type="text" class="form-control" placeholder="Enter mobile number"
                              value={this.state.phone} onChange={this.phoneChange} />
                          </div>
                          <div class="col-md-12"><label class="labels">Part of Mumbai: {memberdata.partm}</label>
                            <input type="text" class="form-control" placeholder="Part of Mumbai"
                              value={this.state.partm} onChange={this.partmChange} />
                          </div>
                          <div class="col-md-12"><label class="labels">Meal Service Duration: {memberdata.serviceduration}</label>
                            <input type="text" class="form-control" placeholder="Meal Service Duration"
                              value={this.state.serviceduration} onChange={this.servicedurationChange} />
                          </div>
                          <div class="col-md-12"><label class="labels">Password:</label>
                            <input type="password" class="form-control" placeholder="password"
                              value={this.state.password} onChange={this.passwordChange} />
                          </div>
                        </div>
                    )}


                
                <div class="mt-3  text-center">
                  <button class="profile-button" type="button">
                    Save Profile</button>
                </div>
              </form>
            </div>
          </div>
          </div>
          
        </div>




      )
  }
}

export default MemberProfile