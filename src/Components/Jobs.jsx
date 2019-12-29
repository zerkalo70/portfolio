import React from 'react';
import j from './Jobs.module.css';


const Jobs = () => {
    return   <div className={j.jobs}>
        <div className={j.base}>
            <div className={j.myJobs}>
                <span>Мои работы</span>
            </div>
            <div className={j.exampleJobs}>
                <div className={j.ej1}>
                    <div className={j.ej11}></div>
                    <div className={j.ej12}></div>
                </div>
                <div className={j.ej2}>
                    <div className={j.ej21}>
                        <button className={j.look}>Смотреть</button>
                    </div>
                    <div className={j.ej22}>
                        <span className={j.jp1}>Название проекта</span>
                        <div className={j.jp2}>
                            <span>Краткое описание</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Jobs;