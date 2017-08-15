import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = function(props) {
	const mode = props.mode;

	return (
		<nav className={`navbar ${mode}`}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-10'}>
						<Link to={'/'} className={'nav-logo'}>
							{mode
								? <img alt={'St. Gallen Logo'} src={'/images/stGallenWhite.png'} />
								: <img alt={'St. Gallen Logo'} src={'/images/stGallenBlack.png'} />
							}
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
