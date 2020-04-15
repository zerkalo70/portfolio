import React from "react";
import s from './Contacts.module.css'

class Contacts extends React.Component {
    render = () => {
        return (
            <div className={s.myContacts}>
                <div className={s.parent}>
                    <div className={s.contact}>
                        <p className={s.title}>Контакты</p>
                    </div>
                    <form className={s.form}>
                        <input value="input"/>
                        <input value="input"/>
                        <textarea>textarea</textarea>
                    </form>
                    <div className={s.send}>
                        <button>Отправить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts