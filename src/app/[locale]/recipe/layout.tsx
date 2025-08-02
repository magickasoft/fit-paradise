import { RECIPES_OBJ } from '@/constants.ts/recipes/recipes'

export async function generateStaticParams() {
  return Object.values(RECIPES_OBJ)
    .flat()
    .map(recipe => ({ name: recipe.name }))
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
