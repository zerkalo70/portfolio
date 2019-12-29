import React from 'react';
import logo1 from "../logo1.jpg";
import r from './Resume.module.css'


const Resume = () => {
    return  <div className={r.resume}>
        <div className={r.base}>
            <div className={r.res}>
                <div className={r.show}>
                    <span>Привет!<br/> Меня зовут Петров Сергей.<br/> Я - front-end разработчик.</span>
                </div>
            </div>
            <div className={r.card}>
                <img src={logo1} className={r.logo1} alt="this is logo1 image"/>
            </div>
        </div>
    </div>
}

export default Resume;