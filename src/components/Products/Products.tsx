import Product from './Product/Product'
import Styles from './Products.module.scss'
import { ChangeEvent, useContext } from 'react'
import ItemsToDeleteContext from '../../context/itemsToDeleteContext'

const Products = () : JSX.Element => {

    const { itemsToDelete, setItemsToDelete } = useContext(ItemsToDeleteContext)

    const handleCheck = (event: ChangeEvent<HTMLInputElement>) : void => {
        // if(event.target.checked) console.log('event.target.id', event.target.id)
            setItemsToDelete([...itemsToDelete, event.target.id])
        
    }

    return (
        <main>
            <div id={Styles.container}>
                <div id={Styles.parent}>
                    <Product onChange={handleCheck} sku='JVC12312' name="Acme" price='123.50' type='book' size="12" height="12" width="50" length="12" weight="30" />
                    <Product onChange={handleCheck} sku='JVC12312' name="Acme" price='123.50' type='furniture' size="12" height="12" width="50" length="12" weight="30" />
                    <Product onChange={handleCheck} sku='JVC12312' name="Acme" price='123.50' type='dvd' size="12" height="12" width="50" length="12" weight="30" />
                </div>
            </div>
        </main>
    )
}

export default Products