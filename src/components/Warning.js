import React from 'react'

function Warning(props) {
	return (
		<div style={{position:'absolute',display:'flex',justifyContent:'flex-end',bottom:'-22px',right:'0px'}}>
			<p style={{color:'yellow',padding:'4px 0px',fontSize:'12px'}}>{props.text?props.text:'all field are mandatory!'}</p>
		</div>
	)
}

export default Warning;