import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import Resume from "./Components/Resume/Resume";
import MyWorks from "./Components/MyWorks/MyWorks";
import MyServices from "./Components/MyServices/MyServices";
import Freelanc from "./Components/Freelanc/Freelanc";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";


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
