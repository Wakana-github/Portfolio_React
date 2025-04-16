import React from 'react'
import './PersonalPage.css'
import './PhpLibrary.css'
import navigation from '../../assets/Navigation_LibrarySystem.png'
import prototype from '../../assets/Prototype_LibrarySystem.png'
import login from '../../assets/php_login.png'
import search from '../../assets/php_search.png'
import edit from '../../assets/php_edit.png'
import SQL from '../../assets/SQLCommand.png'
import result from '../../assets/php_result.png'

const PhpLibrary = () => {
  return (
    <div id="phpLibrary" className="phpContainer">
            <div className="gridContainer">
                <div className="left">
                    <h2 className="projectName">3. <span className="gradient-color">Library System</span></h2>
                    <h3 className="item_heading">Technology Using</h3>
                    <p>- HTML, CSS (Bootstrap), PHP and MySQL</p>
                    <h3 className="item_heading">Purpose</h3>
                    <p>- This is a system designed for a Library management which I created as a part of my course, and added login page and styled with Bootstrap.</p>
                    <h3 className="item_heading">Code link</h3>
                    <p>- See this page in <a href="https://vegelog.xsrv.jp/" target="_blank" alt="githubLink">Live</a></p>
                    <p>- See the code on my <a href="https://github.com/Wakana-github/php_LibraryManagement" target="_blank" alt="githubLink">Github</a>.</p>
                </div>
                <div className="right">
                    <h3 className="item_heading">Technology Using</h3>
                    <p>- The design is created using Figma
                       <br/>- See sitemap and storyboard <a href={navigation} target="_blank" alt="siteMap">(click)</a>
                       <br/>- See prototype image <a href={prototype} target="_blank" alt="githubLink">(click)</a></p>
                       <div className="protptype_container">
                            <img className='prototype' src={prototype} alt="prototype_image2"/>
                       </div>
                </div>
            </div>
            <div className="gridContainer">
                <div className="left">
                    <h2 className="projectName">3. <span className="gradient-color">Features</span></h2>
                    <h3 className="item_heading"> Login page </h3>
                    <p>- Only an authorlised user can log  in to the system. </p>
                    <h3 className="item_heading">Database interaction</h3>
                    <p>- Authorised users are able to Create, Read, Update and Delete book data from the library databse.</p>
                    <div className="triple_container">
                        <img className='login' src={login} alt="login_image"/>
                        <img className='search' src={search} alt="search_image"/>
                        <img className='edit' src={edit} alt="edit_image"/>
                    </div>
                </div>
                <div className="right">
                    <div className="dataImg_container">
                        <img className='SQL' src={SQL} alt="login_image"/>
                        <img className='result' src={result} alt="search_image"/>
                    </div>
                </div>
            </div>           
    </div>
  )
}

export default PhpLibrary