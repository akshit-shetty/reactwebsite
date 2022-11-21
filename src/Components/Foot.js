import React, { Component } from 'react'

export default class Foot extends Component {
    render() {
        return (
            <footer id="footer" class="bg-one">
                <div class="top-footer">

                    <div class="pages">
                        <div class="row">
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <a href="/">
                                    <img src="./images/logo.png" class="logo2" />
                                </a>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <ul>
                                    <li><h3>Legal</h3></li>
                                    <li><a href="#">Privacy & Policy</a></li>
                                    <li><a href="#">Terms & Condition</a></li>

                                </ul>
                            </div>
                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <ul>
                                    <li><h3>Quick Links</h3></li>
                                    <li><a href="foodsafety">Food Satey</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="/contactus">Contact us</a></li>
                                </ul>
                            </div>

                            <div class="col-sm-3 col-md-3 col-lg-3">
                                <ul>
                                    <li><h3>Connect with us Socially</h3></li>
                                    <li><a href="#">Facebook</a></li>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Youtube</a></li>
                                    <li><a href="#">Pinterest</a></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <h5>Copyright 2022. All rights reserved.</h5>

                </div>


            </footer>
        )
    }
}
