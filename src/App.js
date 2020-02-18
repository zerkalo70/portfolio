import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./Navigation";
import Resume from "./Resume";
import MyWorks from "./MyWorks";
import MyServices from "./MyServices";
import Freelanc from "./Freelanc";
import Contacts from "./Contacts";
import Footer from "./Footer";


class App extends React.Component {
    render = () => {
        return (
            <div className="App">
            <div className="GrossParent">
                <Navigation/>
                <Resume/>
                <MyWorks/>
                <MyServices/>
                <Freelanc/>
                <Contacts/>
                <Footer/>
            </div>
            </div>

        )
    }
}



export default App;
