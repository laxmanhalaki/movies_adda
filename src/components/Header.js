import React, { useContext, useState } from 'react';
import logo from '../assets/logo.png';
import categoryContext from '../utils/categoryContext';
import { useNavigate } from 'react-router-dom';
import MoviePopup from './MoviePopup';


function Header() {
  const [mobileView,setMobileView]=useState(false);
  const {setCategory}=useContext(categoryContext);
  const [enableSearch,setEnableSearch]=useState(false);
  const navigate=useNavigate();

  const changeCategory=(cat)=>{
    setCategory(cat)
  }
  return (
		<header
			className="bg-black"
			style={{ position: 'fixed', zIndex: 10, width: '100%', top: '0px' }}
		>
			{enableSearch && <MoviePopup setEnableSearch={setEnableSearch} />}
			<nav
				className="mx-auto flex  items-center p-2 lg:px-4"
				aria-label="Global"
			>
				<div className="justify-between px-2">
					<div
						className="flex lg:flex-1 cursor-pointer"
						onClick={() => navigate('/')}
					>
						<a href="#" className="">
							<img
								className="h-16 w-auto"
								src={logo}
								alt=""
								style={{ objectFit: 'cover' }}
							/>
						</a>
					</div>
				</div>
				<div
					className="flex lg:hidden "
					style={mobileView ? { display: 'none' } : {}}
				>
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
						onClick={() => setMobileView(!mobileView)}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
							/>
						</svg>
					</button>
				</div>

				<div className="hidden lg:flex lg:gap-x-8">
					<a
						href="#"
						className="text-sm leading-6 text-white font-bold hover:text-purple cursor-pointer"
						onClick={() => {
							navigate('/explore/hi');
						}}
					>
						Hindi
					</a>
					<a
						href="#"
						className="text-sm leading-6 text-white font-bold hover:text-purple cursor-pointer"
						onClick={() => {
							navigate('/explore/kn');
						}}
					>
						Kannada
					</a>
					<a
						href="#"
						className="text-sm leading-6 text-white font-bold hover:text-purple cursor-pointer"
						onClick={() => {
							navigate('/explore/te');
						}}
					>
						Telagu
					</a>
					<a
						href="#"
						className="text-sm leading-6 text-white font-bold hover:text-purple cursor-pointer"
						onClick={() => {
							navigate('/explore/ta');
						}}
					>
						Tamil
					</a>
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<div className="flex item-center">
						{!enableSearch && (
							<i
								onClick={() => setEnableSearch(!enableSearch)}
								className="fas fa-search fa-lg"
								style={{ color: 'white', cursor: 'pointer' }}
							></i>
						)}
					</div>
				</div>
			</nav>

			<div
				className="lg:hidden"
				role="dialog"
				aria-modal="true"
				style={mobileView ? {} : { display: 'none' }}
			>
				<div className="fixed inset-0 z-10"></div>
				<div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img className="h-12 w-auto" src={logo} alt="" />
						</a>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-white"
							onClick={() => setMobileView(!mobileView)}
						>
							<span className="sr-only text-white">Close menu</span>
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>
					<ul>
						<li>
							<p
								className="list-item text-white py-2 font-bold hover:text-purple cursor-pointer"
								onClick={() => {
									navigate('/explore/hi');
									setMobileView(!mobileView);
								}}
							>
								Hindi
							</p>
						</li>
						<li>
							<p
								className="list-item text-white py-2 font-bold hover:text-purple cursor-pointer"
								onClick={() => {
									navigate('/explore/kn');
									setMobileView(!mobileView);
								}}
							>
								Kannada
							</p>
						</li>
						<li>
							<p
								className="list-item text-white py-2 font-bold hover:text-purple cursor-pointer"
								onClick={() => {
									navigate('/explore/te');
									setMobileView(!mobileView);
								}}
							>
								Telagu
							</p>
						</li>
						<li>
							<p
								className="list-item text-white py-2 font-bold hover:text-purple cursor-pointer"
								onClick={() => {
									navigate('/explore/ta');
									setMobileView(!mobileView);
								}}
							>
								Tamil
							</p>
						</li>
						<li>
							<p
								className="list-item text-white py-2 font-bold hover:text-purple cursor-pointer item-center"
								onClick={() => {
									setMobileView(!mobileView);
									setEnableSearch(true);
								}}
							>
								Search
								<i
									className="fas fa-search fa-md ml-4 "
									style={{ cursor: 'pointer' }}
								></i>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}

export default Header;
