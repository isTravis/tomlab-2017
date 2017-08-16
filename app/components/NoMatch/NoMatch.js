import React from 'react';
import Helmet from 'react-helmet';

require('./nomatch.scss');

const NoMatch = function() {
	return (
		<div className={'nomatch'}>
			<Helmet title="Not Found · TOMLAB 2017" />
			<h1>Page not found</h1>
		</div>
	);
};

export default NoMatch;
