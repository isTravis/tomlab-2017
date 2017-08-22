import React from 'react';

require('./footer.scss');

const Footer = function() {
	return (
		<nav className={'footer'}>
			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-8'}>
						<p className={'text'}>TOM-LAB 2017 facilitated by <a href={'https://www.raphaelschaad.com/'} onClick={()=>{ window.trackOutboundLink('https://www.raphaelschaad.com/'); return false; }} target={'_blank'}>Raphael Schaad</a>, <a href={'https://media.mit.edu'} onClick={()=>{ window.trackOutboundLink('https://media.mit.edu'); return false; }} target={'_blank'}>MIT Media Lab</a>. Site hosted with <a href={'https://www.pubpub.org'} onClick={()=>{ window.trackOutboundLink('https://www.pubpub.org'); return false; }} target={'_blank'}>PubPub</a>.</p>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Footer;
