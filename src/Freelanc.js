import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


class Freelanc extends React.Component {
    render = () => {
        return (
            <div className="Freelanc">
                <div className="blockFree">
                    <h1 className="marquee"><span>Рассматриваю варианты удалённой работы</span></h1>
                </div>
                <button>Нанять меня</button>
            </div>
        )
    }
}



export default Freelanc;
