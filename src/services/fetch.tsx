import axios from "axios";

type FetchPropType = {
    url?: string
}

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

type FetchReturnType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
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



const fetchData = async ({url = 'https://jsonplaceholder.typicode.com/todos/1'} : FetchPropType) : Promise<FetchReturnType> => {
    const res = await axios.get(url)
    return res.data
}

const postData = async ({url = 'https://jsonplaceholder.typicode.com/todos/1', formData} : PostPropType) : Promise<PostReturnType> => {
    const res = await axios.post('/api/contact', formData)
    return res.data
}


export {fetchData, postData}