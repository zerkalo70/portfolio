import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


class Navigation extends React.Component {
    render = () => {
        return (
                <div className="Navigation">
                    <input type="checkbox" id="hmt" className="hidden-menu-ticker"></input>
                    <label className="btn-menu" htmlFor="hmt">
                        <span className="first"></span>
                        <span className="second"></span>
                        <span className="third"></span>
                        <p>MENU</p>
                    </label>
                    <ul className="hidden-menu">
                        <li>
                            <a href="#" className="three-d">Главная
                                <span aria-hidden="true" className="three-d-box">
        <span className="front">Главная</span>
        <span className="back">Главная</span>
      </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="three-d">Мои работы
                                <span aria-hidden="true" className="three-d-box">
          <span className="front">Мои работы</span>
          <span className="back">Мои работы</span>
	</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="three-d">Мои навыки
                                <span aria-hidden="true" className="three-d-box">
	  <span className="front">Мои навыки</span>
	  <span className="back">Мои навыки</span>
	</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="three-d">Контакты
                                <span aria-hidden="true" className="three-d-box">
	  <span className="front">Контакты</span>
	  <span className="back">Контакты</span>
	</span>
                            </a>
                        </li>
                    </ul>
                </div>
        )
    }
}



export default Navigation;
