import React from 'react';
import { Link } from 'react-router-dom';
import content from 'content';

const Landing = function() {
	console.log(content);
	return (
		<div className={'landing-page'}>
			<div className={'header'}>
				<div className={'container full'}>
					<div className={'row'}>
						<div className={'col-12'}>
							<p className={'header-text'}>Three winning student concepts on the topic of “The Dilemma of Disruption” presented for leaders and decision makers to learn about the ideas, connect with the students, and implement their concepts.</p>
						</div>
					</div>
				</div>

				<div className={'container full'}>
					<div className={'row'}>
						{content.projects.map((project)=> {
							return (
								<div className={'col-6'} key={`project-${project.slug}`}>
									<Link className={'project-title'}to={`/${project.slug}`}>{project.newTitle}</Link>
									<div className={'project-card'}>
										<div className={'project-image-block'} />
										<div className={'project-subtitle'}>{project.newSubtitle}</div>
										<div className={'project-author'}>{project.title}</div>
									</div>
									<div className={'project-audience'}>
										{project.audience}
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<p>At the 47th St. Gallen Symposium (3–5 May 2017 in Switzerland), students from around the globe presented and discussed disruptive ideas to solve tomorrow’s great challenges.</p>
						<p>The TOM LAB 2017 workshop at the MIT Media Lab supported the winning students, selected from over 1,000 entries, to further develop their ideas into these three concepts.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
