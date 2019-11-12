import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import photoStyle from '../style/photo.module.scss';

class SimpleSlider extends React.Component {
	render() {
		var settings = {
			dots           : true,
			infinite       : true,
			speed          : 500,
			slidesToShow   : 1,
			slidesToScroll : 1
		};
		return (
			<div className="p-2">
				<h1 className="text-center">Testimonial</h1>
				<hr />
				<div className={photoStyle.slide}>
					<Slider {...settings}>
						<div className={photoStyle.tests}>
							<h3 className>Dayshawn Terry </h3>
							<p className={photoStyle.card}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem corporis at
								deserunt neque libero nihil? Repudiandae earum, illo quia aut molestias eaque
								perspiciatis quaerat enim reiciendis impedit iure fugit magni voluptatum maiores,
								voluptatibus officia, laboriosam eligendi nihil? Dolor tempore odit nesciunt in porro
								totam aliquid corrupti cupiditate, natus quasi assumenda aspernatur nihil vero
								architecto, quod repellat error. Dolorem, eveniet.
							</p>
						</div>
						<div className="tests">
							<h3>Dayshawn Terry </h3>
							<p className="card">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem corporis at
								deserunt neque libero nihil? Repudiandae earum, illo quia aut molestias eaque
								perspiciatis quaerat enim reiciendis impedit iure fugit magni voluptatum maiores,
								voluptatibus officia, laboriosam eligendi nihil? Dolor tempore odit nesciunt in porro
								totam aliquid corrupti cupiditate, natus quasi assumenda aspernatur nihil vero
								architecto, quod repellat error. Dolorem, eveniet.
							</p>
						</div>
						<div className="tests">
							<h3>Dayshawn Terry </h3>
							<p className="card">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem corporis at
								deserunt neque libero nihil? Repudiandae earum, illo quia aut molestias eaque
								perspiciatis quaerat enim reiciendis impedit iure fugit magni voluptatum maiores,
								voluptatibus officia, laboriosam eligendi nihil? Dolor tempore odit nesciunt in porro
								totam aliquid corrupti cupiditate, natus quasi assumenda aspernatur nihil vero
								architecto, quod repellat error. Dolorem, eveniet.
							</p>
						</div>
					</Slider>
				</div>
			</div>
		);
	}
}

export default SimpleSlider;
