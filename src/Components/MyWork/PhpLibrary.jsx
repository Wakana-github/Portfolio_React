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
import csrfToken from '../../assets/csrf_code.png'
import sqlInjection from '../../assets/sqlInjection.png'
import encryptedData from '../../assets/encryptedData.png'
import xssCode from '../../assets/xssCode.png'
import limitAttempts from '../../assets/limitAttempts.png'

const PhpLibrary = () => {
  return (
    <div id="phpLibrary" className="phpContainer">
            <div className="gridContainer">
                <div className="left">
                    <h2 className="projectName">3. <span className="gradient-color">Library System</span></h2>
                    <h3 className="item_heading">Technology Used</h3>
                    <p>- HTML, CSS (Bootstrap), PHP and MySQL</p>
                    <h3 className="item_heading">Purpose</h3>
                    <p>- This system was created as part of my coursework. It is designed for library management and includes a login page styled with Bootstrap.</p>
                    <h3 className="item_heading">Code link</h3>
                    <p>- View the <a href="https://vegelog.xsrv.jp/" target="_blank" alt="githubLink">live page</a></p>
                    <p>- View the source code on my <a href="https://github.com/Wakana-github/php_LibraryManagement" target="_blank" alt="githubLink">Github</a>.</p>
                </div>
                <div className="right">
                    <h3 className="item_heading">Design</h3>
                    <p>- The design was created using Figma.
                       <br/>- View sitemap and storyboard <a href={navigation} target="_blank" alt="siteMap">(click)</a>
                       <br/>- View prototype image <a href={prototype} target="_blank" alt="githubLink">(click)</a></p>
                       <div className="img_container">
                            <img className='prototype' src={prototype} alt="prototype_image2"/>
                       </div>
                </div>
            </div>
            <div className="gridContainer">
                <div className="left">
                    <h3 className=" page_break item_heading">Features</h3>
                    <h4 className="headLine"> Login Page </h4>
                    <p>- Only an authorlised user can log  in to the system. </p>
                    <h4 className="headLine">Database Interaction</h4>
                    <p>- Authorised users can Create, Read, Update and Delete book data from the library databse.</p>
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
            <div className="gridContainer">
                <div className="left">
                    <h3 className=" page_break item_heading">Security Features</h3>
                    <h4 className="headLine"> CSRF Token </h4>
                    <p>- Set a CSRF token to prevent malicious requests from third-party websites.</p>
                    <div className="img_container">
                        <img className='csrfToken' src={csrfToken} alt="csrfToken_image"/>
                    </div>
                    <h4 className="headLine">SQL Injection Prevention</h4>
                    <p>- Used prepared statements and parameter binding to prevent SQL injection.</p>
                    <div className="img_container">
                        <img className='sqlInjection' src={sqlInjection} alt="sqlInjection_image"/>
                    </div>
                </div>
                <div className="right">
                <h4 className="headLine">Password Hashing & Verification</h4>
                    <p>- Encrypted passwords stored in the database and used password_verify() to securely compare hashed passwords.</p>
                    <div className="img_container">
                        <img className='encryptedData' src={encryptedData} alt="encryptedData_image"/>
                    </div>
                    <h4 className="headLine">XSS Prevention</h4>
                    <p>- Escape error messages using htmlspecialchars() to prevent cross-site scripting.</p>
                    <div className="img_container">
                        <img className='xssCode' src={xssCode} alt="xssCode_image"/>
                    </div>
                </div>
            </div>
            <div className="gridContainer">
                <div className="left">
                    <h3 className="item_heading">Security Features</h3>
                    <h4 className="headLine"> CSRF Token </h4>
                    <p>- Set a CSRF token to prevent malicious requests from third-party websites.</p>
                    <div className="img_container">
                        <img className='limitAttempts' src={limitAttempts} alt="limitAttempts_image"/>
                    </div>
                </div>
                <div className="right">
                <h4 className="headLine">Lesson Learned</h4>
                    <p>- It was my first time creating a login feature with a database on a rental server. I researched and implemented the security measures listed above, but I recognize the importance of continuously learning and improving best practices.</p>

                </div>
            </div>              
    </div>
  )
}

export default PhpLibrary