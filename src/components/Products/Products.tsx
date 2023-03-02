import Product from './Product/Product'
import Styles from './Products.module.scss'

const Products = () => {
    return (
        <div id={Styles.container}>
            <Product />
            <Product />
            <Product />
        </div>
    )
}

export default Products