import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <div className="GrossParent">
            <div className="Navigation">NavBar
                <input type="checkbox" id="hmt" className="hidden-menu-ticker"></input>
                    <label className="btn-menu" for="hmt">
                        <span className="first"></span>
                        <span className="second"></span>
                        <span className="third"></span>
                    </label>
                    <ul className="hidden-menu">
                        <li><a href="">Resume</a></li>
                        <li><a href="">Works</a></li>
                        <li><a href="">Servises</a></li>
                        <li><a href="">Freelanc</a></li>
                        <li><a href="">Contacts</a></li>
                    </ul>
            </div>
            <div className="Resume">
                <div className="represent">
                    <div className="text">
                    <span className="t1">Привет!</span><br/>
                    <span className="t2">Меня зовут</span><br/>
                    <span className="t3">Петров Сергей</span><br/>
                    <span className="t4">Я - Frontand разработчик.</span>
                    </div>
            </div>
                <div className="show">
                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front"></div>
                            <div className="back"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MyWorks">
                <div className="titleWorks">Мои работы</div>
                <div className="wrap">
                    <input type="radio" name="slides" id="point1" checked></input>
                    <input type="radio" name="slides" id="point2"></input>
                    <input type="radio" name="slides" id="point3"></input>
                    <div className="slider">
                        <div className="slides img1"></div>
                        <div className="slides img2"></div>
                        <div className="slides img3"></div>
                    </div>
                    <div className="control">
                        <label htmlFor="point1"></label>
                        <label htmlFor="point2"></label>
                        <label htmlFor="point3"></label>
                    </div>
                </div>
            </div>
            <div className="MyServices">
                <div className="titleServices">Мои навыки</div>
                <div className="skills">
                <p>HTML</p>
                <div className="progressbar">
                    <span></span>
                </div>
                <p>CSS</p>
                <div className="progressbar orange">
                    <span></span>
                </div>
                <p>JavaScript</p>
                <div className="progressbar red">
                    <span></span>
                </div>
                </div>
            </div>
            <div className="Freelanc">Freelanc</div>
            <div className="Contacts">Contacts</div>
            <div className="Footer">Footer</div>
        </div>
    )
}


export default App;
