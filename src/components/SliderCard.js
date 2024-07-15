import React, { useRef } from 'react'
import { ImgBaseUrl } from '../API/Client';
import { useNavigate } from 'react-router-dom';
import no_image from '../assets/no_image.svg.png';
import no_image_small from '../assets/no_image_small.svg.png';

function SliderCard({item,width}) {
	const navigate = useNavigate();
	  
	return (
		<div
			className="p-1 slider_card"
			style={{ cursor: 'pointer',position:'relative' }}
			onClick={() => {
				navigate(`/details/${item.id}/${item.original_language}`);
			}}
		>

				{/* <div
					className="second_block px-4 py-1 "
					style={{
						width: width ? width : '300px',
						border: '1px solid grey',
						borderRadius: '10px',
						backgroundColor:'black'
					}}
				>
					<img
						src={
							item.poster_path
								? ImgBaseUrl + item.backdrop_path
								: no_image_small
						}
						style={{
							objectFit: 'contain',
							width: '100%',
							height: '160px',
						}}
					/>
					<div style={{}} className=" item-center my-4">
						<p
							style={{
								fontSize: '20px',
								fontWeight: 'bolder',
								color: 'white',
							}}
							className="pb-4"
						>
							{item.title}
						</p>
						<div className="flex justify-between item-center">
							<button
								className="btn  bg-white text-black border-15"
								style={{ padding: '6px 15px', borderRadius: '10px' }}
							>
								<i className="fas fa-play mr-2" style={{ fontSize: '18px' }} />
								Play
							</button>
							<h3 className="flex text-2xl font-bold tracking-tight text-white md:text-2xl sm:text-2xl">
								{Math.floor(item.vote_average)}
								<i className="fas fa-star ml-2" style={{ color: 'yellow' }}></i>
							</h3>
						</div>

						<div>
							<p className="text-grey py-2">Released On {item.release_date}</p>
							<p
								style={{
									color: 'white',
									fontWeight: '600',
									fontSize: '18px',
									fontFamily: 'poppins',
								}}
							>
								OVERVIEW
							</p>
							<div
								className="overview_container"
								style={{ height: '120px', overflow: 'scroll' }}
							>
								<p className="text-grey py-2">{item.overview}</p>
							</div>
						</div>
					</div>
				</div> */}

				<div
					className="first_block"
					style={{ width: width ? width : '150px' }}
				>
					<img
						src={item.poster_path ? ImgBaseUrl + item.poster_path : no_image}
						style={{ objectFit: 'contain', width: '100%' }}
					/>
				</div>
	
		</div>
	);
}

export default SliderCard