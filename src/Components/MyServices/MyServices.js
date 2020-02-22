import React from 'react';
import '../../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import s from './MyServices.module.css'

class MyServices extends React.Component {
    render = () => {
        return (
            <div className={s.MyServices}>
                <div className={s.titleServices}>Мои навыки</div>
                <div className={s.skills}>
                    <p>HTML</p>
                    <div className={s.progressbar}>
                        <span></span>
                    </div>
                    <p>CSS</p>
                    <div className={`${s.progressbar} ${s.orange}`}>
                        <span></span>
                    </div>
                    <p>JavaScript</p>
                    <div className={`${s.progressbar} ${s.red}`}>
                        <span></span>
                    </div>
                </div>
                <div className={s.Freelanc}>
                    <div className={s.blockFree}>
                        <h1 className={s.marquee}><span>Рассматриваю варианты удалённой работы</span></h1>
                    </div>
                    <button>Нанять меня</button>
                </div>
            </div>
        )
    }
}



export default MyServices;
