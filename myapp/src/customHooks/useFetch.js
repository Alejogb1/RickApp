// custom hook es una funcion personalizada que involucra uno o más hooks
// custom hooks  -> funcional

import { useEffect, useState } from "react";
import { environment } from "./../constants";


export const useFetch = (endpoint, initialState = []) => {  
    const [data, setData] = useState([])    
    const [fetching, setFetch] = useState(true)    
    const [error, setError] = useState(false)    
    const getData = async (endpoint) => {
        try {
            const result = await fetch (`${enviroment.BASE_URL}/${endpoint}`, {
                method: "GET",
                headers: {
                    Authorization: "",
                },
            });
            const data = await result.json();
            setData(data.results) // array de personajes
            setFetch(false)
        } catch (e) {
            setError(true)
            setFetch(false)
            setData(initialState) // Ya no es un array de objetos vacio siempre
        }
    
    }
    useEffect(() => {
    getData("character")
    }, [])

    return [data, fetching, error]
}
