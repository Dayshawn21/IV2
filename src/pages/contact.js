import React from 'react';
import Layout from '../components/layout';
import heroStyle from '../style/hero.module.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import Button from '@material-ui/core/Button';

const Contact = () => {
	return (
		<Layout>
			<div className="container">
				<h1 className="text-center">Contact Me </h1>
				<hr />
				<form method="post" action="#" data-netlify="true" data-netlify-honeypot="bot-field">
					<input type="hidden" name="bot-field" />
					<input type="hidden" name="form-name" value="contact" />
					<div className="field half first">
						<label htmlFor="name">Name</label>
						<input type="text" name="name" id="name" />
					</div>
					<div className="field half">
						<label htmlFor="email">Email</label>
						<input type="text" name="email" id="email" />
					</div>
					<div className="field">
						<label htmlFor="message">Message</label>
						<textarea name="message" id="message" rows="6" />
					</div>
					<div className="py-1">
						<Button size="large" variant="contained" color="primary">
							Send Message
						</Button>
					</div>
				</form>
				<div className="text-center">
					<h1>Social Media's</h1>
					<hr />
					<br />
					<FacebookIcon color="primary" style={{ fontSize: '200px' }} />
					<InstagramIcon color="primary" style={{ fontSize: '200px' }} />
					<TwitterIcon color="primary" style={{ fontSize: '200px' }} />
				</div>
			</div>
		</Layout>
	);
};

export default Contact;
