import React, { Component } from 'react'
import axios from "axios";

class RiderDashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchpartner: '',
            partnerdata: [],
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
        axios.get('searchpartner/?ppartm=' + this.state.searchpartner, { headers: { Authorization: token } })
            .then((res) => {
                // console.log(res.data)
                this.setState({
                    partnerdata: res.data
                })
            })
            .catch((error) => {
                console.log(error)
            })

      


    }

    render() {
        const { value } = this.state;

        const phead = <tr><th>Partner Address</th><th>Member Address</th><th>Pick up time</th><th>Status</th></tr>;
        const pdata = this.state.partnerdata.map((ca, key) => <tr><td>{ca.paddress}</td><td>{ca.address}</td><td>12:00 pm</td><td>Button</td></tr>);

        return (
            <div class="member">
                <div>
                    <nav>
                        <a href="home.html">
                            <img src="./images/logo.png" class="logo" />
                        </a>
                        <label for="btn" class="icon">
                            <span class="fa fa-bars"></span>
                        </label>


                        <ul>
                            <li><a href="/memberdashboard">Dashboard</a></li>

                            <li><a href="/feedback">Feedback</a></li>


                            <li><a href="/editprofilemember">Profile</a></li>
                            <li><a href="/logout">logout</a></li>



                        </ul>


                    </nav>
                </div>


                <div class="meal">
                    <div class="weeklymenu">
                        <h1>Rider Dashboard</h1>

                        <div class="map"><iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Mumbai+(Merry%20Meals)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/wearable-gps/">wearable gps</a></iframe></div>
                        <br />



                        <br />

                        <center>
                            <div class="search">
                                <h1>Search Locality</h1>
                                <div className="col-sm-6">
                                    <form role="search" onSubmit={this.searchMyData} >
                                        <div>

                                            <div class="input_group">
                                                <div class="input_box">
                                                    <img src='https://img.icons8.com/ios-filled/344/address--v1.png' />
                                                    <input type="text" placeholder="Central, Western, Southern & Eastern" id="searchpartner" required class="name" onChange={this.changeofInput} />

                                                </div>
                                            </div>
                                            <br /></div>
                                        <button type="submit">Search Data</button>
                                    </form>
                                    <div class="rid">
                                        <table>{phead}{pdata}</table>
                                    </div>
                                </div>
                            </div>
                        </center>
                    </div>
                </div>
            </div >
        )
    }
}
export default RiderDashboard
