import React from "react";
import s from './Footer.module.css';
import vContact from './vContact.png';
import odnoclass from './odnoklass.png';
import whatsapp from './whatsapp.png';
import telegram from './telegram.png';


class Footer extends React.Component {
    render = () => {
        return (
            <div className={s.myFooter}>
                <div className={s.parent}>
                    <div className={s.fio}>
                        <p className={s.title}>Петров Сергей</p>
                    </div>
                    <div className={s.soc}>
                        <div className={s.soc1}>
                            {/*<img src={vContact}/>*/}
                        </div>
                        <div className={s.soc2}>
                            {/*<img src={odnoclass}/>*/}
                        </div>
                        <div className={s.soc3}>
                            {/*<img src={whatsapp}/>*/}
                        </div>
                        <div className={s.soc4}>
                            {/*<img src={telegram}/>*/}
                        </div>
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