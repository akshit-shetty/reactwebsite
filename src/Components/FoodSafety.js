import React, { Component } from 'react'

class FoodSafety extends Component {
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
                <div class="foodsafety">
                    <section class="foodsafe">


                        <div class="col-12">
                            <div class="title">

                            <h1> Food Saftey</h1>
                                <br />
                                <p>
                                    Good food hygiene ensures that food prepared for customers is safe to eat. It prevents harmful
                                    microorganisms that can cause serious illness from contaminating food,
                                    prevents cross contamination, enables businesses to comply with the law, and protects the reputation of the business.
                                </p>
                                <br />
                                <h2>Food safety investigation policy</h2>
                                <p>
                                    We prioritize members safety first and foremost in our Food Safety Investigation.
                                    We do not allow Partners to list meals with safety issues.
                                    Partners are responsible for ensuring that their meals are safe
                                    and in compliance with all applicable laws, regulations, and standards/practices.
                                    We expect and require, as per Merry Meals's policy, that Partners supply us with safe foods.</p>
                                <br />
                                <h2>Food safety investigation</h2>
                                <p>
                                    Food safety investigation is a series of activities we undertake to protect our customer safety.
                                    Such food safety investigations may arise because of unhygiene meals, misleading info/mislabeling,
                                    meal tampering, pest infestation or food quality induced injury/ illness/ allergic reaction
                                    that may affect the memeber's health and safety (claimed by members) In order to prevent or
                                    minimize the spread of safety risks, we may temporarily suspend your meals from providing to the members
                                    during the food safety investigation.</p>
                                <br />
                                <h2>What happens when I do not follow food safety investigation policy?</h2>
                                <p> The privilege of  products at Merry Meals may be suspended, if any of the following occurs:
                                    <ul>
                                        <li> We are unable to confirm food safety through the appeal/documents you have submitted.</li>
                                        <li>You have failed to submit the required documents and/or respond to the investigation questionnaire.</li></ul></p>
                                <br />
                                <h2> What happens when my ASIN Offer is suppressed due to a food safety investigation?</h2>
                                <p> We will send you an email notification with a description of the issue and the reason why your ASIN Offer
                                    has been suppressed. We also provide information in the notification for listing reinstatement, what documents
                                    should be submitted (if any), and the next steps to take. The subject title of the email will be formatted as
                                    [Merry Meals]Food SafetyInvestigation. If you are unable to locate the email, ensure that your primary email address
                                    is updated on Seller Central and reach out to  Partner Support for more assistance. You are required to
                                    submit a response with information within 5 Days. If you need more time to respond to the case, you can request
                                    it by replying to the email or on the Case Log in Seller Central.</p>
                                <br />

                                <h2>What are my responsibilities as an Merry Meals  Partner during the food safety investigation?</h2>
                                <p> Your responsibility is to provide correct information and documents during a food safety investigation.
                                    You may need to ask for cooperation from the manufacturer or importer to provide information as needed.</p>
                                <br />

                                <h2> How can I reinstate my ASIN Offer?</h2>
                                <p> To successfully reinstate ASIN Offers impacted by a food safety investigation, we may require documents
                                    to prove the safety and compliance of the product. Use the link provided in the e-mail notification with
                                    the subject title [Merry Meals]Food SafetyInvestigation to upload the requisite documents. It is important
                                    to provide the requested documentation within 5 days. If necessary, consult with the manufacturer or importer
                                    of the product that you are  by referring to the issue. If you require more time, please respond
                                    to the case in the Case Log in Seller Central or respond to the email. Additionally, you are required to
                                    complete the food safety investigation questionnaire submitted to you via email.</p>

                                <br />

                                <h2>What if my case has been closed due to no response or if Merry Meals deems the response insufficient?</h2>
                                 <p>A case will be closed if: a) you fail to respond within 5 days of receiving the email or, b) the 
                                      provided by you was insufficient. In these instances, please create a case at  Partner Support and 
                                      ensure that you provide the necessary information requested in the email with subject title [Merry Meals] 
                                      Food Safety Investigation in the new case. A Partner Support associate will reach out to the food 
                                      safety team for further review.</p>   
                            </div>
                            <div class="lisences">
                            <h2>Food Safety lisence (FASSAI)</h2>
                        <img src="https://www.professionalutilities.com/upload/Fssai%20Central%20License.png" alt="amazing caves coverimage" class="img-fluid" />
                        
                    </div>
                        </div>


                    </section>
                </div>
            </div>
        )
    }
}
export default FoodSafety
