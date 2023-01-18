
import React from 'react'
import './EasyCrypto.css';
import filledPhone from '../images/iPhone-13.png';


const EasyCrypto = () => {
  return (
    <div className='easy-crypto-container pt-4 row  mx-auto container px-3'
     style={{borderRadius:'24px'}}>
        <div className='col-sm-5'>
            <h2 className='my-3' style={{color:'#040415', fontFamily:'Montserrat', fontWeight:'600', fontSize:'28px'}}>
                We make crypto easy
                </h2>
            <p>
            We make sure that every cryptocurrency payment and transaction
            are processed seamlessly and quickly so that you can enjoy the
            result without stress
            </p>
            <ul>
                <li><i class="bi bi-check-circle-fill"></i> Instant Transaction </li>
                <li><i class="bi bi-check-circle-fill"></i> Low Fee </li>
                <li><i class="bi bi-check-circle-fill"></i> Seamless Experience</li>
                <li><i class="bi bi-check-circle-fill"></i> Real Time Value</li>
            </ul>
        </div>
        <div className='col-sm-6'>
            <img src={filledPhone} alt='demo phone' className='img-fluid'/>
        </div>

    </div>
  )
}

export default EasyCrypto