import React, { Component } from 'react'
import { Link } from "react-router-dom";


class Home extends Component {



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
									<li><a href="#">Admin</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
				<div class="home">
					<section id="banner">

						<div class="banner-text">
							<h1>Merry Meals</h1>
							<p>Don't be RUDE, donate some FOOD</p>

							<a href='/donation'>
								<div class="banner-btn">
									<span></span>Donate Now
								</div>
							</a>
						</div>

					</section>
					<section class="intro">


						<div class="col-12">
							<div class="title text-center ">


								<br />
								<p>
									<span> Feeding India,</span> a non-profit by <span>Merry Meals,</span> is dedicated towards making <span>India hunger-free.</span> With the help
									of our NGOs, kitchens and donors, we are moving one step
									closer to our goal every day. <span>Together,</span> we believe, we can ensure every qualified adults
									living at home who are unable to cook for themselves or maintain their nutritional status due to age,
									disease, or disability. has access to food daily.</p>
							</div>
						</div>

					</section>
					<section>

					</section>
					<div>

						<section class="blog" id="blog">
							<div class="event">
								<div class="row">


									<div class="col-12">
										<div class="title text-center ">
											<h1> Campaigns</h1>
											<div class="border"></div>
											<p>To express interest in volunteering please first fill out our Volunteer Registeration
												Form by first choosing one of the options below.</p>
										</div>
									</div>


									<article class="col-md-4 col-sm-6 col-xs-12 clearfix ">
										<div class="post-item">
											<center>
												<div class="media-wrapper">
													<img src="https://indiazakat.com/public/campaigns/large/3861620478211xbi9fkzgfizppunnx0n76hehztpwxvbwethjpyvc.jpg" alt="amazing caves coverimage" class="img-fluid" />
												</div>
											</center>

											<div class="content">
												<h3><a href="single-post.html">Feeding Homeless</a></h3>
												<br />
												<a href='/feedinghomeless'>
												<div class="btn btn-main">
													Know more
												</div>
												</a>
											</div>
										</div>
									</article>

									<article class="col-md-4 col-sm-6 col-xs-12 ">
										<div class="post-item">
											<center>
												<div class="media-wrapper">
													<img src="https://d279m997dpfwgl.cloudfront.net/wp/2020/09/0911_community-fridge01.jpg" alt="amazing caves coverimage" class="img-fluid" />
												</div>
											</center>
											<div class="content">
												<h3><a href="single-post.html">Collecting Leftover Food</a></h3>
												<br />
												<a href='/collectingleftoverfood'>
												<div class="btn btn-main">
													Know more
												</div>
												</a>
											</div>
										</div>
									</article>

									<article class="col-md-4 col-sm-6 col-xs-12 ">
										<div class="post-item">
											<center>
												<div class="media-wrapper">
													<img src="https://imgmedia.lbb.in/media/2019/12/5de77bed832e2d3eac0c2822_1575451629688.jpg" alt="amazing caves coverimage" class="img-fluid" />
												</div>
											</center>
											<div class="content">
												<h3><a href="single-post.html">Marathon For Fund Raising</a></h3>
												<br />
												<a href='/marathonforfundraising'>
												<div class="btn btn-main">
													Know more
												</div>
												</a>
											</div>
										</div>
									</article>


								</div>
							</div>
						</section>

						<section class="food">

							<div class="col-12">
								<div class="title text-center ">
									<h1> Food Saftey</h1>
									<div class="border"></div>
									<br />
									<p>
										MerryMeal is a charitable organization that prepares and delivers a hot noon meal to qualified adults
										living at home who are unable to cook for themselves or maintain their nutritional status due to age,
										disease, or disability.
										In early 2022, Merry Meals is expanding into general product deliveries with our various patners.
										In order to list into the Merry Meals online platform, partner Provide take FSSAI Certificate
										or license. Without an FSSAI license Merry Meals does not allow partner for listing into our application.</p>
								</div>
							</div>
							<br />
							<br />
							<center>
								<div class="btn btn-main"><a href='/foodsafety'>
									Know more</a>
								</div>
							</center>
						</section>
					</div>

				</div>
			</div>

		)
	}
}

export default Home