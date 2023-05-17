import React from 'react'
import './Contact.css'
import {MdCall} from 'react-icons/md'
import {BsFillChatDotsFill} from 'react-icons/bs'

const Contact = () => {
  return (
    <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
            {/* left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contacts</span>
                <span className='primaryText'>Easy to Contact</span>
                <span className='secondaryText'>We are alwys ready to help you</span>

                <div className="flexCenter contactModes">
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Call</span>
                                    <span>01 2345 6789</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Call Now
                            </div>
                        </div>    
                    </div>
                    <div className="flexColStart row">
                        <div className="flexColCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span>Text</span>
                                    <span>Chat with us</span>
                                </div>
                            </div>
                            <div className="flexCenter button">
                                Chat Now
                            </div>
                        </div>    
                    </div>
                </div>
            </div>

            {/* right side  */}
            <div className="c-right">
                <div className="image-container">
                    <img src="/contact.jpg" alt="cnt" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact