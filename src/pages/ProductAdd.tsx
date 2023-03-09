import Footer from "../components/Footer/Footer"
import Form from "../components/Form/Form"
import Header from "../components/Header/ProductAdd/Header"
import Layout from "../Layout/Layout"
import {useState} from 'react'
import { formDataContext } from '../context/formDataContext'

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
            <formDataContext.Provider value ={{formData, setFormData}}>
                <Header />
                <Form />
            </formDataContext.Provider>
            <Footer/>
        </Layout>
    )
}

export default ProductAdd