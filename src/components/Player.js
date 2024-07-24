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
				backgroundColor: 'rgba(0,0,0,0.6)',
				zIndex: 20,
				top: '0px',
				bottom: '0px',
			}}
			className="p-5 md:p-15 "
		>
			<div
				className="px-6 player_container"
				style={{
					width: 'auto',
					height:'100%',
					backgroundColor: 'black',
					overflow: 'scroll',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					position: 'relative',
				}}
			>
				<p
					className="text-white cursor-pointer text-2xl md:text-4xl"
					style={{
						right: '0px',
						position: 'absolute',
						top: '0px',
					}}
					onClick={() => setPlayer(false)}
				>
					<i className="fas fa-xmark"></i>
				</p>
				{videos[0] ? (
					<iframe
						width="100%"
						height="100%"
						src={youtubebaseUrl}
						title="Movie trailer"
					></iframe>
				) : (
					<h2
						style={{ fontWeight: 'bolder', color: 'white' }}
						className="text-2xl md:8xl"
					>
						No Videos Available
					</h2>
				)}
			</div>
		</div>
	);
}

export default Player