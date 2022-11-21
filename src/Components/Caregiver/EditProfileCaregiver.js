import React, { Component } from 'react'

class EditProfileCaregiver extends Component {
  render() {
    return (
      <div>
         <div>
                        <nav>
                            <a href="/">
                                <img src="./images/logo.png" class="logo" />
                            </a>
                            <label for="btn" class="icon">
                                <span class="fa fa-bars"></span>
                            </label>

                            <ul>
                                <li><a href="/caregiverdashboard">Dashboard</a></li>
                                <li><a href="#">Profile</a></li>
                                <li><a href="/feedback">Feedback</a></li>
                                <li><a href="#">logout</a></li>
                            </ul>
                        </nav>
                    </div>
      
      <div class="caregiveredit">
        <h1>Edit Profile</h1>
        <div class="container rounded ">
          <div class="row">
            <div class="col-md-1">
            </div> <div class="col-md-5 border-right">
              <div class="careedit">
                <div class="d-flex justify-content-between align-items-center mb-3">
                  <h4 class="text-right">Caregiver Profile Setting</h4>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Name</label>
                    <input type="text" class="form-control" placeholder="Enter mobile number" value="" />
                  </div>
                  <div class="col-md-12"><label class="labels">Email ID</label>
                    <input type="email" class="form-control" placeholder="Enter email id" value="" />
                  </div>
                  <div class="col-md-12">
                    <label class="labels">Mobile Number</label>
                    <input type="text" class="form-control" placeholder="Enter mobile number" value="" />
                  </div>
                  <div class="col-md-12"><label class="labels">Caregiver Realtion with Member</label>
                    <input type="text" class="form-control" placeholder="Caregiver Realtion with Member" value="" />
                  </div>
                  <div class="col-md-12"><label class="labels">Password</label>
                    <input type="password" class="form-control" placeholder="password" value="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="p-3 py-5">
                <div class="p-3 py-5">
                  <div class="d-flex justify-content-between align-items-center mb-3">
                    <h4 class="text-right">Member Profile Setting</h4>
                  </div>
                  <div class="row mt-2">
                    <div class="col-md-12">
                      <label class="labels">Name</label>
                      <input type="text" class="form-control" placeholder="Enter mobile number" value="" />
                    </div>
                    <div class="col-md-12"><label class="labels">Email ID</label>
                      <input type="email" class="form-control" placeholder="Enter email id" value="" />
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Address</label>
                      <input type="text" class="form-control" placeholder="Enter address" value="" />
                    </div>
                    <div class="col-md-12">
                      <label class="labels">Mobile Number</label>
                      <input type="text" class="form-control" placeholder="Enter mobile number" value="" />
                    </div>
                    <div class="col-md-12"><label class="labels">Part of Mumbai</label>
                      <input type="text" class="form-control" placeholder="Part of Mumbai" value="" />
                    </div>
                    <div class="col-md-12"><label class="labels">Meal Service Duration</label>
                      <input type="text" class="form-control" placeholder="Meal Service Duration" value="" />
                    </div>
                    <div class="col-md-12"><label class="labels">Password</label>
                      <input type="password" class="form-control" placeholder="password" value="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3  text-center">
            <button class="profile-button" type="button">
              Save Profile</button>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default EditProfileCaregiver