import styles from './Product.module.scss'

type ProductType = {
    sku: string,
    name: string,
    price: number,
    mesurementUnit: string,
    type: string
}

const Product = ({sku, name, price, mesurementUnit, type} : ProductType) : JSX.Element => {
    return (
        <div id={styles.container}>
            <div id={styles.item}>
                <p>{sku} </p>
                <p>{name} {type.toLowerCase()==='dvd' && 'Disc'}</p>
                <p>{price} $</p>
                <p>{type.toLowerCase() === 'furniture' && 'Dimensions: '}{type.toLowerCase() === 'book' && 'Weight: '}{type.toLowerCase() === 'dvd' && 'Size: '}{mesurementUnit}{type.toLowerCase() ==='book' && ' KG'}{type.toLowerCase() === 'dvd' && ' MB'}</p>
            </div>
            <input type="checkbox" className="delete-checkbox"></input>
        </div>
    )
}

export default Product