import React, { Component } from 'react'
import axios from "axios";

export default class MealPlan extends Component {

    constructor(props) {
        super(props);
        this.state = {

            "day": '',
            "meal1": '',
            "meal2": '',
            "meal3": '',
            mealplan: []
        }

    }


    dayChange = (event) => {
        //alert(event.target.value);
        this.setState({
            day: event.target.value
        })
    }
    meal1Change = (event) => {
        //alert(event.target.value);
        this.setState({
            meal1: event.target.value
        })
    }

    meal2Change = (event) => {
        //alert(event.target.value);
        this.setState({
            meal2: event.target.value
        })
    }
    meal3Change = (event) => {
        //alert(event.target.value);
        this.setState({
            meal3: event.target.value
        })
    }


    addMealPlan = (event) => {

        axios.post('addmealplan', this.state)
            .then((res) => {
                this.callMain()
            })
            .catch(err => console.log(err))
        event.preventDefault();
    }

    callMain() {
        alert('Meal Added');
    }

    componentDidMount() {
      
        axios.get('showmealplan')
            .then(res => {
                this.setState({
                    mealplan: res.data
                })
            })
            .catch(error => {
                console.log(error);
            })
    }
    render() {

        const mydata = this.state.mealplan;
        const chead = <tr><th>Day</th><th>Meal 1</th> <th>Meal 2</th><th>Meal 3</th></tr>;
        const cdata = mydata.map((ca, key) => <tr class="tablerow"><th>{ca.day}</th><td>{ca.meal1}</td><td>{ca.meal2}</td><td>{ca.meal3}</td></tr>);

        return (
            
            <div>
                <div>
                    <nav>
                        <a href="/">
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

                        

                        <br />

                        <center>
                            <div >
                                <h2>Set Weekly Menu</h2>
                                <div className="col-sm-6">

                                    <div class="checkbox">


                                        <fieldset>
                                            <div class="toggle">
                                                <input type="radio" name="sizeBy" value="Monday" onChange={this.dayChange} id="Monday" />
                                                <label for="Monday">Monday</label>
                                                <input type="radio" name="sizeBy" value="Tuesday" onChange={this.dayChange} id="Tuesday" />
                                                <label for="Tuesday">Tuesday</label>
                                                <input type="radio" name="sizeBy" value="Wednesday" onChange={this.dayChange} id="Wednesday" />
                                                <label for="Wednesday">Wednesday</label>
                                                <input type="radio" name="sizeBy" value="Thursday" onChange={this.dayChange} id="Thursday" />
                                                <label for="Thursday">Thursday</label>
                                                <input type="radio" name="sizeBy" value="Friday" onChange={this.dayChange} id="Friday" />
                                                <label for="Friday">Friday</label>
                                            </div>
                                        </fieldset>

                                    </div>
                                    <div class="adminform">

                                        <div className="form-group row">
                                            <div class="admin">
                                                <h2>Set menu </h2>
                                                <form onSubmit={this.addMealPlan}>
                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 1" required class="name" 
                                                                value={this.state.meal1} onChange={this.meal1Change} />

                                                        </div>
                                                    </div>

                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 2" required class="name"
                                                                value={this.state.meal2} onChange={this.meal2Change} />
                                                            <i class="fa fa-envelope icon"></i>
                                                        </div>
                                                    </div>
                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 2" required class="name"
                                                                value={this.state.meal3} onChange={this.meal3Change} />
                                                            <i class="fa fa-institution icon"></i>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <div class="button input-box">
                                                        <button class="mealsubmit" type="submit">Submit</button>
                                                    </div>


                                                </form>
                                            </div>
                                        </div>


                                    </div>


                                </div>


                            </div>
                        </center>

                        <div class="menuset">
                            <h2>Weekly Menu</h2>
                            <div class="menuse">

                                <table class="table1" border="1">

                                    {chead}
                                    {cdata}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
