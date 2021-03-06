import React from "react";
import s from './MySkills.module.css';
import html from './images/html.png';
import JavaScript from './images/JavaScript.png';
import reactJS from './images/reactJS.png';
import css from './images/css.png'

class MySkills extends React.Component {
    render = () => {
        return (
            <div className={s.mySkills}>
                <div className={s.parent}>
                    <div className={s.heading}>
                        <p className={s.title}>Мои навыки</p>
                    </div>
                    <div className={s.Skills}>
                        <div className={s.skill1}>
                            <div className={s.label}>
                                <img src={html}/>
                            </div>
                            <p className={s.language}>HTML</p>
                            <p className={s.description}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Autem dignissimos doloribus
                                id neque perspiciatis.
                            </p>
                        </div>
                        <div className={s.skill2}>
                            <div className={s.label}>
                                <img src={css}/>
                            </div>
                            <p className={s.language}>CSS</p>
                            <p className={s.description}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Autem dignissimos doloribus
                                id neque perspiciatis.
                            </p>
                        </div>
                        <div className={s.skill3}>
                            <div className={s.label}>
                                <img src={JavaScript}/>
                            </div>
                            <p className={s.language}>JavaScript</p>
                            <p className={s.description}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Autem dignissimos doloribus
                                id neque perspiciatis.
                            </p>
                        </div>
                        <div className={s.skill4}>
                            <div className={s.label}>
                                <img src={reactJS}/>
                            </div>
                            <p className={s.language}>ReactJS</p>
                            <p className={s.description}>Lorem ipsum dolor sit amet,
                                consectetur adipisicing elit.
                                Autem dignissimos doloribus
                                id neque perspiciatis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills;