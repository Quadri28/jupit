
import React from 'react'
import { Link } from 'react-router-dom'
import hero from '../images/hero-image.png'
import frame from '../images/frame-six.png'
import frameSeven from '../images/frame-seven.png'
import quickBuy from '../images/quick-buy.png'
import star from '../images/star-img.png'
import blueArrow from '../images/icon/blue-arrow.png'
import yellowArrow from '../images/icon/yellow-arrow.png'
import './Home.css';

import Card from '../Components/Card'
import Services from '../Components/Services'
import EasyCrypto from '../Components/EasyCrypto'
import Testimonial from '../Components/Testimonial'
import Phone from '../Components/Phone'
import Install from '../Components/Install'

const Home = () => {
  return (
    <div className=' '>
         <div className='row  justify-content-between px-4'>
        <div className='col-sm-5 align-self-center'>
        <h3 className='mb-3' style={{color: '#040415', fontSize:'50px', fontWeight:'600', }}>
            Make easy digital assets 
            transactions anywhere, anytime with Jupit.
        </h3>
        <p style={{color:'#040415', fontSize:'20px', fontWeight:'500', maxWidth:'90%'}}>
        A place for everyone who wants to simply buy and 
            sell digital assets, it just takes 120 seconds!
        </p>
        <Link to='' className='btn px-4' style={{color:'#212192', fontWeight:'400', backgroundColor:'#F2921D', borderRadius:'6px'}}>
            Get Started</Link>
        </div>
        <div className='col-sm-5 hero-avatar' style={{position: 'relative'}}>
        <img src={quickBuy} alt='hero quick' className='quick-buy' style={{position:'absolute', top:'30%',
         left:'-8%',}}/>
            <img src={hero} alt='hero avatar' className='hero'/>
            <img src={frame} alt='' style={{position:'absolute', top:'70%', right:'10%'}} />
            <img src={frameSeven} alt='' style={{position:'absolute', top:'90%', left:'5%'}} />
        </div>
        </div>
        <div style={{background: '#F5F5F5', position:'relative'}}>
        <div className='row gap-3 g-3 mt-4 py-5 justify-content-center'>
        <Card 
        arrow={blueArrow}
        title="Fast Transaction"
        caption="Invest in crypto anytime, anywhere with our safe, secure, and easy 
        to use online platform"
        style={{borderRadius:'1rem', width:'18rem',padding:'1rem 2rem', textAlign:'center',}}
        /> 
        <Card 
        arrow={blueArrow}
        title="Secure Wallet"
        caption="Invest in crypto anytime, anywhere with our safe, secure, 
        and easy to use online platform"
        style={{borderRadius:'1rem', width:'18rem',padding:'1rem 2rem', textAlign:'center',}}
        />
         <Card 
        arrow={blueArrow}
        title="Built for You"
        caption="Invest in crypto anytime, anywhere with our safe, secure, 
        and easy to use online platform"
        style={{borderRadius:'1rem', width:'18rem',padding:'1rem 2rem', textAlign:'center',}}
        />
         <Card 
        arrow={yellowArrow}
        title="Customer First"
        caption="Invest in crypto anytime, anywhere with our safe, secure, and 
        easy to use online platform"
        style={{backgroundColor:'#212142', color:'#fff',borderRadius:'1rem', width:'18rem',
        padding:'1rem 2rem', textAlign:'center',}}
        />
        </div>
        <img src={star} alt="star-img" style={{position:'absolute', left:'5px', top:'90%'}}/>
        </div>
        <Services/>
        <EasyCrypto/>
        <Testimonial/>
        <Phone/>
        <Install/>
    </div>
  )
}

export default Home