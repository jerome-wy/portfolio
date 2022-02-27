import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

export default function Skills() {
	const [skills1, toggleSkills1] = useState(false);
	const [skills2, toggleSkills2] = useState(false);
	const [skills3, toggleSkills3] = useState(false);
	const [skills4, toggleSkills4] = useState(false);

	return (
		<div className='Skills' id='skills'>
			<h1 className='section-title'>skills</h1>

			<div
				className='skills-div-container'
				onClick={() => toggleSkills1(!skills1)}>
				{!skills1 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-title'>
							<h2>professional</h2>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-list'>
							<h2>professional</h2>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={1}
								animationOutDelay={2}
								isVisible={true}>
								<ul>
									<li>Project Management</li>
									<li>Strategic planning & Implementation</li>
									<li>Effective & Detailed Communicator</li>
									<li>Risk Management</li>
									<li>Stakeholder Management</li>
								</ul>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div
				className='skills-div-container'
				onClick={() => toggleSkills2(!skills2)}>
				{!skills2 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-title'>
							<h2>front-end</h2>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-list'>
							<h2>front-end</h2>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<ul>
									<li>HTML5</li>
									<li>CSS3</li>
									<li>JavaScript</li>
									<li>React</li>
									<li>Redux</li>
									<li>React Libraries: React Icons, Recharts, Toastify</li>
									<li>Vue</li>
								</ul>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div
				className='skills-div-container'
				onClick={() => toggleSkills3(!skills3)}>
				{!skills3 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-title'>
							<h2>back-end</h2>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-list'>
							<h2>back-end</h2>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<ul>
									<li>Python</li>
									<li>Django</li>
									<li>Django Rest Framework</li>
									<li>PostgreSQL</li>
									<li>MongoDB</li>
									<li>Mongoose</li>
									<li>Express</li>
									<li>Sequelize</li>
									<li>REST APIs</li>
									<li>Node</li>
									<li>Nodemon</li>
								</ul>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div
				className='skills-div-container'
				onClick={() => toggleSkills4(!skills4)}>
				{!skills4 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-title'>
							<h2>applications</h2>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='skills-list'>
							<h2>applications</h2>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<ul>
									<li>Adobe Photoshop</li>
									<li>Adobe XD</li>
									<li>Adobe Illustrator</li>
									<li>Adobe InDesign</li>
									<li>Microsoft Word</li>
									<li>Microsoft Excel</li>
									<li>Microsoft OneNote (my favorite!)</li>
									<li>Microsoft Planner</li>
									<li>Microsoft SharePoint</li>
									<li>Microsoft PowerPoint</li>
									<li>Insomnia</li>
									<li>MongoDB Compass</li>
									<li>Zoom</li>
									<li>Whimsical</li>
									<li>Trello</li>
									<li>Salesforce</li>
									<li>SAP</li>
									<li>Qlikview</li>
								</ul>
							</Animated>
						</div>
					</Animated>
				)}
			</div>
		</div>
	);
}
