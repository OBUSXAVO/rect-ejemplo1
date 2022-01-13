//rafc

import React, {useState} from 'react'
import { AddCatergory } from './components/AddCatergory'
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    // const categories = ['one','two','tree'];
    const [categories, setcategories] = useState(['one']);
    // const handleAdd = () =>{
    //     // categories.push('otro');
    //     // setcategories([...categories,'otro']);
    //     setcategories( ct => [...ct,'otro1']);
    // }    
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCatergory setcategories={setcategories}/>
            <hr/>    
            {/* <button onClick={handleAdd}>Agregar</button>         */}
                <ol>
                        {
                            categories.map( c => (
                                //  <li key={c}>{c}</li>
                                <GifGrid 
                                key = {c}
                                category={c} 
                                />
                            ))
                        }
                </ol>            
        </>
    )
}
