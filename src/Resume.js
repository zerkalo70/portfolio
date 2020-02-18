import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


class Resume extends React.Component {
    render = () => {
        return (
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
                            <div className="frontA"></div>
                            <div className="backB"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Resume;
