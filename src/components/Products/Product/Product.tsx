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

    weight: string,
    onChange:  (event: React.ChangeEvent<HTMLInputElement>) => void

}

const Product = ({sku, name, price, type, size, height, width, length, weight, onChange } : ProductType) : JSX.Element => {
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
            <input onChange={onChange} type="checkbox" aria-label={name} id={"id." + Math.floor(Math.random() * 1000000) + 1} className="delete-checkbox" />
        </div>
    )
}

export default Product