import React, { useContext } from 'react';
import profile_img from '../assets/profile.png';
import categoryContext from '../utils/categoryContext';
import { useSelector } from 'react-redux';

function Profile({setShowProfile}) {
	const {setValidUser}=useContext(categoryContext);
	const {loginUser}=useSelector(state=>state.MovieSlice)
	const LogoutUser=()=>{
		localStorage.clear('token');
		setValidUser(false);

	}
	return (
		<div
			className="p-4 bg-white"
			style={{
				position: 'absolute',
				top: '70px',
				right: '0px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				borderRadius: '10px',
			}}
		>
			<div style={{ position: 'relative', width: '100%' }}>
				<i
					onClick={() => setShowProfile(false)}
					className="fas fa-x  "
					style={{
						color: 'black',
						cursor: 'pointer',
						position: 'absolute',
						top: '0px',
						right: '0px',
					}}
				></i>
			</div>
			<img src={profile_img} style={{ height: '50px', width: '50px' }} />
			<h2 className="text-xl font-bold pt-2">{loginUser.username}</h2>
			<p className="" style={{ color: 'grey' }}>
				{loginUser.email}
			</p>
			<button
				style={{
					padding: '4px 10px',
					backgroundColor: 'red',
					color: 'white',
					fontWeight: 'bold',
					borderRadius: '8px',
					width: '100%',
					marginTop: '15px',
					minWidth:'180px'
				}}
				onClick={LogoutUser}
			>
				Logout
			</button>
		</div>
	);
}

export default Profile