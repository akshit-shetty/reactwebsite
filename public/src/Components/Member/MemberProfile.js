import React, { Component } from 'react'

class MemberProfile extends Component {
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

                

            </div>
        )
    }
}
export default MemberProfile