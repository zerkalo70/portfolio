import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
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
            <BrowserRouter>
            <div className="App">
            <div className="GrossParent">
                <Navigation/>
                <div className="Content">
                    <Switch>
                <Route exact path='/Resume' component={Resume}/>
                <Route path='/MyWorks' component={MyWorks}/>
                <Route path='/MyServices' component={MyServices}/>
                <Route path='/Contacts' component={Contacts}/>
                        <Route path="*" component={Resume}/>
                    </Switch>
                </div>
                <Footer/>
                </div>
            </div>
            </BrowserRouter>

        )
    }
}



export default App;
