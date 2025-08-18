'use client'

import styled from 'styled-components'

import { InfoBlock } from '@/components/RecipePage'
import { PageWrapper } from '@/components/PageWrapper'

import { DetailCard } from '@/components/Cards'

import { NoList } from '@/components/NoList'

import { Recipe } from '@/constants/recipes/recipes'
import { FiAlertCircle, FiShuffle } from 'react-icons/fi'

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

const Zero = styled.section`
  display: none;
`

const TipsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const TipItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  background: #fffbe6;
  border-left: 4px solid #ffcc00;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 1rem;
  line-height: 1.4;
`

const VariationsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0;
  margin: 0;
  list-style: none;
`

const VariationItem = styled.li`
  background: #f3f7ff;
  border: 1px solid #d0e1ff;
  border-radius: 6px;
  padding: 12px 16px;
`

const VariationTitle = styled.strong`
  display: inline-block;
  background: #d0e1ff;
  padding: 2px 8px;
  border-radius: 4px;
  margin-bottom: 4px;
  font-size: 0.9rem;
`

const RecipePage = ({ recipe }: { recipe: Recipe | null }) => {
  return (
    <main>
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
                        img={ingredient?.img || null}
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
                      <DetailCard
                        key={equipment.name}
                        name={equipment.name}
                        img={equipment?.img || null}
                        variant="short"
                      />
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
                          img={ingredient?.img || null}
                          backgroundColor="#f9f9f9"
                          variant="short"
                        />
                      ))}
                    </DetailsCardsContainer>
                  )}
                </RecipeStep>
              ))}
            </RecipeStepsContainer>

            {recipe.tips && recipe.tips?.length > 0 && (
              <DetailsContainer>
                <DetailsTitle>
                  <FiAlertCircle size={20} style={{ marginRight: 8 }} />
                  Советы
                </DetailsTitle>
                <TipsList>
                  {recipe.tips.map((tip, index) => (
                    <TipItem key={index}>
                      <FiAlertCircle size={18} color="#ffcc00" />
                      {tip}
                    </TipItem>
                  ))}
                </TipsList>
              </DetailsContainer>
            )}

            {recipe.variations && recipe.variations?.length > 0 && (
              <DetailsContainer>
                <DetailsTitle>
                  <FiShuffle size={20} style={{ marginRight: 8 }} />
                  Вариации
                </DetailsTitle>
                <VariationsList>
                  {recipe.variations.map((variation, index) => (
                    <VariationItem key={index}>
                      <VariationTitle>{variation.name}</VariationTitle>
                      <div>{variation.changes}</div>
                    </VariationItem>
                  ))}
                </VariationsList>
              </DetailsContainer>
            )}
          </>
        )}
      </PageWrapper>

      <Zero>
        {recipe?.searchRequests?.map(query => {
          return <p key={query}>{query}</p>
        })}
      </Zero>
    </main>
  )
}
export default RecipePage
