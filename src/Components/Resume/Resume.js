import React from 'react';
import '../../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import s from './Resume.module.css'

class Resume extends React.Component {
    render = () => {
        return (
            <div className={s.Resume}>
                <div className={s.represent}>
                    <div className={s.text}>
                        <span className={s.t1}>Привет!</span><br/>
                        <span className={s.t2}>Меня зовут</span><br/>
                        <span className={s.t3}>Петров Сергей</span><br/>
                        <span className={s.t4}>Я - Frontand разработчик.</span>
                    </div>
                </div>
                <div className={s.show}>
                    <div className={s.flipContainer}>
                        <div className={s.flipper}>
                            <div className={s.frontA}></div>
                            <div className={s.backB}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Resume;
