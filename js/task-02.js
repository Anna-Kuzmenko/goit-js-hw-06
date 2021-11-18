const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainerEl = document.querySelector('#ingredients')

const inrgedsEl = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
        ingredientEl.textContent = `${ingredient}`;
        ingredientEl.classList.add('item');
      
      
        return ingredientEl
})

ingredientsContainerEl.append(...inrgedsEl)