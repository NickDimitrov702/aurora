import style from './About.module.css'
import Logot from '../../../../Resources/Aurora-botique.jpg'

function About() {

    return (
        <div className={style.aboutWrapper}>
            <header className={style.header}>
                <div className={style.liner}></div>
                <div className={style.LogoWrapper}>
                    <img className={style.image} src={Logot}></img>
                </div>
            </header>
            <main className={style.mainWrapper}>
                <p>Perfect place for the most apropriate gift</p>
                <p>Make your loved once
                    happy with an interesting
                    and exciting memory! </p>
                <p>Don’t
                    wait for an occasion, make a gift!</p>
            </main>
        </div>

    )
}

export default About