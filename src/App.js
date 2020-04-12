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
                    <div className="blockJobs">
                        <div className="bG_1">
                                <p>Мои работы</p>
                        </div>
                        <div className="bG_2">
                            <div className="job1">
                                <div className="picture">
                                    <button>Смотреть</button>
                                </div>
                                <div className="reviewJob">
                                    <p className="nameJob">Название проекта</p>
                                    <p className="shortReview">Краткое описание</p>
                                </div>
                            </div>
                            <div className="job2">
                                <div className="picture">
                                    <button>Смотреть</button>
                                </div>
                                <div className="reviewJob">
                                    <p className="nameJob">Название проекта</p>
                                    <p className="shortReview">Краткое описание</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="block_5">
                    <div className="blockFreelance">
                        <p className="freelance">Рассматриваю варианты удалённой работы</p>
                        <button className="hiring">Нанять меня</button>
                    </div>
                </div>
                <div className="block_6">
                    <div className="blockContacts">
                        <div className="bC_1">
                            <p className="title">Контакты</p>
                        </div>
                        <form className="form">
                            <input value="input"/>
                            <input value="input"/>
                            <textarea>textarea</textarea>
                        </form>
                        <div className="send">
                            <button>Отправить</button>
                        </div>
                    </div>
                </div>
                <div className="block_7">
                    <div className="blockFooter">
                        <div className="fio">
                            <p className="title">Петров Сергей</p>
                        </div>
                        <div className="soc">
                            <div className="soc1"></div>
                            <div className="soc2"></div>
                            <div className="soc3"></div>
                            <div className="soc4"></div>
                        </div>
                        <div className="cop">
                            <p>© 2020 Все права защищены</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>


        )
    }
}



export default App;
