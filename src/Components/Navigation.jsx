import React from 'react';
import n from './Navigation.module.css';


const Navigation = () => {
    return (
        <nav className={n.nav}>
            <div className={n.nav1}>
                <a>Главная</a>
            </div>
            <div className={n.nav2}>
                <a>Скилы</a>
            </div>
            <div className={n.nav3}>
                <a>Работы</a>
            </div>
            <div className={n.nav4}>
                <a>Работодателям</a>
            </div>
            <div className={n.nav5}>
                <a>Контакты</a>
            </div>
        </nav>
    )
}
export default Navigation;