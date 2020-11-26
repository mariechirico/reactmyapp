//import render from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

            function showList(id){
                var arrow = id + '-arrow';
                var myList = document.getElementById(id);
                var myArrow = document.getElementById(arrow);
                
                myList.style.display = "block";
                myList.className = "main-list";
              
                myArrow.className = "fas fa-angle-up";
              }

              function reset(id){
                var arrow = id + '-arrow';
                var myList = document.getElementById(id);
                var myArrow = document.getElementById(arrow);
              
                myList.className = "fade"; 
              
                myArrow.className = "fas fa-angle-down";
              
                setTimeout(()=> {myList.style.display = "none";}, 500); 
              }
              


class Header extends React.Component {
    render() {
  return React.createElement("div", {className: "container"}, 
  React.createElement("div", {className: "header-MMC"},
    React.createElement("div", {className: "row"},
      React.createElement("div", {className: "col-sm-6"},
        React.createElement("h1", null, "Portfolio of Marie Chirico")))),
    React.createElement("div", {className: "col-sm-6"}),
    React.createElement("img", {className: "img-rounded head-image", src: "https://i.imgur.com/o4FyEPG.jpg" }));
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
                    <h2 id="school" onmouseover={showList('school-list')} onmouseout={reset('school-list')}>Schooling <i className="fas fa-angle-down" id="school-list-arrow"></i></h2>
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
                    <h2 id="skills" onmouseover={showList('skills-list')} onmouseout={reset('skills-list')}>Skills <i className="fas fa-angle-down" id="skills-list-arrow"></i></h2>
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

const Headers = <Header />
const Menu = <Menus />

function App(){ 
    return (Headers, Menu);
};
ReactDOM.render(App(), document.getElementById('root'));

export default new App();