import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../reducer/cartSlice';
import { fetchProducts } from '../reducer/productSlice';
import { STATUSES } from '../reducer/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    const handleAdd = (product) => {
        dispatch(add({...product, qty: 1}));
        console.log(product);
    }

    if (status === STATUSES.LOADING) {
        return <h3>Loading....</h3>;
    }

    if (status === STATUSES.ERROR) {
        return <h3>Something went wrong!</h3>;
    }

    return (
        <div className="productsWrapper">
            {products.map((product) => (
                <div className="card" key={product.id}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h6>Rating: {product.rating.rate}</h6>
                    <h5>Price: ${product.price}</h5>
                    <button onClick={() => handleAdd(product)} className="btn">
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;