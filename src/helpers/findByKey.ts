import { Recipe, RECIPES_OBJ } from '../constants.ts/recipes/recipes'

export const findByKey = async (key: string): Promise<Recipe | null> => {
  for (const category in RECIPES_OBJ) {
    const recipe = RECIPES_OBJ[category].find(item => item.key === key)
    if (recipe) return recipe
  }

  return null
}
