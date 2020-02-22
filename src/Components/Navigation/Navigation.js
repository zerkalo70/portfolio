import React from 'react';
import '../../App.css';
import {BrowserRouter, NavLink, Route} from "react-router-dom";
import s from './Navigation.module.css'

class Navigation extends React.Component {
    render = () => {
        return (
                <div className={s.Navigation}>
                    <ul className={s.blockMenu}>
                        <li>
                            <NavLink to='/Resume' className={s.threeD}>Главная
                                <span aria-hidden="true" className={s.threeD_box}>
        <span className={s.front}>Главная</span>
        <span className={s.back}>Главная</span>
      </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/MyWorks' className={s.threeD}>Мои работы
                                <span aria-hidden="true" className={s.threeD_box}>
        <span className={s.front}>Мои работы</span>
        <span className={s.back}>Мои работы</span>
      </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/MyServices' className={s.threeD}>Мои навыки
                                <span aria-hidden="true" className={s.threeD_box}>
        <span className={s.front}>Мои навыки</span>
        <span className={s.back}>Мои навыки</span>
      </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Contacts' className={s.threeD}>Контакты
                                <span aria-hidden="true" className={s.threeD_box}>
        <span className={s.front}>Контакты</span>
        <span className={s.back}>Контакты</span>
      </span>
                            </NavLink>
                        </li>
                        {/*остальные пункты меню*/}
                    </ul>
                </div>
        )
    }
}



export default Navigation;
