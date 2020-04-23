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
                    <div className={s.Feedback}>
                        <form className={s.form}>
                            <input className={s.name} type="text" placeholder="Ваше имя"/>
                            <input className={s.mail} type="text" placeholder="Email Address"/>
                            <textarea className={s.comments} placeholder="Ваше сообщение"></textarea>
                            <input className={s.button} type="button" value="Send"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contacts