import style from './Contacts.module.css'
import Logot from '../../../../Resources/Aurora-botique.jpg'

function Contacts() {

    return (
        <div className={style.contactWrapper}>
            <header className={style.header}>
                <div className={style.liner}></div>
                <div className={style.LogoWrapper}>
                    <img className={style.image} src={Logot}></img>
                </div>
            </header>
        </div>
    )
}

export default Contacts