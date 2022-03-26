import style from './InfoBar.module.css'

function InfoBar() {

    return (
        <div className={style.infoBarWrapper}>
            <div className={style.infoBar}>
                <ul className={style.infoBarInfo}>
                    <li>+359 08923124</li>
                    <li>botique@botique.com</li>
                    <li>Working time: Fr-Mon 10:00 - 18:00</li>
                </ul>
            </div>
        </div>
    )
}

export default InfoBar