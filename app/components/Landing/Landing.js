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
										{/*<img src={`/images/${project.pic}`} />*/}
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
						<h2>About TOM LAB 2017</h2>
						<p>The idea of the TOM-LAB is to generate and present out-of-the box ideas that are developed by so-called “Leaders of Tomorrow”, the young generation that attends the St. Gallen Symposium. Over the past three years, the symposium has set up three laboratory-styled workshops in St. Gallen as collaboration space for selected Leaders of Tomorrow. The first one looked into the question of how a global agenda of all the rich small countries in the world could look like. The second TOM-LAB initiated a dialogue about the citizen of the future. The third one involved the six student finalists of the symposium’s global essay competition in producing a position paper on alternatives to economic growth. This year's TOM-LAB involves again the student finalists and provides a creative workshop to further develop and design their disruptive ideas.</p>
						<h2>Importance of this work</h2>
						<p>We ask students around the globe to come up with a disruptive idea to solve a greater challenge occurring in the realms of business, politics, science and society. The young generation embodies innovative power, which is why we asked thousands of students worldwide to write an essay on the question: "Breaking the status quo – What is YOUR disruptive idea?”. The best entries were presented and discussed on stage at the 47th St. Gallen Symposium. But that should not be the end of the story. As these students obviously will have come up with novel and radical ideas, we want to continue and support them on their journey to transfer their ideas into action.</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
