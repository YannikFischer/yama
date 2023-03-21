import React from 'react'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import ProductsListing from '../components/ProductsListing/ProductsListing'

const Home = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ProductsListing />
        </div>
    )
}

export default Home