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


const App = () => {
    return <div className="Parent">
            <header className="header">
              <Navigation/>
            </header>
            <Resume/>
            <Skills/>
            <Jobs/>
            <Long/>
            <Contacts/>
            <Footer/>
        </div>
}


export default App;
