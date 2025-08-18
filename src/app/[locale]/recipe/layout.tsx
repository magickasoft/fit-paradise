import { RECIPES_OBJ } from '@/constants/recipes/recipes'

export async function generateStaticParams() {
  const allRecipes = Object.values(RECIPES_OBJ).flat()
  return allRecipes.map(recipe => ({
    name: recipe.key ?? recipe.name,
  }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
