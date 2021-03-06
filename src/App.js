import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import MyResume from "./Components/Resume/MyResume";
import MySkills from "./Components/Skills/MySkills";
import MyJobs from "./Components/Jobs/MyJobs";
import MyFreelance from "./Components/Freelance/MyFreelance";
import Contacts from "./Components/Contacts/Contacts";
import Footer from "./Components/Footer/Footer";


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
