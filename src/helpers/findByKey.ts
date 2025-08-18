import { Recipe, RECIPES_OBJ } from '../constants/recipes/recipes'

export const findByKey = async (key: string): Promise<Recipe | null> => {
  const target = key.toLowerCase()

  const allRecipes = Object.values(RECIPES_OBJ).flat()
  return allRecipes.find(recipe => recipe.key?.toLowerCase() === target) ?? null
}
