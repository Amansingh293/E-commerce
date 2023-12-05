import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../Slices/cart';

function Cart() {

    let cartItems = useSelector((store) =>store.cart);

    let dispatch = useDispatch();
    
    let removeProduct = (id)=>{
        dispatch(remove(id));
        console.log(cartItems);
    }

    return (
        <div className='cartContainer'>

            {cartItems.map((product) => (
                <div key={product.id} className='cartItem'>
                    <img src={product.image} className='cartItemImage'></img>
                    <h3 className='cartTitle'>{product.title}</h3>
                    <h3>Rs: {product.price*100}</h3>
                    <button className='cartButton' onClick={()=>removeProduct(product.id)}>Remove</button>
                </div>
            ))}
        


        </div>
    )
}

export default Cart