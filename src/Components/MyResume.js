import React from "react";
import s from './MyResume.module.css'

class MyResume extends React.Component {
    render = () => {
        return (
            <div className={s.myResume}>
                <div className={s.resume}>
                    <div className={s.textResume}>
                        <p>Привет!<br/>
                            Меня зовут Петров Сергей.<br/>
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