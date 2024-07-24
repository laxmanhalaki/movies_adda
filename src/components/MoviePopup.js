import React, { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import { ImgBaseUrl } from '../API/Client';
import no_image from '../assets/no_image.svg.png';
import { searchMovie } from '../API/ApiHandler';
import { useNavigate } from 'react-router-dom';

function MoviePopup({ setEnableSearch }) {
	const { hindiMovies } = useSelector((state) => state.MovieSlice);
	const [results, setResults] = useState(hindiMovies);
	const [searchKey, setSearchKey] = useState('');
	const [pgNo, setPageNo] = useState(1);
	const [isLoading, setIsLoading] = useState(false);
	const elementRef = useRef();
	const stringRef = useRef();
	const navigate=useNavigate()
	stringRef.current = searchKey;
	useEffect(() => {
		getMovies();
	}, [searchKey]);
	const getMovies = async (pgNo) => {
		setIsLoading(true);
		if (stringRef.current.length > 0) {
			pgNo ? setPageNo(pgNo + 1) : setPageNo(1);
			const response = await searchMovie(stringRef.current, pgNo);
			pgNo
				? setResults([...results, ...response.data.results])
				: setResults(response.data.results);
		} else {
			return null;
		}
		setIsLoading(false);
	};
	const handleScroll = (e) => {
			const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
			console.log(
				'heights are matching',
				scrollHeight - Math.ceil(scrollTop),
				clientHeight
			);
			if (scrollHeight - Math.ceil(scrollTop) === clientHeight && !isLoading) {
				getMovies(pgNo); 
			}
		
	};
	// useEffect(() => {
	// 	elementRef.current.addEventListener('scroll', handleScroll);
	// 	// return () => elementRef.current.removeEventListener('scroll', handleScroll);
	// }, []);

	return (
		<div
			style={{
				position: 'fixed',
				width: '100vw',
				height: '100vh',
				backgroundColor: 'rgba(0,0,0,0.2)',
				zIndex: 20,
				top: '0px',
				bottom: '0px',
			}}
			className='p-4 md:p-10'
		>
			<div
				className="px-6 filter_container"
				style={{
					width: '100%',
					height: '100%',
					backgroundColor: 'black',
					overflow: 'scroll',
				}}
				ref={elementRef}
				onScroll={handleScroll}
			>
				<div className="relative mt-2 rounded-md shadow-sm flex justify-end mb-4 " style={{position:'sticky',top:'10px'}}>
					{/* <div
						className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"
						style={{ cursor: 'pointer' }}
					>
						<span className="text-black sm:text-sm">
							<i className="fas fa-search fa-lg"></i>
						</span>
					</div> */}
					<input
						type="text"
						name="price"
						id="price"
						className="border-none pl-4 pr-10 py-1"
						placeholder="Search Here"
						value={searchKey}
						onChange={(e) => setSearchKey(e.target.value)}
					/>
					<div
						className=" absolute inset-y-0 right-2 flex items-center pl-3"
						style={{ cursor: 'pointer', zIndex: '4' }}
						onClick={() => {
							setEnableSearch(false);
						}}
					>
						<i className="fas fa-times fa-lg" style={{ color: 'black' }}></i>
					</div>
				</div>
				{results ? (
					<div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 mb-1">
						{results.map((item) => {
							return (
								<div
									style={{ width: '100%',cursor:'pointer' }}
									onClick={() => {
										navigate(`/details/${item.id}/${item.original_language}`);
										setEnableSearch(false);
									}}
								>
									<img
										src={
											item.poster_path
												? ImgBaseUrl + item.poster_path
												: no_image
										}
										style={{ width: '100%', height: 'auto' }}
									/>
								</div>
							);
						})}
					</div>
				) : (
					<div
						className="flex justify-center item-center "
						style={{ height: '100%' }}
					>
						<h4 className="font-bold text-white my-auto">
							Search Here to Get Results...
						</h4>
					</div>
				)}
			</div>
		</div>
	);
}

export default MoviePopup