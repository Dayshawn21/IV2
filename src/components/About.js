import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import aboutStyles from '../style/about.module.scss';
import Layout from './layout';

const About = () => {
	const data = useStaticQuery(graphql`
		query about {
			images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
				nodes {
					id
					childImageSharp {
						fixed(width: 400, height: 400) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
			image: file(relativePath: { eq: "hero.jpg" }) {
				id
				childImageSharp {
					fixed(width: 300) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	return (
		<div>
			<div className={aboutStyles.about}>
				<div className={aboutStyles.aboutRight}>
					<h1 className="lead text-center ">About Me</h1>
					<hr />

					<div className="text-center">
						<Img fixed={data.image.childImageSharp.fixed} />
					</div>
				</div>
				<div className={aboutStyles.aboutLeft}>
					<p className="small">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odit accusamus eligendi ipsum
						veniam quod cumque autem suscipit culpa! Eos sed quas labore inventore a vel dicta ea ratione
						corporis, similique quasi id consequuntur consequatur exercitationem non asperiores quod,
						assumenda ab fugiat eaque omnis, provident optio? Ea officiis corporis consectetur!
					</p>
					<p className="small">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quam voluptatibus consectetur
						deserunt tenetur amet laborum exercitationem accusamus. Rerum, earum. Fuga veniam quisquam
						sapiente cupiditate a quam nam unde repudiandae.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
