
import React from 'react'

const Card = (props) => {
    let style = props.style;
  return (
    <div className='card' style={style} >
        <div className='card' style={{borderRadius:'50%', width:'4rem', 
        height:'4rem', margin:'0 auto',}}>
            <img src={props.arrow} alt='arrow' style={{width:'2rem', height:'2rem', margin:'auto'}}/>
        </div>
        <h2 className='text-center'>
            {props.title}
        </h2>
        <p>
            {props.caption}
        </p>
        <span className='text-primary'>
            Get started <i class="bi bi-arrow-right"></i>
        </span>
    </div>
  )
}

export default Card