import React from 'react';
import '../App.css';
import {BrowserRouter, Route} from "react-router-dom";
import s from './Contacts.module.css'

class Contacts extends React.Component {
    render = () => {
        return (
            <div className={s.Contacts}>
                <div className={s.titleContacts}>Контакты</div>
                {/*forma*/}
                <div className={s.fullContact}>
                    <form className={s.contactform} name="contact" method="post" action="#">
                        <p className="note"><span className={s.req}>*</span> Поля со звездочкой обязательны для заполнения
                        </p>
                        <div className={s.row}>
                            <label htmlFor="name">Ваше Имя <span className={s.req}>*</span></label>
                            <input type="text" name="name" id="name" className={s.txt} tabIndex="1"
                                   placeholder="Стив Джобс" required></input>
                        </div>

                        <div className={s.row}>
                            <label htmlFor="email">E-mail Адрес <span className={s.req}>*</span></label>
                            <input type="email" name="email" id="email" className={s.txt} tabIndex="2"
                                   placeholder=" address@mail.ru" required></input>
                        </div>

                        <div className={s.row}>
                            <label htmlFor="subject">Тема <span className={s.req}>*</span></label>
                            <input type="text" name="subject" id="subject" className={s.txt} tabIndex="3"
                                   placeholder="Тема письма" required></input>
                        </div>

                        <div className={s.row}>
                            <label htmlFor="message">Сообщение <span className={s.req}>*</span></label>
                            <textarea name="message" id="message" className={s.txtarea} tabIndex="4" required></textarea>
                        </div>

                        <div className={s.center}>
                            <input type="submit" className={s.submitButton} name="submitbtn" tabIndex="5"
                                   value="Отправить Сообщение"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default Contacts;
