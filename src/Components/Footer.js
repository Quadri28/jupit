
import React from 'react'
import './Footer.css';

const Footer = () => {
  return (
    <div className=' footer'>
        <div className='row container'>
        <div className='col-lg-2 col-md-4 col-sm-5'>
        <ul className='d-flex flex-column gap-4 g-4' style={{fontSize:'18px'}}>
            <h3>Quick Links</h3>
            <li>Company</li>
            <li>About Jupit</li>
            <li>Contact Us</li>
            
        </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-5'>
        <ul className='d-flex flex-column gap-4 g-4' style={{fontSize:'18px'}}>
            <h3>Products</h3>
            <li>Bitcoin</li>
            <li>USDT</li>
            <li>Gift Card</li>
            <li>OTC</li>
        </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-5'>
        <ul className='d-flex flex-column gap-4 g-4' style={{fontSize:'18px'}}>
            <h3>Legal</h3>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Anti-Money laundering policy</li>
            <li></li>
        </ul>
        </div>
        <div className='col-lg-2 col-md-4 col-sm-5'>
        <ul className='d-flex flex-column gap-4 g-4' style={{fontSize:'18px'}}>
            <h3>Resources</h3>
            <li>Blog</li>
            <li>FAQ</li>
        </ul>
        </div>
        <div className='col-md-3'>
        <ul className='d-flex flex-column gap-4 g-4' style={{fontSize:'18px'}}>
            <p style={{fontSize:'20px'}}>support@jupitapp.co</p>
            <p style={{fontSize:'20px'}}>+234 802 8651 917</p>
        </ul>
        </div>
        </div>
        <div className='container'>
            <hr/>
        
        <div className='row '>
            <div className='col-md-1'>
               <h2 style={{fontWeight:'700'}}> Jupit </h2>
            </div>
            <div className='col-md-8'>
                <ul className='justify-content-between align-items-center gap-5 g-4 d-sm-flex'
               >
                    <li>Quick Links</li>
                    <li>Products</li>
                    <li>Resources</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='col-md-2'>

                <div className='d-flex gap-3'>
                <div style={{borderRadius:'50%', border:'solid 2px #fff', width:'3rem', height:'3rem',
                 position:'relative'}}>
                <i class="bi bi-instagram icons" ></i>
                </div>  

                <div style={{borderRadius:'50%', border:'solid 2px #fff', width:'3rem', height:'3rem',
                 position:'relative'}}>
                    <i class="bi bi-facebook icons" ></i>
                </div>  

                <div style={{borderRadius:'50%', border:'solid 2px #fff', width:'3rem', 
                height:'3rem', position:'relative'}}>
                <i class="bi bi-linkedin icons" ></i>
                </div>  
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer