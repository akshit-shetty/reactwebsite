import React, { Component } from 'react'
import axios from "axios";
import { Container } from 'react-bootstrap';
import '../Admin/radio.scss';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            searchpartner: '',
            userdata: [],
            managevolunteer: [],
            managedonor: [],
            value: ''
        }

    }
    onchange = e => {
        this.setState({ value: e.target.value });

    }

    changeofInput = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    searchMyData = (event) => {
        //alert(this.state.searchhigher+" "+this.state.searchlower+" "+this.state.searchtype);
        let token = "Bearer " + localStorage.getItem('login');
        var my = this.props.location.state.detail;
        console.log(token);
        event.preventDefault();
        //call http://localhost:9090/searchprice/10/1000
        axios.get('searchuser/?role=' + this.state.searchpartner, { headers: { Authorization: token } })
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    userdata: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    deleteMyData = (data) => {

        let token = "Bearer " + localStorage.getItem('login');
        var my = this.props.location.state.detail;
        console.log(token);
        axios.get('/deleteuser/' + data, { headers: { Authorization: token } })
            .then(res => {
                this.setState({
                    userdata: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })


        alert("data is deleted");
    }

    
    deleteMyVolunteer = (data) => {

        let token = "Bearer " + localStorage.getItem('login');
        var my = this.props.location.state.detail;
        console.log(token);
        axios.get('/deletevol/' + data, { headers: { Authorization: token } })
            .then(res => {
                this.setState({
                    managevolunteer: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
            

        alert("data is deleted");
    }

    componentDidMount() {

        axios.get('managevolunteer')
            .then(res => {
                this.setState({
                    managevolunteer: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })

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


    state = {

        divsub: false

    }

    render() {
        const { value } = this.state;

        const mydata = this.state.managevolunteer;
        const chead = <tr> <th>Email</th><th>First Name</th><th>Last Name</th><th>Mobile Number</th><th>Campaign Name</th><th>Action</th></tr>;
        const cdata = mydata.map((v, key) => <tr><td>{v.vemail}</td><td>{v.vfname}</td><td>{v.vlname}</td><td>{v.vphone}</td><td>{v.campname}</td><td><button onClick={(data) => this.deleteMyVolunteer(v.vemail)} class="">Delete </button></td></tr>);

        const dodata = this.state.managedonor;
        const dhead = <tr><th>First Name</th> <th>Last Name</th><th>Email</th><th>Mobile Number</th><th>Amount</th></tr>;
        const ddata = dodata.map((d, key) => <tr><td>{d.dfname}</td><td>{d.dlname}</td><td>{d.demail}</td><td>{d.dphone}</td><td>{d.amount}</td></tr>);

        var sub = e => {
            this.setState({ divsub: !this.state.divsub });
        }
        const z = this.state.divsub;

        return (
            /*  <div class="search">
                                <form role="search" onSubmit={this.searchMyData}>
                                  <label for="search">Search for stuff</label>
                                  <div>Registration Number
                                    <input type="text" id="searchpartner" onChange={this.changeofInput} ></input> <br /></div>
                                  <button type="submit">Search Data</button>
                                </form>
            
                              </div>
      
      
                              ---------------------------------------------------------------------
      
                               */
            <div>
                <div>
                    <nav>
                        <a href="/admindashboard">
                            <img src="./images/logo.png" class="logo" />
                        </a>
                        <label for="btn" class="icon">
                            <span class="fa fa-bars"></span>
                        </label>

                        <ul>
                            <li><a href="/admindashboard">Dashboard</a></li>
                            <li><a href="/mealplan">Plan meals</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="meal">
                    <div class="weeklymenu">
                        <h1>Admin Dashboard</h1>
                        <br />
                        <br />

                        <center>
                            <div >


                                <div className="col-sm-6">


                                    <div class="search">
                                        <form role="search" onSubmit={this.searchMyData}>
                                            <div>
                                                <h1>Manage Users</h1>
                                                <div class="input_group">
                                                    <div class="input_box">
                                                        <img src='https://img.icons8.com/ios-glyphs/344/user--v1.png' />
                                                        <input type="text" placeholder="Member, Caregiver, Partner & Rider" id="searchpartner" required class="name" onChange={this.changeofInput} />

                                                    </div>
                                                </div>
                                                <br /></div>
                                            <div class="searchsubmit">
                                                <button type="submit" onClick={sub}>Search Data</button>
                                            </div>
                                        </form>
                                        <div class="manus">
                                            <div class="usertab">
                                                {
                                                    z &&
                                                    (<table border="1" >

                                                        <thead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Email</th>
                                                                <th>Mobile Number</th>
                                                                <th>Address</th>
                                                                <th>Service Duration</th>
                                                                <th>Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {
                                                                this.state.userdata.map(
                                                                    userdata =>
                                                                        <tr key={userdata.email}>
                                                                            <td>{userdata.name}</td>
                                                                            <td> {userdata.email}</td>
                                                                            <td> {userdata.phone} </td>
                                                                            <td> {userdata.address}</td>
                                                                            <td> {userdata.serviceduration}</td>
                                                                            <td><button onClick={(data) => this.deleteMyData(userdata.email)} class="">Delete </button></td>
                                                                        </tr>
                                                                )}
                                                        </tbody>


                                                    </table>


                                                    )}
                                            </div>
                                            <div class="voldo">
                                                <div class="volman">
                                                    <h1>Manage Donor</h1>
                                                    <table>
                                                        {dhead}{ddata}
                                                    </table>
                                                </div>
                                                <div class="doman">

                                                    <h1>Manage Volunteer</h1>
                                                    <table>
                                                        {chead}{cdata}
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div>
        )
    }
}
export default Admin