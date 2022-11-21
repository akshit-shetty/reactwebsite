import React, { Component } from 'react'
import axios from "axios";

export default class ManageUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchpartner: '',
          partnerdata: [],
          value: ''
        }
    
      }
      onchange = e => {
        this.setState({ value: e.target.value });
    
      }
    
      changeofInput = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
      }
    
      searchMyData = (event) => {
        //alert(this.state.searchhigher+" "+this.state.searchlower+" "+this.state.searchtype);
       
        event.preventDefault();
        //call http://localhost:9090/searchprice/10/1000
        axios.get('searchuser/?role=' + this.state.searchpartner)
          .then((res) => {
            // console.log(res.data)
            this.setState({
              partnerdata: res.data
            })
          })
          .catch((error) => {
            console.log(error)
          })
      }
    
      render() {
        const { value } = this.state;
    
        const chead = <tr><th>Partner Address</th> </tr>;
    
        const cdata = this.state.partnerdata.map((ca, key) => <tr><td>{ca.address}</td></tr>);
    
    
        return (
          /*  <div class="search">
                              <form role="search" onSubmit={this.searchMyData}>
                                <label for="search">Search for stuff</label>
                                <div>Registration Number
                                  <input type="text" id="searchpartner" onChange={this.changeofInput} ></input> <br /></div>
                                <button type="submit">Search Data</button>
                              </form>
          
                            </div>
    
    
                            ---------------------------------------------------------------------
    
                             <div class="checkbox">
    
    
                        <fieldset>
                          <div class="rad">
                            <input type="radio" name="sizeBy" value="1" onChange={this.onchange} id="Westarn" />
                            <label for="Westarn">Westarn</label>
                            <input type="radio" name="sizeBy" value="2" onChange={this.onchange} id="Central" />
                            <label for="Central">Central</label>
                            <input type="radio" name="sizeBy" value="3" onChange={this.onchange} id="Southern" />
                            <label for="Southern">Southern</label>
                            <input type="radio" name="sizeBy" value="4" onChange={this.onchange} id="NaviMumbai" />
                            <label for="NaviMumbai">NaviMumbai</label>
                          </div>
                        </fieldset>
    
                      </div>
                      < div class="adminform">
                        {value === '1' && (
    
                          <div>
                            Hello
                          </div>
                        )}
                        {value === '2' && (
    
                          <div>
                            Kaise ho
                          </div>
                        )}
                        {value === '3' && (
    
                          <div>
                            Majjama
                          </div>
                        )}
                        {value === '4' && (
    
                          <div>
    
                            How are you
                          </div>
                        )}
    
    
                      </div>
                             */
          <div>
            <div>
              <nav>
                <a href="/riderdashboard">
                  <img src="./images/logo.png" class="logo" />
                </a>
                <label for="btn" class="icon">
                  <span class="fa fa-bars"></span>
                </label>
    
                <ul>
                  <li><a href="/riderdashboard">Dashboard</a></li>
                  <li>
    
                    <a href="#">Manage Users</a>
    
                    <ul >
                      <li><a href="managemember">Member</a></li>
                      <li><a href="managecaregiver">Caregiver</a></li>
                      <li><a href="managepartner">Partner</a></li>
                      <li><a href="managerider">Rider</a></li>
                      <li><a href="managevolunteer">Volunteer</a></li>
                      <li><a href="managedonor">Donor</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </nav>
            </div>
    
            <div class="meal">
              <div class="weeklymenu">
                <h1>Rider Dashboard</h1>
                <br />
                <br />
    
                <center>
                  <div >
                    <div className="col-sm-6">
    
                     
                    <div class="search">
                              <form role="search" onSubmit={this.searchMyData}>
                                <div>Part of Mumbai
                                  <input type="text" id="searchpartner" onChange={this.changeofInput} ></input> <br /></div>
                                <button type="submit">Search Data</button>
                              </form>
          
                            </div>
                      
                      <div class="ride">
                        <table border="1" >{chead}{cdata}</table>
                      </div>
                    </div>
                  </div>
                </center>
              </div>
            </div>
          </div>
        )
      }
}
