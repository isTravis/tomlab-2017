import React from 'react';
import { Link } from 'react-router-dom';
import content from 'content';

const Landing = function() {
	console.log(content);
	return (
		<div className={'landing-page'}>
			<div className={'header'}>
				<div className={'dark-background'} />
				<div className={'container'}>
					<div className={'blocks row'}>
						{content.projects.map((project)=> {
							return (
								<Link key={`project-${project.slug}`} to={`/${project.slug}`} className={'col-6 block'}>
									<div className={'block-content'}>
										<span>{project.title}</span>
										<p>{project.description}</p>

									</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>

			<div className={'container'}>
				<div className={'row'}>
					<div className={'col-12'}>
						<h2>DISRUPTIVE STUDENT IDEAS</h2>
						<p>St. Gallen Symposium and MIT Media Lab present four radical ideas for greater change</p>
						<p>Four international graduate level students have come up with disruptive ideas to solve challenges of greater magnitude. These ideas were <a href={'https://youtu.be/wFyKDILV5-0'}>presented</a> at the 47th St. Gallen Symposium (3–5 May 2017) in Switzerland and further developed in collaboration with researchers from MIT Media Lab. This page serves as a platform for leaders and decision makers to learn more about the ideas, to connect with the students, and to support them in making their ideas happen.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
