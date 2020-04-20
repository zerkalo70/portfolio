import React from "react";
import s from './MyFreelance.module.css'

class MyFreelance extends React.Component {
    render = () => {
        return (
            <div className={s.myFreelance}>
                <div className={s.parent}>
                    <div className={s.heading}>
                        <h1 className={s.runStr}>
                            <span>Рассматриваю   варианты   удалённой   работы</span></h1>
                    </div>

                    <button>Нанять меня</button>
                </div>
            </div>
        )
    }
}

export default MyFreelance;