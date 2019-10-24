import React from 'react';
import Portraits from 'react-icons/lib/md/photo-camera';
import Love from 'react-icons/lib/md/favorite';
import LifeStyle from 'react-icons/lib/io/plane';
import Sport from 'react-icons/lib/go/jersey';

const Services = () => {
	return (
		<section className="p-2 container service-section">
			<h1 className="large text-center p-1">Services</h1>
			<hr />
			<div className="services p-2">
				<div className="service">
					<Portraits className="icon" />
					<p className="lead">Portraits</p>
				</div>
				<div className="service">
					<Love className="icon" />
					<p className="lead">Engagement/Weddings</p>
				</div>
				<div className="service">
					<Sport className="icon" />
					<p className="lead">Sports</p>
				</div>
				<div className="service">
					<LifeStyle className="icon" />
					<p className="lead">Lifestsyle</p>
				</div>
			</div>
		</section>
	);
};

export default Services;
