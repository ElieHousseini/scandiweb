import axios from "axios";

type FetchPropType = {
    url?: string
}

type FetchReturnType = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  }

const fetchData = async ({url = 'https://jsonplaceholder.typicode.com/todos/1'} : FetchPropType) : Promise<FetchReturnType> => {
    const res = await axios.get(url)
    return res.data
}

export default fetchData