import React, { Component } from 'react'
import axios from "axios";

class Donation extends Component {
    constructor() {
        super();
        this.state = {

            "demail": '',
            "dfname": '',
            "dlname": '',
            "dphone": '',
            "amount": '',

        }
    }

    demailChange = (event) => {
        //alert(event.target.value);
        this.setState({
            demail: event.target.value
        })
    }

    dfnameChange = (event) => {
        //alert(event.target.value);
        this.setState({
            dfname: event.target.value
        })
    }
    dlnameChange = (event) => {
        //alert(event.target.value);
        this.setState({
            dlname: event.target.value
        })
    }
    dphoneChange = (event) => {
        //alert(event.target.value);
        this.setState({
            dphone: event.target.value
        })
    }
    amountChange = (event) => {
        //alert(event.target.value);
        this.setState({
            amount: event.target.value
        })
    }


    addDonor = (event) => {

        axios.post('dregister', this.state)
            .then((res) => {
                this.callMain()
            })
            .catch(err => console.log(err))
        event.preventDefault();
    }

    
    render() {
        return (
            <div class="y">
                <div>
                    <nav>
                        <a href="/">
                            <img src="./images/logo.png" class="logo" />
                        </a>
                        <label for="btn" class="icon">
                            <span class="fa fa-bars"></span>
                        </label>

                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/campaigns">Campaigns</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="/contactus">Contact</a></li>
                            <li>

                                <a href="#">Register/login</a>

                                <ul >
                                    <li><a href="mregister">Member</a></li>
                                    <li><a href="cregister">Caregiver</a></li>
                                    <li><a href="pregister">Partner</a></li>
                                    <li><a href="rregister">Rider</a></li>
                                    <li><a href="adminlogin">Admin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="donate">
                    <img src='https://www.agewellfoundation.org/wp-content/uploads/2016/02/Agewell_Slide1.jpg'></img>

                </div>
                <div class="donation">
                    <div class="col-12">
                        <div class="title text-center ">
                            <h1> Donation</h1>
                            <center>
                                <div class="border"></div>
                            </center>

                            <p> We serve daily hot noon meal to qualified adults
                                living at home who are unable to cook for themselves or maintain their nutritional status due to age,
                                disease, or disability. across India</p>
                        </div>
                    </div>
                    <div class="wrapper">
                        <h2>Donation Form</h2>
                        <form onSubmit={this.addDonor} method="post">


                            <div class="input_group">
                                <div class="input_box">
                                    <img src='https://img.icons8.com/ios-glyphs/344/user--v1.png' />
                                    <input type="text" placeholder="First Name" required class="name"
                                        value={this.state.dfname} onChange={this.dfnameChange} />

                                </div>

                                <div class="input_box">
                                    <img src='https://img.icons8.com/ios-glyphs/344/user--v1.png' />
                                    <input type="text" placeholder="Last Name" required class="name"
                                        value={this.state.dlname} onChange={this.dlnameChange} />
                                    <i class="fa fa-user icon"></i>
                                </div>
                            </div>

                            <div class="input_group">
                                <div class="input_box">
                                    <img src='https://img.icons8.com/ios-glyphs/344/new-post.png' />
                                    <input type="email" placeholder="Email Address" required class="name"
                                        value={this.state.demail} onChange={this.demailChange} />
                                    <i class="fa fa-envelope icon"></i>
                                </div>
                            </div>
                            <div class="input_group">
                                <div class="input_box">
                                    <img src='https://img.icons8.com/ios-filled/344/phone.png' />
                                    <input type="text" placeholder="Mobile Number" required class="name"
                                        value={this.state.dphone} onChange={this.dphoneChange} />
                                    <i class="fa fa-institution icon"></i>
                                </div>
                            </div>
                            <div class="input_group">
                                <div class="input_box">
                                    <img src='https://img.icons8.com/fluency-systems-filled/344/cash-.png' />
                                    <input type="number" placeholder="Enter Amount" required class="name"
                                        value={this.state.amount} onChange={this.amountChange} />
                                    <i class="fa fa-money icon" aria-hidden="true"></i>
                                </div>
                            </div>
                            <div class="payu">
                                <a href='https://pmny.in/0rcmw6dODQ1W' rel='noopener' target='_blank' type="submit">  Donate Now  </a>
                                </div>
                            <div class="donate-button">
                                <button className="btn-block" type="submit">submit</button>
                            </div>


                        </form>

                    </div>

                    <div class="old">
                        <img src="https://b.zmtcdn.com/web/feeding/bf85c1c331bdd22cad61e96b0ae8639f1585218925.jpeg" alt="amazing caves coverimage" class="img-fluid" />
                    </div>
                    <div class="old2">
                        <img src="https://i.pinimg.com/564x/5b/11/31/5b113126102fd5b30448a3a5246522dd.jpg" alt="amazing caves coverimage" class="img-fluid" />
                    </div>
                    <section class="do">


                        <div class="col-12">
                            <div class="title text-center ">
                                <div class="p1">
                                    <h2>Help us <span>eradicate hunger in India</span></h2>
                                    <br />
                                    <p>
                                        194 million people in India today do not have enough food to eat, the largest
                                        in any one country in the world. According to the Global Hunger Index 2021,
                                        India falls under the ‘serious’ hunger category with a rank of 101 among 116 countries.</p>
                                    <p>
                                        These statistics however, do not take into account the effects of COVID-19.
                                        The resultant migration, unemployment and loss of earning members of households
                                        has pushed millions of Indians into extreme poverty and hunger.</p>
                                </div>
                                <br />
                                <div class="p2">
                                    <h2>The solution</h2>
                                    <p>
                                        <span> We believe providing regular meals to dependents in underserved
                                            communities to reduce financial burden in the short term, empowering
                                            them to become free from hunger in the long term.</span></p>
                                    <p>
                                        The Daily Feeding Program is our effort to support such individuals
                                        with cooked meals daily. We have a growing network of credible NGOs
                                        involved in the field of education, skill development and livelihood
                                        to feed dependent beneficiaries.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </section>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                </div>
            </div>

        )
    }
}
export default Donation
