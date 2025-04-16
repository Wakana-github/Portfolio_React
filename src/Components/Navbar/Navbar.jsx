import React from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {useState, useRef} from 'react'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import wing_icon_pink from '../../assets/wing_icon_pink.svg'

function Navbar({menu, setMenu}) {

  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = '0';
  }
  const closeMenu = () => {
    menuRef.current.style.right = '-350px';
  }

  return (
    <div className='navbar'> 
      <img src={menu_open} onClick = {openMenu} alt="" className = 'nav-mob-open' />
    
        <ul ref={menuRef} className = 'nav-menu'>
          <img src={menu_close} onClick = {closeMenu} alt="" className='nav-mob-close' />

          <li>
              <AnchorLink key='welcome' 
                className='anchor-link' 
                href='#welcome-section' 
                onClick={() => {setMenu('welcome');  closeMenu();}} >welcome
              </AnchorLink>
              {menu==='welcome'? <img src={wing_icon_pink} alt =''/>:<></>}
            </li>
          <li><AnchorLink key='about-me' className='anchor-link' offset={50}  href='#about-me' onClick={() => {setMenu('about'); closeMenu();}}>about me</AnchorLink>{menu==='about'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='qualification' className='anchor-link' offset={50}  href='#qualification' onClick={() => {setMenu('qualification'); closeMenu();}}>qualification</AnchorLink>{menu==='qualification'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='skills' className='anchor-link' offset={50}  href='#skills' onClick={() => {setMenu('skills'); closeMenu();}}>skills</AnchorLink>{menu==='skills'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='myWork' className='anchor-link' offset={50}  href='#myWork' onClick={() => {setMenu('myWork'); closeMenu();}}>my work</AnchorLink>{menu==='myWork'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='projects' className='anchor-link' offset={50}  href='#projects' onClick={() => {setMenu('projects'); closeMenu();}}>projects</AnchorLink>{menu==='projects'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
          <li><AnchorLink key='contact' className='anchor-link' offset={50}  href='#contact' onClick={() => {setMenu('contact'); closeMenu();}}>contact</AnchorLink>{menu==='contact'? <img src={wing_icon_pink} alt =''/>:<></>}</li>
        </ul>
    </div>
  )
}

export default Navbar