import Product from './Product/Product'
import Styles from './Products.module.scss'

const Products = () : JSX.Element => {
    return (
        <main>
            <div id={Styles.container}>
                <div id={Styles.parent}>
                    <Product sku='JVC12312' name="Acme" price='123.50' mesurementUnit="24x45x15" type='furniture'/>
                    <Product sku='JVC12312' name="Acme" price='123.0' mesurementUnit="24x45x15" type='furniture'/>
                    <Product sku='JVC12312' name="Acme" price='123.50' mesurementUnit="24x45x15" type='furniture'/>
                    <Product sku='JVC12312' name="Acme" price='123.50' mesurementUnit="24x45x15" type='furniture'/>
                    <Product sku='JVC12312' name="Acme" price='123.50' mesurementUnit="24x45x15" type='furniture'/>
                </div>
            </div>
        </main>
    )
}

export default Products