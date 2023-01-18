
import React from 'react'
import './Service.css';
import icon1 from '../images/flash.png'
import icon2 from '../images/Vector2.png'
import icon3 from '../images/Vector.png'
import icon4 from '../images/Vector4.png'

const Services = () => {
    return (
        <div style={{ backgroundColor: '#fff' }} className="py-5">
            <h2 className='mx-auto text-center mb-4 service-heading' style={{
                color: '#090931', fontWeight: '700',
                fontSize: '60px', width: '50%'
            }}>
                Best services that works for you
            </h2>
            <p className='text-center mb-5 mx-auto service-para' style={{
                fontSize: '24px', fontWeight: '500',
                width: '50%', color: '#777777'
            }}>
                We provide a wide range of services to our users.
                Take a look at few of the solutions to expect from us.</p>

        <div className='gap-4 g-4 row justify-content-center text-center'>
        <div className='col-sm-5'>
        <div className='mx-auto icon-img-circle' style={{width:'5rem', height:'5rem', 
        borderRadius:'50%', position:'relative'}}>
           < img src={icon1} alt="icon" className='icon-image'  style={{width:'3rem', height:'3rem', 
           position:'absolute'}}/>
        </div>
        <h2 className='text-center mx-auto'>
        Fast Transaction
        </h2>
        <p className='text-center mx-auto w-50' style={{fontSize:'20px'}}>
        Fast and easy-to-use trading services in one integrated platform.
        </p>
    </div>

    <div className='col-sm-5'>
        <div className='mx-auto icon-img-circle' style={{width:'5rem', height:'5rem', borderRadius:'50%', 
     position:'relative' }}>
           < img src={icon2} alt="icon" className='icon-image' style={{width:'3rem', height:'3rem', 
          position:'absolute'}}/>
        </div>
        <h2 className='text-center mx-auto'>
        Secure Wallet
        </h2>
        <p className='text-center mx-auto w-50' style={{fontSize:'20px'}}>
        You can rest easy knowing that your asset is safe with us anytime.
        </p>
    </div>

    <div className='col-sm-5'>
        <div className='mx-auto icon-img-circle' style={{width:'5rem', height:'5rem', borderRadius:'50%', 
     position:'relative'}}>
           < img src={icon3} alt="icon" className='icon-image'  style={{width:'3rem', height:'3rem',position:'absolute'}}/>
        </div>
        <h2 className='text-center mx-auto'>
        Built for you
        </h2>
        <p className='text-center mx-auto w-50' style={{fontSize:'20px'}}>
        We want anyone & everyone in need for cryptocurrency gets 
        prompt and clear access to their transactions.
        </p>
    </div>
    <div className='col-sm-5'>
        <div className='mx-auto icon-img-circle' style={{width:'5rem', height:'5rem', borderRadius:'50%',
         position:'relative' }}>
           < img src={icon4} alt="icon" className='icon-image'  style={{width:'3rem', 
           position:'absolute', height:'3rem',}}/>
        </div>
        <h2 className='text-center mx-auto'>
        Customer First
        </h2>
        <p className='text-center mx-auto w-50' style={{fontSize:'20px'}}>
        We pride ourselves on providing excellent customer service.
        </p>
    </div>
    </div>
        </div>
    )
}

export default Services