import React from 'react'

function Cocktail(props) {
const {cocktailInfo} = props
  return (
    <div>
      <h2>{cocktailInfo.strDrink}</h2>
      <img src={cocktailInfo.strDrinkThumb} alt="cocktail" />
      
    </div>
  )
}

export default Cocktail
