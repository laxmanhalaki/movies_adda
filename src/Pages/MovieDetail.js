import React, { useCallback, useEffect, useState } from 'react';
import Loader from '../components/Loader';
import { useLocation, useParams } from 'react-router-dom';
import { getMovie } from '../API/ApiHandler';
import { useSelector } from 'react-redux';
import { ImgBaseUrl } from '../API/Client';
import PopularSlider from '../components/PopularSlider';
import Player from '../components/Player';

function MovieDetail() {
	const [detail, setDetail] = useState();
	const { pathname } = useLocation();
	const { id, language } = useParams();
	const [player,setPlayer]=useState(false);
	const { kannadaMovies, hindiMovies, telaguMovies } = useSelector(
		(state) => state.MovieSlice
	);
	let relatedMovies = [];
	 useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);

	useEffect(() => {
		getMovieDetail(id, language);
	}, [id]);
	const getMovieDetail = async (id, language) => {
		try {
			const response = await getMovie(id, language);
			console.log('response i got', response);
			setDetail(response.data);
		} catch (error) {
			console.log('error i got', error);
		}
	};
	const getRelatedData = useCallback(() => {
		if (language == 'te') {
			return telaguMovies;
		} else if (language == 'kn') {
			return kannadaMovies;
		} else if (language == 'hi') {
			return hindiMovies;
		} else {
			return [];
		}
	}, [language]);

	return (
		<>
			{detail ? (
				<>
					<div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
						<div
							className=""
							style={{
								flex: '1 1 400px',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<img
								src={ImgBaseUrl + detail.poster_path}
								style={{
									maxWidth: '500px',
									maxHeight: '90vh',
									width: '100%',
									maskImage:
										'linear-gradient(to right bottom,transparent,black 80%)',
								}}
							/>
						</div>
						<div
							className="p-4 md:p-8 review_container"
							style={{ flex: '1 1 600px', overflow: 'scroll' }}
						>
							<div className="flex justify-between item-center">
								<h1 className="text-3xl font-bold tracking-tight text-white md:text-6xl sm:text-4xl mr-4">
									{detail.title}
								</h1>
								<h3 className="flex text-2xl font-bold tracking-tight text-white md:text-4xl sm:text-3xl">
									{Math.floor(detail.vote_average)}
									<i
										className="fas fa-star ml-2"
										style={{ color: 'yellow' }}
									></i>
								</h3>
							</div>

							<p className="text-grey py-2 ">
								{detail.release_date} |{' '}
								{`${Math.floor(detail.runtime / 60)} h ${
									detail.runtime % 60
								} min`}{' '}
								| 16+
							</p>
							<div className="overvie_section py-4 text-lg">
								<h3 className="text-white font-bold py-2">OVERVIEW</h3>
								<p className="text-white text-[14px] md:text-1xl " style={{ width: '100%' }}>
									{detail.overview}
								</p>
								<div className="specification_container py-4">
									<button
										className="btn  bg-white text-black border-15 my-8"
										style={{ padding: '6px 15px', borderRadius: '10px' }}
										onClick={() => setPlayer(true)}
									>
										<i
											className="fas fa-play mr-2 "
											style={{ fontSize: '18px' }}
										/>
										Play Trailer
									</button>

									<div className="flex flex-row  item-center py-2">
										<p className="text-grey w-24">Created by</p>
										<p className="text-white">
											{detail.production_companies.map((item) => (
												<i>{item.name + ', '}</i>
											))}
										</p>
									</div>
									<div className="flex flex-row  item-center py-2">
										<p className="text-grey w-24">Genre</p>
										<p className="text-white">
											{detail.genres.map((item) => (
												<i>{item.name + ', '}</i>
											))}
										</p>
									</div>
								</div>
							</div>
							<PopularSlider
								data={getRelatedData()}
								title={'Related Movies'}
								width="150px"
							/>
						</div>
					</div>
					{player ? (
						<Player
							videos={
								detail.videos
									? detail.videos.results.filter(
											(item) => item.type == 'Trailer'
									  )
									: ''
							}
							setPlayer={setPlayer}
						/>
					) : null}
				</>
			) : (
				<Loader />
			)}
		</>
	);
}

export default MovieDetail;

{
	/* <div className=" p-4" style={{display:'flex',flexDirection:'row',flexWrap:'wrap',gap:'20px',width:'100%'}}>
    <div className=" p-4 justify-center item-center"  style={{  flex: '1 1 1'}}><img src={ImgBaseUrl+detail.poster_path} style={{width:'100%',height:'auto',maskImage:'linear-gradient(to right bottom,transparent,black 80%)'}}/>
    </div>
    <div className="py-10 px-4" style={{flex:'1 1 700px'}}>  
    <div className='flex justify-between item-center' >
    <h1 className="text-6xl font-bold tracking-tight text-white md:text-6xl sm:text-10xl mr-4">
              {detail.title}
            </h1>
            <h3 className='flex text-2xl font-bold tracking-tight text-white md:text-4xl sm:text-4xl'>
              {Math.floor(detail.vote_average)}<i className='fas fa-star ml-2'style={{color:'yellow'}}></i>
            </h3>
            
    </div>
    <p className='text-grey py-2'>{detail.release_date} | {`${Math.floor(detail.runtime/60)} h ${detail.runtime%60} min`} | 16+</p>
    <div className='overvie_section py-4 text-lg'>
      <h3 className='text-white font-bold py-2'>OVERVIEW</h3>
      <p className='text-white ' style={{width:'100%'}}>
          {
            detail.overview
          }
      </p>
      <div className='specification_container py-4'>
          <div className='flex flex-row  item-center py-2'>
              <p className='text-grey w-24'>
                  Staring
              </p>
              <p className='text-white'>
                  Alluarjun ,Thammanna bhatia,kishore
              </p>
          </div>
          <div className='flex flex-row  item-center py-2'>
              <p className='text-grey w-24'>
                  Created by
              </p>
              <p className='text-white'>
                {detail.production_companies.map((item)=><i>{item.name+', '}</i>)}
              </p>
          </div>
          <div className='flex flex-row  item-center py-2'>
              <p className='text-grey w-24'>
                  Genre
              </p>
              <p className='text-white'>
              {detail.genres.map((item)=><i>{item.name+', '}</i>)}
              </p>
          </div>
  
      </div>
      <div className='related_movies pt-4'>
      <SmallCard data={relatedMovies} title={'Related Movies'}/>
      </div>
  
    </div>
    </div>
  </div> */
}
