import React from 'react';
import logo1 from "../logo1.jpg";


const Jobs = () => {
    return   <div className="jobs">
        <div className="base3">
            <div className="my_jobs">
                <span>Мои работы</span>
            </div>
            <div className="example_jobs">
                <div className="ej1">
                    <div className="ej11"></div>
                    <div className="ej12"></div>
                </div>
                <div className="ej2">
                    <div className="ej21">
                        <button className="look">Смотреть</button>
                    </div>
                    <div className="ej22">
                        <span className="jp1">Название проекта</span>
                        <div className="jp2">
                            <span>Краткое описание</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Jobs;