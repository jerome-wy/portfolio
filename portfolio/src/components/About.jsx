import React from 'react';
import Header from './Header';
import { SiLinkedin, SiGithub } from 'react-icons/si';

export default function About() {
	return (
		<div className='About'>
			<h1>// about</h1>
			<content>
				<p>
					Hi there! My name is <span>Jerome Wy</span> and I am Full Stack
					Developer with a passion for design and coding. I have 11+ years of
					professional experience in Healthcare (Pharmacy) and have spent the
					last five in medical devices as a Project Manager. I've wanted to be a
					software engineer/web developer since I was 10 years old coding anime
					websites and in Nov 2021, I finally decided to go for it!
					<br />
					<br />
					If you want to chat about a collaboration or if you just want to chat
					in general, feel free to reach out to me!
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
			</content>
		</div>
	);
}
