import style from './InfoBar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faEnvelope, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons'


function InfoBar() {

    return (
        <div className={style.infoBarWrapper}>
            <div className={style.infoBar}>
                <ul className={style.infoBarInfo}>
                    <li><FontAwesomeIcon className={style.infoBarIcon} icon={faPhone}></FontAwesomeIcon>+359 08923124</li>
                    <li><FontAwesomeIcon className={style.infoBarIcon} icon={faEnvelope}></FontAwesomeIcon>botique@botique.com</li>
                    <li><FontAwesomeIcon className={style.infoBarIcon} icon={faClock}></FontAwesomeIcon>Working time: Fr-Mon 10:00 - 18:00</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoBar