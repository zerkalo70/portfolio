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
                                <span>Привет!<br/> Меня зовут Петров Сергей.<br/> Я front-and разработчик.</span>
                            </div>
                            <div className="basis12">
                                <span></span>
                            </div>
                        </div>
                    </div>
                    <div className="block-2">Блок 2
                        <div className="basis2">база-2</div>
                    </div>
                    <div className="block-3">Блок 3
                        <div className="basis3">база-3</div>
                    </div>
                    <div className="block-4">Блок 4
                        <div className="basis4">база-4</div>
                    </div>
                    <div className="block-5">Блок 5
                        <div className="basis5">база-5</div>
                    </div>
                </div>
                <footer className="Footer">Footer
                    <div className="basisF">Footer</div>
                </footer>
            </div>
        );
}

export default App;
