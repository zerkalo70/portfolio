import React from 'react';
import './App.css';
import Header from "./Components/Header";
import MyResume from "./Components/Resume/MyResume";
import MySkills from "./Components/Skills/MySkills";
import MyJobs from "./Components/MyJobs";
import MyFreelance from "./Components/MyFreelance";
import Contacts from "./Components/Contacts";
import Footer from "./Components/Footer";


class App extends React.Component {
    render = () => {
        return (

            <div className="Portfolio">
                <Header/>
                <MyResume/>
                <MySkills/>
                <MyJobs/>
                <MyFreelance/>
                <Contacts/>
                <Footer/>
            </div>


        )
    }
}


export default App;
