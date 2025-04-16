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
                    <h3 className="item_heading">Technology Using</h3>
                    <p>- HTML, Tailwind.CSS, Next.js and TypeScript</p>
                    <img className='statUp_img' src={sratUp_img} alt="contactForm_image"/>
                    <h3 className="item_heading">Purpose</h3>
                    <p>- This is created to my practise using modern front-end technologies. </p>
                    <h3 className="item_heading">Code link</h3>
                    <p>- See this page in <a href="https://startup-page-dark-7thm.vercel.app/" target="_blank" alt="Codelink">Live</a></p>
                    <p>- See the code on my <a href="https://github.com/Wakana-github/startupPage_dark" target="_blank" alt="Githublink">Github</a>.</p>       
                </div>
                <div className="right">
                    <h3 className="item_heading">Design</h3>
                    <p>- Created based on a design used in a tutorial video. Enhanced cmoponents code and added dark mode feature.</p>
                    <p>- Utilised React icon, Animation on CSS, and Tailwind CSS buttons from devdojo.com</p>
                    <p>- Mobile first design</p>
                    <h3 className="item_heading">Features</h3>
                    <p>
                        - Moblile Respondive
                      <br/> - User friendly Navigation menu
                      <br/> - Dark mode toggle button
                      <br/>- Animation effect
                      <br/>- Scroll to top button
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
                    <p>- Suitable for both desktop and mobile devices. hamburger appears in mobile devices.</p>
                    <h4 className="headLine">Navigation Menu</h4>
                    <p>- Navigation bar sticked on the top of the screen</p>
                    <h4 className="headLine">Dark mode toggle button</h4>
                    <p>- Users can toggle light and dark mode with a button on the top of the page</p>
                    <h4 className="headLine">Scroll to top button</h4>
                    <p>- Enabled scrolling to top page by arrow button on the bottom of the screen. Visibility is manipulated by State manegement in React.</p>
                </div>
                <div className="right">
                     <div className="img_container">
                          <img className='lightMode_img' src={lightMode_img} alt="lightMode_img"/>
                          <img className='darkMode_img' src={darkMode_img} alt="darkMode_img"/>
                      </div>
                      <h4 className="headLine">Shadow effect on the navigation bar </h4>
                      <p>- Shadow in the navigation bar appears after scrolling to help the menu more visible. This is manipulated by useEffect react hooks.</p>
                      <div className="imgBlock_container">
                        <img className='navShadowCode1' src={navShadowCode1} alt="navShadowCode1_img"/>
                        <img className='navShadowCode2' src={navShadowCode2} alt="navShadowCode2_img"/>
                      </div>
                </div> 
            </div>
            <div className="gridContainer">
                <div className="left">
                    <h3 className=" page_break item_heading">React.js and Next,js Features</h3>
                    <h4 className="headLine">Reusable text cmoponent</h4>
                    <p>- Created text conponent and using it several times within the page. Enabling to code it efficiently.</p>
                    <div className="imgBlock_container">
                      <img className='textComponent' src={textComponent} alt="textComponent"/>
                      <img className='textComponentCode1' src={textComponentCode1} alt="textComponentCode1"/>
                      <img className='textComponentCode2' src={textComponentCode2} alt="textComponentCode2"/>
                    </div>
                    <h4 className="headLine">Card components for client reviews and pricing</h4>
                    <p>- Created card components which can apply the same style of cards easily.</p>              
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

            <div className='closeDetailButton' onClick={() => setShowDetails(false)}>Close details<img className='arrow' src={double_arrow_up} alt="closeDetailButton" /></div>
            </>
          )}
        </div>
      
  )
}

export default Startup