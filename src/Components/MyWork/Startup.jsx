import React from 'react'
import { useState } from 'react';
import './StartUp.css'
import './PersonalPage.css'
import sratUp_img from"../../assets/Startup_LP.png"
import lightMode_img from"../../assets/startup_light.png"
import darkMode_img from"../../assets/startup_dark.png"
import double_arrow_down from '../../assets/double_arrow_down.svg'
import double_arrow_up from '../../assets/double_arrow_up.svg'
import navShadowCode1 from '../../assets/startup_navHandler.png'
import navShadowCode2 from '../../assets/startup_navHandler2.png'
import textComponent from '../../assets/text_conponent.png'
import textComponentCode1 from '../../assets/text_componentCode.png'
import textComponentCode2 from '../../assets/text_componentCode2.png'
import reviewCard from '../../assets/reviewCard.png'
import pricingCard from '../../assets/priceCard.png'
import clientComponentCode from '../../assets/clientComponentCode.png'
import priceCardCode from '../../assets/priceCardCode.png'


const Startup = () => {

  const [showDetails, setShowDetails] = useState(false);




  return (
       <div id="startUp" className="StartUpcontainer">
            <div className="gridContainer">
                <div className="left">
                    <h2 className="projectName">2. <span className="gradient-color">Startup Landing Page</span></h2>
                    <h3 className="item_heading">Technology Used</h3>
                    <p>- HTML, Tailwind.CSS, Next.js and TypeScript</p>
                    <img className='statUp_img' src={sratUp_img} alt="contactForm_image"/>
                    <h3 className="item_heading">Purpose</h3>
                    <p>- This project was created to practice using modern front-end technologies. </p>
                    <h3 className="item_heading">Code link</h3>
                    <p>- See the <a href="https://startup-page-dark-7thm.vercel.app/" target="_blank" alt="Codelink">live page</a></p>
                    <p>- See the code on my <a href="https://github.com/Wakana-github/startupPage_dark" target="_blank" alt="Githublink">Github</a>.</p>       
                </div>
                <div className="right">
                    <h3 className="item_heading">Design</h3>
                    <p>- Based on a design from a tutorial video, with enhancements made to component code and the addition of a dark mode feature.                    </p>
                    <p>- Utilised React icon, CSS animations, and Tailwind CSS buttons from devdojo.com</p>
                    <p>- Mobile-first design approach</p>
                    <h3 className="item_heading">Features</h3>
                    <p>
                        - Mobile responsive layout
                      <br/> - User-friendly navigation menu
                      <br/> - Dark mode toggle button
                      <br/>- Animation effects
                      <br/>- Scroll-to-top button
                      <br/>- Reusable text component
                      <br/>- Card components for client reviews and pricing
                    </p>
                    {!showDetails && (
                      <div className="detailButtonContainer"
                          onClick={() => setShowDetails(true)}
                      >
                      <div className='moreDetailButton'>See more details<img className='arrow' src={double_arrow_down} alt="moreDetailButton" /></div>
                    </div>
                    )}
                </div>
            </div>
            {showDetails && (  
              <>
              <div className="gridContainer">
                <div className="left">
                    <h3 className=" page_break item_heading">Tailwind.CSS Features</h3>
                    <p>- HTML, Tailwind.CSS, Next.js and TypeScript</p>
                    <h4 className="headLine">Responsive Design</h4>
                    <p>- Suitable for both desktop and mobile devices. A hamburger menu appears on mobile devices.</p>
                    <h4 className="headLine">Navigation Menu</h4>
                    <p>- The navigation bar is fixed at the top of the screen for easy access.</p>
                    <h4 className="headLine">Dark Mode Toggle Button</h4>
                    <p>- Users can switch between light and dark modes using a toggle button at the top of the page.</p>
                    <h4 className="headLine">Scroll-to-Top Button</h4>
                    <p>- Allows users to scroll back to the top of the page using an arrow button located at the bottom right. Its visibility is managed using state in React.</p>
                </div>
                <div className="right">
                     <div className="img_container">
                          <img className='lightMode_img' src={lightMode_img} alt="lightMode_img"/>
                          <img className='darkMode_img' src={darkMode_img} alt="darkMode_img"/>
                      </div>
                      <h4 className="headLine">Shadow Effect on the Navigation Bar</h4>
                      <p>- A shadow appears on the navigation bar when scrolling down, making it more visible. This effect is implemented using the useEffect hook in React.</p>
                      <div className="imgBlock_container">
                        <img className='navShadowCode1' src={navShadowCode1} alt="navShadowCode1_img"/>
                        <img className='navShadowCode2' src={navShadowCode2} alt="navShadowCode2_img"/>
                      </div>
                </div> 
            </div>
            <div className="gridContainer">
                <div className="left">
                    <h3 className=" page_break item_heading">React.js and Next,js Features</h3>
                    <h4 className="headLine">Reusable Text Component</h4>
                    <p>- A reusable text component is created and used multiple times throughout the page, enabling more efficient coding.</p>
                    <div className="imgBlock_container">
                      <img className='textComponent' src={textComponent} alt="textComponent"/>
                      <img className='textComponentCode1' src={textComponentCode1} alt="textComponentCode1"/>
                      <img className='textComponentCode2' src={textComponentCode2} alt="textComponentCode2"/>
                    </div>
                    <h4 className="headLine">Card Components for Client Reviews and Pricing</h4>
                    <p>- Card components are created with a consistent design, allowing easy reuse across the site for elements like client reviews and pricing sections.</p>              
                </div>
                <div className="right">
                  <div className="imgBlock_container">
                      <img className='reviewCard' src={reviewCard} alt="reviewCard_img"/>
                      <img className='pricingCard' src={pricingCard} alt="pricingCard_img"/>
                      <img className='clientComponentCode' src={clientComponentCode} alt="clientComponentCode_img"/>
                      <img className='priceCardCode' src={priceCardCode} alt="priceCardCode_img"/>
                  </div>
                </div> 
            </div>
            <div className="detailButtonContainer">
              <div className='closeDetailButton' onClick={() => setShowDetails(false)}>Close details<img className='arrow' src={double_arrow_up} alt="closeDetailButton" /></div>
            </div>
            </>
          )}
        </div>
      
  )
}

export default Startup