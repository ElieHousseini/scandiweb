import styles from './Product.module.scss'
import { numberToDecimal } from '../../../helpers/syntaxCheck'

type ProductType = {
    sku: string,
    name: string,
    price: string,
    type: string,

    // DVD
    size: string,
    
    // Furniture
    height: string,
    width: string,
    length: string,

    weight: string

}

const Product = ({sku, name, price, type, size, height, width, length, weight } : ProductType) : JSX.Element => {
    return (
        <div id={styles.container}>
            <div id={styles.item}>
                <p>{sku} </p>
                <p>{name}</p>
                <p>{numberToDecimal(price, 2)} $</p>
                <p>
                    {type.toLocaleLowerCase() === 'furniture' && `Dimensions: ${height}x${width}x${length}`}
                    {type.toLocaleLowerCase() === 'dvd' && `Size: ${size} MB`}
                    {type.toLocaleLowerCase() === 'book' && `Weight: ${weight} KG`}
                </p>
            </div>
            <input type="checkbox" className="delete-checkbox" />
        </div>
    )
}

export default Product