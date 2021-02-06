import {useState} from "react"
import axios from "axios" // PETICIONES HTTP

export const usePost = () => {
    const [response, setResponse] = useState(null)
    const [fetching, setFetching] = useState(false)

    const postData = async (endopoin, object) => {
        try {
            setFetching(true)
            const responseData = await axios.post(`${BASE_URL}/${endpoint}`, object)
        } catch (e) {
            console.error(e)
        }
    }
    return [postData, response, fetching]
}