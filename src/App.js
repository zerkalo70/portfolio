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
            <div className="Resume">Resume</div>
            <div className="MyWorks">MyWorks</div>
            <div className="MyServices">MyServices</div>
            <div className="Freelanc">Freelanc</div>
            <div className="Contacts">Contacts</div>
            <div className="Footer">Footer</div>
        </div>
    )
}


export default App;
