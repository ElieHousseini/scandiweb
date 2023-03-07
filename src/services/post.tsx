import axios from "axios";

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

type PostPropType = {
    url?: string,
    formData: FormDataType
}

type PostReturnType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const postData = async ({url = 'https://jsonplaceholder.typicode.com/todos/1', formData} : PostPropType) : Promise<PostReturnType> => {
    const res = await axios.post('/api/contact', formData)
    return res.data
}

export default postData