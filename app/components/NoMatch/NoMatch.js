import React from 'react';
import Helmet from 'react-helmet';

const NoMatch = function() {
	return (
		<div id={'nomatch-page'}>
			<Helmet title="Not Found · TOMLAB 2017" />
			<h1>Page not found</h1>
		</div>
	);
};

export default NoMatch;
