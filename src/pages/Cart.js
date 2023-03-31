import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../reducer/cartSlice';
import { MdDeleteForever } from 'react-icons/md';

const Cart = () => {
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const handleRemove = (productId) => {
        dispatch(remove(productId));
    };
    return (
        <div>
            <h3>Cart</h3>
            <div>
                {products.map((product) => (
                    <div className="cartCard" key={products.id}>
                        <div style={{ width: "250px" }}>
                            <img src={product.image} alt="" />
                        </div>
                        <div style={{ width: "600px" }}>
                            <h5>{product.title}</h5>
                        </div>
                        <div style={{ width: "100px" }}>
                            <h5>${(product.price).toFixed(2)}</h5>
                        </div>
                        <div style={{ marginRight: "10px" }}>
                            <MdDeleteForever color='#822013' size={30} onClick={() => handleRemove(product.id)} />
                        </div>
                    </div>
                ))}
            </div>

            <div className="total-amount">
                <h3>Total Price: ${products.reduce((total, item) => total + (item.price), 0).toFixed(2)}</h3>
                <button className='checkOut-btn'>Check Out</button>
            </div>
        </div>
    )
}

export default Cart