import React from 'react';
import '../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import s from './Freelanc.module.css'

class Freelanc extends React.Component {
    render = () => {
        return (
            <div className={s.Freelanc}>
                <div className={s.blockFree}>
                    <h1 className={s.marquee}><span>Рассматриваю варианты удалённой работы</span></h1>
                </div>
                <button>Нанять меня</button>
            </div>
        )
    }
}



export default Freelanc;
