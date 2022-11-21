import React, { Component } from 'react'


class Feeding extends Component {
    render() {
        return (
            <div class="feeding">
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
                                    <li><a href="#">Admin</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>

                <section class="camp">

                    <div class="col-12">
                        <div class="title text-center ">


                            <br />
                            <p>Sun, Jun 12 | Dadar </p>
                            <h1>Feeding Homeless</h1>
                            <img src='https://i.inews.co.uk/content/uploads/2021/04/SEI_76405167-640x360.jpg'></img>
                        </div>
                        <div class="description">
                            <p>
                                Merry Meals is helping the poor homeless people by distributing food for
                                them which will be useful for them and with that food they can survive. Our
                                organization main aim to feed the needy we are doing this program in Mumbai
                                district of Maharashtra. Merry Meals one among the best charities in India.
                            </p>
                        </div>
                        <div class="time">
                            <p>Time & Location</p>
                            <p>Sun, Jun 12 | Dadar </p>
                            <p>DHARAMPUTRA BUILDING, DR. BABASAHEB AMBEDKAR ROAD, DADAR EAST-MUMBAI-400014. </p>
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
export default Feeding
