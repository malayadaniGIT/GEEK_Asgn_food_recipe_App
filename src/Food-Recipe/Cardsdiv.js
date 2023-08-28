import React from 'react'

function Cardsdiv({recipe}) {
    return (
        <>
        
            <div className='card' key={recipe.label}>
              <img className='image' src={recipe.image} alt='' />
              <label className='itemname'>{recipe.label}</label>
              <p className='mealtype'>({recipe.mealType})</p>
            </div>
     </>
    )
  }
  
  export default  Cardsdiv
