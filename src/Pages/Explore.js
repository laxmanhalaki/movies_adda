import React, { useEffect, useRef, useState } from 'react'
import { ImgBaseUrl } from '../API/Client'
import { useSelector } from 'react-redux'
import { getMovies } from '../API/ApiHandler';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import no_image from '../assets/no_image.svg.png';

function Explore() {
    const {kannadaMovies}=useSelector(state=>state.MovieSlice);
    const {language}=useParams();
		const { pathname } = useLocation();
    const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
const navigate=useNavigate();
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);
    console.log('fetchdata calling')
  
    try {
      const response = await getMovies(page,language);
      const data = response.data.results;
  
      setItems(prevItems => [...prevItems, ...data]);
      setPage(prevPage => prevPage + 1);
    } catch (error) {
      setError(error);
      console.log('erro',error)
    } finally {
      setIsLoading(false);
    }
  };
  // const handleScroll = () => {
  //   if (window.innerHeight + Math.floor(document.documentElement.scrollTop) !== document.documentElement.offsetHeight || isLoading) {
  //     return;
  //   }
  //   fetchData();
  // };
	 useEffect(() => {
			window.scrollTo(0, 0);
		}, [pathname]);
  useEffect(() => {
    setItems([])
    fetchData();
  }, [language]);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading]);

    const handleScroll = (e) => {
			const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
      console.log(
				'heights are matching',
				scrollHeight -Math.floor(scrollTop),
				clientHeight
			);
			if (scrollHeight - Math.ceil(scrollTop) === clientHeight && !isLoading) {
				fetchData();
			}
		};
  console.log('is loading',isLoading)
  return (
		<div
			className="pt-8 px-4"
			style={{ height: '90vh' }}
		
		>
			<h3 className="text-grey font-bold text-1xl sm:text-2xl py-4">More to Explore</h3>
			<div
				className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-4 py-5 expore_container"
				style={{ overflow: 'scroll', height: '92%' }}
				onScroll={handleScroll}
			>
				{items.map((item) => {
					return (
						<div
							style={{ width: '100%' }}
							className="explore_card cursor-pointer"
							onClick={() => {
								navigate(`/details/${item.id}/${item.original_language}`);
							}}
						>
							<img
								src={
									item.poster_path ? ImgBaseUrl + item.poster_path : no_image
								}
								style={{ width: '100%', height: 'auto' }}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Explore