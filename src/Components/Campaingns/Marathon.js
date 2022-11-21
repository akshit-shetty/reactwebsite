import React, { Component } from 'react'

export default class Marathon extends Component {
    render() {
        return (
            <div class="feeding">
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
                                    <li><a href="/mregister">Member</a></li>
                                    <li><a href="cregister">Caregiver</a></li>
                                    <li><a href="pregister">Partner</a></li>
                                    <li><a href="rregister">Rider</a></li>
                                    <li><a href="adminlogin">Admin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <section class="camp">

                    <div class="col-12">
                        <div class="title text-center ">


                            <br />
                            <p>Sun, Jun 17 | Vile Parle </p>
                            <h1>Feeding Homeless</h1>
                            <img src='https://images.unsplash.com/photo-1551927336-09d50efd69cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'></img>
                        </div>
                        <div class="description">
                            <p>
                            Merry Meal is helping the poor homeless people by distributing food for
                                them which will be useful for them and with that food they can survive. Our
                                organization main aim to feed the needy we are doing this program in Mumbai
                                district of Mahrashtra.  Merry Meal one among the best charities in India.
                            </p>
                        </div>
                        <div class="time">
                            <p>Time & Location</p>
                            <p>Sun, Jun 17 | Vile Parle </p>
                            <p>New Agarwal Market, Monghibai Road, Vile Parle(e) </p>
                            <div class="camp-btn"><a href='/campaignregister'>
                                <span></span>Register Now</a>
                            </div>
                        </div>
                    </div>

                </section>




            </div>
        )
    }
}
