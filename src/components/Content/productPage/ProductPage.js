import { Link } from 'react-router-dom'
import style from './ProductPage.module.css'
import firstImg from '../../../Resources/pexels-teona-swift-6913841.jpg'
import secondImg from '../../../Resources/pexels-ekrulila-2320621.jpg'
import thirdsImg from '../../../Resources/pexels-engin-akyurt-1458867.jpg'

function ProductPage() {

    return (
        <div className={style.productPageWrapper} >
            <div className={style.linkButtonsWrapper}>
                <ul className={style.listItemsWrapper}>
                    <li>
                        <Link>ICON</Link>
                        <p>Flowers</p>
                        <p>Flowers for every day</p>
                    </li>
                    <li>
                        <Link>ICON</Link>
                        <p>Delivery</p>
                        <p>Flowers to deliver every day</p>
                    </li>
                    <li>
                        <Link>ICON</Link>
                        <p>Gifts</p>
                        <p>Gifts for every day</p>
                    </li>
                </ul>
            </div>
            <div className={style.productsTemplateWrapper}>
                <div className={style.imageContainer}>
                    <img src={firstImg}></img>
                    <p>Section description</p>
                </div>
                <div className={style.imageContainer}>
                    <img src={secondImg}></img>
                    <p>Section description</p>
                </div>
                <div className={style.imageContainer}>
                    <img src={thirdsImg}></img>
                    <p>Section description</p>
                </div>
            </div>
        </div>
    )
}

export default ProductPage