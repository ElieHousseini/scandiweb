import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Header from "../components/Header/ProductAdd/Header"
import Layout from "../Layout/Layout"
import {useState} from 'react'
import { Context } from '../context/context'

type FormDataType = {
    sku: string;
    name: string;
    price: string;
    type: string;
    size?: string;
    height?: string;
    width?: string;
    length?: string;
    weight?: string
}

const ProductAdd = () : JSX.Element => {

    const [formData, setFormData] = useState<FormDataType>({
        sku: '',
        name: '',
        price: '',
        type: 'DVD',
        size: '',
        height: '',
        width: '',
        length: '',
        weight: ''
    });

    return(
        <Layout>
            <Context.Provider value ={{formData, setFormData}}>
                <Header />
                <Form />
            </Context.Provider>
            <Footer/>
        </Layout>
    )
}

export default ProductAdd