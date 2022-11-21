import React, { Component } from 'react'
import axios from "axios";

export default class MealOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {

         
            mealplan: []
        }

    }


    componentDidMount() {
      
        axios.get('showmembermeal')
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
        const chead = <tr><th>Email</th><th>Monday Meal</th><th>Tuesday Meal</th><th>Wednesday Meal</th><th>Thursday Meal</th><th>Friday Meal</th></tr>;
        const cdata = mydata.map((ca, key) => <tr><td>{ca.email}</td><td>{ca.monmeal}</td><td>{ca.tuemeal}</td><td>{ca.wedmeal}</td><td>{ca.thurmeal}</td><td>{ca.frimeal}</td></tr>);

        return (
        

            <div>
                <div>
                    <nav>
                        <a href="/partnerdashboard">
                            <img src="./images/logo.png" class="logo" />
                        </a>
                        <label for="btn" class="icon">
                            <span class="fa fa-bars"></span>
                        </label>

                        <ul>
                            <li><a href="/partnerdashboard">Dashboard</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="/logout">Logout</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="meal">
                    <div class="weeklymenu">
                        <br />
                        <div class="memmenu">
                            <h2>Member Weekly Meal Order</h2>
                            <div class="menu3">

                                <table class="table3" border="1">

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
