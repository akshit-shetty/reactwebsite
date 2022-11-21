import React, { Component } from 'react'

class Feedback extends Component {
    render() {
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
            <div class="feedback">
            <h1> Feedback</h1>
          
                <div class="container">
                    <div class="text">Give us your Feedback</div>
                    <form action="#">
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">Email Address</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">Was Your Food correct?</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">Was Your Food deliver on time?</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data">
                                <input type="text" required />
                                <div class="underline"></div>
                                <label for="">How Did you Find our Packaging?</label>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="input-data textarea">
                                <textarea rows="8" cols="80" required></textarea>
                                <br />
                                <div class="underline"></div>
                                <label for="">Tell Us Your Feedback</label>
                                <br />
                            </div>
                        </div>
                        <div class="feed-submit"><a href=''> Submit </a></div>
                    </form>
                </div>
            </div>
            </div>
        )
    }
}
export default Feedback