import React, { Component } from 'react'
import axios from "axios";


class Member extends Component {

    constructor() {
        super();
        this.state = {
            "email": '',
            "monmeal": '',
            "tuemeal": '',
            "wedmeal": '',
            "thurmeal": '',
            "frimeal": '',
            mealplan: [],
            memberdata: []
        }
    }


    emailChange = (event) => {
        //alert(event.target.value);
        this.setState({
            email: event.target.value
        })
    }
    monmealChange = (event) => {
        //alert(event.target.value);
        this.setState({
            monmeal: event.target.value
        })
    }

    tuemealChange = (event) => {
        //alert(event.target.value);
        this.setState({
            tuemeal: event.target.value
        })
    }
    wedmealChange = (event) => {
        //alert(event.target.value);
        this.setState({
            wedmeal: event.target.value
        })
    }
    thurmealChange = (event) => {
        //alert(event.target.value);
        this.setState({
            thurmeal: event.target.value
        })
    }
    frimealChange = (event) => {
        //alert(event.target.value);
        this.setState({
            frimeal: event.target.value
        })
    }


    addMemberMeal = (event) => {
        let token = "Bearer " + localStorage.getItem('login');
        var my = this.props.location.state.detail;
        console.log(token);
        axios.post('addmembermeal', this.state, { headers: { Authorization: token } })
            .then((res) => {
                this.callMain()
            })
            .catch(err => console.log(err))
        event.preventDefault();
    }

    callMain() {
        alert('Meal added');
    }


    componentDidMount() {
        let token = "Bearer " + localStorage.getItem('login');
        var my = this.props.location.state.detail;
        localStorage.setItem("myemail", my);
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
        const chead = <tr><th>Day</th><th>Meal 1</th> <th>Meal 2</th><th>Meal 3</th></tr>;
        const cdata = mydata.map((ca, key) => <tr class="tablerow"><th>{ca.day}</th><td>{ca.meal1}</td><td>{ca.meal2}</td><td>{ca.meal3}</td></tr>);




        if (this.state.memberdata)
            return (

                <div class="member">
                    <div className="view">
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
                        {
                            this.state.memberdata.map(
                                memberdata =>
                                    <section id="membanner">

                                        <div class="membanner-text">
                                            <center><h2>Member Dashboard</h2></center>
                                            <h1>Welcome {memberdata.name}</h1>
                                            <p>Order yourself a wholesome meal</p>

                                        </div>

                                    </section>
                            )}
                        <br />
                        <br />
                        <br />

                        <br />
                        <div class="menu">
                            <h3>Weekly Menu</h3>
                            <img src="./images/chef3.png" />
                            <table class="table1" border="1">

                                {chead}
                                {cdata}
                            </table>
                        </div>

                        <br>
                        </br>
                        <br />
                        <br />
                        <br />
                        <center>
                        <div class="border"></div>
                        </center>
                        <div class="choose">
                            <h2>Choose your Weekly Meal</h2>
                        </div>
                        <div class="choosemeal">


                            <div class="memberform">
                                {
                                    this.state.memberdata.map(
                                        memberdata =>
                                            <form onSubmit={this.addMemberMeal}>

                                              

                                                <div class="input_group">

                                                    <div class="input_box">
                                                        <input type="hidden" placeholder="Email" required class="name"
                                                            value={this.state.email = memberdata.email} />

                                                    </div>
                                                </div>
                                                <label>Monday meal:</label>
                                                <div class="input_group">

                                                    <div class="input_box">
                                                        <input type="text" placeholder="Monday" required class="name"
                                                            value={this.state.monmeal} onChange={this.monmealChange} />

                                                    </div>
                                                </div>
                                                <label>Tuesday meal:</label>
                                                <div class="input_group">

                                                    <div class="input_box">
                                                        <input type="text" placeholder="Tuesday" required class="name"
                                                            value={this.state.tuemeal} onChange={this.tuemealChange} />
                                                        <i class="fa fa-envelope icon"></i>
                                                    </div>
                                                </div>
                                                <label>Wednesday meal:</label>
                                                <div class="input_group">

                                                    <div class="input_box">
                                                        <input type="text" placeholder="Wednesday" required class="name"
                                                            value={this.state.wedmeal} onChange={this.wedmealChange} />
                                                        <i class="fa fa-institution icon"></i>
                                                    </div>
                                                </div>
                                                <label>Thursday meal:</label>
                                                <div class="input_group">

                                                    <div class="input_box">
                                                        <input type="text" placeholder="Thusrday" required class="name"
                                                            value={this.state.thurmeal} onChange={this.thurmealChange} />
                                                        <i class="fa fa-institution icon"></i>
                                                    </div>
                                                </div>
                                                <label>Friday meal:</label>
                                                <div class="input_group">

                                                    <div class="input_box">
                                                        <input type="text" placeholder="Friday" required class="name"
                                                            value={this.state.frimeal} onChange={this.frimealChange} />
                                                        <i class="fa fa-institution icon"></i>
                                                    </div>
                                                </div>
                                                <br />
                                                <div class="button input-box">
                                                    <button className="btn btn-warning btn-block" type="submit">Submit</button>
                                                </div>
                                            </form>
                                    )}
                            </div>
                            <img src="./images/chef2.png" />

                        </div>

                    </div>
                </div>
            )
    }
}
export default Member 
