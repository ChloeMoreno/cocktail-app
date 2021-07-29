import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Cocktail from './Cocktail';

function RandomList() {
  const [getRandom, setGetRandom] = useState({});
  const fetchRandomCocktail = () => {
  axios
  .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  .then((res) =>
   setGetRandom(res.data.drinks),
   console.log(getRandom))}

useEffect(() => {
 fetchRandomCocktail()
}, [])

  return (
    <div>
    {getRandom.map(
        (cocktail) => <Cocktail cocktailInfo={cocktail} key={cocktail.idDrink} />)}
    </div>
  )
}

export default RandomList
