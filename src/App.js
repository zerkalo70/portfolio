import React from 'react';
import './App.css';
import logo1 from './logo1.jpg';
import image3 from './image3.jpg';



const App = () => {
    return (
        <div className="Parent">
            <header className="header">
                <nav className="nav">
                    <div className="nav1">
                        <a>Главная</a>
                    </div>
                    <div className="nav2">
                        <a>Скилы</a>
                    </div>
                    <div className="nav3">
                        <a>Работы</a>
                    </div>
                    <div className="nav4">
                        <a>Работодателям</a>
                    </div>
                    <div className="nav5">
                        <a>Контакты</a>
                    </div>
                </nav>
            </header>
            <div className="resume">
                <div className="base1">
                    <div className="res">
                        <div className="show">
                            <span>Привет!<br/> Меня зовут Петров Сергей.<br/> Я - front-end разработчик.</span>
                        </div>
                    </div>
                    <div className="card">
                        <img src={logo1} className="logo1" alt="this is logo1 image"/>
                    </div>
                </div>
            </div>
            <div className="skills">
                <div className="base2">
                    <div className="myskills">
                        <span>Мои скиллы</span>
                    </div>
                    <div className="skillsshow">
                        <div className="ss1"></div>
                        <div className="ss2">
                            <div className="ss21"></div>
                            <div className="ss22"></div>
                        </div>
                        <div className="ss3">
                            <div className="ss31">
                                <div className="ss311"></div>
                                <button className="ss312">React</button>
                            </div>
                            <div className="ss32">
                                <span>Подробное описание навыка</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="jobs">
                <div className="base3">
                    <div className="my_jobs">
                        <span>Мои работы</span>
                    </div>
                    <div className="example_jobs">
                        <div className="ej1">
                            <div className="ej11"></div>
                            <div className="ej12"></div>
                        </div>
                        <div className="ej2">
                            <div className="ej21">
                                <button className="look">Смотреть</button>
                            </div>
                            <div className="ej22">
                                <span className="jp1">Название проекта</span>
                                <div className="jp2">
                                <span>Краткое описание</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="long">
                <div className="base5">
                    <div className="longlook">
                        <span>Рассматриваю варианты удалённой работы</span>
                    </div>
                    <button className="to_hire">Нанять меня</button>
                </div>
            </div>
            <div className="contacts">
                <div className="base6">
                    <div className="cont">
                        <span>Контакты</span>
                    </div>
                        <div className="area">
                            <input placeholder="input"/>
                            <input placeholder="input"/>
                            <textarea placeholder="textarea"></textarea>
                        </div>
                        <button className="send">Отправить</button>
                </div>
            </div>
            <footer className="footer">
                <div className="base7">
                    <div className="fio">
                        <span>Сергей Петров</span>
                    </div>
                    <div className="soc">
                        <div className="soc1"></div>
                        <div className="soc2"></div>
                        <div className="soc3"></div>
                        <div className="soc4"></div>
                    </div>
                    <div className="cop">
                        <span>© 2019 Все права защищены</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
