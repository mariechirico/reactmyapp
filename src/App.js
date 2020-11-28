import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Header extends React.Component {
    render() {
//    const header = React.createElement("div", {className: "container"}, 
//    React.createElement("div", {className: "header-MMC"},
//      React.createElement("div", {className: "row"},
//        React.createElement("div", {className: "col-sm-6"},
//          React.createElement("h1", null, "Portfolio of Marie Chirico")))),
//      React.createElement("div", {className: "col-sm-6"}),
//      React.createElement("img", {className: "img-rounded head-image", src: "https://i.imgur.com/o4FyEPG.jpg" }))

     return (
        <div className="container">
        <div className="header-MMC">
            <div className="row">
                 <div className="col-sm-6">
                    <h1>Portfolio of Marie Chirico</h1>
                    <br></br>
                    <div className="social-buttons">
                    <a href="https://twitter.com/freudo10_?ref_src=twsrc%5Etfw" target="_blank" title="Twitter - freudo10_">
                        <button className="btn btn-primary">Twitter</button></a>

                    <a href="https://github.com/mariechirico" target="_blank" title="GitHub - Marie Chirico">
                    <button className="btn btn-primary">GitHub</button></a>

                    <a href="https://www.flickr.com/photos/mchirico/" target="_blank" title="Flickr - Marie Chirico">
                        <button className="btn btn-primary">Flickr</button></a>
                    </div>
                    <br></br>
                    <h5>Experienced in Software since 2017. Learning Front-End Development.</h5> 
                </div>
            
                <div className="col-sm-6">
                    <img src="https://i.imgur.com/o4FyEPG.jpg" className="img-rounded head-image" alt="Marie Chirico headshot"/>
                </div>
            </div>
            </div>
        </div>
    );
    }
    
}

class Menus extends React.Component{
    render() {
    return ( 
    <div className="containter"> 
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-4 center-info">
                    <div className="ahref">
                    <h2 id="school">Schooling <i className="fas fa-angle-down" id="school-list-arrow"></i></h2>
                    </div>
                    <ul className="main-list" id="school-list">
                        <li>Western Govenor's University</li>
                        <ul>
                            <li>BS in Software Development</li>
                            <li>2020-2023</li>
                        </ul>
                        <li>Lorain County Community College</li>
                        <ul>
                            <li>AAS - Digital Forensics</li>
                            <li>2014-2016</li>
                        </ul>
                        
                    </ul>
                </div>
                <div className="col-sm-4 center-info"> 
                    <div className="ahref">
                    <h2 id="skills">Skills <i className="fas fa-angle-down" id="skills-list-arrow"></i></h2>
                </div>
                    
                    <ul className="main-list" id="skills-list">
                        <li>C#</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>Agile/SCRUM</li>
                        <li>Teaching after school tech program to grades 8-12</li>
                        <li>Automated Testing with:
                            <ul>
                            <li> End-to-End Web testing - Selenium </li>
                            <li> Back End Integration testing - NUnit </li>
                        </ul></li> 
                    </ul>
                </div>
            </div>
        </div>
    );
    }
}

function App(){ 
    render(); {
    return (<div><Header /> <Menus /></div>);
    }
};
ReactDOM.render(App, document.getElementById('root'));

export default new App();