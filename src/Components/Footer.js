import React from "react";
import s from './Footer.module.css'


class Footer extends React.Component {
    render = () => {
        return (
            <div className={s.myFooter}>
                <div className={s.parent}>
                    <div className={s.fio}>
                        <p className={s.title}>Петров Сергей</p>
                    </div>
                    <div className={s.soc}>
                        <div className={s.soc1}></div>
                        <div className={s.soc2}></div>
                        <div className={s.soc3}></div>
                        <div className={s.soc4}></div>
                    </div>
                    <div className={s.cop}>
                        <p>© 2020 Все права защищены</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;