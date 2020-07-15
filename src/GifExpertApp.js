import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState( defaultCategories );

  // const handleAdd = () => {
  //   // setCategories([...categories, 'Kare Kano', 'Evangelion', 'FLCL'])
  //   setCategories( cats => [...cats, 'Kare Kano', 'Evangelion', 'FLCL'] )
  // }


  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories}/>
      <hr />


      <ol>
        { 
          // por defecto el map recive el elemento y el indice
          categories.map(category =>  (
            <GifGrid 
              key={category}
              category={ category } 
            />
          ))
        }
      </ol>

    </>
  )
}

export default GifExpertApp
