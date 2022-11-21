import React, { Component } from 'react'
import axios from "axios";

class PartnerDashboard extends Component {

    constructor() {
        super();
        this.state = {

            mealplan: [],
            memberdata: []
        }
    }


    componentDidMount() {
        let token = "Bearer " + localStorage.getItem('login');
        var my = this.props.location.state.detail;
        console.log(token);
        axios.get('showmealplan', { headers: { Authorization: token } })
            .then(res => {
                this.setState({
                    mealplan: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })

        axios.get('search/' + my, { headers: { Authorization: token } })
            .then(
                res => this.setState({
                    memberdata: res.data
                }))
            .catch((err) => console.log(err))
    }

    render() {
        var my = this.props.location.state.detail;
        const mydata = this.state.mealplan;
        const chead = <tr><th>Day</th> <th>Meal 1</th> <th>Meal 2</th><th>Meal 3</th></tr>;
        const cdata = mydata.map((ca, key) => <tr><th>{ca.day}</th><td>{ca.meal1}</td><td>{ca.meal2}</td><td>{ca.meal3}</td></tr>);

        var myarray = this.state.memberdata;
        return (
            <div class="partner">
                <div className="part">
                    <div>
                        <nav>
                            <a href="/partnerdashboard">
                                <img src="./images/logo.png" class="logo" />
                            </a>
                            <label for="btn" class="icon">
                                <span class="fa fa-bars"></span>
                            </label>
                            {
                                this.state.memberdata.map(
                                    memberdata =>
                                        <ul>
                                            <li><a href="/partnerdashboard">Dashboard</a></li>

                                            <li><a href="/mealorder">Meal</a></li>

                                            <li class="u"><a href="#">{memberdata.name}</a>
                                                <ul >
                                                    <li><a href="/editprofilemember">Profile</a></li>
                                                    <li><a href="/logout">logout</a></li>
                                                </ul>

                                            </li>
                                        </ul>
                                )}
                        </nav>
                    </div>
                    {
                        this.state.memberdata.map(
                            memberdata =>
                                <section id="partbanner">

                                    <div class="membanner-text">
                                        <center><h2>Partner Dashboard</h2></center>
                                        <h1>Welcome {memberdata.name}</h1>

                                    </div>
                                    <div class="wine ">
                                        <div class="loader">
                                            <ul>
                                                <li></li>
                                                <li></li>
                                                <li></li>
                                            </ul>
                                            <div class="wineglass left">
                                                <div class="top"></div>
                                            </div>
                                            <div class="wineglass right">
                                                <div class="top"></div>
                                            </div>
                                        </div>
                                    </div>

                                </section>
                        )}
                    <div class="mess">


                        <div class="welcome">


                            <h3>Some Food Safety protocol:</h3>
                            <p>1. Wear suitable hygienic clothing, including gloves, hair covering, footwear, where necessary.</p>
                            <p>2. Prevent contamination of ready-to-eat foods from cutting boards, utensils, clothing, raw meat or eggs.</p>
                            <p>3. Do not touch ready-to-eat foods with bare hands.</p>
                            <p>4. Use labels to track shelf life.</p>

                            <h1> We value the help you're giving us </h1>
                        </div>
                    </div>

                    <br />
                    <div class="menu2">
                        
                    <h2>Weekly Menu</h2>
                    <br />
                  

                   
                        <img src="./images/chef3.png" />
                        <table class="table1" border="1">

                            {chead}
                            {cdata}
                        </table>
                    </div><div id="no-background">
                        <div class="chef"></div>
                    </div>

                   

                </div>
            </div>
        )
    }
}
export default PartnerDashboard