import React from 'react'
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
            <h3 className='heading'>Welcome to Redux Toolkit Store</h3>
            <section>
                <h3>Products</h3>
                <Products />
            </section>
        </div>
    )
}

export default Home