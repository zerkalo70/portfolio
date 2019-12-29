import React from 'react';
import './App.css';
import logo1 from './logo1.jpg';
import image3 from './Components/image3.jpg';
import Navigation from "./Components/Navigation";
import Resume from "./Components/Resume";
import Skills from "./Components/Skills";
import Jobs from "./Components/Jobs";
import Long from "./Components/Long";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
    <div className="Parent">
            <header className="header">
              <Navigation/>
            </header>
        <Route path = '/Resume' component = {Resume}/>
        <Route path = '/Skills' component = {Skills}/>
        <Route path = '/Jobs' component = {Jobs}/>
        <Route path = '/Contacts' component = {Contacts}/>
        <Route path = '/Long' component = {Long}/>
        {/*<Route path = '/Footer' component = {Footer}/>*/}
            {/*<Resume/>*/}
            {/*<Skills/>*/}
            {/*<Jobs/>*/}
            {/*<Long/>*/}
            {/*<Contacts/>*/}
            <Footer/>
        </div>
        </BrowserRouter>
    )
}


export default App;
