import Product from './Product/Product'
import Styles from './Products.module.scss'

const Products = () : JSX.Element => {
    return (
        <main>
            <div id={Styles.container}>
                <div id={Styles.parent}>
                    <Product sku='J12dqwasdasdef' name="231asdasd" price={123.5} mesurementUnit="12asfasdf" type='dvd'/>
                    <Product sku='J12dqwasdasdef' name="231asdasd" price={123.5} mesurementUnit="12asfasdf" type='book'/>
                    <Product sku='J12dqwasdasdef' name="231asdasd" price={123.5} mesurementUnit="12asfasdf" type='dvd'/>
                    <Product sku='J12dqwasdasdef' name="231asdasd" price={123.5} mesurementUnit="12asfasdf" type='dvd'/>
                    <Product sku='J12dqwasdasdef' name="231asdasd" price={123.5} mesurementUnit="12asfasdf" type='dvd'/>
                    <Product sku='J12dqwasdasdef' name="231asdasd" price={123.5} mesurementUnit="12asfasdf" type='dvd'/>
                    <Product sku='J12dqwasdasdef' name="231asdasd" price={123.5} mesurementUnit="12asfasdf" type='dvd'/>
                </div>
            </div>
        </main>
    )
}

export default Products