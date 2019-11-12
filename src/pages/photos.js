import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/seo';
import photoStyle from '../style/photo.module.scss';
import IMG1 from '../images/gallery/Screenshot_20190328-194308_Instagram.jpg';
import IMG2 from '../images/gallery/Screenshot_20190328-194349_Instagram.jpg';
import IMG3 from '../images/gallery/Screenshot_20190328-194416_Instagram.jpg';
import IMG4 from '../images/gallery/Screenshot_20190328-194448_Instagram.jpg';
import IMG5 from '../images/gallery/Screenshot_20190328-194513_Instagram.jpg';
import IMG6 from '../images/gallery/Screenshot_20190328-194607_Instagram.jpg';
import IMG7 from '../images/gallery/Screenshot_20190328-195354_Instagram.jpg';

const Photos = () => {
	const data = useStaticQuery(graphql`
		query Images {
			images: allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
				nodes {
					id
					childImageSharp {
						fluid(maxWidth: 300, maxHeight: 250) {
							...GatsbyImageSharpFluid
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
			<div className={photoStyle.container}>
				<h1 className="text-center">Photos </h1>
				<hr/>

				<div className={photoStyle.gallery}>
					<div className={photoStyle.picture}>
						<img src={IMG1} alt="" srcset="" />
					</div>
					<div className={photoStyle.picture}>
						<img src={IMG2} alt="" srcset="" />
					</div>
					<div className={photoStyle.picture}>
						<img src={IMG3} alt="" srcset="" />
					</div>
					<div className={photoStyle.picture}>
						<img src={IMG4} alt="" srcset="" />
					</div>
					<div className={photoStyle.picture}>
						<img src={IMG5} alt="" srcset="" />
					</div>
					<div className={photoStyle.picture}>
						<img src={IMG6} alt="" srcset="" />
					</div>
					<div className={photoStyle.picture}>
						<img src={IMG7} alt="" srcset="" />
					</div>
					<div className={photoStyle.picture}>
						<img src={IMG1} alt="" srcset="" />
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Photos;
