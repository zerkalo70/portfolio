import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


class Footer extends React.Component {
    render = () => {
        return (
            <div className="Footer">
                <div className="cop">
                    <p>© Петров С.В. 2020. Все права защищены</p>
                </div>
            </div>
        )
    }
}



export default Footer;
