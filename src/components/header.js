import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headerStyle from './header.module.scss';

const Header = ({ siteTitle }) => (
	<header className={headerStyle.navbar}>
		<h1>
			<Link to="/">{siteTitle}</Link>
		</h1>

		<ul>
			<li>
				<Link to="/">Home</Link>
			</li>

			<li>
				<Link to="/photos">Photos</Link>
			</li>
			<li>
				<Link to="/contact">Contact</Link>
			</li>
		</ul>
	</header>
);

Header.propTypes = {
	siteTitle : PropTypes.string
};

Header.defaultProps = {
	siteTitle : ``
};

export default Header;
