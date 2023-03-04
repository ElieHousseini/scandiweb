import Footer from "../components/Footer/Footer"
import Header from "../components/Header/ProductList/Header"
import Products from "../components/Products/Products"
import Layout from "../Layout/Layout"

const ProductList = () => {
    return (
        <Layout>
            <Header />
            <Products />
            <Footer />
        </Layout>
    )
}

export default ProductList