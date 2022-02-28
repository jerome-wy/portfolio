import React, { useState } from 'react';
import { Animated } from 'react-animated-css';

export default function Experience() {
	const [experience1, toggleExperience1] = useState(false);
	const [experience2, toggleExperience2] = useState(false);
	const [experience3, toggleExperience3] = useState(false);
	const [experience4, toggleExperience4] = useState(false);
	const [experience5, toggleExperience5] = useState(false);
	const [experience6, toggleExperience6] = useState(false);
	const [experience7, toggleExperience7] = useState(false);

	return (
		<div className='Experience' id='experience'>
			<h1 className='section-title'>experience</h1>

			<div className='experience-item-container'>
				<div className='experience-item'>
					<div
						className='experience-item-title'
						onClick={() => toggleExperience1(!experience1)}>
						<img src='https://i.imgur.com/fpM6doD.png' />
						<h2>Software Engineering Immersive Fellow</h2>
						<h3>General Assembly</h3>
						<h4>2021 to 2022</h4>
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
								<img src='https://i.imgur.com/OzCjP78.png' />

								<h2>
									Project Manager <br /> // software upgrades
								</h2>
								<h3>BD (Becton Dickinson and Company)</h3>
								<h4>2018 to 2021</h4>
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
											Managed and oversaw of assigned BD Pyxis Enterprise Server
											Software Upgrade projects
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
											Led 10 to 15 Project Teams consisting of Systems
											Engineers, Integration Engineers, Remote Deployment
											Specialists and Implementation Consultants
										</li>

										<li>
											Initiated, Planned, Monitored, Executed, and Transitioned
											projects following the Tollgate Methodology
										</li>

										<li>
											Managed and Implemented Software Upgrade Projects to
											multiple healthcare organizations (multi-facility
											hospitals with 100 to 300+ devices)
										</li>

										<li>
											Consistent recipient of perfect Customer
											Experience/Success surveys
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
								<img src='https://i.imgur.com/OzCjP78.png' />

								<h2>Product Implementation Analyst</h2>
								<h3>BD (Becton Dickinson and Company)</h3>
								<h4>2016 to 2018</h4>
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
											MedStation & Anesthesia Station 4000/ES, Connect 2.9 &
											3.1, CIISafe for 4000/ES
										</li>
										<li>
											Traveled onsite to hospitals/healthcare organizations to
											implement new installation of Pharmacy Automated
											Dispensing Devices
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
											Provided peer support for Automated Remote Installation
											and Administration (ARIA) as a SuperUser
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
								<img src='https://i.imgur.com/QwnXDBw.png' />

								<h2>Clinical Systems Analyst</h2>
								<h3>Keck Medical Center of USC</h3>
								<h4>2013 to 2016</h4>
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
											Serve and act as a liaison between administration,
											clinical, and IT staff regarding medication management
											procedures
										</li>

										<li>
											Review invoices/packing slips of purchased pharmaceuticals
											to ensure drug pedigree information required by the Drug
											Supply Chain Security Act (DSCSA)
										</li>

										<li>
											Facilitate training, installation, maintenance, and
											overall use of medication management tools (i.e. Pyxis,
											Barcode Medication Administration, Codonics)
										</li>

										<li>
											Cerner Millennium: Maintain and update NDC's to comply
											with BCMA policies and procedures, Charge and credit
											miscellaneous patient charges, update locations and insure
											cross platform interface connectivity with BD products
										</li>
									</ul>
								</Animated>
							</div>
						</Animated>
					)}
				</div>

				<div
					className='experience-item'
					onClick={() => toggleExperience5(!experience5)}>
					{!experience5 ? (
						<Animated
							animationIn='slideInDown'
							animationOut='fadeOut'
							animationInDelay={1}
							animationOutDelay={2}
							isVisible={true}>
							<div className='experience-item-title'>
								<img src='https://i.imgur.com/X7z3b54.png' />

								<h2>Pharmacy Technician</h2>
								<h3>Children's Hospital Los Angeles</h3>
								<h4>2011 to current</h4>
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
								<h2>Pharmacy Technician</h2>
								<h3>Children's Hospital Los Angeles</h3>

								<Animated
									animationIn='slideInUp'
									animationOut='fadeOut'
									animationInDelay={5}
									animationOutDelay={6}
									isVisible={true}>
									<ul>
										<li>
											Provide unit-based service to inpatient units (Pediatric
											ICU, Neonatal ICU, Cardiothoracic ICU, Bone Marrow
											Transplant, and Med Surg)
										</li>
										<li>
											Utilize BD Pyxis MedStation 4000 Systems to properly
											track, document, and manage medication inventory
										</li>
										<li>
											Proficiency in BD Pyxis CIISafe: appropriately use the
											CIISafe software to maintain controlled substance
											inventories within the CIISafe and Pyxis MedStation 4000
											systems
										</li>
										<li>
											Individual Patient-specific Sterile and Non-Sterile
											Medication Preparation to reduce medication errors and
											provide precise doses
										</li>
										<li>
											Apply applicable pharmacy practices when using Pharmacy
											Information Systems and Software: Cerner Millennium +
											MILT4
										</li>
									</ul>
								</Animated>
							</div>
						</Animated>
					)}
				</div>

				<div
					className='experience-item'
					onClick={() => toggleExperience6(!experience6)}>
					{!experience6 ? (
						<Animated
							animationIn='slideInDown'
							animationOut='fadeOut'
							animationInDelay={1}
							animationOutDelay={2}
							isVisible={true}>
							<div className='experience-item-title'>
								<img src='https://i.imgur.com/zTeKKEl.png' />

								<h2>Pharmacy Technician</h2>
								<h3>University of California Irvine Medical Center</h3>
								<h4>2014 to 2015</h4>
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
								<h2>Pharmacy Technician</h2>
								<h3>University of California Irvine Medical Center</h3>

								<Animated
									animationIn='slideInUp'
									animationOut='fadeOut'
									animationInDelay={5}
									animationOutDelay={6}
									isVisible={true}>
									<ul>
										<li>
											Provide unit-based service to inpatient units (Pediatric
											ICU, Neonatal ICU, Cardiothoracic ICU, Bone Marrow
											Transplant, and Med Surg)
										</li>
										<li>
											Utilize BD Pyxis MedStation 4000 Systems to properly
											track, document, and manage medication inventory
										</li>
										<li>
											Proficiency in BD Pyxis CIISafe: appropriately use the
											CIISafe software to maintain controlled substance
											inventories within the CIISafe and Pyxis MedStation 4000
											systems
										</li>
										<li>
											Individual Patient-specific Sterile and Non-Sterile
											Medication Preparation to reduce medication errors and
											provide precise doses
										</li>
										<li>
											Apply applicable pharmacy practices when using Pharmacy
											Information Systems and Software: Cerner Millennium +
											MILT4
										</li>
									</ul>
								</Animated>
							</div>
						</Animated>
					)}
				</div>
			</div>
		</div>
	);
}
