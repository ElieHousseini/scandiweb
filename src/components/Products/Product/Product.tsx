import styles from './Product.module.scss'

type ProductType = {
    sku: string,
    name: string,
    price: number,
    mesurementUnit: string,
    type: string
}

const Product = ({sku, name, price, mesurementUnit, type} : ProductType) => {
    return (
        <div id={styles.container}>
            <div id={styles.item}>
                <p>{sku} {type.toLowerCase()=='dvd' && 'Disc'}</p>
                <p>{name}</p>
                <p>{price} $</p>
                <p>{mesurementUnit} {type.toLowerCase()=='book' && 'KG'}</p>
            </div>
            <input type="checkbox" className="delete-checkbox"></input>
        </div>
    )
}

export default Product