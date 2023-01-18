
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-white"  >
            <div className="container-fluid" style={{paddingTop:'3%'}}>
                <Link className="navbar-brand" to=""> <img style={{width:"100px", height:"60px", marginLeft:"1rem"}}
                    src={logo} alt="" /> </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" style={{backgroundColor:"#040415"}} ></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav" style={{textTransform: "capitalize", margin: "0 auto", gap:"30px"}}>
                        <li className="nav-item">
                            <a className="nav-link" style={{color:'#040415'}} aria-current="page" href="{{url('about')}}">About Us</a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'#040415'}} aria-current="page" to="">Product</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'#040415'}} to="" >Resources</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" style={{color:'#040415'}} aria-current="page" href="">Contact</Link>
                        </li>

                    </ul>

                </div>
                <div className="d-flex gap-3 g-3">
                    <Link to="" className="btn btn-outline btn-lg px-2" style={{color:'#212192', border:'solid 2px #212192'}}> Sign In
                    </Link>
                
                <li style={{listStyle: "none"}} className="nav-item"> 
                <Link to='' className='btn btn-lg px-4' style={{backgroundColor:'#F2921D', color:'#212192', 
                border:'solid 1px #212192'}}>Register</Link>
                </li>
            </div>
            </div>

        </nav>
    )
}

export default NavBar