import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


class MyWorks extends React.Component {
    render = () => {
        return (
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
        )
    }
}



export default MyWorks;
