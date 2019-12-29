import React from 'react';
import l from './Long.module.css';


const Long = () => {
    return    <div className={l.long}>
        <div className={l.base}>
            <div className={l.longLook}>
                <span>Рассматриваю варианты удалённой работы</span>
            </div>
            <button className={l.toHire}>Нанять меня</button>
        </div>
    </div>
}

export default Long;