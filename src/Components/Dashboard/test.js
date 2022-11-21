import React, { Component } from 'react'
import '../test.scss';

export default class extends Component {
  render() {
    return (
      <div class="b">
      <h1 class="page-header">Multi-Step Form with CSS Only</h1>
      <div class="form-container">
        <form action="" role="form">
          <input id='step2' type='checkbox'/>
            <input id='step3' type='checkbox'/>

              <div id="part1" class="form-group">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title">Part 1</h3>
                  </div>
                  <input type="text" id="name" class="form-control" placeholder="Full Name" aria-describedby="sizing-addon1"/>
                    <div class="btn-group btn-group-lg" role="group" aria-label="...">
                      <label for='step2' id="continue-step2" class="continue">
                        <div class="btn btn-default btn-success btn-lg">Continue</div>
                      </label>
                    </div>
                </div>
              </div>

              <div id="part2" class="form-group">
                <div class="panel panel-primary">
                  <div class="panel-heading">
                    <h3 class="panel-title">Part 2</h3>
                  </div>
                  <input type="email" id="email" class="form-control" placeholder="Email"/>
                    <input type="phone" id="phone" class="form-control" placeholder="Phone"/>
                      <input type="number" id="zip" class="form-control" placeholder="Zip Code"/>
                        <div class="btn-group btn-group-lg btn-group-justified" role="group" aria-label="...">

                          <label for='step2' id="back-step2" class="back">
                            <div class="btn btn-default btn-primary btn-lg" role="button">Back</div>
                          </label>


                          <label for='step3' id="continue-step3" class="continue">
                            <div class="btn btn-default btn-success btn-lg" role="button">Continue</div>
                          </label>

                        </div>
                      </div>
                    </div>

                    <div id="part3" class="form-group">
                      <div class="panel panel-primary">
                        <div class="panel-heading">
                          <h3 class="panel-title">Part 3</h3>
                        </div>
                        <textarea id="message" class="form-control" placeholder="Message"></textarea>
                        <div class="btn-group btn-group-lg" role="group" aria-label="...">
                          <label for='step3' id="back-step3" class="back">
                            <div class="btn btn-default btn-primary btn-lg">Back</div>
                          </label>
                          <label class="continue">
                            <button type="submit" class="btn btn-default btn-success btn-lg">Submit</button>
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
    )
  }
}
