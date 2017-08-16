import React from 'react';

require('./footer.scss');

const Footer = function() {
	return (
		<nav className={'footer'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-8'}>
						<div className={'text'}>TOM-LAB 2017 facilitated by <a href={'https://www.raphaelschaad.com/'}>Raphael Schaad</a>, MIT Media Lab. Site hosted with <a href={'https://www.pubpub.org'}>PubPub</a>.</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
