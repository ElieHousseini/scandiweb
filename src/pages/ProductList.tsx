import Footer from "../components/Footer/Footer"
import Header from "../components/Header/ProductList/Header"
import Products from "../components/Products/Products"
import Layout from "../Layout/Layout"
import ItemsToDeleteContext from "../context/itemsToDeleteContext"
import { useState } from "react"

type ItemsToDeleteType = string[]

const ProductList = () : JSX.Element => {
    const [itemsToDelete, setItemsToDelete] = useState<ItemsToDeleteType>([]);

    return (
        <Layout>
            <ItemsToDeleteContext.Provider value = {{itemsToDelete, setItemsToDelete}}>
                <Header />
                <Products />
                <Footer />
            </ItemsToDeleteContext.Provider>
        </Layout>
    )
}

export default ProductList