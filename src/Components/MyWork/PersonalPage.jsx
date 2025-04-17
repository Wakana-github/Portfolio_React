import React from 'react'
import './PersonalPage.css'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'
import design from "../../assets/portfolio_design.pdf"
import arrow_forward from '../../assets/arrow_forward.svg'
import homeScreen1 from '../../assets/desktop1.png'
import homeScreen2 from '../../assets/mobile1.png'
import menu from '../../assets/menu.png'
import menuCode from '../../assets/navbar_setting.png'
import projectCardCode from '../../assets/projectCardJson.png'
import projectCard from '../../assets/projectCard.png'
import contactForm from '../../assets/contactform.png'
import sanitisationCode from '../../assets/sanitisationCode.png'


const PersonalPage = () => {
  return ( 
    <div id="myWork" className="container1">
        {/* Personal Home Page */}
        <h1 className="title projects-title">MY WORK<img className='wing_icon' src={wing_icon_pink} alt=""/></h1>
        <div className="gridContainer">
            <div className="left">
                <h2 className="projectName">1. <span className="gradient-color">Personal Home Page</span></h2>
                <h3 className="item_heading">Technology Used</h3>
                <p>- HTML, CSS and React.js</p>
                <h3 className="item_heading">Purpose</h3>
                <p>- To showcase my skills and projects to potential employers and clients.</p>
                <h3 className="item_heading">Design</h3>
                <p>- Designed using Canva. <br/><span className="designLink">See <a href={design}  target="_blank" alt="designLink">design File</a></span></p>
                <h3 className="item_heading">Code Link</h3>
                <p>- You can see the code for this page on my <a href="https://github.com/Wakana-github/reactPage_withProjects"  target="_blank" alt="designLink">Github</a>.</p>     
            </div>
            <div className="right">
                <h3 className="item_heading">CSS Features</h3>
                <h4 className="headLine"><span className="gradient-color">Gradient colour</span> and Hover Effects</h4>
                <p> - Used to create a modern-looking website and enhance the user experience.</p>
                <div className="buttons">
                    <div className='example-button1'>Example</div>
                    <div className='example-button2'>Example<img className='arrow' src={arrow_forward} alt="" /></div>
                </div>
                <h4 className="headLine">Responsive Design</h4>
                <p>-  Designed to be suitable for both desktop and mobile devices.</p>
                <div className="img_container">
                    <img className='homeScreen1' src={homeScreen1} alt="homeScreen_image"/>
                    <img className='homeScreen2' src={homeScreen2} alt="homeScreen_image2"/>
                </div>
            </div>
        </div>
        {/* JavaScript / React Features */}
        <div className="gridContainer">
            <div className="left">
                <h3 className="item_heading">JavaScript / React Features</h3>
                <h4 className="headLine">Navigation Icon</h4>
                <p> -  Mobile users can open and close the main menu by clicking the hamburger icons.</p>
                <p> - Utilised state to manage interactions in the main navigation menu and sub-navigation in the footer, allowing the correct icon to display dynamically.</p>
                <div className="navImg_container">
                        <img className='navMenu' src={menu} alt="menu_image"/>
                        <img className='navMenuCode' src={menuCode} alt="menuCode_image"/>
                </div>
            </div>
            <div className="right">
                <div className="project_container">
                    <div className="project_left">
                        <h4 className="headLine">Project Cards</h4>
                        <p> - Read and iterate through JavaScript objects to dynamically display project data.</p>
                        <img className='projectCardCode' src={projectCardCode} alt="projectCode_image"/>
                    </div>
                    <div className="project_right">
                        <img className='projectCard' src={projectCard} alt="projectCard"/>
                    </div>
                </div>
                <h4 className="headLine">Contact Form</h4>
                <p>- Created using Web3Forms.</p>
                <p>- Implemented validation and sanitisation to enhance form security.</p>
                <div className="img_container">
                    <img className='contactForm' src={contactForm} alt="contactForm_image"/>
                    <img className='sanitisationCode' src={sanitisationCode} alt="sanitisationCode_image"/>
                </div>
            </div>

        </div>
        
    </div>
  )
}

export default PersonalPage