
import React from 'react'
import './Testimonial.css';
import { Navigation, Pagination, Scrollbar } from 'swiper';
import avatar from '../images/Avatar-1.png';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 import {Swiper, SwiperSlide} from 'swiper/react';
 import 'swiper/css';


const data=[
    {
        name:'Femi Jupit',
    title:'All your crypto in one place',
    testimony:'We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.'
    },
    {
    name:'Eji Jupit',
    title:'All your crypto in one place',
    testimony:'We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.'
    },
    {
    name:'Femi Jupit',
    title:'All your crypto in one place',
    testimony:'We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.'
    },
    {
     name:'Eji Jupit',
    title:'All your crypto in one place',
    testimony:'We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.'
    },
    {
    name:'Femi Jupit',
    title:'All your crypto in one place',
    testimony:'We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.'
    },
    {
     name:'Eji Jupit',
    title:'All your crypto in one place',
    testimony:'We make sure that every cryptocurrency payment and transaction are processed seamlessly and quickly so that you could enjoy the result without any stress.'
    },
]


const Testimonial = () => {
  return (
    <div className='testimonial py-4 px-3'>
        <h2 className=' font-24px text-center mx-auto text-white mt-4' style={{width:'25%'}}>
            See what our users are saying
            </h2>
    <p className='text-center text-white mx-auto my-3' style={{width:'30%'}}>
        These testimonies and much more, join us so we can hear your testimony too.
        </p>
         
        <Swiper 
         modules={[Navigation, Pagination]}
         spaceBetween={10}
         slidesPerView={2}
         pagination={{ clickable: true }}
         breakpoints={{
            640:{
                width: 640,
                slidesPerview:1
            },
            768:{
                width: 768,
                slidesPerview:2
            }

         }}
        >
           {data.map((slide)=>
            <SwiperSlide>
            <div className='card text-center pt-4 px-3 testimonial-card'>
                <div style={{backgroundColor:'#b0e0e6', width:'4rem', margin:'0 auto', position:'relative', 
                textAlign:'center', height:'4rem', borderRadius:'50%', border:'solid 1px #000'}}>
                <img src={avatar} alt='testimonier' className='img-fluid image' 
                style={{position:'absolute', top:'12%', left:'50%',}}/>
                </div>
                <p className='text-primary mx-auto'>{slide.name}</p>
                <p className='text-warning mx-auto' style={{fontWeight:'700', fontSize:'20px'}}>{slide.title}</p>
                <p className='mx-auto'>{slide.testimony}</p>
            </div>
            </SwiperSlide>
             )}
        </Swiper>
    </div>
   
  )
}

export default Testimonial