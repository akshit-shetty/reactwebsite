import React, { Component } from 'react'

class Campaigns extends Component {
    render() {
        return (
            <div >
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
                            <li><a href="#">Contact</a></li>
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
                <div class="vol">
                <section class="blog" id="blog">
                    <div class="event">
                        <div class="row">


                            <div class="col-12">
                                <div class="title text-center ">
                                    <h1> Campaigns</h1>
                                    <div class="border"></div>
                                    <p>To express interest in volunteering please first fill out our Volunteer Registeration
                                        Form by first choosing one of the options below.</p>
                                </div>
                            </div>

                            <article class="col-md-4 col-sm-6 col-xs-12 clearfix ">
                                <div class="post-item">
                                    <center>
                                        <div class="media-wrapper">
                                            <img src="images/peaky.png" alt="amazing caves coverimage" class="img-fluid" />
                                        </div>
                                    </center>

                                    <div class="content">
                                        <h3><a href="single-post.html">Reasons to Smile</a></h3>
                                        <br />
                                        <div class="btn btn-main">
                                            Know more
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article class="col-md-4 col-sm-6 col-xs-12 ">
                                <div class="post-item">
                                    <center>
                                        <div class="media-wrapper">
                                            <img src="images/peaky.png" alt="amazing caves coverimage" class="img-fluid" />
                                        </div>
                                    </center>
                                    <div class="content">
                                        <h3><a href="single-post.html">A Few Moments</a></h3>
                                        <br />
                                        <div class="btn btn-main">
                                            Know more
                                        </div>
                                    </div>
                                </div>
                            </article>

                            <article class="col-md-4 col-sm-6 col-xs-12 ">
                                <div class="post-item">
                                    <center>
                                        <div class="media-wrapper">
                                            <img src="images/peaky.png" alt="amazing caves coverimage" class="img-fluid" />
                                        </div>
                                    </center>
                                    <div class="content">
                                        <h3><a href="single-post.html">Hints for Life</a></h3>
                                        <br />
                                        <div class="btn btn-main">
                                            Know more
                                        </div>
                                    </div>
                                </div>
                            </article>

                        </div>
                        <br />
                        <br />
                        <div class="border"></div>
                    </div>
                   

                    <div class="volunteer">
                        <img src="https://blessingsofhope.com/wp-content/uploads/2019/06/Volunteers.jpg" alt="amazing caves coverimage" class="img-fluid" />
                    </div>
                    <section class="volun">
                    
                        <div class="col-12">
                            <div class="title text-center ">


                                <br />
                                <p>
                                   <span> Feeding India,</span> a non-profit by <span>Merry Meals,</span> is dedicated towards making <span>India hunger-free.</span> With the help
                                    of our NGOs, kitchens and donors, we are moving one step
                                    closer to our goal every day. <span>Together,</span> we believe, we can ensure every qualified adults
                                    living at home who are unable to cook for themselves or maintain their nutritional status due to age,
                                    disease, or disability. has access to food daily.</p>
                            </div>
                        </div>

                    </section>


                </section>
            </div>
            </div>
        )
    }
}
export default Campaigns