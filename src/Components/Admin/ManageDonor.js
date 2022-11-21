import React, { Component } from 'react'
import axios from "axios";

export default class ManageDonor extends Component {
    constructor() {
        super();
        this.state = {
          managedonor:[]
        }
      }

      componentDidMount() {
    

        axios.get('managedonor')
        .then(res => {
          this.setState({
            managedonor: res.data
          })
        })
        .catch(error => {
          console.log(error);
        })
    }  


  render() {

    const mydata = this.state.managedonor;
        const chead = <tr><th>First Name</th> <th>Last Name</th><th>Email</th><th>Mobile Number</th><th>Amount</th></tr>;
        const cdata = mydata.map((d, key) => <tr><td>{d.dfname}</td><td>{d.dlname}</td><td>{d.demail}</td><td>{d.dphone}</td><td>{d.amount}</td></tr>);
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

            <center><h1>Donors</h1></center>
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
