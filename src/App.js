import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <div className="GrossParent">
            <div className="Navigation">NavBar</div>
            <div className="Resume">Resume</div>
            <div className="MyWorks">MyWorks</div>
            <div className="MyServices">MyServices</div>
            <div className="Freelanc">Freelanc</div>
            <div className="Contacts">Contacts</div>
            <div className="Footer">Footer</div>
        </div>
    )
}


export default App;
