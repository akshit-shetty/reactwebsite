import React, { Component } from 'react'
import axios from "axios";

export default class ManageCaregiver extends Component {

    constructor() {
        super();
        this.state = {
          managecaregiver:[]
        }
      }

      componentDidMount() {
    

        axios.get('managecaregiver')
        .then(res => {
          this.setState({
            managecaregiver: res.data
          })
        })
        .catch(error => {
          console.log(error);
        })
    }  

  render() {
   
    const mydata = this.state.managecaregiver;
    const chead = <tr><th>Name</th> <th>Email</th><th>Mobile Number</th><th>Relation with Member</th><th>Member Email</th></tr>;
    const cdata = mydata.map((c, key) => <tr><td>{c.cname}</td><td>{c.cemail}</td><td>{c.cphone}</td><td>{c.crelation}</td><td>{c.memail}</td></tr>);
    return (
        <div class="member">
        <div className="view">
            <div>
                <nav>
                    <a href="home.html">
                        <img src="./images/logo.png" class="logo" />
                    </a>
                    <label for="btn" class="icon">
                        <span class="fa fa-bars"></span>
                    </label>

                    <ul>
                        <li><a href="/admindashboard">Dashboard</a></li>
                        <li>

                            <a href="#">Manage Users</a>

                            <ul >
                                <li><a href="managemember">Member</a></li>
                                <li><a href="managecaregiver">Caregiver</a></li>
                                <li><a href="managepartner">Partner</a></li>
                                <li><a href="managerider">Rider</a></li>
                                <li><a href="managevolunteer">Volunteer</a></li>
                                <li><a href="managedonor">Donor</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </div>

            <center><h1>Caregivers</h1></center>
            <div class="manmem">
                <table class="table" border="1">

                    {chead}
                    {cdata}
                </table>
            </div>



        </div>
    </div>
    )
  }
}
