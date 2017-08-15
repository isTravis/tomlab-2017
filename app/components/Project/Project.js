import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import NoMatch from 'components/NoMatch/NoMatch';
import content from 'content';

const propTypes = {
	match: PropTypes.object.isRequired,
};

const Project = function(props) {
	const match = props.match;

	const slug = match.params.slug;

	let mode;
	if (slug === 'sigin-ojulu') { mode = 'sigin'; }
	if (slug === 'benjamin-hofmann') { mode = 'ben'; }
	if (slug === 'nat-ware') { mode = 'nat'; }

	const projectData = content.projects.reduce((prev, current)=> {
		if (current.slug === match.params.slug) {
			return current;
		}
		return prev;
	}, {});

	if (!projectData.title) {
		return <NoMatch />;
	}

	const mainURL = 'https://www.tomlab2017.org';

	return (
		<div className={`project-page accent ${mode}`}>
			<Helmet>
				<title>{projectData.newTitle} · TOMLAB 2017</title>
				<meta name={'description'} content={projectData.newSubtitle} />
				<meta property={'og:title'} content={projectData.newTitle} />
				<meta property={'og:type'} content={'article'} />
				<meta property={'og:description'} content={projectData.newSubtitle} />
				<meta property={'og:url'} content={`${mainURL}/${slug}`} />
				<meta property={'og:image'} content={`${mainURL}/images/${projectData.preview}`} />
				<meta property={'og:width'} content={'500'} />
				<meta name={'twitter:card'} content={'summary'} />
				<meta name={'twitter:site'} content={'@isTravis'} />
				<meta name={'twitter:title'} content={projectData.newTitle} />
				<meta name={'twitter:description'} content={projectData.newSubtitle} />
				<meta name={'twitter:image'} content={`${mainURL}/images/${projectData.preview}`} />
				<meta name={'twitter:image:alt'} content={`Avatar for ${projectData.newTitle}`} />
			</Helmet>

			{/*<div className={`header hero-${projectData.heroImage}`}>
				<div className={'dark-background'} />
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-12 project-title'}>
							<div className={'heavy'}>{projectData.title}</div>
							<div className={'subheader'}>{projectData.description}</div>
						</div>
					</div>
				</div>
			</div>*/}

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<div className={'title'}>{projectData.newTitle}</div>
						<div className={'subtitle'}>{projectData.newSubtitle}</div>
						<div className={'author'}>{projectData.title}</div>
					</div>
				</div>
			</div>

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<div className={'article-content'} dangerouslySetInnerHTML={{ __html: projectData.html }} />
					</div>
				</div>
			</div>

		</div>
	);
};

Project.propTypes = propTypes;
export default withRouter(Project);
