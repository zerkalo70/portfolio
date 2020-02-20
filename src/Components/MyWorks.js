import React from 'react';
import '../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import s from './MyWorks.module.css'

class MyWorks extends React.Component {
    render = () => {
        return (
            <div className={s.MyWorks}>
                <div className={s.titleWorks}>Мои работы</div>
                <div className={s.wrap}>
                    <input type="radio" name="slides" id="point1" checked></input>
                    <input type="radio" name="slides" id="point2"></input>
                    <input type="radio" name="slides" id="point3"></input>
                    <div className={s.slider}>
                        <div className={`${s.slides} ${s.img1}`}></div>
                        <div className={`${s.slides} ${s.img2}`}></div>
                        <div className={`${s.slides} ${s.img3}`}></div>
                    </div>
                    <div className={s.control}>
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
