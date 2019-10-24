import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';
import Service from '../components/Service';
import Slideshow from '../components/slideshow';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Slideshow />
		<Service />
	</Layout>
);

export default IndexPage;
