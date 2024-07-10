import { RecipesDataInterface } from "../../interfaces/interfaces";

function RecipesData({ recipes }: { recipes: RecipesDataInterface[] }) {
  return (
    <ul>
      {recipes.map((recipe) => (
        <li key={recipe.recipeId}>{recipe.description}</li>
      ))}
    </ul>
  );
}

export default RecipesData