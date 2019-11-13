import React from 'react';
import './App.css';

const App=()=>{
    return (
            <div className="Parent">
                <header className="Header">Header
                    <div className="block-menu">menu</div>
                </header>
                <div className="Content">
                    <div className="block-1">Блок 1
                        <div className="basis1">база-1</div>
                    </div>
                    <div className="block-2">Блок 2
                        <div className="basis2">база-2</div>
                    </div>
                    <div className="block-3">Блок 3
                        <div className="basis3">база-3</div>
                    </div>
                    <div className="block-4">Блок 4
                        <div className="basis4">база-4</div>
                    </div>
                    <div className="block-5">Блок 5
                        <div className="basis5">база-5</div>
                    </div>
                </div>
                <footer className="Footer">Footer
                    <div className="basisF">Footer</div>
                </footer>
            </div>
        );
}

export default App;
