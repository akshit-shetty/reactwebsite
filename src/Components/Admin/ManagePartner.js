import React, { Component } from 'react'

class ManagePartner extends Component {
    render() {
        const mydata = this.props.data;
        const chead = <tr><th>Name</th> <th>Email</th><th>Address</th><th>Mobile Number</th><th>Part of Mumbai</th><th>Partner Service Duration</th></tr>;
        const cdata = mydata.map((p, key) => <tr><td>{p.pname}</td><td>{p.pemail}</td><td>{p.paddress}</td><td>{p.pphone}</td><td>{p.ppartm}</td><td>{p.pservice}</td></tr>);
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

                    <center><h1> Partners</h1></center>
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
export default ManagePartner 