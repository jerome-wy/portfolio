import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

export default function Projects() {
	const [projects1, toggleProjects1] = useState(false);
	const [projects2, toggleProjects2] = useState(false);
	const [projects3, toggleProjects3] = useState(false);
	const [projects4, toggleProjects4] = useState(false);
	const [screenshot1, toggleScreenshot1] = useState(false);
	const [screenshot2, toggleScreenshot2] = useState(false);
	const [screenshot3, toggleScreenshot3] = useState(false);
	const [screenshot4, toggleScreenshot4] = useState(false);

	return (
		<div className='Projects' id='projects'>
			<h1 className='section-title'>projects</h1>

			<div
				className='project-item-container'
				onClick={() => toggleProjects1(!projects1)}>
				{!projects1 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='project-item-desc'>
							<h2>nerdfeed</h2>
							<h3>MongoDB, Express, React, Node</h3>
							<h3>
								<span>full stack</span>
							</h3>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='project-item'>
							<h2>nerdfeed</h2>
							<h3>MongoDB, Express, React, Node</h3>
							<h4>
								<a
									href='https://www.github.com/jerome-wy/NerdFeed/'
									alt='Link to site'>
									GitHub
								</a>
							</h4>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<p>
									<i>
										This project was created as my second Project for General
										Assembly's Software Engineering Immersive Porogram
									</i>
								</p>
								<ul>
									<li>
										Created a web application using MongoDB, Express, React, and
										Node
									</li>
									<li>
										Full CRUD Functionality to create, read, update, and delete
										posts
									</li>
									<li>
										Posts are stored on an external database: MongoDB Compass
									</li>
								</ul>
								<center>
									<img
										src='https://camo.githubusercontent.com/7b35060a783d9d39a3dc7d9f66a3c31db44b7f7eb94dccfe909cc6591d6f985f/68747470733a2f2f692e696d6775722e636f6d2f4f6a72625633432e706e67'
										alt='screenshot-1'
									/>
									<img
										src='https://camo.githubusercontent.com/6938907ac40b15427a7eb0c8bddda8d48221fe46d0af85fcaa988857883e185f/68747470733a2f2f692e696d6775722e636f6d2f4c487a6a6b51612e706e67'
										alt='screenshot-2'
									/>
								</center>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div
				className='project-item-container'
				onClick={() => toggleProjects2(!projects2)}>
				{!projects2 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='project-item-desc'>
							<h2>anchr</h2>
							<h3>MongoDB, Express, React, Node</h3>{' '}
							<h3>
								<span>full stack</span>
							</h3>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='project-item'>
							<h2>anchr</h2>
							<h3>MERN Full Stack</h3>
							<h4>
								<a
									href='https://github.com/narrwep27/full_stack_PERN_anchr'
									alt='Link to site'>
									GitHub
								</a>
								|
								<a href='https://anchr-app.herokuapp.com' alt='Link to site'>
									Heroku
								</a>
							</h4>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<p>
									<i>
										This was a Group Project which I had the pleasure of working
										with three other full-stack developers on.
									</i>
								</p>
								<ul>
									<li>
										Full Stack app created using PostgreSQL, Express, React, and
										Node
									</li>
									<li>
										Task prioritization application created to better manage
										time and prioritize specific tasks
									</li>
									<li>
										User authentication implemented for both Front-End and
										Back-End using JWT Auth
									</li>
									<li>
										Summarized chart provided using React Library - Recharts App
										successfully deployed on Heroku
									</li>
								</ul>
								<center>
									<img
										src='https://camo.githubusercontent.com/9bff2d17f4d8be10c0d60513d30f240441f2d741724b6c052d0384229d88a138/68747470733a2f2f692e696d6775722e636f6d2f4b6c596d666e532e706e67'
										alt='screenshot-1'
									/>
									<img
										src='https://camo.githubusercontent.com/ddb82c9cf658f490e1ec529adbd4976e10f1f0b816e961507a58ee3c2b59220e/68747470733a2f2f692e696d6775722e636f6d2f514b74644454492e706e67'
										alt='screenshot-2'
									/>
									<img
										src='https://camo.githubusercontent.com/93af335a615b16fc4e8a4bb8fa92ea750b865afea3daa4eaefcbe467688ec67c/68747470733a2f2f692e696d6775722e636f6d2f704d4a5976676f2e706e67'
										alt='screenshot-3'
									/>
								</center>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div
				className='project-item-container'
				onClick={() => toggleProjects3(!projects3)}>
				{!projects3 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='project-item-desc'>
							<h2>calendr</h2>
							<h3>PostgreSQL, Python, Django, Vue</h3>{' '}
							<h3>
								<span>full stack</span>
							</h3>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='project-item'>
							<h2>calendr</h2>
							<h3>Full Stack - PostgreSQL, Python, Django, Vue</h3>

							<h4>
								<a
									href='https://github.com/domdelorenzo/calendr'
									alt='Link to site'>
									GitHub
								</a>
							</h4>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<p>
									<i>
										As part of General Assembly's Software Engineering
										Immersive, my group was tasked with creating a Full Stack
										application using Vue.js on the front-end with a Python +
										Django back-end.
									</i>
								</p>

								<ul>
									<li>
										Full Stack app created using Python + Django, Vue, and Node
									</li>
									<li>
										Utilized a Vue Library called V-Calendar to generate
										calendar
									</li>
									<li>
										User is able to select a specific date and add a task or
										event
									</li>
									<li>App created in only 36 hours</li>
								</ul>
								<center>
									<img
										src='https://i.imgur.com/QvjYot4.png'
										alt='screenshot-1'
									/>
								</center>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div className='project-item-container'>
				{!projects4 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div
							className='project-item-desc'
							onClick={() => toggleProjects4(!projects4)}>
							<h2>procrastigmr</h2>
							<h3>PostgreSQL, Python, Django, React</h3>{' '}
							<h3>
								<span>full stack</span>
							</h3>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInUp'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div
							className='project-item'
							onClick={() => toggleProjects4(!projects4)}>
							<h2>procrastigamr</h2>
							<h3>Full Stack - PostgreSQL, Python, Django, React</h3>
							<h4>
								<a href='https://github.com/jerome-wy/gamr' alt='Link to site'>
									GitHub
								</a>
							</h4>

							<Animated
								animationIn='fadeIn'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<p>
									<i>
										This project is my capstone project for General Assembly's
										Software Engineering Immersive Program which used React on
										the front-end and a Python + Django back-end.
									</i>
								</p>
								<ul>
									<li>
										Full stack app created using Python + Django + Django Rest
										Framework, React, and Node
									</li>
									<li>
										CRUD Users are able to add a game to a local database as
										well as add reviews
									</li>
									<li>
										Used CSS Grid and Flexbox for front-end styling and
										organization
									</li>
								</ul>
								<center>
									<img
										src='https://i.imgur.com/V7fMV0F.png'
										alt='screenshot-1'
									/>
									<img
										src='https://i.imgur.com/67OwfcL.png'
										alt='screenshot-2'
									/>
									<img
										src='https://i.imgur.com/BbBNpaT.png'
										alt='screenshot-3'
									/>
									<img
										src='https://i.imgur.com/0xlGW2n.png'
										alt='screenshot-4'
									/>
									<img
										src='https://i.imgur.com/KjPziow.png'
										alt='screenshot-5'
									/>
									<img
										src='https://i.imgur.com/4Vf4rMz.png'
										alt='screenshot-6'
									/>
								</center>
							</Animated>
						</div>
					</Animated>
				)}
			</div>
		</div>
	);
}
