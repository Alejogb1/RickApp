// custom hook es una funcion personalizada que involucra uno o más hooks
// custom hooks  -> solo es uncional

import { useEffect, useState } from "react";
// import { environment } from "./../constants";

const BASE_URL = "https://rickandmortyapi.com/api"
export const useFetch = (endpoint, initialState = []) => {   // Por default, es un objeto vacio
    const [data, setData] = useState([])    
    const [fetching, setFetch] = useState(true)    
    const [error, setError] = useState(false)    
    const getData = async () => { // uso esta funcion en un useEffect
        try {
            const result = await fetch (`${BASE_URL}/${endpoint}`);
            const data = await result.json();
            console.log(data)
            setData(data) // array de personajes
            console.log(data.results)
            setFetch(false)
        } catch (e) {
            setError(true)
            setFetch(false)
            setData(initialState) // Ya no es un array de objetos vacio siempre
        }
    
    }
    useEffect(() => {
    getData() // De esta manera nos permite hacer la peticion Http. useEffect no puede ser async
    }, [])
    console.log(data, fetching, error)
    return [data, fetching, error] // Alternativa a export default
}
