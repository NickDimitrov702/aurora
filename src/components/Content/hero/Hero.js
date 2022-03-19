import heroImg from '../../../Resources/pexels-valeria-boltneva-1484657.jpg'
import style from './Hero.module.css'
function Hero() {

    return (
        <div className={style.heroWrapper}>
            <img className={style.heroImage} src={heroImg}></img>
            <div className={style.heroContentWrapper}>
                <p>Perfect place for the most apropriate gift</p>
                <p>Make your loved once
                    happy with an interesting
                    and exciting memory! </p>
                    <p>Don’t
                    wait for an occasion, make a gift!</p>
            </div>

        </div>
    )
}

export default Hero