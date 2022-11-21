import React, { Component } from 'react'

 class Contactus extends Component {
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
      <div class="contact">
          
          <section class="contact-section" id="ContactUs">
        <h2>Contact Us</h2>
        <p>For Any queries Contact Us on below given information</p>

        
        <div class="contact-container" id="FAQ">
            <div class="details">
                <div class="detail">
                    <i class="uil uil-mobile-android"></i>
                    <h3>CALL US ON</h3>
                    <p>+91 987-654-321</p>
                </div>
                <div class="detail">
                    <i class="uil uil-envelopes"></i>
                    <h3>EMAIL US ON</h3>
                    <p>merrymeals22@gmail.com</p>
                </div>
                <div class="detail">
                    <i class="uil uil-location-pin-alt"></i>
                    <h3>VISIT OFFICE</h3>
                    <p>Mumbai, Maharashtra</p>
                </div>
            </div>
            <form id="Form" action="#">
                <div class="input-name">
                    <input type="text" placeholder="First Name"/>
                    <input type="text" placeholder="Last Name"/>
                </div>
                <input type="email" placeholder="Your Email"/>
                <textarea id="" cols="20" rows="5" placeholder="Your Massage"></textarea>
                <a href="#" class="contact-btn">SUBMIT</a>
            </form>
        </div>
    </section>
      </div>
      </div>
    )
  }
}
export default Contactus
