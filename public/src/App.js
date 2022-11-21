import React,{Component} from 'react';
import axios from "axios";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import MemberRegister from './Components/Member/MemberRegister';
import CaregiverRegister from './Components/Caregiver/CaregiverRegister';
import Home from './Components/Home';
import PartnerRegister from './Components/Partner/PartnerRegister';
import RiderRegister from './Components/Rider/RiderRegister';
import Admin from './Components/Admin/Admin';
import test from './Components/Dashboard/test';
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
import EditProfileMember from './Components/Member/EditProfileMember';
import EditProfilePartner from './Components/Partner/EditProfilePartner';
import ManageMember from './Components/Admin/ManageMember';


class App extends Component{
  
  constructor() {
    super();
    this.state = {
      mealplan: [],
      managemember:[]

    }
  }
  componentDidMount() {
    axios.get('showmealplan')
      .then(res => {
        this.setState({
          mealplan: res.data
        })
      })
      .catch(error => {
        console.log(error);
      })

      axios.get('managemember')
      .then(res => {
        this.setState({
          managemember: res.data
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
                <Route exact path= "/cregister" component={CaregiverRegister} />
                <Route exact path= "/pregister" component={PartnerRegister} />
                <Route exact path= "/rregister" component={RiderRegister} />
                
                <Route exact path= "/campaigns" component={Campaigns} />
                <Route exact path= "/campaignregister" component={CampaignRegister} />
                <Route exact path= "/feedinghomeless" component={Feeding} />
                <Route exact path= "/collectingleftoverfood" component={Collecting} />
                <Route exact path= "/collectingleftoverfood" component={CampaignRegister} />
                <Route exact path= "/marathonforfundraising" component={Marathon} />
                
                <Route exact path= "/admindashboard" component={Admin} />
                <Route exact path= "/managemember"><ManageMember data={this.state.managemember}></ManageMember></Route>


                <Route exact path= "/memberdashboard"><Member data={this.state.mealplan}></Member></Route>
                <Route exact path= "/memberprofile" component={MemberProfile} />
                <Route exact path= "/editprofilemember" component={EditProfileMember} />

                <Route exact path= "/caregiverdashboard"><CaregiverDashboard data={this.state.mealplan}></CaregiverDashboard></Route>
                <Route exact path= "/editprofilecaregiver" component={EditProfileCaregiver} />

                <Route exact path= "/partnerdashboard"><PartnerDashboard data={this.state.mealplan}></PartnerDashboard></Route>
                <Route exact path= "/editprofilepartner" component={EditProfilePartner} />


                <Route exact path= "/riderdashboard" component={RiderDashboard} />
                <Route exact path= "/foodsafety" component={FoodSafety} />
                
                <Route exact path= "/test" component={test} />
                <Route exact path= "/creg" component={NewCaregiver} />

                <Route exact path= "/donation" component={Donation} />

                <Route exact path= "/feedback" component={Feedback} />

                <Route exact path= "/contactus" component={Contactus} />



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