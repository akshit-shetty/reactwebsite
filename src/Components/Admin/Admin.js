import React, { Component } from 'react'
import axios from "axios";
import { Container } from 'react-bootstrap';
import '../radio.scss';


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
            /*
            <div class="checkbox">
            <div class="container">
                <div className="col-sm-2 mt-2">Monday
                    <input type="radio" className="mx-2" name='isyes' value="1" onChange={this.onchange} />
                    <span class="checkmark"></span>
                </div>
            </div>
            <div class="container">
                <div className="col-sm-2 mt-2">Tuesday
                    <input type="radio" className="mx-2" name='isyes' value="2" onChange={this.onchange} />
                </div>
            </div>
            <div class="container">
                <div className="col-sm-2 mt-2">Wednesday
                    <input type="radio" className="mx-2" name='isyes' value="3" onChange={this.onchange} />
                </div>
            </div>
            <div class="container">
                <div className="col-sm-2 mt-2">Thusrday
                    <input type="radio" className="mx-2" name='isyes' value="4" onChange={this.onchange} />
                </div>
            </div>
            <div class="container">
                <div className="col-sm-2 mt-2">Friday
                    <input type="radio" className="mx-2" name='isyes' value="5" onChange={this.onchange} />
                </div>
            </div>
            
        </div>
        */
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

                <div class="meal">
                    <div class="weeklymenu">
                    <h1>Admin Dashboard</h1>
                        <br />
                        <h2>Manage Users</h2>
                        <div class="manage">
                        <div class="manageusers">
                        <div class="manageus"><a href='/managemember' > Members </a></div>
                        </div>
                        <div class="manageusers">
                        <div class="manageus"><a href='' > Caregivers </a></div>
                        </div>
                        <div class="manageusers">
                        <div class="manageus"><a href='' > Partners  </a></div>
                        </div>
                        <div class="manageusers">
                        <div class="manageus"><a href='' > Riders</a></div>
                        </div>
                        <div class="manageusers">
                        <div class="manageus"><a href='' > Volunteers </a></div>
                        </div>
                        <div class="manageusers">
                        <div class="manageus"><a href='' > Donors </a></div>
                        </div>
                        </div>
            
                        
                        <br />
                       
                    <center>
                        <div >
                        <h2>Set Weekly Menu</h2>
                            <div className="col-sm-6">

                                <div class="checkbox">
                                
                                 
                                    <fieldset>
                                        <div class="toggle">
                                            <input type="radio" name="sizeBy" value="1" onChange={this.onchange} id="Monday"/>
                                            <label for="Monday">Monday</label>
                                            <input type="radio" name="sizeBy" value="2" onChange={this.onchange} id="Tuesday" />
                                            <label for="Tuesday">Tuesday</label>
                                            <input type="radio" name="sizeBy" value="3" onChange={this.onchange} id="Wednesday"/>
                                            <label for="Wednesday">Wednesday</label>
                                            <input type="radio" name="sizeBy" value="4" onChange={this.onchange} id="Thursday"/>
                                            <label for="Thursday">Thursday</label>
                                            <input type="radio" name="sizeBy" value="5" onChange={this.onchange} id="Friday"/>
                                            <label for="Friday">Friday</label>
                                        </div>
                                    </fieldset>
                                    
                                </div>
                                <div class="adminform">
                                    {value === '1' && (
                                        <div className="form-group row">
                                            <div class="admin">
                                                <h2>Set menu for Monday</h2>
                                                <form onSubmit={this.addMealPlan}>
                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 1" required class="name"
                                                                value={this.state.meal1} onChange={this.meal1Change} />

                                                        </div>
                                                    </div>

                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="email" placeholder="Meal 2" required class="name"
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
                                                    <div class="mealsubmit"><a href='' > Submit </a></div>


                                                </form>
                                            </div>
                                        </div>

                                    )}

                                    {value === '2' && (
                                        <div className="form-group row">
                                            <div class="admin">
                                                <h2>Set menu for Tuesday</h2>
                                                <form onSubmit={this.addMealPlan}>
                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 1" required class="name"
                                                                value={this.state.meal1} onChange={this.meal1Change} />

                                                        </div>
                                                    </div>

                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="email" placeholder="Meal 2" required class="name"
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
                                                    <div class="mealsubmit"><a href='' > Submit </a></div>


                                                </form>
                                            </div>
                                        </div>

                                    )}
                                    {value === '3' && (
                                        <div className="form-group row">
                                            <div class="admin">
                                                <h2>Set menu for Wednesday</h2>
                                                <form onSubmit={this.addMealPlan}>
                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 1" required class="name"
                                                                value={this.state.meal1} onChange={this.meal1Change} />

                                                        </div>
                                                    </div>

                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="email" placeholder="Meal 2" required class="name"
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
                                                    <div class="mealsubmit"><a href='' > Submit </a></div>


                                                </form>
                                            </div>
                                        </div>

                                    )}
                                    {value === '4' && (
                                        <div className="form-group row">
                                            <div class="admin">
                                                <h2>Set menu for Thursday</h2>
                                                <form onSubmit={this.addMealPlan}>
                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 1" required class="name"
                                                                value={this.state.meal1} onChange={this.meal1Change} />

                                                        </div>
                                                    </div>

                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="email" placeholder="Meal 2" required class="name"
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
                                                    <div class="mealsubmit"><a href='' > Submit </a></div>


                                                </form>
                                            </div>
                                        </div>

                                    )}
                                    {value === '5' && (
                                        <div className="form-group row">
                                            <div class="admin">
                                                <h2>Set menu for Friday</h2>
                                                <form onSubmit={this.addMealPlan}>
                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="text" placeholder="Meal 1" required class="name"
                                                                value={this.state.meal1} onChange={this.meal1Change} />

                                                        </div>
                                                    </div>

                                                    <div class="input_group">
                                                        <div class="input_box">
                                                            <input type="email" placeholder="Meal 2" required class="name"
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
                                                    <div class="mealsubmit"><a href='' > Submit </a></div>


                                                </form>
                                            </div>
                                        </div>

                                    )}
                                </div>


                            </div>


                        </div>
                    </center>
                </div>
                </div>
            </div>

        );
    }
}
export default Admin