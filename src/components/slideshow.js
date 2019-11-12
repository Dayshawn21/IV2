import React from 'react';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import CameraRollIcon from '@material-ui/icons/CameraRoll';
import photoStyle from '../style/photo.module.scss';
import IMG1 from '../images/unspash/alexander-redl-d3bYmnZ0ank-unsplash.jpg';
import IMG2 from '../images/unspash/filip-mroz--WgTWXb4nh4-unsplash.jpg';
import IMG3 from '../images/unspash/jonathan-chng-HgoKvtKpyHA-unsplash.jpg';
import IMG4 from '../images/unspash/juno-jo-4iIlP_138Sg-unsplash.jpg';
import IMG5 from '../images/unspash/kevin-laminto-jrl5bx6EMts-unsplash.jpg';
import IMG6 from '../images/unspash/kevin-laminto-w7n3PdWKZbI-unsplash.jpg';
import IMG7 from '../images/unspash/yang-deng-W_mPpR35kWo-unsplash.jpg';

const Slideshow = () => {
	return (
		<div className="p-2">
			<h1 className="text-center">Photos </h1>
			<hr />

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
			</div>
			<div className={photoStyle.button}>
				<Button size="large" variant="contained" color="primary" startIcon={<CameraRollIcon />}>
					<Link to="/photos">More Photos</Link>
				</Button>
			</div>
		</div>
	);
};

export default Slideshow;
