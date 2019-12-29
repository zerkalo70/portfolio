import React from 'react';
import n from './Navigation.module.css';
import {NavLink} from "react-router-dom";


const Navigation = () => {
    return (
        <nav className={n.nav}>
            <div className={n.nav1}>
                <NavLink to = "/Resume">Главная</NavLink>
            </div>
            <div className={n.nav2}>
                <NavLink to = "/Skills">Скилы</NavLink>
            </div>
            <div className={n.nav3}>
                <NavLink to = "/Jobs">Работы</NavLink>
            </div>
            <div className={n.nav4}>
                <NavLink to = "/Long">Работодателям</NavLink>
            </div>
            <div className={n.nav5}>
                <NavLink to = "/Contacts">Контакты</NavLink>
            </div>
        </nav>
    )
}
export default Navigation;