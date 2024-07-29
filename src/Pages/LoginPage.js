import React, { useContext, useState } from 'react'
import img from '../assets/login_bg.jpg'
import { userLogin, userSignUP } from '../API/ApiHandler';
import { useNavigate } from 'react-router-dom';
import categoryContext from '../utils/categoryContext';
import { useDispatch } from 'react-redux';
import { setLoginUser } from '../Redux/MovieSlice';
import Warning from '../components/Warning';

function LoginPage() {
	const [user,setUser]=useState({
		username:'',
		email:'',
		password:''
	});
	const dispatch=useDispatch()
	const {setValidUser}=useContext(categoryContext);
	const [login,setLogin]=useState(true);
	const [secure,setSecure]=useState(true);
	const [error,setError]=useState('');
	const userSignIn= async ()=>{
			if(user.username.length==0){
			setError(1)
		}else if(user.password.length==0){
			setError(2)
		}else{
const response = await userLogin(user);
if(response.status==200){
if(response.data.token){
Promise.resolve(localStorage.setItem('token', response.data.token)).then(()=>setValidUser(true));
dispatch(setLoginUser(response.data.user));
}
}else{
			alert('please verify your credentials');
		
}
}
	}
	const userSignUp=async ()=>{
		if(user.username.length==0){
			setError(1)
		}else if(user.email.length==0){
			setError(3)
		}else if(user.password.length==0){
			setError(2)
		}else{
	try {
		const response = await userSignUP(user);
		if (response.status == 200) {
			alert('Your Account Registered Successfully');
			setLogin(true);
		}else{
			alert('Error while registering your account');
		}
	} catch (error) {
		console.log(error);
	}
		}
	
	}
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				width: '100vw',
				background: `linear-gradient(to bottom,rgba(0,0,0,0.8), rgba(0,0,0,0.2)), url(https://cdn.mos.cms.futurecdn.net/rDJegQJaCyGaYysj2g5XWY.jpg) no-repeat`,
				backgroundSize: 'cover',
			}}
		>
			{login ? (
				<div
					className="p-8 rounded-sm "
					style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
				>
					<h2 className="text-2xl text-white font-bold ">Sign In</h2>
					<div
						className="py-3 border-1 input_out"
						style={{ position: 'relative' }}
					>
						<input
							type="text"
							value={user.username}
							placeholder="Username"
							className="bg-transparent text-white py-2 px-4 custom"
							onChange={(e) =>{ setUser({ ...user, username: e.target.value });setError('');}}
						/>
						{error == 1 && <Warning text="please enter username" />}
					</div>
					<div
						className="py-3 border-1 input_out"
						style={{ position: 'relative' }}
					>
						<input
							value={user.password}
							type={secure ? 'password' : 'text'}
							placeholder="Password"
							onChange={(e) =>{ setUser({ ...user, password: e.target.value });setError('');}}
							className="bg-transparent text-white py-2 px-4 custom "
						/>
						<span onClick={() => setSecure(!secure)}>
							{secure ? (
								<i className="fas fa-eye-slash  text-white mr-3 text-xl cursor-pointer"></i>
							) : (
								<i className="fas fa-eye  text-white mr-3 text-xl cursor-pointer"></i>
							)}
						</span>
						{error == 2 && <Warning text="please enter password" />}
					</div>
					<button
						className="py-2 mt-2 px-4 rounded-sm text-white font-bold bg-orangered hover:bg-white hover:text-orangered"
						style={{ width: '100%' }}
						onClick={userSignIn}
					>
						Sign In
					</button>

					<h2 className="text-white text-[14px] py-3">
						New to Film Adda?{' '}
						<span
							className="font-bold cursor-pointer"
							onClick={() => setLogin(false)}
						>
							Sign Up
						</span>
					</h2>
				</div>
			) : (
				<div
					className="p-8 rounded-sm"
					style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
				>
					<h2 className="text-2xl text-white font-bold ">Sign Up</h2>
					<div
						className="py-3 border-1 input_out"
						style={{ position: 'relative' }}
					>
						<input
							type="text"
							value={user.username}
							placeholder="Username"
							className="bg-transparent text-white py-2 px-4 custom"
							onChange={(e) =>{ setUser({ ...user, username: e.target.value });setError('');}}
						/>
						{error == 1 && <Warning text="please enter username" />}
					</div>
					<div
						className="py-3 border-1 input_out"
						style={{ position: 'relative' }}
					>
						<input
							value={user.email}
							type="text"
							placeholder="Email"
							onChange={(e) =>{ setUser({ ...user, email: e.target.value });setError('');}}
							className="bg-transparent text-white py-2 px-4 custom "
						/>
						{error == 3 && <Warning text="please enter email" />}
					</div>
					<div
						className="py-3 border-1 input_out"
						style={{ position: 'relative' }}
					>
						<input
							value={user.password}
							type="text"
							placeholder="Password"
							onChange={(e) =>{ setUser({ ...user, password: e.target.value });setError('');}}
							className="bg-transparent text-white py-2 px-4 custom "
						/>
						{error == 2 && <Warning text="please enter password" />}
					</div>
					<button
						className="py-2 mt-2 px-4 rounded-sm text-white font-bold bg-orangered hover:bg-white hover:text-orangered"
						style={{ width: '100%' }}
						onClick={userSignUp}
					>
						Sign Up
					</button>

					<h2 className="text-white text-[14px] py-3">
						Already Registered?{' '}
						<span
							className="font-bold cursor-pointer"
							onClick={() => setLogin(true)}
						>
							Sign In
						</span>
					</h2>
				</div>
			)}
		</div>
	);
}

export default LoginPage