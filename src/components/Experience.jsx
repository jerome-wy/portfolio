import React, { useState } from 'react';
import Header from './Header';
import { Animated } from 'react-animated-css';

export default function Experience() {
	const [experience1, toggleExperience1] = useState(false);
	const [experience2, toggleExperience2] = useState(false);
	const [experience3, toggleExperience3] = useState(false);
	const [experience4, toggleExperience4] = useState(false);

	return (
		<div className='Experience' id='experience'>
			<h1 className='section-title'>experience</h1>
			<div className='experience-item'>
				<div
					className='experience-item-title'
					onClick={() => toggleExperience1(!experience1)}>
					<h2>Software Engineering Immersive Fellow</h2>
					<h3>General Assembly</h3>
				</div>
			</div>
			<div
				className='experience-item'
				onClick={() => toggleExperience2(!experience2)}>
				{!experience2 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='experience-item-title'>
							<h2>Project Manager</h2>
							<h3>BD (Becton Dickinson and Company)</h3>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='experience-item-list'>
							<h2>Project Manager</h2>
							<h3>BD (Becton Dickinson and Company)</h3>
							<Animated
								animationIn='slideInUp'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<ul>
									<li>
										Management and oversight of assigned BD Pyxis Enterprise
										Server Software Upgrade projects
									</li>

									<li>
										Created strategic and detailed Project Plans to better
										provide transparency and visibility among clients and
										internal resources
									</li>

									<li>
										Established + Maintained new client relationships by
										providing exceptional, detailed customer service
									</li>

									<li>
										Demonstrated effective communication skills with clients,
										project teams, and leadership
									</li>

									<li>
										Led 10 to 15 Project Teams consisting of Systems Engineers,
										Integration Engineers, Remote Deployment Specialists and
										Implementation Consultants
									</li>

									<li>
										Initiated, Planned, Monitored, Executed, and Transitioned
										projects following the Tollgate Methodology
									</li>

									<li>
										Managed and Implemented Software Upgrade Projects to
										multiple healthcare organizations (multi-facility hospitals
										with 100 to 300+ devices)
									</li>

									<li>
										Consistent recipient of perfect Customer Experience/Success
										surveys
									</li>
								</ul>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div
				className='experience-item'
				onClick={() => toggleExperience3(!experience3)}>
				{!experience3 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='experience-item-title'>
							<h2>Product Implementation Analyst</h2>
							<h3>BD (Becton Dickinson and Company)</h3>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='experience-item-list'>
							<h2>Product Implementation Analyst</h2>
							<h3>BD (Becton Dickinson and Company)</h3>
							<Animated
								animationIn='slideInUp'
								animationOut='fadeOut'
								animationInDelay={1}
								animationOutDelay={6}
								isVisible={true}>
								<ul>
									<li>
										Configured and installed Pyxis Dispensing Products:
										MedStation & Anesthesia Station 4000/ES, Connect 2.9 & 3.1,
										CIISafe for 4000/ES
									</li>
									<li>
										Traveled onsite to hospitals/healthcare organizations to
										implement new installation of Pharmacy Automated Dispensing
										Devices
									</li>
									<li>
										Provided in-depth client training sessions for Nursing,
										Pharmacy, and Anesthesiology staff on how to properly use
										equipment and software
									</li>
									<li>
										Utilized Automated Remote Installation and Administration
										tool for accurate and effective installations
									</li>
									<li>
										Provided peer support for Automated Remote Installation and
										Administration (ARIA) as a SuperUser
									</li>
									<li>
										Prompt submissions of Inspection Logs and Equipment
										Confirmations to help reach Fiscal Year goals
									</li>
									<li>
										Analyzed and troubleshot situations proactively to prevent
										delays in project deadline
									</li>
									<li>
										Established and maintained client business relationships
									</li>
								</ul>
							</Animated>
						</div>
					</Animated>
				)}
			</div>

			<div
				className='experience-item'
				onClick={() => toggleExperience4(!experience4)}>
				{!experience4 ? (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationOutDelay={2}
						isVisible={true}>
						<div className='experience-item-title'>
							<h2>Clinical Systems Analyst</h2>
							<h3>Keck Medical Center of USC</h3>
						</div>
					</Animated>
				) : (
					<Animated
						animationIn='slideInDown'
						animationOut='fadeOut'
						animationInDelay={1}
						animationoutDelay={2}
						isVisible={true}>
						<div className='experience-item-list'>
							<h2>Clinical Systems Analyst</h2>
							<h3>Keck Medical Center of USC</h3>

							<Animated
								animationIn='slideInUp'
								animationOut='fadeOut'
								animationInDelay={5}
								animationOutDelay={6}
								isVisible={true}>
								<ul>
									<li>
										Supervise Pharmacy Buyer and oversee that Pharmacy
										purchasing is utilizing GPO and 340B pricing.
									</li>

									<li>Accurately manage Pharmacy purchasing reports</li>

									<li>
										Analyze purchasing trends and utilize 340B savings program
										by minimizing WAC spends
									</li>

									<li>
										Present data and total spends to appropriate Pharmacy
										Administration staff
									</li>

									<li>
										Project Management: Assist with facilitating project
										implementation plans and collaborate with appropriate
										departments on project needs
									</li>

									<li>
										BD Pyxis MedStation 4000 Systems Management: formulary
										maintenance; create descriptions, monitor daily activity,
										and implement new equipment and devices
									</li>

									<li>
										Maintain Pyxis MedStation capacity in correspondence with
										usage to reduce cost and waste of pharmacy inventory
									</li>

									<li>
										Extract software generated report data and compile into
										neat, user-friendly spreadsheets and/or presentations
									</li>

									<li>
										Serve and act as a liaison between administration, clinical,
										and IT staff regarding medication management procedures
									</li>

									<li>
										Review invoices/packing slips of purchased pharmaceuticals
										to ensure drug pedigree information required by the Drug
										Supply Chain Security Act (DSCSA)
									</li>

									<li>
										Facilitate training, installation, maintenance, and overall
										use of medication management tools (i.e. Pyxis, Barcode
										Medication Administration, Codonics)
									</li>

									<li>
										Cerner Millennium: Maintain and update NDC's to comply with
										BCMA policies and procedures, Charge and credit
										miscellaneous patient charges, update locations and insure
										cross platform interface connectivity with BD products
									</li>
								</ul>
							</Animated>
						</div>
					</Animated>
				)}
			</div>
		</div>
	);
}
