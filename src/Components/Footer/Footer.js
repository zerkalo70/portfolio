import React from 'react';
import '../../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import s from './Footer.module.css'


class Footer extends React.Component {
    render = () => {
        return (
            <div className={s.Footer}>
                <div className={s.cop}>
                    <p>© Петров С.В. 2020. Все права защищены</p>
                </div>
            </div>
        )
    }
}



export default Footer;
