import React from 'react';
import { Link } from 'react-router-dom';
import content from 'content';

const Landing = function() {
	return (
		<div className={'landing-page'}>
			<div className={'header'}>
				<div className={'container'}>
					<div className={'row'}>
						<div className={'col-8'}>
							<p className={'text'}>Explore the winning student ideas on the topic of "The dilemma of disruption" from the 47th Symposium, connect with the students, and help to implement their concepts.</p>
						</div>
					</div>
				</div>

				<div className={'container full'}>
					<div className={'row'}>
						{content.projects.map((project)=> {
							return (
								<div className={'col-4'} key={`project-${project.slug}`}>
									<Link to={`/${project.slug}`} className={'project-content'}>
										<div className={'project-title'}>{project.newTitle}</div>
										<div className={'project-card'}>
											<div className={'project-image-block'}>
												<img src={`/images/${project.thumbnail}`} alt={'Project thumbnail'} />
											</div>
											<div className={'project-subtitle'}>{project.newSubtitle}</div>
											<div className={'project-author'}>{project.title}</div>
										</div>
										<div className={'project-audience'}>
											{project.audience.map((item, index)=> {
												return <div className={'project-audience-item'} key={`audience-${project.slug}-${index}`}>{item}</div>
											})}
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-8'}>
						<p className={'text'}>At the 47th <a href={'http://www.symposium.org/'}>St. Gallen Symposium</a> (3–5 May 2017 in Switzerland), students from around the globe <a href={'https://www.youtube.com/watch?v=wFyKDILV5-0'}>presented and discussed</a> disruptive ideas to solve tomorrow’s great challenges.</p>
						<p className={'text'}>The TOM LAB 2017 workshop at the MIT Media Lab supported the winning students, selected from over 1,000 entries, to further develop their ideas into these three concepts.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
