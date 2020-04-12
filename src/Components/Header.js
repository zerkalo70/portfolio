import React from "react";
import s from './Header.module.css'


class Header extends React.Component {
    render = () => {
        return (

            <div className={s.header}>
                <div className={s.menu}>
                    <div className={s.main}>
                        <a href="#">Главная</a>
                    </div>
                    <div className={s.skills}>
                        <a href="#">Скилы</a>
                    </div>
                    <div className={s.jobs}>
                        <a href="#">Работы</a>
                    </div>
                    <div className={s.contacts}>
                        <a href="#">Контакты</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;