import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";

const App = () => {
    return <div className="Parent">
        <Header />
        <Content />
        <Footer />
    </div>
}

export default App;
