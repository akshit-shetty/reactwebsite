import React, { Component } from 'react'
import axios from "axios";


class Member extends Component {

    constructor() {
        super();
        this.state = {

            "monmeal": '',
            "tuemeal": '',
            "wedmeal": '',
            "thurmeal": '',
            "frimeal": '',
        }
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

        axios.post('addmembermeal', this.state)
            .then((res) => {
                this.callMain()
            })
            .catch(err => console.log(err))
        event.preventDefault();
    }

    componentDidMount() {
        let token = "Bearer " + localStorage.getItem('login');
        console.log(token);
      }
     

    render() {
        const mydata = this.props.data;
        const chead = <tr><th>Meal 1</th> <th>Meal 2</th><th>Meal 3</th></tr>;
        const cdata = mydata.map((ca, key) => <tr><td>{ca.meal1}</td><td>{ca.meal2}</td><td>{ca.meal3}</td></tr>);
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
                                <li><a href="/memberdashboard">Dashboard</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="/feedback">Feedback</a></li>
                                <li><a href="#">logout</a></li>
                            </ul>
                        </nav>
                    </div>
                    <center><h1>Member Dashboard</h1></center>
                    <br />
                    <br />
                    <br />
                    <h2>Weekly Menu</h2>
                    <br />
                    <div class="menu">

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

                    <br>
                    </br>
                    <br />
                    <br />
                    <br />

                    <div class="choosemeal">
                        <h2>Choose your Weekly Meal</h2>

                        <div class="memberform">

                            <form onSubmit={this.addMemberMeal}>
                                <div class="input_group">
                                    <div class="input_box">
                                        <input type="text" placeholder="Monday" required class="name"
                                            alue={this.state.monmeal} onChange={this.monmealChange} />

                                    </div>
                                </div>

                                <div class="input_group">
                                    <div class="input_box">
                                        <input type="email" placeholder="Tuesday" required class="name"
                                            value={this.state.tuemeal} onChange={this.tuemealChange} />
                                        <i class="fa fa-envelope icon"></i>
                                    </div>
                                </div>
                                <div class="input_group">
                                    <div class="input_box">
                                        <input type="text" placeholder="Wednesday" required class="name"
                                            value={this.state.wedmeal} onChange={this.wedmealChange} />
                                        <i class="fa fa-institution icon"></i>
                                    </div>
                                </div>
                                <div class="input_group">
                                    <div class="input_box">
                                        <input type="text" placeholder="Thusrday" required class="name"
                                            value={this.state.thurmeal} onChange={this.thurmealChange} />
                                        <i class="fa fa-institution icon"></i>
                                    </div>
                                </div>
                                <div class="input_group">
                                    <div class="input_box">
                                        <input type="text" placeholder="Friday" required class="name"
                                            value={this.state.frimeal} onChange={this.frimealChange} />
                                        <i class="fa fa-institution icon"></i>
                                    </div>
                                </div>
                                <br />
                                <div class="mealsubmit"><a href='' > Submit </a></div>


                            </form>
                        </div>


                    </div>

                </div>
            </div>
        )
    }
}
export default Member 
