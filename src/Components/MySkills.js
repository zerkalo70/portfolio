import React from "react";
import s from './MySkills.module.css'

class MySkills extends React.Component {
    render = () => {
        return (
            <div className={s.mySkills}>
                <div className={s.skills}>
                    <div className={s.heading}>
                        <p className={s.title}>Мои скиллы</p>
                    </div>
                    <div className={s.overview}>
                        <div className={s.skill1}>
                            <div className={s.bS_2a}>
                                <div className={s.grey}></div>
                            </div>
                            <div className={s.bS_2b}>
                                <div className={s.react}>
                                    <p>React</p>
                                </div>
                            </div>
                            <div className={s.bS_2c}>
                                <p className={s.description}>Подробное описание<br/> навыка</p>
                            </div>
                        </div>
                        <div className={s.skill2}>
                            <div className={s.bS_2a}>
                                <div className={s.grey}></div>
                            </div>
                            <div className={s.bS_2b}>
                                <div className={s.react}>
                                    <p>React</p>
                                </div>
                            </div>
                            <div className={s.bS_2c}>
                                <p className={s.description}>Подробное описание<br/> навыка</p>
                            </div>
                        </div>
                        <div className={s.skill3}>
                            <div className={s.bS_2a}>
                                <div className={s.grey}></div>
                            </div>
                            <div className={s.bS_2b}>
                                <div className={s.react}>
                                    <p>React</p>
                                </div>
                            </div>
                            <div className={s.bS_2c}>
                                <p className={s.description}>Подробное описание<br/> навыка</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills;