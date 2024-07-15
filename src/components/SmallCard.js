import React from 'react'
import { ImgBaseUrl } from '../API/Client'
import { useDispatch } from 'react-redux'
import { setHomeItem } from '../Redux/MovieSlice'

function SmallCard(props) {
    const dispatch=useDispatch()
  return (
    <div className='slider_main' style={{padding:'10px',fontFamily:'poppins',width:'100%'}}>
        <h3 className='text-white text-lg my-2'>{props.title?props.title:'Popular on NetFlix'}</h3>
        <div className='flex flex-row gap-2 slider_box' style={{overflowX:'scroll'}}>
            {
props.data.map((item)=>{
    return <div className='p-1 flex ' style={{cursor:'pointer'}} onClick={()=>{dispatch(setHomeItem(item))}}>
        <div style={{width:props.width?props.width:'150px',}}>
        <img  src={ImgBaseUrl+item.poster_path} style={{objectFit:'contain',width:'100%'}}  />
            </div>
 
    </div>
})
            }
        </div>

    </div>
  )
}

export default SmallCard