import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGif"

export const useFetchGifs = (category) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            .then(imgs => {
                setTimeout( () => {
                    setState({
                        data: imgs,
                        loading: false
                    });
                },2000);                
            })
    }, [category])
    

    return state;
}