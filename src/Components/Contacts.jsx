import React from 'react';
import logo1 from "../logo1.jpg";


const Contacts = () => {
    return    <div className="contacts">
        <div className="base6">
            <div className="cont">
                <span>Контакты</span>
            </div>
            <div className="area">
                <input placeholder="input"/>
                <input placeholder="input"/>
                <textarea placeholder="textarea"></textarea>
            </div>
            <button className="send">Отправить</button>
        </div>
    </div>
}

export default Contacts;