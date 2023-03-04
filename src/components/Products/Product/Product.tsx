import styles from './Product.module.scss'

type ProductType = {
    sku: string,
    name: string,
    price: number,
    mesurementUnit: string
}

const Product = ({sku, name, price, mesurementUnit} : ProductType) => {
    return (
        <div id={styles.container}>
            <div id={styles.item}>
                <p>{sku}</p>
                <p>{name}</p>
                <p>{price}</p>
                <p>{mesurementUnit}</p>
            </div>
            <input type="checkbox" id="myCheckbox"></input>
        </div>
    )
}

export default Product