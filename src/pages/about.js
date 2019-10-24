import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import aboutStyles from '../style/about.module.scss';
import Layout from '../components/layout';

const AboutInfo = () => {
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
					fixed(width: 400) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	return (
		<Layout>
			<h1 className="large text-center ">My Little Story</h1>
			<hr />
			<div>
				<div className="text-center">
					<Img fixed={data.image.childImageSharp.fixed} />
				</div>
				<div className={aboutStyles.aboutWord}>
					<p className="small">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. At odit accusamus eligendi ipsum
						veniam quod cumque autem suscipit culpa! Eos sed quas labore inventore a vel dicta ea ratione
						corporis, similique quasi id consequuntur consequatur exercitationem non asperiores quod,
						assumenda ab fugiat eaque omnis, provident optio? Ea officiis corporis consectetur!
					</p>

					<p className="small">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat sunt eos ad vitae, ducimus
						libero praesentium est distinctio ratione enim. Quisquam corporis minus nesciunt quas hic soluta
						consectetur, eligendi repudiandae!
					</p>
				</div>
			</div>
		</Layout>
	);
};

export default AboutInfo;
