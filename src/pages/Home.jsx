import React from 'react'
import Announcement from '../components/Announcement'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsleter from '../components/Newsleter'
import Product from '../components/Product'
import Slider from '../components/slider/Slider'

const Home = () => {
    return (
        <div>
            <Announcement />
            <Navbar />
            <Slider />
            <Category />
            <Product />
            <Newsleter />
            <Footer />
        </div>
    )
}

export default Home

