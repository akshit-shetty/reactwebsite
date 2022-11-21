import React, { Component } from 'react'
import axios from "axios";

 class ManageMember extends Component {
 
     

    render() {
        const mydata = this.props.data;
        const chead = <tr><th>Name</th> <th>Email</th><th>Address</th><th>Mobile Number</th><th>Part of Mumbai</th><th>Meal Service Duration</th><th>Caregiver Email</th></tr>;
        const cdata = mydata.map((m, key) => <tr><td>{m.mname}</td><td>{m.memail}</td><td>{m.maddress}</td><td>{m.mphone}</td><td>{m.mpartm}</td><td>{m.mealservice}</td><td>{m.cemail}</td></tr>);
        return (
            /*
             <form class="reg" onSubmit={this.addMemberMeal}>

                            <br />
                            <br />

                            <div>

                                <div className="form-group">
                                    <label>Monday</label>
                                    <input type="text" className="form-control" placeholder="User Name"
                                        value={this.state.monmeal} onChange={this.monmealChange} />
                                </div>
                                <div className="form-group">
                                    <label>Tuesday</label>
                                    <input type="text" className="form-control" placeholder="User Name"
                                        value={this.state.tuemeal} onChange={this.tuemealChange} />
                                </div>
                                <div className="form-group">
                                    <label>Wednesdsy</label>
                                    <input type="text" className="form-control" placeholder="User Name"
                                        value={this.state.wedmeal} onChange={this.wedmealChange} />
                                </div>
                                <div className="form-group">
                                    <label>Thursday</label>
                                    <input type="text" className="form-control" placeholder="User Name"
                                        value={this.state.thurmeal} onChange={this.thurmealChange} />
                                </div>
                                <div className="form-group">
                                    <label>Friday</label>
                                    <input type="text" className="form-control" placeholder="User Name"
                                        value={this.state.frimeal} onChange={this.frimealChange} />
                                </div>
                                <br />
                                <button className="btn btn-danger btn-block">Submit</button>
                            </div>



                        </form>
            */
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
                                    <li><a href="pregister">Partner</a></li>
                                    <li><a href="rregister">Rider</a></li>
                                    <li><a href="rregister">Volunteer</a></li>
                                    <li><a href="rregister">Donor</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Logout</a></li>
                        </ul>
                    </nav>
                </div>

                    <center><h1> Members</h1></center>
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

export default ManageMember