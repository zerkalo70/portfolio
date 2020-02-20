import React from 'react';
import '../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import s from './Navigation.module.css'

class Navigation extends React.Component {
    render = () => {
        return (
                <div className={s.Navigation}>
                    <input type="checkbox" id="hmt" className={s.hiddenMenuTicker}></input>
                    <label className={s.btnMenu} htmlFor="hmt">
                        <span className={s.first}></span>
                        <span className={s.second}></span>
                        <span className={s.third}></span>
                        <p>MENU</p>
                    </label>
                    <ul className={s.hiddenMenu}>
                        <li>
                            <a href="#" className={s.threeD}>Главная
                                <span aria-hidden="true" className={s.threeDbox}>
        <span className={s.front}>Главная</span>
        <span className={s.back}>Главная</span>
      </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={s.threeD}>Мои работы
                                <span aria-hidden="true" className={s.threeDbox}>
          <span className={s.front}>Мои работы</span>
          <span className={s.back}>Мои работы</span>
	</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={s.threeD}>Мои навыки
                                <span aria-hidden="true" className={s.threeDbox}>
	  <span className={s.front}>Мои навыки</span>
	  <span className={s.back}>Мои навыки</span>
	</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className={s.threeD}>Контакты
                                <span aria-hidden="true" className={s.threeDbox}>
	  <span className={s.front}>Контакты</span>
	  <span className={s.back}>Контакты</span>
	</span>
                            </a>
                        </li>
                    </ul>
                </div>
        )
    }
}



export default Navigation;
