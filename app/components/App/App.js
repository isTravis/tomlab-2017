import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import Landing from 'components/Landing/Landing';
import Project from 'components/Project/Project';
import Footer from 'components/Footer/Footer';
import NoMatch from 'components/NoMatch/NoMatch';

require('./app.scss');

window.trackOutboundLink = function(url) {
	ga('send', 'event', 'outbound', 'click', url, {
		transport: 'beacon',
		hitCallback: function(){ document.location = url; }
	});
};

const App = function(props) {
	const pathname = props.location.pathname;

	let mode;
	if (pathname === '/sigin-ojulu') { mode = 'sigin'; }
	if (pathname === '/benjamin-hofmann') { mode = 'ben'; }
	if (pathname === '/nat-ware') { mode = 'nat'; }

	return (
		<div>

			<Nav mode={mode} />

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/:slug" component={Project} />
				<Route path="/404.html" component={NoMatch} />
			</Switch>

			<Footer />

		</div>
	);
};

export default withRouter(App);
