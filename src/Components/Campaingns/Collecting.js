import React, { Component } from 'react'

export default class Collecting extends Component {
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
                            <p>Sun, Jun 15 | Colaba  </p>
                            <h1>Collecting Leftover Foods</h1>
                            <img src='https://images.squarespace-cdn.com/content/v1/5acd39f61aef1d36b4561ad4/1574175769193-6XAIAH5TG63F4EMB1VEB/Leftovers+TV.png?format=1500w'></img>
                        </div>
                        <div class="description">
                            <p>
                                Merry Meal is helping the poor homeless people by distributing food for
                                them which will be useful for them and with that food they can survive. Our
                                organization main aim to feed the needy we are doing this program in Mumbai
                                district of Maharashtra.  Merry Meal one among the best charities in India.
                            </p>
                        </div>
                        <div class="time">
                            <p>Time & Location</p>
                            <p>Sun, Jun 15 | Colaba </p>
                            <p> Kulsum Terrace, Walton Road, Colaba </p>
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
