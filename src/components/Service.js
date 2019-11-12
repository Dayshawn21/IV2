import React from 'react';
import { useSpring, animated, interpolate } from 'react-spring';
import heroStyle from '../style/hero.module.scss';

const Service = () => {
	const { o, x, y } = useSpring({
		from   : { o: 0, y: 0, x: 0 },
		o      : 800,
		x      : 1000,
		y      : 500,
		config : { duration: 4000 }
	});

	return (
		<div className={heroStyle.service}>
			<div>
				<animated.div>{o.interpolate((n) => n.toFixed(0))}</animated.div>
				<h3> Smiles Caught</h3>
			</div>
			<div>
				<animated.div>{x.interpolate((n) => n.toFixed(0))}</animated.div>
				<h3> Satisfied Customer </h3>
			</div>
			<div>
				<animated.div>{y.interpolate((n) => n.toFixed(0))}</animated.div>
				<h3> Event Done </h3>
			</div>
		</div>
	);
};

export default Service;
