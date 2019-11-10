import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="parent">
        <div className="A">
        <div className="base-m">
          <div className="menu">
            <div className="m1"><a href="#">Главная</a></div>
            <div className="m2"><a href="#">Скилы</a></div>
            <div className="m3"><a href="#">Работы</a></div>
            <div className="m4"><a href="#">Контакты</a></div>
          </div>
        </div>
        </div>
        <div className="B">
          <div className="baseB">
            <div className="resume">
              <span>Привет!<br/> Меня зовут Петров Сергей.<br/> Я front-and разработчик.</span>
            </div>
            <div className="foto">
            </div>
          </div>
        </div>
        <div className="C">
          <div className="baseC">
            <div className="skill">
              <span>Мои скилы</span>
            </div>
            <div className="info">
              <div className="i1">
              </div>
              <div className="i2">
                <div className="i21">
                </div>
                <div className="i22">
                </div>
              </div>
              <div className="i3">
                <div className="i31">
                  <div className="i311">
                  </div>
                  <div className="i312">
                    <span>React</span>
                  </div>
                </div>
                <div className="i32">
                  <span>Подробное описание<br/> навыка</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="D">
          <div className="baseD">
            <div className="job">
              <span>Мои работы</span>
            </div>
            <div className="examples">
              <div className="example1">
                <div className="example11">
                </div>
                <div className="example12">
                </div>
              </div>
              <div className="example2">
                <div className="example21">
                <button className="kn">Смотреть</button>
              </div>
                <div className="example22">
                    <span1>Название проекта</span1><br/>
                    <span2>Краткое описание</span2>
                </div>
              </div>
            </div>
        </div>
        </div>
        <div className="E">
          <div className="baseE">
          </div>
        </div>
        <div className="F">
          <div className="baseF">
          </div>
        </div>
        <div className="G">
          <div className="baseG">
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
