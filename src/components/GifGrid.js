import React, {useState, useEffect} from 'react'
// import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs} from '../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
    // const [images, setimages] = useState([]);
    // useEffect( () =>{
    //     getGifs(category)
    //     .then(setimages);
    // },[category])
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
        <h3 className='animate__animated animate__jello'>{category}</h3>
        {loading && <p className='animate__animated animate__flash'>Loading</p>}
        <div className='card-grid'>         
            {/* <ol>
                {
                    images.map(({id,title}) =>(
                            <li key={id}>{title}</li>
                        )
                    )
                }
            </ol> */}
                {
                    images.map(img =>(
                            <GifGridItem 
                            key = {img.id}
                            // img = {img}
                            {...img}
                            />
                        )
                    )
                }
        </div>
        </>
    )
}
