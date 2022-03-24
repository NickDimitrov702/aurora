import style from './Contacts.module.css'
import Logot from '../../../../Resources/Aurora-botique.jpg'
import Location from '../../../../Resources/Aurora directions.JPG'
function Contacts() {

    return (
        <div className={style.contactWrapper}>
            <header className={style.header}>
                <div className={style.liner}></div>
                <div className={style.LogoWrapper}>
                    <img className={style.image} src={Logot}></img>
                </div>
            </header>
            <main className={style.mainContentWrapper}>
                <div className={style.contactsWrapper}>
                    <h1>You can find us on</h1>
                    <p>Varna, Bla bla bla bal No 12</p>
                    <p>Mobile:08992312</p>
                    <p>Email:Bla@blabla</p>
                    <p>Facebook: bladibladblida</p>
                </div>
                    <img className={style.imageWrapper} src={Location}></img>


            </main>
        </div>
    )
}

export default Contacts