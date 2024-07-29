import React from 'react';
import { ImgBaseUrl, ImgBaseUrlqty } from '../API/Client';
import Loader from './Loader';
import PopularSlider from './PopularSlider';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Home(props) {
	const { hindiMovies, telaguMovies, kannadaMovies, tamilMovies } = useSelector(
		(state) => state.MovieSlice
	);
	const navigate=useNavigate();
	let currentMovie = hindiMovies.length > 0 ? hindiMovies[0] : '';
	const divStyle = {
		width: '100vw',
		height: '100%',
		// position: 'absolute',
		background: `linear-gradient(to bottom,rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(${
			ImgBaseUrlqty + currentMovie.backdrop_path
		}) no-repeat`,
		backgroundSize: 'cover',
		// display: 'flex',
	};
	return (
		<>
			{currentMovie ? (
				<>
					<div
						className="h-1/1 sm:h-1/2 md:h-2/3 lg:h-2/3"
						style={{ width: '100%', position: 'relative' }}
					>
						<div
							className="banner_container"
							style={{ ...divStyle}}
						>
							<div
								className="mt-4 px-8 max-w-2xl py-6 sm:py-20 lg:py-30 lg:mt-10  md:mt-6 "
								style={{ width: '100%' }}
							>
								<div style={{}}>
									<h1 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
										{currentMovie.original_title}
									</h1>
									<p className="mt-6 text-lg leading-8 text-white text-1xl sm:text-2xl">
										{currentMovie.overview}
									</p>
									<div className="mt-10 flex gap-x-6 mb-4">
										<a
											className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
											onClick={() => {
												navigate(
													`/details/${currentMovie.id}/${currentMovie.original_language}`
												);
											}}
										>
											<i className="fas fa-info color-black mr-3 "></i>
											More Info
										</a>
										{/* <a
											href="#"
											className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
										>
											<i className="fas fa-plus mr-2"></i>
											My List
										</a> */}
									</div>
									{/* <SmallCard  title={'Popular on Netflix'} data={hindiMovies} width='100px'/>  */}
								</div>
							</div>
						</div>
				
							{/* <img
								src={ImgBaseUrlqty + currentMovie.backdrop_path}
								style={{ width: '100%', objectFit: 'cover' }}
							/> */}
			
					</div>
					<PopularSlider title={'Kannada Movies'} data={kannadaMovies} />
					<PopularSlider title={'Hindi Movies'} data={hindiMovies} />
					<PopularSlider title={'Telagu Movies'} data={telaguMovies} />
					<PopularSlider title={'Tamil Movies'} data={tamilMovies} />
				</>
			) : (
				<Loader />
			)}
		</>
	);
}

export default Home;

{
	/* <>{
  props.currentMovie?<div className='home_banner' style={{height: '100vh',width:'100%',position:'relative'}}>
  <div style={divStyle}>
    <div style={{justifyContent:'flex-start',width:'100%',padding:'15px'}}>
      <div style={{maxWidth:'500px',padding:'0px 15px'}}>
      <h2 style={{zIndex:5,fontSize:'80px',color:'white',textAlign:'center',lineHeight:'90px',padding:'0px',margin:'0px'}}>{props.item.original_title}</h2>
      <p style={{color:'white',fontSize:'18px',fontFamily:'poppins'}}>
        {props.item.overview}
      </p>
      <div className='btn_list' style={{flexDirection:'row',alignItems:'center'}}>
        <button style={{padding:'10px 20px',borderRadius:'8px',fontWeight:'bolder',cursor:'pointer',border:'none',marginRight:'20px'}}>
          <i className='fas fa-play' style={{marginRight:'10px'}} ></i>
          Play
        </button>
        <button style={{padding:'10px 20px',borderRadius:'8px',fontWeight:'bolder',cursor:'pointer',border:'none',color:'white',background:'rgba(0,0,0,0.7)'}}>
          <i className='fas fa-plus' style={{marginRight:'10px',color:'white'}} ></i>
          My List
        </button>

      </div>
      </div>
  
    </div>

  </div>
  <img src={ImgBaseUrl+ props.item.backdrop_path}
style={{objectFit:'cover',width:'100%',height:'100%'}}/>

</div>:<h2>Loading</h2>
}
  
  </> */
}
