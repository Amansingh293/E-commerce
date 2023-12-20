import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';
import { BsCart3 } from "react-icons/bs";


export default function Navbar() {
    
    let items = useSelector((store)=>store.cart);

    console.log(items)
    return (
    <>
    <div className='navbar'>

        <span className='links'>Online Store</span>
        
        <div className='navBtns' >
            <NavLink to="/" className="links">Home </NavLink>

            <NavLink to="/cart" className="links"> <BsCart3 style={{fontSize: "25px"}}/> : {items.length}</NavLink>

        </div>
        
    </div>
    </>
  )
}
