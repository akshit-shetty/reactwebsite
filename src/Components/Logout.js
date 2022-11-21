import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Logout extends Component {
    componentDidMount(){
       
        
        this.props.history.push({
            pathname: '/'
          })
        
    
    }
      render() {
        localStorage.removeItem("login");
        return (
          <div class="logout">
              <center>
                        <h1 class="text-custom font-weight-normal mb-3">You have been Logged out!!!</h1><br/>
                        <Link to={'/login'} >
                                    <button className="btn btn-danger btn-block" type="submit" >Login Again</button>
                                    </Link>
    
                    </center>
            
              </div>
        )
      }
}
