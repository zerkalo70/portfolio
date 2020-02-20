import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./Components/Navigation";
import Resume from "./Components/Resume";
import MyWorks from "./Components/MyWorks";
import MyServices from "./Components/MyServices";
import Freelanc from "./Components/Freelanc";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";


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
