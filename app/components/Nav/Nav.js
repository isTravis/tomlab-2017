import React from 'react';
import { Link } from 'react-router-dom';

require('./nav.scss');

const NavBar = function(props) {
	const mode = props.mode;

	return (
		<nav className={`navbar ${mode}`}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-10'}>
						<a href={'http://www.symposium.org'} onClick={()=>{ window.trackOutboundLink('http://www.symposium.org'); return false; }} target={'_blank'} className={'nav-logo'}>
							{mode
								? <img alt={'St. Gallen Logo'} src={'/images/stGallenWhite.png'} />
								: <img alt={'St. Gallen Logo'} src={'/images/stGallenBlack.png'} />
							}
						</a>
						<Link to={'/'} className={'nav-title'}>
							<span>TOM-LAB 2017</span>
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
