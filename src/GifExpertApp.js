import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

import { GifGrid } from './components/GifGrid'

const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai x', 'Dragon Ball']; // De esta manera no se hace
    const [categories, setCategories] = useState(['Mr Robot']);

    // const handleAdd = () => {
    //     setCategories( [...categories, 'Animals'] );
    //     setCategories( cats => [...cats, 'Animals'] );
    // }

    return(
        <React.Fragment>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />

            <ol>
                {
                    categories.map( (category) => (
                        <GifGrid 
                            category={ category } 
                            key={ category }
                            />) 
                        )
                }
            </ol>
        </React.Fragment>
    )
}



export default GifExpertApp;