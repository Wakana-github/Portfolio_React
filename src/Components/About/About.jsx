import React from 'react'
import './about.css'
import wakana_image from '../../assets/wakana_image.jpg'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function About() {
  return (
    <div className="about-me" id="about-me">
      <div className="about-container">
        <div className="about-title">
          <h1 className="title"id="about-title">A LITTLE<br />ABOUT ME</h1>
          <img src={wing_icon_pink} alt=""/>
        </div>
        <div className='about-sentense'>
          <p>
          Hi there! I’m a web developer with a Certificate IV in Information Technology from the Canberra Institute of Technology. I’ve gained knowledge in a wide range of web and application development technologies, such as front-end website development, database management, and system development using object-oriented languages.
          <br /><br />I worked as a civil engineering consultant in Japan after graduating with a Bachelor’s degree in Civil Engineering, and I decided to pursue a new career in web application and software development in Australia.
          <br />Please don’t hesitate to contact me if you’re looking for a developer!
          </p>
          <AnchorLink className='contact-link' offset={50}  href='#contact'><div className='contact-button'>contact</div></AnchorLink>
        </div>
          
        <div className=" my-photo-wrapper">
          <img id="my-photo" className='my-photo' src={wakana_image} alt="Photo" />
          {/* wakana-image.jpg created by Cartoon Face app */}
        </div>
      </div>
    </div>
  )
}

export default About