import { Link } from 'react-router-dom'
import { Links } from 'react-router-dom'
import { useRef } from 'react'
import style from './NavBar.module.css'
import Logo from '../../Resources/Aurora-botique.jpg'
import ScrollIntoView from 'react-scroll-into-view'
import About from '../../components/Content/links/about/About.js'

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
                <ScrollIntoView selector='#about'>
                    <li><Link to='/about'>About</Link></li>
                </ScrollIntoView >
                <ScrollIntoView selector='#products'>
                    <li><Link to='/products'>Products</Link></li>
                </ScrollIntoView>
                <ScrollIntoView selector='#contacts'>
                    <li><Link to='/contacts'>Contacts</Link></li>
                </ScrollIntoView>
            </ul>
        </nav>
    )
}

export default NavBar