import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


class MyServices extends React.Component {
    render = () => {
        return (
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
        )
    }
}



export default MyServices;
