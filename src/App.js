import React from 'react';
import './App.css';


class App extends React.Component {
    render = () => {
        return (

            <div className="Portfolio">
            <div className="parent">
                <div className="block_1">
                    <div className="blockMenu">
                        <div className="main">Главная</div>
                        <div className="skills">Скилы</div>
                        <div className="jobs">Работы</div>
                        <div className="contacts">Контакты</div>
                    </div>
                </div>
                <div className="block_2">
                    <div className="blockResume">
                        <div className="textResume">
                            <p>Привет!<br/>
                            Меня зовут Петров Сергей.<br/>
                            Я front-end разработчик.</p>
                        </div>
                        <div className="face">
                            <img/>
                        </div>
                    </div>
                </div>
                <div className="block_3">
                    <div className="blockSkills">
                        <div className="bS_1">
                            <p className="title">Мои скиллы</p>
                        </div>
                        <div className="bS_2">
                        <div className="skill1">
                            <div className="bS_2a">
                                <div className="grey"></div>
                            </div>
                            <div className="bS_2b">
                                <div className="react">
                                    <p>React</p>
                                </div>
                            </div>
                            <div className="bS_2c">
                                <p className="description">Подробное описание<br/> навыка</p>
                            </div>
                        </div>
                        <div className="skill2">
                            <div className="bS_2a">
                                <div className="grey"></div>
                            </div>
                            <div className="bS_2b">
                                <div className="react">
                                    <p>React</p>
                                </div>
                            </div>
                            <div className="bS_2c">
                                <p className="description">Подробное описание<br/> навыка</p>
                            </div>
                        </div>
                        <div className="skill3">
                            <div className="bS_2a">
                                <div className="grey"></div>
                            </div>
                            <div className="bS_2b">
                                <div className="react">
                                    <p>React</p>
                                </div>
                            </div>
                            <div className="bS_2c">
                                <p className="description">Подробное описание<br/> навыка</p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="block_4">
                    <div className="blockJobs"></div>
                </div>
                <div className="block_5">
                    <div className="blockFreelance"></div>
                </div>
                <div className="block_6">
                    <div className="blockContacts"></div>
                </div>
                <div className="block_7">
                    <div className="blockFooter"></div>
                </div>
                </div>
            </div>


        )
    }
}



export default App;
