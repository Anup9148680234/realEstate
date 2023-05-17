import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className="primaryText">
                    Get Started with HomyZ
                </span>
                <span className="secondaryText">
                    Subscribe to get super attractive offers
                </span>
                <button className="button">
                    <a href="mailto:xyz@gmail.com">Get Started</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted