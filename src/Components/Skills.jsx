import React from 'react';
import s from './Skills.module.css'


const Skills = () => {
    return   <div className={s.skills}>
        <div className={s.base}>
            <div className={s.myskills}>
                <span>Мои скиллы</span>
            </div>
            <div className={s.skillsshow}>
                <div className={s.ss1}></div>
                <div className={s.ss2}>
                    <div className={s.ss21}></div>
                    <div className={s.ss22}></div>
                </div>
                <div className={s.ss3}>
                    <div className={s.ss31}>
                        <div className={s.ss311}></div>
                        <button className={s.ss312}>React</button>
                    </div>
                    <div className={s.ss32}>
                        <span>Подробное описание навыка</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Skills;