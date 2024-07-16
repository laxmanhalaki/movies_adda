import React from 'react';
import loaderImg from '../assets/loader.png';

function Loader() {
  return (
    <div style={{width:'100Vw',height:'100vh',display:'flex',
      position:'absolute',zIndex:20,
        alignItems:'center',justifyContent:'center',flexDirection:'column'
    }}>
        <img src={loaderImg} style={{height:'200px',width:'200px'}}/>
        <p className='text-lg text-white'>Loading...</p>
    </div>
  )
}

export default Loader;