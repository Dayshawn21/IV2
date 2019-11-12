import React from 'react';
import heroStyle from '../style/hero.module.scss';
import { useSpring, animated } from 'react-spring';

const Hero = () => {
	const props = useSpring({
		opacity   : 1,
		marginTop : 0,
		from      : { opacity: 0, marginTop: -500 },
		config    : { duration: 1000 }
	});
	return (
		<div className={heroStyle.hero}>
			<div className={heroStyle.herocontent}>
				<animated.h1 style={props}>IJ Visuals</animated.h1>
			</div>
		</div>
	);
};

export default Hero;
