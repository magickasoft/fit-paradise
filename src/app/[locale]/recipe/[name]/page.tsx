'use client'

import styled from 'styled-components'
import Head from 'next/head'
import { InfoBlock } from '@/components/RecipePage'
import { PageWrapper } from '@/components/PageWrapper'
import { findByKey } from '@/helpers/findByKey'
import { DetailCard } from '@/components/Cards'

import { RECIPES_OBJ } from '@/constants.ts/recipes/recipes'
import { NoList } from '@/components/NoList'

const HeaderContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
`

const Header = styled.header`
  display: flex;
  max-height: 90vh;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;

  @media (max-width: 768px) {
    flex-direction: column;
    max-height: none;
  }
`

const TitleContainer = styled.article`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px 0 0 8px;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 8px 8px 0 0;
    padding: 16px;
    order: 2;
  }
`

const ImageContainer = styled.article`
  width: 40%;
  display: flex;
  height: auto;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 0 8px 0 0;

  @media (max-width: 768px) {
    width: 100%;
    border-radius: 0 0 8px 8px;
    aspect-ratio: 1.5 / 1;
    order: 1;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0 8px 0 0;
`

const Placeholder = styled.article`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, #f9f9f9, #ddd);
  color: #777;
  font-size: 1.2rem;
  font-weight: 500;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0 8px 0 0;
`

const Title = styled.h1`
  width: 80%;
  margin-bottom: 10px;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5rem;
  }
`

const Description = styled.article`
  width: 80%;
  margin-bottom: 10px;
  font-size: 1.2rem;
  line-height: 1.6;
  text-align: justify;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.75rem;
  }
`

const InfoContainer = styled.article`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 8px;
  }
`

const DetailsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  background-color: #f9f9f9;
  margin-bottom: 20px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
  }
`

const IngredientsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media (max-width: 768px) {
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #ddd;
    padding-right: 0;
    padding-bottom: 20px;
    margin-bottom: 20px;
  }
`

const EquipmentsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: start;

  @media (max-width: 768px) {
    width: 100%;
    border-left: none;
    padding-left: 0;
    text-align: start;
  }
`

const DetailsTitle = styled.h2`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;
`

const DetailsCardsContainer = styled.section<{
  width?: string
  $justifyContent?: string
}>`
  width: ${props => props.width || '100%'};
  display: flex;
  flex-direction: row;
  gap: 10px;
  height: 220px;
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  overflow-x: auto;

  @media (max-width: 768px) {
    height: auto;
  }
`

const RecipeStepsContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const RecipeStep = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin-bottom: 10px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;

  @media (max-width: 768px) {
    padding: 15px;
    margin-bottom: 10px;
  }
`

const RecipeTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    margin-bottom: 5px;
    font-size: 1.2rem;
  }
`

const RecipeDescription = styled.article`
  width: 80%;
  margin-bottom: 30px;
  font-size: 1rem;
  line-height: 1.6;
  color: #333;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 0.85rem;
  }
`

