import React from 'react';

function RenderChoices(props) {

  return (props.result.map(function(e) {
    function showIng() {
      let ingredients = [];
      let measure = [];

      for (let i = 1; i < 15; i += 1) {
        if (e[`strIngredient${i}`]) {
          ingredients.push(e[`strIngredient${i}`]);
          measure.push(e[`strMeasure${i}`]);
        }
      }
      return ingredients.map((p, i) => {
        return (<div key={i}>{p}
          : {measure[i]}</div>)
      })
    }

    return (<div key={e.idDrink} className="drinkInfo">
      <div className='breakdown'>
        <p>Name: {e.strDrink}</p>
        <p>{e.strAlcoholic}</p>
        <p>Category: {e.strCategory}</p>
        <p>Served in: {e.strGlass}</p>
        <p>Instructions: {e.strInstructions}</p>

        Ingredients: {showIng()}
      </div>

      <img src={`${e.strDrinkThumb}`}
        alt={`${e.strDrinkThumb}`}/>
    </div>)
  }))

}

export default RenderChoices;
