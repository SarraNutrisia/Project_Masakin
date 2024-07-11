import { Header, Review } from '@/components';

const Recipe = () => {
  const recipeTitle = 'Bulgogi';
  const recipeImageUrl = '/assets/Bulgogi.jpg';
  const rating = 5;
  const cookingTime = 50;
  const difficultyLevel = 'Medium';

  return (
    <div>
      <Header title={recipeTitle} imageUrl={recipeImageUrl} />
      <Review
        rating={rating}
        cookingTime={cookingTime}
        difficultyLevel={difficultyLevel}
      />
    </div>
  );
};

export default Recipe;