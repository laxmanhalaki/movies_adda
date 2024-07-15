import React, { useRef } from 'react';
import { ImgBaseUrl } from '../API/Client';
import { useNavigate } from 'react-router-dom';
import no_image from '../assets/no_image.svg.png';
import no_image_small from '../assets/no_image_small.svg.png';
import SliderCard from './SliderCard';


function PopularSlider(props) {
	const navigate = useNavigate();
	const sliderref = useRef();
	const scrollLeft = () => {
		sliderref.current.scrollLeft -= 300;
	};
	const scrollRight = () => {
		sliderref.current.scrollLeft += 300;
	};
	const gotoExplore = () => {
		navigate('/explore/' + props.data[0].original_language);
	};
	return (
		<div
			className="slider_main"
			style={{ padding: '10px', fontFamily: 'poppins', width: '100%',flex:1 }}
		>
			<div className="flex justify-between">
				<h3 className="text-white text-lg my-2">
					{props.title ? props.title : 'Popular on NetFlix'}
				</h3>
				<p
					style={{ cursor: 'pointer', fontWeight: 'bolder' }}
					className="hover:text-purple text-white"
					onClick={gotoExplore}
				>
					<i>View All</i>
				</p>
			</div>
			<div style={{ position: 'relative' }}>
				<div
					onClick={scrollLeft}
					style={{
						width: '30px',
						height: '100%',
						position: 'absolute',
						backgroundColor: 'rgba(0,0,0,0.4)',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						zIndex: '5',
						left: '0px',
					}}
				>
					<p className="text-white hover:text-purple">
						<i className="fas fa-chevron-left"></i>
					</p>
				</div>
				<div
					className="flex flex-row gap-2 slider_box"
					style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
					ref={sliderref}
				>
					{props.data.map((item) => {
						return <SliderCard item={item} />;
					})}
					<div
						onClick={scrollRight}
						style={{
							width: '30px',
							height: '100%',
							position: 'absolute',
							backgroundColor: 'rgba(0,0,0,0.4)',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
							zIndex: '5',
							right: '0px',
						}}
					>
						<p className="text-white hover:text-purple">
							<i className="fas fa-chevron-right"></i>
						</p>
					</div>
					<div
						className="flex flex-row gap-2 slider_box"
						style={{ overflowX: 'scroll', scrollBehavior: 'smooth' }}
						ref={sliderref}
					></div>
				</div>
			</div>
		</div>
	);
}

export default PopularSlider;
