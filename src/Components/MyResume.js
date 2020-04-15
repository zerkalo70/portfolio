import React from "react";
import s from './MyResume.module.css'

class MyResume extends React.Component {
    render = () => {
        return (
            <div className={s.myResume}>
                <div className={s.parent}>
                    <div className={s.textResume}>
                        <h1>Привет!</h1>
                            <p>Меня зовут Петров Сергей.<br/>
                            Я front-end разработчик.</p>
                    </div>
                    <div className={s.face}>
                        <img/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyResume;