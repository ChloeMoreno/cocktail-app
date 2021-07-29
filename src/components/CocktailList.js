import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Cocktail from './Cocktail';

function CocktailList() {
const [cocktailInfo, setCocktailInfo] = useState([]);
const fetchCocktails = () => { 
axios
.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
.then((res)=>
setCocktailInfo(res.data.drinks),
console.log(cocktailInfo))
}

useEffect(() => {
fetchCocktails()
}, [])

  return (
    <div>
      {cocktailInfo.map(
        (cocktail) => <Cocktail cocktailInfo={cocktail} />)}
    </div>
  )
}

export default CocktailList
