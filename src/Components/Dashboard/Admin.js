import React, { Component } from 'react'
import axios from "axios";
import { Container } from 'react-bootstrap';


class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            "meal1": '',
            "meal2": '',
            "meal3": '',
        }

    }
    onchange = e => {
        this.setState({ value: e.target.value });

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


    render() {
        const { value } = this.state;

        return (
            <div>
                <div>
                    <nav>
                        <a href="home.html">
                            <img src="./images/logo.png" class="logo" />
                        </a>
                        <label for="btn" class="icon">
                            <span class="fa fa-bars"></span>
                        </label>
                        
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li>

                                <a href="#">Register/login</a>
                                
                                <ul >
                                    <li><a href="/mregister">Member</a></li>
                                    <li><a href="cregister">Caregiver</a></li>
                                    <li><a href="pregister">Partner</a></li>
                                    <li><a href="rregister">Rider</a></li>
                                </ul>
                            </li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </nav>
                </div>
                
                <div class="meal">
                <center><h1>Admin Dashboard</h1>
                    <br />
                    <br />
                    <h2>Set Weekly Menu</h2></center>
                    <center>
                    <div >

                        <div className="col-sm-6">
               
                            <div >
                                
                                <div class= "checkbox2">
                                    <div className="col-sm-2 mt-2">Monday
                                        <input type="radio" className="mx-2" name='isyes' value="1" onChange={this.onchange} />
                                    </div>
                                    <div className="col-sm-2 mt-2">Tuesday
                                        <input type="radio" className="mx-2" name='isyes' value="2" onChange={this.onchange} />
                                    </div>
                                    <div className="col-sm-2 mt-2">Wednesday
                                        <input type="radio" className="mx-2" name='isyes' value="3" onChange={this.onchange} />
                                    </div>
                                    <div className="col-sm-2 mt-2">Thusrday
                                        <input type="radio" className="mx-2" name='isyes' value="4" onChange={this.onchange} />
                                    </div>
                                    <div className="col-sm-2 mt-2">Friday
                                        <input type="radio" className="mx-2" name='isyes' value="5" onChange={this.onchange} />
                                    </div>
                                </div>
                            </div>
                            <div class="adminform">
                            {value === '1' && (
                                <div  >
                                    <h3 className="col-sm-3 col-form-label">Set menu for Monday</h3>
                                    <form class="reg" onSubmit={this.addMealPlan}>

                                        <br />
                                        <br />

                                        <div>

                                            <div className="form-group">
                                                <label>Meal 1</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal1} onChange={this.meal1Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 2</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal2} onChange={this.meal2Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 3</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal3} onChange={this.meal3Change} />
                                            </div>
                                            <br />
                                            <button className="btn btn-danger btn-block">Submit</button>
                                        </div>

                                    </form>
                                </div>
                            )}

                            {value === '2' && (
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Set menu for Tuesday</label>
                                    <form class="reg" onSubmit={this.addMealPlan}>

                                        <br />
                                        <br />

                                        <div>

                                            <div className="form-group">
                                                <label>Meal 1</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal1} onChange={this.meal1Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 2</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal2} onChange={this.meal2Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 3</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal3} onChange={this.meal3Change} />
                                            </div>
                                            <br />
                                            <button className="btn btn-danger btn-block">Submit</button>
                                        </div>

                                    </form>
                                </div>

                            )}
                            {value === '3' && (
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Set menu for Wednesday</label>
                                    <form class="reg" onSubmit={this.addMealPlan}>

                                        <br />
                                        <br />

                                        <div>

                                            <div className="form-group">
                                                <label>Meal 1</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal1} onChange={this.meal1Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 2</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal2} onChange={this.meal2Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 3</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal3} onChange={this.meal3Change} />
                                            </div>
                                            <br />
                                            <button className="btn btn-danger btn-block">Submit</button>
                                        </div>

                                    </form>
                                </div>

                            )}
                            {value === '4' && (
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Set menu for Thusrday</label>
                                    <form class="reg" onSubmit={this.addMealPlan}>

                                        <br />
                                        <br />

                                        <div>

                                            <div className="form-group">
                                                <label>Meal 1</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal1} onChange={this.meal1Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 2</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal2} onChange={this.meal2Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 3</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal3} onChange={this.meal3Change} />
                                            </div>
                                            <br />
                                            <button className="btn btn-danger btn-block">Submit</button>
                                        </div>

                                    </form>
                                </div>

                            )}
                            {value === '5' && (
                                <div className="form-group row">
                                    <label className="col-sm-3 col-form-label">Set menu for Friday</label>
                                    <form class="reg" onSubmit={this.addMealPlan}>

                                        <br />
                                        <br />

                                        <div>

                                            <div className="form-group">
                                                <label>Meal 1</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal1} onChange={this.meal1Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 2</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal2} onChange={this.meal2Change} />
                                            </div>
                                            <div className="form-group">
                                                <label>Meal 3</label>
                                                <input type="text" className="form-control" placeholder="User Name"
                                                    value={this.state.meal3} onChange={this.meal3Change} />
                                            </div>
                                            <br />
                                            <button className="btn btn-danger btn-block">Submit</button>
                                        </div>

                                    </form>
                                </div>

                            )}
                            </div>


                        </div>


                    </div>
                    </center>
                </div>
            </div>

        );
    }
}
export default Admin