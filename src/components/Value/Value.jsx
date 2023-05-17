import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
    AccordionItemState
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './value.css'
import data from "../../utils/accordion"

const Value = () => {
  return (
    <section className="v-wrapper">
        <div className="paddings innerWidth flexCenter v-container">
            {/* Left Side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt="Value" />
                </div>
            </div>

            {/* Right Side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primarytext'>Value we give to you</span>
                <span className='secondaryText'>
                    We are alwyas ready to help you by provinding the best
                    <br />
                    We beleive a good place can make your life better
                </span>

                <Accordion allowMultipleExpanded={false}
                preExpanded={[0]} className='accordion'>
                    {data.map((item,i)=>{
                            return(
                                <AccordionItem className='accordionItem' key={i} uuid={i}>
                                    <AccordionItemHeading>
                                        <AccordionItemButton className='flexCenter accordionButton'>
                                            <div className="flexCenter icon">
                                                {item.icon}
                                            </div>
                                            <span className="primaryText">
                                                {item.heading}
                                            </span>
                                            <div className="flexCenter icon">
                                                <MdOutlineArrowDropDown size={20}/>
                                            </div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>

                                    <AccordionItemPanel>
                                        <p className="secondarytext">
                                            {item.detail}
                                        </p>
                                    </AccordionItemPanel>

                                </AccordionItem>
                            );
                        })}
                </Accordion>

            </div>
        </div>
    </section>
  )
}

export default Value