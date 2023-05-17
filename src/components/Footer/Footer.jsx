import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            <div className="flexColStart f-left">
                <img src="./logo2.png" alt="" width={120}/>

                <span className="secondarytext">
                    Our Vision is to make all people 
                    <br />
                    have the best place to live for.
                </span>
            </div>

            <fiv className="flexColStart f-right">
                <span className='primarytext'>Information</span>
                <span className="secondaryText">221B, Baker Street, New York</span>
                <div className="flexCenter f-menu">
                    <span>Property</span><span>Services</span><span>Product</span><span>About Us</span>
                </div>
            </fiv>
        </div>
    </section>
  )
}

export default Footer