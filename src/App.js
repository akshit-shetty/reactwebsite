import React,{Component} from 'react';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import MemberRegister from './Components/Member/MemberRegister';
import Home from './Components/Home';
import PartnerRegister from './Components/Partner/PartnerRegister';
import RiderRegister from './Components/Rider/RiderRegister';
import Admin from './Components/Admin/Admin';
import Member from './Components/Member/Member';
import Foot from './Components/Foot';
import Campaigns from './Components/Campaingns/Campaigns';
import FoodSafety from './Components/FoodSafety';
import NewCaregiver from './Components/Caregiver/NewCaregiver';
import Donation from './Components/Donation';
import Feeding from './Components/Campaingns/Feeding';
import Collecting from './Components/Campaingns/Collecting';
import Marathon from './Components/Campaingns/Marathon';
import PartnerDashboard from './Components/Partner/PartnerDashboard';
import RiderDashboard from './Components/Rider/RiderDashboard';
import CampaignRegister from './Components/Campaingns/CampaignRegister';
import Contactus from './Components/Contactus';
import Feedback from './Components/Feedback';
import MemberProfile from './Components/Member/MemberProfile';
import CaregiverDashboard from './Components/Caregiver/CaregiverDashboard';
import EditProfileCaregiver from './Components/Caregiver/EditProfileCaregiver';
import EditProfilePartner from './Components/Partner/EditProfilePartner';
import AdminLogin from './Components/Admin/AdminLogin';
import Logout from './Components/Logout';
import ManageUsers from './Components/Admin/ManageUsers';
import MealPlan from './Components/Admin/MealPlan';
import MealOrder from './Components/Partner/MealOrder';




class App extends Component{
  
  constructor() {
    super();
    this.state = {
      managemember:[],
      managepartner:[],
      managerider:[],  
      managevolunteer:[],
    }
  }
  componentDidMount() {
    

      axios.get('managemember')
      .then(res => {
        this.setState({
          managemember: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })

      axios.get('managepartner')
      .then(res => {
        this.setState({
          managepartner: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })

      axios.get('managerider')
      .then(res => {
        this.setState({
          managerider: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })

      axios.get('managevolunteer')
      .then(res => {
        this.setState({
          managevolunteer: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })

  
  }
  
    render(){
      return(
        <BrowserRouter>
        <div className="App">
        <div className="auth-wrapper">
          <div className="auth-inner">
              <Switch>
               <Route exact path= "/" component={Home} />
                <Route exact path= "/mregister" component={MemberRegister} />
                <Route exact path= "/cregister" component={NewCaregiver} />
                <Route exact path= "/pregister" component={PartnerRegister} />
                <Route exact path= "/rregister" component={RiderRegister} />
                
                <Route exact path= "/campaigns" component={Campaigns} />
                <Route exact path= "/campaignregister" component={CampaignRegister} />
                <Route exact path= "/feedinghomeless" component={Feeding} />
                <Route exact path= "/collectingleftoverfood" component={Collecting} />
                <Route exact path= "/collectingleftoverfood" component={CampaignRegister} />
                <Route exact path= "/marathonforfundraising" component={Marathon} />
                
                <Route exact path= "/admindashboard" component={Admin} />
                <Route exact path= "/mealplan" component={MealPlan} />
                <Route exact path= "/adminlogin" component={AdminLogin} />
                <Route exact path= "/manageusers" component={ManageUsers} />
                
              


                <Route exact path= "/memberdashboard"component={Member}/>
                <Route exact path= "/memberprofile" component={MemberProfile} />

                <Route exact path= "/caregiverdashboard"component={CaregiverDashboard}/>
                <Route exact path= "/editprofilecaregiver" component={EditProfileCaregiver} />

                <Route exact path= "/partnerdashboard"component={PartnerDashboard}/>
                <Route exact path= "/editprofilepartner" component={EditProfilePartner} />
                <Route exact path= "/mealorder" component={MealOrder} />


                <Route exact path= "/riderdashboard" component={RiderDashboard} />
                <Route exact path= "/foodsafety" component={FoodSafety} />

                

                <Route exact path= "/donation" component={Donation} />

                <Route exact path= "/feedback" component={Feedback} />

                <Route exact path= "/contactus" component={Contactus} />

                <Route exact path= "/logout" component={Logout} />

               






              </Switch>
         </div>
         </div>
         <Foot/>
         </div>
      </BrowserRouter>
      )
    }
}

export default App;