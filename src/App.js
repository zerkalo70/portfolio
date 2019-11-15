import React from 'react';
import './App.css';

const App=()=>{
    return (
            <div className="Parent">
                <header className="Header">Header
                    <div className="block-menu">
                        <div className="menu">
                            <div className="m1"><a href="#">Главная</a></div>
                            <div className="m2"><a href="#">Скилы</a></div>
                            <div className="m3"><a href="#">Работы</a></div>
                            <div className="m4"><a href="#">Контакты</a></div>
                        </div>
                    </div>
                </header>
                <div className="Content">
                    <div className="block-1">Блок 1
                        <div className="basis1">
                            <div className="basis11">
                                <span>Привет!<br/> Меня зовут Петров Сергей.<br/> Я front-end разработчик.</span>
                            </div>
                            <div className="basis12"></div>
                        </div>
                    </div>
                    <div className="block-2">Блок 2
                        <div className="basis2">
                            <div className="basis21">
                                <span>Мои скилы</span>
                            </div>
                            <div className="basis22">
                                <div className="basis22a"></div>
                                <div className="basis22b">
                                    <div className="bb1"></div>
                                    <div className="bb2"></div>
                                </div>
                                <div className="basis22c">
                                    <div className="bc1">
                                        <div className="bc11"></div>
                                        <div className="bc12">
                                            <span>React</span>
                                        </div>
                                    </div>
                                    <div className="bc2">
                                        <span>Подробное описание навыка</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-3">Блок 3
                        <div className="basis3">
                            <div className="basis31">
                                <span>Мои работы</span>
                            </div>
                            <div className="basis32">
                                <div className="basis32a">
                                    <div className="ba321"></div>
                                    <div className="ba322"></div>
                                </div>
                                <div className="basis32b">
                                    <div className="bb321">
                                        <div className="kn1">
                                        <button>Смотреть</button>
                                        </div>
                                    </div>
                                    <div className="bb322"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block-4">Блок 4
                        <div className="basis4">
                            <div className="b41">
                                <span>Рассматриваю варианты удалённой работы</span>
                            </div>
                            <div className="b42">
                                <span>Нанять меня</span>
                            </div>
                        </div>
                    </div>
                    <div className="block-5">Блок 5
                        <div className="basis5">
                            <div className="bas51">
                                <span>Контакты</span>
                            </div>
                            <div className="bas52">
                                <div className="b521"></div>
                                <div className="b522"></div>
                                <div className="b523"></div>
                            </div>
                            <div className="bas53">Отправить</div>
                        </div>
                    </div>
                </div>
                <footer className="Footer">Footer
                    <div className="basisF">Footer</div>
                </footer>
            </div>
        );
}

export default App;
