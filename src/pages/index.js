import React from 'react';

import Layout from '../components/layout';

import SEO from '../components/seo';
import About from '../components/About';
import Slideshow from '../components/slideshow';
import Hero from '../components/hero';
import Test from '../components/Test';
import Service from '../components/Service';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Hero />
		<Service />
		<About />
		<Slideshow />
		<Test />
	</Layout>
);

export default IndexPage;
