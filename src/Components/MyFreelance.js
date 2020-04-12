import React from "react";
import s from './MyFreelance.module.css'

class MyFreelance extends React.Component {
    render = () => {
        return (
            <div className={s.myFreelance}>
                <div className={s.freelance}>
                    <p className={s.textF}>Рассматриваю варианты удалённой работы</p>
                    <button className={s.hiring}>Нанять меня</button>
                </div>
            </div>
        )
    }
}

export default MyFreelance;