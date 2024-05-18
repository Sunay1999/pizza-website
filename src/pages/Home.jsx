 import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from "../asset/pizza_banner3.webp"
import "../Sass/Home.css"

const Home = () => {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h1> World Of Slices </h1>
                <p> Your one stop destination for an amazing experience. </p>
                <Link to="/menu">
                    <button> ORDER NOW </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
