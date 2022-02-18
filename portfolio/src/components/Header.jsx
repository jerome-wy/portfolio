import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
	return (
		<div className='Header'>
			<ul>
				<li>
					<Link to='/about'>
						<button className='header-btn'>about</button>
					</Link>
				</li>

				<li>
					<Link to='/projects'>
						<button className='header-btn'>projects</button>
					</Link>
				</li>

				<li>
					<Link to='/skills'>
						<button className='header-btn'>skills</button>
					</Link>
				</li>
				<li>
					<Link to='/experience'>
						<button className='header-btn'>experience</button>
					</Link>
				</li>
			</ul>
		</div>
	);
}
