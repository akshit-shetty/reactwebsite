import React, { Component } from 'react'
import axios from "axios";

class PartnerDashboard extends Component {

render() {
    const mydata = this.props.data;
    const chead = <tr><th>Meal 1</th> <th>Meal 2</th><th>Meal 3</th></tr>;
    const cdata = mydata.map((ca, key) => <tr><td>{ca.meal1}</td><td>{ca.meal2}</td><td>{ca.meal3}</td></tr>);
    return (
        <div class="partner">
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
                            <li><a href="/partnerdashboard">Dashboard</a></li>
                            <li><a href="#">Meal</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">logout</a></li>
                        </ul>
                    </nav>
                </div>
                <center><h1>Partner Dashboard</h1></center>
                <br />
                <br />
                <br />
                <h2>Weekly Menu</h2>
                <br />
                <div class="menu2">

                    <table class="table2" border="1">

                        <tr>
                            <th>Days</th>
                        </tr>
                        <tr>
                            <td>Monday</td>
                        </tr>
                        <tr>
                            <td>Tueday</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                        </tr>
                    </table>
                    <table class="table1" border="1">

                        {chead}
                        {cdata}
                    </table>
                </div>
            </div>
        </div>
    )
  }
}
export default PartnerDashboard