import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';

// La funcion recibe informacion por medio de los props, para obtener el valor
// Se deberia poner GifGrid = ( props ) => {} y se deberia llamar dentro del codigo
// como props.NombreDeLProp, para evitar esto se debe desestructurar el elemento de la siguiente manera
// GifGrid = ( {  nombreDelProp } ) => {} y asi solo llamar al prop asi: nombreDelProp
export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs( category );

    return (
        <React.Fragment>
            <h3>{ category }</h3>
            { loading && <p className="animate__animated animate__flash">Loading</p> }
            <div className="card-grid">
                {
                    images.map( img => (
                        <GifGridItem  
                            key={ img.id}
                            { ...img }
                        />
                    ))
                }
            </div>
        </React.Fragment>
    )
}
