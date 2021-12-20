import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../pages'
import logo from '../images/logo.png'
import {useMoralis} from "react-moralis";
import Balance from '../components/Balance';
import Router from 'next/router';


function Navbar() {
    const {logout} =useMoralis();
    return (
        <Router>
        <div className="flex bg-aqua ">
        <div className="justify-center ">
            <img src={logo} className="" alt="" />

        </div>
       
        
        <span><Link path='/Balance' element={Balance} ><button className="btn border-t-cyan-300 capitalize">transaction</button></Link></span>
        <button className="loginButton" onClick={logout}>Logout</button>
    </div>
    </Router>
    )
}

export default Navbar

