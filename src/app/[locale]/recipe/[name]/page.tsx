import { findByKey } from '@/helpers/findByKey'
import RecipePage from '../../../../components/RecipePage/RecipePage'

export async function generateMetadata({ params }: { params: { name: string; locale: string } }) {
  const recipe = findByKey(params.name)

  return {
    title: recipe?.metaSeo?.title || 'Recipe not found',
    description: recipe?.metaSeo?.description || 'Recipe not found',
    keywords: recipe?.metaSeo?.keywords || [],
    openGraph: {
      title: recipe?.metaSeo?.['og:title'] || '',
      description: recipe?.metaSeo?.['og:description'] || '',
      url: recipe?.metaSeo?.['og:url'] || '',
      images: recipe?.metaSeo?.['og:image'] ? [recipe.metaSeo['og:image']] : [],
    },
    twitter: {
      card: recipe?.metaSeo?.['twitter:card'] || 'summary_large_image',
      title: recipe?.metaSeo?.twitterTitle || '',
      description: recipe?.metaSeo?.twitterDescription || '',
      images: recipe?.metaSeo?.twitterImage ? [recipe.metaSeo.twitterImage] : [],
    },
    robots: recipe?.metaSeo?.robots || 'index, follow',
    authors: [{ name: recipe?.metaSeo?.author || 'Food-paradise' }],
    themeColor: recipe?.metaSeo?.['theme-color'] || '#ffffff',
  }
}

export default async function Page({ params }: { params: { name: string; locale: string } }) {
  const recipe = findByKey(params.name)

  return <RecipePage recipe={recipe} />
}
