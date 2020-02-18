import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


class Contacts extends React.Component {
    render = () => {
        return (
            <div className="Contacts">
                <div className="titleContacts">Контакты</div>
                {/*forma*/}
                <div className="fullContact">
                    <form className="contactform" name="contact" method="post" action="#">
                        <p className="note"><span className="req">*</span> Поля со звездочкой обязательны для заполнения
                        </p>
                        <div className="row">
                            <label htmlFor="name">Ваше Имя <span className="req">*</span></label>
                            <input type="text" name="name" id="name" className="txt" tabIndex="1"
                                   placeholder="Стив Джобс" required></input>
                        </div>

                        <div className="row">
                            <label htmlFor="email">E-mail Адрес <span className="req">*</span></label>
                            <input type="email" name="email" id="email" className="txt" tabIndex="2"
                                   placeholder=" address@mail.ru" required></input>
                        </div>

                        <div className="row">
                            <label htmlFor="subject">Тема <span className="req">*</span></label>
                            <input type="text" name="subject" id="subject" className="txt" tabIndex="3"
                                   placeholder="Тема письма" required></input>
                        </div>

                        <div className="row">
                            <label htmlFor="message">Сообщение <span className="req">*</span></label>
                            <textarea name="message" id="message" className="txtarea" tabIndex="4" required></textarea>
                        </div>

                        <div className="center">
                            <input type="submit" className="submitButton" name="submitbtn" tabIndex="5"
                                   value="Отправить Сообщение"></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



export default Contacts;
