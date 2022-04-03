import { Link } from 'react-router-dom'
import { Links } from 'react-router-dom'
import { useRef } from 'react'
import style from './NavBar.module.css'
import Logo from '../../Resources/Aurora-botique.jpg'
import ScrollIntoView from 'react-scroll-into-view'
// Scroll in to view is imported from a react lib. 
// The component that needs to be viewed has to have id, the id is used in the selecorts, similar as CSS selecor for ID

function NavBar() {


    return (
        <nav className={style.NavBarWrapper}>
            <div className={style.line}></div>
            <div className={style.LogoWrapper}>
                <img className={style.image} src={Logo}></img>
            </div>
            <ul className={style.listItemWrapper}>
                <li><Link className={style.linkItems} to='/gifts'>Gifts</Link></li>
                <li><Link className={style.linkItems} to='/flowers'>Flowers</Link></li>
                <li>
                    <ScrollIntoView selector='#about'>
                        <Link className={style.linkItems} to='/about'>About</Link>
                    </ScrollIntoView >
                </li>
                <li>
                    <ScrollIntoView selector='#products'>
                        <Link className={style.linkItems} to='/products'>Products</Link>
                    </ScrollIntoView>
                </li>
                <li>
                    <ScrollIntoView selector='#contacts'>
                        <Link className={style.linkItems} to='/contacts'>Contacts</Link>
                    </ScrollIntoView>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar