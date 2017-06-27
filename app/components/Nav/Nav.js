import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function() {
	return (
		<nav className={'navbar'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<Link to={'/'} className={'logo heavy'}>TOM LAB 2017</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
