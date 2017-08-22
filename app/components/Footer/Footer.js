/* global trackOutboundLink */

import React from 'react';

require('./footer.scss');

const Footer = function() {
	const outLink = function(url) {
		return ()=> {
			trackOutboundLink(url);
			return false;
		};
	};

	return (
		<nav className={'footer'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-8'}>
						<p className={'text'}>TOM-LAB 2017 facilitated by <a href={'https://www.raphaelschaad.com/'} onClick={outLink('https://www.raphaelschaad.com/')} target={'_blank'}>Raphael Schaad</a>, <a href={'https://media.mit.edu'} onClick={outLink('https://media.mit.edu')} target={'_blank'}>MIT Media Lab</a>. Site hosted with <a href={'https://www.pubpub.org'} onClick={outLink('https://www.pubpub.org')} target={'_blank'}>PubPub</a>.</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
