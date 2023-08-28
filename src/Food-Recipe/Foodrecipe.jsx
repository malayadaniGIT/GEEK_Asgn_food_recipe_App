import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Foodrecipe.css';
import Cardsdiv from './Cardsdiv';

function Foodrecipe() {
  const [state, setState] = useState('');
  const [recipe, setRecipe] = useState([]);

  const searchrecipe = async () => {
    try {
      const res = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${state}&app_id=2f51b6e8&app_key=a9cae8ea923b82275a780e45ec4661e4`
      );
      console.log(res.data.hits);
      setRecipe(res.data.hits);
      if (res.data.hits.length > 0) {
      alert('Here is your food...');
      
      } else {
      alert('Sorry, your item is not available.');
      setState("")
      elsediv()
      }
    } catch (err) {
    alert('An error occurred while fetching data.');
    }
  };
  const elsediv=()=>{

    axios
      .get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=public&app_id=2f51b6e8&app_key=a9cae8ea923b82275a780e45ec4661e4`
      )
      .then((res) => {
        console.log(res.data.hits);
        setRecipe(res.data.hits);
      })
      .catch((err) => console.log('error'));
    }
  
  useEffect(() => {
    if(state){
      searchrecipe()
    }else{
      elsediv()
    }
  }, []);
   return (
    <div className='container'>
      <div className='heading'>
        <h1>Your Favorite Recipes</h1>
        <h3>All in One Place</h3>
      </div>
      <div className='searchdiv'>
        <input
          type='text'
          className='input'
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button className='btn' onClick={searchrecipe}>
          Search
        </button>
      </div>

        <div className='recipesdiv'>
      {recipe.length > 0 && (
                <p className='show'>here is your food...</p>
        
      )}
      <div className='carddiv'>
      {
        recipe.map((food)=>{
          return <Cardsdiv recipe={food.recipe}/>
        })
      }
      </div>
        </div>
    </div>
  );
}

export default Foodrecipe;
