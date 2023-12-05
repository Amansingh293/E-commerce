import React from 'react'
import { useSelector } from 'react-redux';
import {NavLink} from 'react-router-dom';



export default function Navbar() {
    
    let items = useSelector((store)=>store.cart);

    console.log(items)
    return (
    <>
    <div className='navbar'>

        <span className='links'>Online Store</span>
        
        <div className='navBtns' >
            <NavLink to="/" className="links">Home </NavLink>

            <NavLink to="/cart" className="links"> Cart </NavLink>

            <div className="links" >
                CartItems : {items.length}
            </div>
        </div>
        
    </div>
    </>
  )
}
