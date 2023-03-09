import Product from './Product/Product'
import Styles from './Products.module.scss'

const Products = () : JSX.Element => {
    return (
        <main>
            <div id={Styles.container}>
                <div id={Styles.parent}>
                    <Product sku='JVC12312' name="Acme" price='123.50' type='book' size="12" height="12" width="50" length="12" weight="30" />
                </div>
            </div>
        </main>
    )
}

export default Products