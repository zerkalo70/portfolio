import React from 'react';
import f from './Footer.module.css';


const Footer = () => {
    return    <footer className={f.footer}>
        <div className={f.base}>
            <div className={f.fio}>
                <span>Петров С.В.</span>
            </div>
            <div className={f.SocialNetworks}>
                <div className={f.sn1}></div>
                <div className={f.sn2}></div>
                <div className={f.sn3}></div>
                <div className={f.sn4}></div>
            </div>
            <div className={f.copyright}>
                <span>© 2019 Все права защищены</span>
            </div>
        </div>
    </footer>
}

export default Footer;