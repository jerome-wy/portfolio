import React from 'react';
import Header from './Header';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function About() {
	return (
		<div className='About'>
			<content>
				<nav>
					<Header />
				</nav>
				<div className='about-left-container'>
					<p>
						Hi there! My name is <span>Jerome</span> and I am Full Stack
						Developer with a passion for design and coding. I have 11+ years of
						professional experience in Healthcare (Pharmacy) and have spent the
						last five in medical devices as a Project Manager. I've wanted to be
						a software engineer/web developer since I was 10 years old and in
						Nov 2021, I finally decided to go for it!
						<br />
						<br />
						Please do not hesitate to reach out to me! I'd love to chat and talk
						about how we can collaborate or if you want to talk code, design, or
						even gaming!
						<br />
						<br />
						<ul>
							<li>
								<SiLinkedin size={50} color={'#4b5e74'} />
							</li>
							<li>
								<SiGithub size={50} color={'#4b5e74'} />
							</li>
						</ul>
					</p>
				</div>
			</content>

			<div className='about-right-container'>
				<div className='home-logo-j'>j</div>
				<div className='home-logo-w'>w</div>
			</div>
		</div>
	);
}
