import React from 'react';
import Slider from 'react-slick';
import './Carousel.sass'

const Carousel = () => {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrow: true
	};
	return (
		<div className=' Carousel container'>
            <h1>Testimonials</h1>
			<Slider {...settings}>
				<div className="box">
                    <h3><i className="quote fas fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint, ducimus, unde quam quidem, consequatur ut in aliquam tempore libero at error aspernatur dolorem fuga magnam commodi consectetur culpa dicta!<i className=" quote fas fa-quote-right"></i>
                    </h3>
                </div>
				<div className="box">
                    <h3><i className="quote fas fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint, ducimus, unde quam quidem, consequatur ut in aliquam tempore libero at error aspernatur dolorem fuga magnam commodi consectetur culpa dicta!<i className=" quote fas fa-quote-right"></i>
                    </h3>
                </div>
				<div className="box">
                    <h3><i className="quote fas fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint, ducimus, unde quam quidem, consequatur ut in aliquam tempore libero at error aspernatur dolorem fuga magnam commodi consectetur culpa dicta!<i className=" quote fas fa-quote-right"></i>
                    </h3>
                </div>
				<div className="box">
                    <h3><i className="quote fas fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint, ducimus, unde quam quidem, consequatur ut in aliquam tempore libero at error aspernatur dolorem fuga magnam commodi consectetur culpa dicta!<i className=" quote fas fa-quote-right"></i>
                    </h3>
                </div>
				<div className="box">
                    <h3><i className="quote fas fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sint, ducimus, unde quam quidem, consequatur ut in aliquam tempore libero at error aspernatur dolorem fuga magnam commodi consectetur culpa dicta!<i className=" quote fas fa-quote-right"></i>
                    </h3>
                </div>
				
			</Slider>
		</div>
	);
};

export default Carousel;
