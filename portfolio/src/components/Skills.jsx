import React from 'react';

export default function Skills() {
	return (
		<div className='Skills' id='skills'>
			{/* <h1>skills</h1> */}
			<div className='soft-skills-column'>
				<h1>Soft Skills</h1>
				<ul>
					<li>Project Management</li>
					<li>Strategic planning & Implementation</li>
					<li>Effective & Detailed Communicator</li>
					<li>Risk Management</li>
					<li>Stakeholder Management</li>
				</ul>
			</div>

			<div className='front-end-column'>
				<h1>Front-End</h1>
				<ul>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>React</li>
					<li>Redux</li>
					<li>React Libraries: React Icons, Recharts, Toastify</li>
					<li>Vue</li>
				</ul>
			</div>

			<div className='back-end-column'>
				<h1>Back-End</h1>
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
			</div>

			<div className='applications-column'>
				<h1>Applications</h1>

				<div className='applications-column-list'>
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
					</ul>

					<ul>
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
				</div>
			</div>
		</div>
	);
}
