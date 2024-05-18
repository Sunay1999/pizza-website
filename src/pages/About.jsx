import React from 'react'
import MultiplePizzas from "../asset/multiple_pizza.jpg";
import "../Sass/About.css";

const About = () => {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
            </div>
            <div className="aboutBottom">
                <h1> ABOUT US </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quibusdam, nemo illum velit perspiciatis
                    delectus consequatur totam corporis,
                    animi aperiam dolore distinctio excepturi,
                    atque nostrum obcaecati fugit mollitia
                    natus in doloremque error laboriosam laborum.
                    Odit tempore a beatae consequuntur
                    harum quis distinctio facere minus?
                    Molestiae architecto cum tempore praesentium, quas rerum.
                </p>
            </div>
        </div>
    )
}

export default About
