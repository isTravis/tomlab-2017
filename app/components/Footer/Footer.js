import React from 'react';
import { Link } from 'react-router-dom';

require ('./footer.scss');

const Footer = function() {
	return (
		<nav className={'footer'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						TOM LAB 2017 facilitated by Raphael Schaad, MIT Media Lab. Site hosted on PubPub.
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
