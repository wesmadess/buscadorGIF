import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ({ defaultCategories=[] })=>{
    
    const [categories, setCategories] = useState(defaultCategories);
    // const [categories, setCategories] = useState(['One Punch']);
    
    // const handleAdd = ()=>{
    //     setCategories([...categories, 'HunterXHunter']);
    //     // setCategories(cats=>[...cats, 'HunterXHunter']);
    // }

    return(
      <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr />
        {/* <button onClick={handleAdd}>Agregar</button> */}
        <ol>
            {
                categories.map(category=> (
                    // <li key={category}>{category}</li>
                    <GifGrid 
                        key={category}
                        category={category} 
                    />
                ))
            }
        </ol>
      </>
    );
};