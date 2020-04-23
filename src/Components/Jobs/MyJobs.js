import React from "react";
import s from './MyJobs.module.css'

class MyJobs extends React.Component {
    render = () => {
        return (
            <div className={s.myJobs}>
                <div className={s.parent}>
                        <div className={s.heading}>
                            <p className={s.title}>Мои работы</p>
                        </div>
                        <div className={s.Jobs}>
                            <div className={s.job1}>
                                    <button className={s.btnJob}>
                                        <p>Проект № 1</p>
                                        <p>сайт</p>
                                    </button>
                            </div>
                            <div className={s.job2}>
                                <button className={s.btnJob}>
                                    <p>Проект № 2</p>
                                    <p>сайт</p>
                                </button>
                            </div>
                            <div className={s.job3}>
                                <button className={s.btnJob}>
                                    <p>Проект № 3</p>
                                    <p>сайт</p>
                                </button>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default MyJobs;