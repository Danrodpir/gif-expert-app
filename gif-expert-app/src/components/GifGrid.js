import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {loading} = useFetchGifs();

/*
    const [images, setImages] = useState([]);

    useEffect( () => {
        getGifs(category)
            .then(setImages);
    }, [category])
*/

    

    //getGifs()

    return(
        <>
            <h3>{category}</h3>

            {loading ? 'Cargando' : 'Datos cargados'}
            {/* <div className="card-grid">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div> */}
        </>
    )
}
