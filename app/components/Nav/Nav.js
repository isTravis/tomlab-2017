import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	return (
		<nav className={'navbar'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<Link to={'/'} className={'nav-logo'}>
							<img alt={'St. Gallen Logo'} src={'/images/stGallenBlack.png'} />
						</Link>
						<Link to={'/'} className={'nav-title'}>
							<span>TOM LAB 2017</span>
						</Link>
						
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
