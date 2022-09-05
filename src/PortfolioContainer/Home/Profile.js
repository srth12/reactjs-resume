import React from 'react';
import Typical from 'react-typical';
import './Profile.css';

function Profile( props ) {
	return (
		<div className="profile-container">
			<div className="profile-parent">
				<div className="profile-details">
					<div className="colz">
						<div className="colz-icon">
							<a href="https://www.linkedin.com/in/srth12/">
								<i className="fa fa-linkedin"></i>
							</a>
							<a href="https://twitter.com/srth1">
								<i className="fa fa-twitter"></i>
							</a>
						</div>
					</div>
					<div className="profile-details-name">
						<span className="primary-text">
							{" "}
							Hello I'm <span className="highlighted-text"> Sarath Babu P B</span>
						</span>
					</div>
					<div className="profile-details-role">
						<span className="primary-text">
							{" "}
							<h1>
{" "}
								<Typical loop={Infinity} steps={[
									"Enthusiastic Dev 🫥",
									1000,
									"Backend Dev 👍🏻",
									1000,
									"Test1 Dev 👁",
									1000
								]}/>
							</h1>
							<span className="profile-role-tagline">
								Excellent Engineer in-progress
							</span>
						</span>
					</div>
					<div className="profile-options">
						<button className="btn primary-btn">
							{" "}
							Hire Me! {" "}
						</button>
						<a href="Sarath Latest CV.pdf" download="Sarath resume.pdf">
							<button className="btn highlighted-btn">Get Resume</button>
						</a>
					</div>
				</div>

				<div className="profile-picture">
					<div className="profile-picture-background">

					</div>
				</div>

			</div>
		</div>
	);
}

export default Profile;