const RecipePage = ({ params }: { params: { name: string } }) => {
  console.log('RecipePage params:', params)

  const recipe = findByKey(params.name) || null

  return (
    <main>
      <Head>
        <title>{recipe?.metaSeo?.title || 'Recipe not found'}</title>
        <meta name="description" content={recipe?.metaSeo?.description || 'Recipe not found'} />
        <meta name="keywords" content={recipe?.metaSeo?.keywords?.join(', ') || ''} />
        <meta property="og:title" content={recipe?.metaSeo?.['og:title'] || ''} />
        <meta property="og:description" content={recipe?.metaSeo?.['og:description'] || ''} />
        <meta property="og:url" content={recipe?.metaSeo?.['og:url'] || ''} />
        <meta property="og:image" content={recipe?.metaSeo?.['og:image'] || ''} />
        <meta name="twitter:title" content={recipe?.metaSeo?.twitterTitle || ''} />
        <meta name="twitter:description" content={recipe?.metaSeo?.twitterDescription || ''} />
        <meta name="twitter:image" content={recipe?.metaSeo?.twitterImage || ''} />
        <meta name="twitter:url" content={recipe?.metaSeo?.twitterUrl || ''} />
        <meta name="twitter:card" content={recipe?.metaSeo?.['twitter:card'] || 'summary_large_image'} />
        <link rel="canonical" href={recipe?.metaSeo?.canonicalUrl || ''} />
        <meta name="robots" content={recipe?.metaSeo?.robots || 'index, follow'} />
        <meta name="googlebot" content={recipe?.metaSeo?.googlebot || 'index, follow'} />
        <meta name="yandex" content={recipe?.metaSeo?.yandex || 'index, follow'} />
        <meta name="selfwork" content={recipe?.metaSeo?.selfwork || 'index, follow'} />
        <meta name="max-image-preview" content={recipe?.metaSeo?.['max-image-preview'] || 'large'} />
        <meta name="viewport" content={recipe?.metaSeo?.viewport || 'width=device-width, initial-scale=1'} />
        <meta name="author" content={recipe?.metaSeo?.author || 'Повар-ешка'} />
        <meta name="theme-color" content={recipe?.metaSeo?.['theme-color'] || '#ffffff'} />
      </Head>
      <PageWrapper>
        <HeaderContainer>
          {!recipe ? (
            <Title>Recipe not found</Title>
          ) : (
            <Header>
              <TitleContainer>
                <Title>{recipe.title}</Title>
                <Description>{recipe.description}</Description>
                <InfoContainer>
                  {recipe.preparation && <InfoBlock name="Подготовка" value={recipe.preparation} gauge="мин" />}
                  <InfoBlock name="Готовка" value={recipe.time} gauge="мин" />
                  {recipe.calories && <InfoBlock name="Калорийность" value={recipe.calories} gauge="ккал" />}
                </InfoContainer>
              </TitleContainer>
              <ImageContainer>
                {recipe.img ? <Image src={recipe.img} alt={recipe.name} /> : <Placeholder>Нет изображения</Placeholder>}
              </ImageContainer>
            </Header>
          )}
        </HeaderContainer>
        {recipe && (
          <>
            <DetailsContainer>
              <IngredientsContainer>
                <DetailsTitle>Ингредиенты</DetailsTitle>
                {recipe.ingredients.length ? (
                  <DetailsCardsContainer>
                    {recipe.ingredients.map(ingredient => (
                      <DetailCard
                        key={ingredient.name}
                        name={ingredient.name}
                        text={ingredient.count && ingredient.gauge ? `${ingredient.count} ${ingredient.gauge}` : ''}
                        img={ingredient.img}
                      />
                    ))}
                  </DetailsCardsContainer>
                ) : (
                  <NoList value="Список ингредиентов будет доступен позднее..." />
                )}
              </IngredientsContainer>

              <EquipmentsContainer>
                <DetailsTitle>Оборудование</DetailsTitle>
                {recipe.equipments.length ? (
                  <DetailsCardsContainer>
                    {recipe.equipments.map(equipment => (
                      <DetailCard key={equipment.name} name={equipment.name} img={equipment.img} variant="short" />
                    ))}
                  </DetailsCardsContainer>
                ) : (
                  <NoList value="Список оборудования будет доступен позднее..." />
                )}
              </EquipmentsContainer>
            </DetailsContainer>
            <RecipeStepsContainer>
              {recipe.cookingRecipe?.map((step, index) => (
                <RecipeStep key={index}>
                  <RecipeTitle>{`Шаг ${index + 1}`}</RecipeTitle>
                  <RecipeDescription>{step.description}</RecipeDescription>
                  {step.ingredients?.length > 0 && (
                    <DetailsCardsContainer width="100%" $justifyContent="center">
                      {step.ingredients.map(ingredient => (
                        <DetailCard
                          key={ingredient.name}
                          name={ingredient.name}
                          text={ingredient.count && ingredient.gauge ? `${ingredient.count} ${ingredient.gauge}` : ''}
                          img={ingredient.img}
                          backgroundColor="#f9f9f9"
                        />
                      ))}
                    </DetailsCardsContainer>
                  )}
                </RecipeStep>
              ))}
            </RecipeStepsContainer>
          </>
        )}
      </PageWrapper>

      <section style={{ display: 'none' }}>
        {recipe?.searchRequests?.map(searchRequest => (
          <p key={searchRequest}>{searchRequest}</p>
        ))}
      </section>
    </main>
  )
}
export default RecipePage
