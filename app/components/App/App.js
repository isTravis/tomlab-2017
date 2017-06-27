import React from 'react';
import Helmet from 'react-helmet';
import { Route, withRouter, Switch } from 'react-router-dom';
import Nav from 'components/Nav/Nav';
import Landing from 'components/Landing/Landing';
import Project from 'components/Project/Project';
import NoMatch from 'components/NoMatch/NoMatch';

require('./app.scss');


const App = function() {
	return (
		<div>
			<Helmet>
				<title>TOM LAB 2017</title>
				<meta name="description" content="TOM LAB 2017 - St. Gallen Symposium – empowering the young" />
			</Helmet>

			<Nav />

			<Switch>
				<Route exact path="/" component={Landing} />
				<Route path="/:slug" component={Project} />
				<Route path="/404.html" component={NoMatch} />
			</Switch>
		</div>
	);
};

export default withRouter(App);
