import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <div className="GrossParent">
            <div className="Navigation">
                <input type="checkbox" id="hmt" className="hidden-menu-ticker"></input>
                    <label className="btn-menu" for="hmt">
                        <span className="first"></span>
                        <span className="second"></span>
                        <span className="third"></span>
                        <p>MENU</p>
                    </label>
                    <ul className="hidden-menu">
                        <li>
                            <a href="#" className="three-d">Главная
                                <span aria-hidden="true" className="three-d-box">
        <span className="front">Главная</span>
        <span className="back">Главная</span>
      </span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="three-d">Мои работы
                                <span aria-hidden="true" className="three-d-box">
          <span className="front">Мои работы</span>
          <span className="back">Мои работы</span>
	</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="three-d">Мои навыки
                                <span aria-hidden="true" className="three-d-box">
	  <span className="front">Мои навыки</span>
	  <span className="back">Мои навыки</span>
	</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="three-d">Контакты
                                <span aria-hidden="true" className="three-d-box">
	  <span className="front">Контакты</span>
	  <span className="back">Контакты</span>
	</span>
                            </a>
                        </li>
                    </ul>
    {/*                    <ul className="block-menu">*/}
    {/*                        <li>*/}
    {/*                            <a href="#" className="three-d">Главная*/}
    {/*                                <span aria-hidden="true" className="three-d-box">*/}
    {/*    <span className="front">Главная</span>*/}
    {/*    <span className="back">Главная</span>*/}
    {/*  </span>*/}
    {/*                            </a>*/}
    {/*                        </li>*/}
    {/*                        <li>*/}
    {/*                            <a href="#" className="three-d">Пункт 1*/}
    {/*                                <span aria-hidden="true" className="three-d-box">*/}
    {/*      <span className="front">Пункт 1</span>*/}
    {/*      <span className="back">Пункт 1</span>*/}
	{/*</span>*/}
    {/*                            </a>*/}
    {/*                        </li>*/}
    {/*                        <li>*/}
    {/*                            <a href="#" className="three-d">Пункт 2*/}
    {/*                                <span aria-hidden="true" className="three-d-box">*/}
	{/*  <span className="front">Пункт 2</span>*/}
	{/*  <span className="back">Пункт 2</span>*/}
	{/*</span>*/}
    {/*                            </a>*/}
    {/*                        </li>*/}
    {/*                        <li>*/}
    {/*                            <a href="#" className="three-d">Пункт 3*/}
    {/*                                <span aria-hidden="true" className="three-d-box">*/}
	{/*  <span className="front">Пункт 3</span>*/}
	{/*  <span className="back">Пункт 3</span>*/}
	{/*</span>*/}
    {/*                            </a>*/}
    {/*                        </li>*/}
    {/*                    </ul>*/}


            </div>
            <div className="Resume">
                <div className="represent">
                    <div className="text">
                    <span className="t1">Привет!</span><br/>
                    <span className="t2">Меня зовут</span><br/>
                    <span className="t3">Петров Сергей</span><br/>
                    <span className="t4">Я - Frontand разработчик.</span>
                    </div>
            </div>
                <div className="show">
                    <div className="flip-container">
                        <div className="flipper">
                            <div className="frontA"></div>
                            <div className="backB"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MyWorks">
                <div className="titleWorks">Мои работы</div>
                <div className="wrap">
                    <input type="radio" name="slides" id="point1" checked></input>
                    <input type="radio" name="slides" id="point2"></input>
                    <input type="radio" name="slides" id="point3"></input>
                    <div className="slider">
                        <div className="slides img1"></div>
                        <div className="slides img2"></div>
                        <div className="slides img3"></div>
                    </div>
                    <div className="control">
                        <label htmlFor="point1"></label>
                        <label htmlFor="point2"></label>
                        <label htmlFor="point3"></label>
                    </div>
                </div>
            </div>
            <div className="MyServices">
                <div className="titleServices">Мои навыки</div>
                <div className="skills">
                <p>HTML</p>
                <div className="progressbar">
                    <span></span>
                </div>
                <p>CSS</p>
                <div className="progressbar orange">
                    <span></span>
                </div>
                <p>JavaScript</p>
                <div className="progressbar red">
                    <span></span>
                </div>
                </div>
            </div>
            <div className="Freelanc">
                <div className="blockFree">
                    <h1 className="marquee"><span>Рассматриваю варианты удалённой работы</span></h1>
                </div>
                    <button>Нанять меня</button>
            </div>
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
            <div className="Footer">
                <div className="cop">
                    <p>© Петров С.В. 2020. Все права защищены</p>
                </div>
            </div>
        </div>
    )
}


export default App;
