import React, {useState} from 'react';
import AddCategory from './components/AddCategory';
import './firebase/config';

const GifExpertApp = () => {
    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState([]);
    
    //console.log(categories);
    
    //console.log(setCategories);
    
    /* 
    const handleAdd = () => { 
        console.log('a')
        console.log(categories.concat('aae'))
        setCategories(categories.concat('Jojos'))
     }    
    */

    return (
        <>
            
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr />
            
            
            <ol>
                {
                    categories.map(category =>{
                        return <li key={category}>{category}</li>          
                    })
                }
            </ol>
        </>
        
    )
}

export default GifExpertApp
