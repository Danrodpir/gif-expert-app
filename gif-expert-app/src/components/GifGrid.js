import React, { useState, useEffect } from 'react'
import { getGifs } from '../helpers/getGif';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);    

    //getGifs()

    return(
        <>
            <h3>{category}</h3>

            {loading && <p className="animate__animated animate__flash">Cargando...</p> }

            <div className="card-grid animate__animated animate__fadeIn">
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )
}
