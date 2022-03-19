import { Link } from 'react-router-dom'
import { Links } from 'react-router-dom'
import style from './NavBar.module.css'
import Logo from '../../Resources/Aurora-botique.jpg'

function NavBar() {

    return (
        <nav className={style.NavBarWrapper}>
                <div className={style.line}></div>
            <div className={style.LogoWrapper}>
                <img className={style.image} src={Logo}></img>
            </div>
            <ul className={style.listItemWrapper}>
                <li><Link to='/gifts'>Gifts</Link></li>
                <li><Link to='/flowers'>Flowers</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/products'>Products</Link></li>
                <li><Link to='contacts'>Contacts</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar