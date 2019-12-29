import React from 'react';
import logo1 from "../logo1.jpg";


const Resume = () => {
    return  <div className="resume">
        <div className="base1">
            <div className="res">
                <div className="show">
                    <span>Привет!<br/> Меня зовут Петров Сергей.<br/> Я - front-end разработчик.</span>
                </div>
            </div>
            <div className="card">
                <img src={logo1} className="logo1" alt="this is logo1 image"/>
            </div>
        </div>
    </div>
}

export default Resume;