import React from "react";
import s from './MyResume.module.css'
import myFoto from './myFoto.jpg'


class MyResume extends React.Component {
    render = () => {
        return (
            <div className={s.myResume}>
                <div className={s.parent}>
                    <div className={s.text}>
                        <span>Привет!</span>
                        <span>Я front-end разработчик</span>
                        <span> Петров Сергей.</span>
                    </div>
                    <div className={s.face}>
                        <img src={myFoto}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyResume;