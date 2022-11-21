import React, { Component } from 'react'

class ManageVolunteer extends Component {
  render() {
    const mydata = this.props.data;
    const chead = <tr> <th>Email</th><th>First Name</th><th>Last Name</th><th>Mobile Number</th><th>Campaign Name</th></tr>;
    const cdata = mydata.map((v, key) => <tr><td>{v.vemail}</td><td>{v.vfname}</td><td>{v.vlname}</td><td>{v.vphone}</td><td>{v.campname}</td></tr>);
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
                                <li><a href="/managemember">Member</a></li>
                                <li><a href="cregister">Caregiver</a></li>
                                <li><a href="/managepartner">Partner</a></li>
                                <li><a href="/managerider">Rider</a></li>
                                <li><a href="/managevolunteer">Volunteer</a></li>
                                <li><a href="rregister">Donor</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Logout</a></li>
                    </ul>
                </nav>
            </div>

            <center><h1> Volunteers</h1></center>
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
export default ManageVolunteer 
