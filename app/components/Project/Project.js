import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withRouter } from 'react-router-dom';
import NoMatch from 'components/NoMatch/NoMatch';
import content from 'content';

require('./project.scss');

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

	const mainURL = 'https://tomlab2017.symposium.org';

	return (
		<div className={`project-page accent ${mode}`}>
			<Helmet>
				<title>{projectData.newTitle} · TOM-LAB 2017</title>
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

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<div className={'title'}>{projectData.newTitle}</div>
						<div className={'subtitle'}>{projectData.newSubtitle}</div>
						<div className={'author'}>{projectData.longTitle}</div>
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

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<div className={'left-padded'}>
							<div className={'cta-container'}>
								<div className={'audience'}>
									{projectData.audience.slice(1, projectData.audience.length).map((item, index)=> {
										return <span className={'project-audience-item'} key={`audience-${projectData.slug}-${index}`}>{item} {index !== projectData.audience.length - 2 && '·'} </span>;
									})}
								</div>
								<a href={`mailto:${projectData.email}`} target={'_blank'} className={`contact-button ${mode}`}>Message {projectData.firstName}</a>
								<img alt={projectData.title} className={'bio-pic'} src={`/images/${projectData.bioPic}`} />
								<div className={'bio-text'}>{projectData.bioText}</div>
								<ul className={'link-list'}>
									<a href={projectData.pitchVideoUrl}><li>Pitch (3min video)</li></a>
									<a href={projectData.essayPDF}><li>Essay (PDF)</li></a>
									<a href={projectData.linkedinUrl}><li>LinkedIn Profile</li></a>
								</ul>
							</div>

						</div>
					</div>
				</div>
			</div>

		</div>
	);
};

Project.propTypes = propTypes;
export default withRouter(Project);
