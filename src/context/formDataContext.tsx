import { createContext } from 'react';

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


type AppContextType = {
    formData: FormDataType;
    setFormData: React.Dispatch<React.SetStateAction<FormDataType>>;
}

const formDataContext = createContext<AppContextType>({
    formData: {
        sku: '',
        name: '',
        price: '',
        type: '',
        size: '',
        height: '',
        width: '',
        length: '',
        weight: ''
    },
    setFormData: () => {},
});

export default formDataContext