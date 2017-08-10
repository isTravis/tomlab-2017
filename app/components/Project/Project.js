import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import NoMatch from 'components/NoMatch/NoMatch';
import content from 'content';

const propTypes = {
	match: PropTypes.object.isRequired,
};

const Project = function(props) {
	const match = props.match;
	const projectData = content.projects.reduce((prev, current)=> {
		if (current.slug === match.params.slug) {
			return current;
		}
		return prev;
	}, {});

	if (!projectData.title) {
		return <NoMatch />;
	}

	return (
		<div className={'project-page accent'}>
			<Helmet>
				<title>{projectData.title} · TOMLAB 2017</title>
			</Helmet>

			<div className={`header hero-${projectData.heroImage}`}>
				<div className={'dark-background'} />
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12 project-title'}>
							<div className={'heavy'}>{projectData.title}</div>
							<div className={'subheader'}>{projectData.description}</div>
						</div>
					</div>
				</div>
			</div>

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						{/*<ReactMarkdown source={projectData.markdown} />*/}
						<div dangerouslySetInnerHTML={{ __html: projectData.html }} />
					</div>
				</div>
			</div>

		</div>
	);
};

Project.propTypes = propTypes;
export default withRouter(Project);
