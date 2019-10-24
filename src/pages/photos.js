import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import photoStyle from '../style/photo.module.scss';

const Photos = () => {
	const data = useStaticQuery(graphql`
		query Images {
			images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
				nodes {
					id
					childImageSharp {
						fixed(width: 250, height: 300) {
							...GatsbyImageSharpFixed
						}
					}
				}
			}
			image: file(relativePath: { eq: "sean.jpg" }) {
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
			<SEO title="Home" />

			<h1>Photos </h1>

			<div className={photoStyle.gallery}>
				{data.images.nodes.map((image) => <Img key={image.id} fixed={image.childImageSharp.fixed} />)}
			</div>
		</Layout>
	);
};

export default Photos;
