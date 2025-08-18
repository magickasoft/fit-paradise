import { Recipe, RECIPES_OBJ } from '../constants/recipes/recipes'

const RECIPE_MAP = (() => {
  const map = new Map<string, Recipe>()
  for (const category of Object.values(RECIPES_OBJ)) {
    for (const recipe of category) {
      if (recipe.key) {
        const normalizedKey = recipe.key.toLowerCase()
        if (!map.has(normalizedKey)) {
          map.set(normalizedKey, recipe)
        }
      }
    }
  }
  return map
})()

export const findByKey = async (key: string): Promise<Recipe | null> => {
  return RECIPE_MAP.get(key.toLowerCase()) ?? null
}
