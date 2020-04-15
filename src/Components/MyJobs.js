import React from "react";
import s from './MyJobs.module.css'

class MyJobs extends React.Component {
    render = () => {
        return (
            <div className={s.myJobs}>
                <div className={s.parent}>
                        <div className={s.bG_1}>
                            <p>Мои работы</p>
                        </div>
                        <div className={s.bG_2}>
                            <div className={s.job1}>
                                <div className={s.picture}>
                                    <button>Смотреть</button>
                                </div>
                                <div className={s.reviewJob}>
                                    <p className={s.nameJob}>Название проекта</p>
                                    <p className={s.shortReview}>Краткое описание</p>
                                </div>
                            </div>
                            <div className={s.job2}>
                                <div className={s.picture}>
                                    <button>Смотреть</button>
                                </div>
                                <div className={s.reviewJob}>
                                    <p className={s.nameJob}>Название проекта</p>
                                    <p className={s.shortReview}>Краткое описание</p>
                                </div>
                            </div>
                            <div className={s.job3}>
                                <div className={s.picture}>
                                    <button>Смотреть</button>
                                </div>
                                <div className={s.reviewJob}>
                                    <p className={s.nameJob}>Название проекта</p>
                                    <p className={s.shortReview}>Краткое описание</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}

export default MyJobs;