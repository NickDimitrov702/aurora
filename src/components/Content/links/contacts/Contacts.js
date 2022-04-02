import style from './Contacts.module.css'
import Logot from '../../../../Resources/Aurora-botique.jpg'
import Location from '../../../../Resources/Aurora directions.JPG'
// AIzaSyA4thCvDnu2tAAic7UypXErl1P07G26cP0
import MapContainer from '../../../GoogleMaps/GoogleMaps.js'

function Contacts() {




    return (
        <div id='contacts' className={style.contactWrapper}>
            <header className={style.header}>
                <div className={style.liner}></div>
                <div className={style.LogoWrapper}>
                    <img className={style.image} src={Logot}></img>
                </div>
            </header>
            <main className={style.mainContentWrapper}>
                <div className={style.contactsWrapper}>
                    <h1>You can find us on</h1>
                    <p>Улица Доктро Пискюлиев 50</p>
                    <p>Телефон: 087 791 0707</p>
                    <p>Email:Bla@blabla</p>
                    <p>Facebook: bladibladblida</p>
                </div>
                <MapContainer></MapContainer>

                {/* <img className={style.imageWrapper} src={Location}></img> */}

            </main>
        </div>
    )
}

export default Contacts