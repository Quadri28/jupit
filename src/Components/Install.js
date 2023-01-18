
import React from 'react'
import arrow from '../images/icon/arrow.png';
import naira from '../images/naira.png';
import btc from '../images/btc.png';
import eth from '../images/eth.png';
import './Install.css'

const Install = () => {
  return (
    // <div className=' my-5'>
    //     <h2 className='text-center' style={{fontWeight:'700', color:'#212142'}}>
    //         Install the App today
    //     </h2>
    //     <p style={{color:'#777777', width:'50%', margin:'0 auto', fontSize:'20px'}}>
    //     The Progressive Web App works just like your regular App, 
    //     it’s super easy and convenient. To instal, please follow the process below.
    //     </p>
    //     <div className='row justify-content-center  gap-3 mt-4 g-5'>
    //         <div className='col-sm-5  '>
    //             <p style={{fontSize:'20px', color: '#090931', 
    //             fontWeight:'500', width:'50%'}}>
    //                <img src={arrow} alt='' /> Launch www.jupitapp.com/signin from your mobile device or tablet.
    //             </p>
    //         </div>
    //         <div className='col-sm-5'>
    //             <p  style={{fontSize:'20px', color: '#090931', 
    //             fontWeight:'500', width:'50%'}}>
    //                 <img src={arrow} alt='' /> 
    //             Select Add Page to Home Screen.
    //             </p>
    //         </div>
    //         <div className='col-sm-5 '>
    //             <p  style={{fontSize:'20px', color: '#090931',
    //              fontWeight:'500', width:'50%'}}>
    //             <img src={arrow} alt='' /> 
    //             Navigate to the browser option on your android device or tap the share 
    //             button on your IOS device.
    //             </p>
    //         </div>
    //         <div className='col-sm-5 '>
    //             <p  style={{fontSize:'20px', color: '#090931', 
    //             fontWeight:'500', width:'50%', }}>
    //                 <img src={arrow} alt=''  /> 
    //             Return to home menu to launch the application shortcut.
    //             </p>
    //         </div>
    //     </div>
    //     <div className='medium-rectangle container my-5 py-4' style={{position:'relative'}}>

    //             <img src={btc} alt='bitcoin avatar' className='img-fluid btc' 
    //             style={{position:'absolute', right:'10%', top:'-40%'}}/>
    //             <img src={naira} alt='naira avatar' className='img-fluid naira'
    //              style={{position:'absolute', right:'-5%', top:'10%'}}/>
    //             <h2 style={{fontSize:'30px'}} className='text-white text-center w-50 mx-auto my-2'>
    //                 Join our 3,620 and counting user today
    //             and start transacting seamlessly
    //             </h2>
    //             <button className='btn btn-large mt-4 mb-3'style={{padding:'.5rem 3rem', color:'#1c1f90',
    //              backgroundColor:' #F4A039', borderRadius:'0', fontWeight:'500'}}>  Get started
    //             </button>
    //             <img src={eth} alt='ethereum avatar' className='img-fluid eth' 
    //             style={{position:'absolute', left:'2%', top:'70%'}}/>
    //      </div>
    // </div>

    <div style={{ backgroundColor: '#fff' }} className="py-5">
    <h2 className='mx-auto text-center mb-4 service-heading' style={{
        color: '#090931', fontWeight: '700',
        fontSize: '60px', width: '50%'
    }}>
   Install the App today
    </h2>
    <p className='text-center mb-5 mx-auto service-para' style={{
        fontSize: '24px', fontWeight: '500',
        width: '50%', color: '#777777'
    }}>
        The Progressive Web App works just like your regular App, 
        it’s super easy and convenient. To instal, please follow the process below.</p>

<div className='gap-4 g-4 row justify-content-center'>
<div className='col-sm-5'>
    <div className="d-flex gap-1">
    <i class="bi bi-caret-right-fill text-warning" ></i>
<p className='text-left mx-auto w-50' style={{fontSize:'20px'}}>
Fast and easy-to-use trading services in one integrated platform.
</p>
</div>
</div>

<div className='col-sm-5'>
    <div className="d-flex gap-1">

<i class="bi bi-caret-right-fill text-warning" ></i>
<p className='text-left mx-auto w-50' style={{fontSize:'20px'}}>
You can rest easy knowing that your asset is safe with us anytime.
</p>
</div>
</div>

<div className='col-sm-5'>
    <div className="d-flex gap-1">
    <i class="bi bi-caret-right-fill text-warning" ></i>
<p className='text-left mx-auto w-50' style={{fontSize:'20px'}}>
We want anyone & everyone in need for cryptocurrency gets 
prompt and clear access to their transactions.
</p>
</div>
</div>
<div className='col-sm-5'>
    <div className="d-flex gap-1">
    <i class="bi bi-caret-right-fill text-warning"></i>
<p className='text-left mx-auto w-50' style={{fontSize:'20px'}}>
We pride ourselves on providing excellent customer service.
</p>
    </div>
</div>
</div>
</div>
  )
}

export default Install