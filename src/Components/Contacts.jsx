import React from 'react';
import c from './Contacts.module.css';


const Contacts = () => {
    return    <div className={c.contacts}>
        <div className={c.base}>
            <div className={c.cont}>
                <span>Контакты</span>
            </div>
            <div className={c.area}>
                <input placeholder="input"/>
                <input placeholder="input"/>
                <textarea placeholder="textarea"></textarea>
            </div>
            <button className={c.send}>Отправить</button>
        </div>
    </div>
}

export default Contacts;