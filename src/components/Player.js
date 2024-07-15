import React from 'react'

function Player({videos,setPlayer}) {
	console.log('videos igot',videos)
	const youtubebaseUrl = videos[0]
		? 'https://www.youtube.com/embed/' + videos[0].key
		: 'https://www.youtube.com/embed/';
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
			className='p-5 md:p-15'
		>
			<p
				className="text-white cursor-pointer"
				style={{
					right: '60px',
					fontSize: '30px',
					position: 'absolute',
					top: '20px',
				}}
				onClick={() => setPlayer(false)}
			>
				<i className="fas fa-xmark"></i>
			</p>
			<div
				className="px-6 player_container"
				style={{
					width: '100%',
					height: '90%',
					backgroundColor: 'black',
					overflow: 'scroll',
					display:'flex',
					alignItems:'center',
					justifyContent:'center'
				}}
			>
				{videos[0] ? (
					<iframe
						width="100%"
						height="100%"
						src={youtubebaseUrl}
						title="Movie trailer"
					></iframe>
				) : (
					<h2
						style={{ fontWeight: 'bolder', fontSize: '30px', color: 'white' }}
					>
						No Videos Available
					</h2>
				)}
			</div>
		</div>
	);
}

export default Player